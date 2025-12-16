import React from 'react';
import { Target } from 'lucide-react';
import type { AnalysisStats } from '@/app/types';

function poissonPmf(lambda: number, k: number) {
  if (k < 0) return 0;
  return Math.exp(-lambda) * Math.pow(lambda, k) / factorial(k);
}

function factorial(n: number): number {
  if (n <= 1) return 1;
  let f = 1;
  for (let i = 2; i <= n; i++) f *= i;
  return f;
}

function average(arr?: number[], n?: number): number | undefined {
  if (!arr || arr.length === 0) return undefined;
  const slice = n ? arr.slice(-n) : arr;
  if (slice.length === 0) return undefined;
  const s = slice.reduce((a, b) => a + b, 0);
  return s / slice.length;
}

function computeProjection(stats?: AnalysisStats, n?: number) {
  const lambdaHome = average(stats?.last20?.home?.xg, n) ?? 0;
  const lambdaAway = average(stats?.last20?.away?.xg, n) ?? 0;
  const maxGoals = Math.max(6, Math.ceil(lambdaHome + lambdaAway + 4));
  const rows: Array<{ score: string; p: number; type: 'home' | 'draw' | 'away' }> = [];
  for (let h = 0; h <= maxGoals; h++) {
    for (let a = 0; a <= maxGoals; a++) {
      const p = poissonPmf(lambdaHome, h) * poissonPmf(lambdaAway, a);
      const type = h > a ? 'home' : (h === a ? 'draw' : 'away');
      rows.push({ score: `${h}x${a}`, p, type });
    }
  }
  const topHome = rows.filter(r => r.type === 'home').sort((x, y) => y.p - x.p).slice(0, 5);
  const topDraw = rows.filter(r => r.type === 'draw').sort((x, y) => y.p - x.p).slice(0, 5);
  const topAway = rows.filter(r => r.type === 'away').sort((x, y) => y.p - x.p).slice(0, 5);
  const goleadaCasa = rows.filter(r => r.type === 'home').filter(r => {
    const [h, a] = r.score.split('x').map(Number);
    return h - a >= 2;
  }).reduce((s, r) => s + r.p, 0);
  const empate = rows.filter(r => r.type === 'draw').reduce((s, r) => s + r.p, 0);
  const goleadaVisitante = rows.filter(r => r.type === 'away').filter(r => {
    const [h, a] = r.score.split('x').map(Number);
    return a - h >= 2;
  }).reduce((s, r) => s + r.p, 0);
  return {
    homeAdvantage: topHome.map(r => ({ score: r.score, probability: r.p * 100 })),
    draw: topDraw.map(r => ({ score: r.score, probability: r.p * 100 })),
    awayAdvantage: topAway.map(r => ({ score: r.score, probability: r.p * 100 })),
    categories: {
      goleadaCasa: goleadaCasa * 100,
      empate: empate * 100,
      goleadaVisitante: goleadaVisitante * 100,
    }
  };
}

export default function ScoreProjectionSection({ stats }: { stats?: AnalysisStats }) {
  const Row = ({ score, probability, color }: { score: string; probability: number; color: 'green' | 'blue' | 'red' }) => {
    const pct = Math.max(0, Math.min(100, probability || 0));
    const fill =
      color === 'green' ? 'bg-green-500' :
      color === 'blue' ? 'bg-blue-500' : 'bg-red-500';
    const chipBg =
      color === 'green' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' :
      color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' :
      'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300';
    return (
      <div className="space-y-1">
        <div className="flex justify-between items-center text-sm">
          <span className={`px-2 py-0.5 rounded-full ${chipBg}`}>{score}</span>
          <span className="text-dark-900/80 dark:text-light-100/80">{pct.toFixed(2)}%</span>
        </div>
        <div className="h-2 w-full rounded bg-light-200 dark:bg-dark-700 overflow-hidden">
          <div className={`h-2 ${fill}`} style={{ width: `${pct}%` }} />
        </div>
      </div>
    );
  };

  const Column = ({
    title,
    rows,
    color,
  }: {
    title: string;
    rows: Array<{ score: string; probability: number }>;
    color: 'green' | 'blue' | 'red';
  }) => {
    const border =
      color === 'green' ? 'border-green-300 dark:border-green-700' :
      color === 'blue' ? 'border-blue-300 dark:border-blue-700' :
      'border-red-300 dark:border-red-700';
    const header =
      color === 'green' ? 'text-green-700 dark:text-green-300' :
      color === 'blue' ? 'text-blue-700 dark:text-blue-300' :
      'text-red-700 dark:text-red-300';
    const sorted = [...rows].sort((a, b) => (b.probability || 0) - (a.probability || 0));
    return (
      <div className={`rounded-xl p-4 border ${border} bg-light-100/50 dark:bg-dark-800/50`}>
        <p className={`text-sm font-medium mb-2 ${header}`}>{title}</p>
        <div className="space-y-3">
          {sorted.map((row, i) => (
            <div key={i} className={i === 0 ? 'bg-light-100 dark:bg-dark-700/50 rounded-md p-2' : ''}>
              <Row score={row.score} probability={row.probability} color={color} />
            </div>
          ))}
        </div>
      </div>
    );
  };

  const Block = ({ title, n }: { title: string; n: number }) => {
    const projection = computeProjection(stats, n);
    return (
      <div className="space-y-3">
        <p className="text-sm text-dark-900/70 dark:text-light-100/70">{title}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Column
            title="Vantagem Casa"
            rows={(projection?.homeAdvantage || []) as Array<{ score: string; probability: number }>}
            color="green"
          />
          <Column
            title="Empate"
            rows={(projection?.draw || []) as Array<{ score: string; probability: number }>}
            color="blue"
          />
          <Column
            title="Vantagem Visitante"
            rows={(projection?.awayAdvantage || []) as Array<{ score: string; probability: number }>}
            color="red"
          />
        </div>
        <div className="mt-2 text-xs text-dark-900/70 dark:text-light-100/70">
          <div className="flex items-center gap-4">
            <span>Goleada Casa: {projection?.categories?.goleadaCasa != null ? projection.categories.goleadaCasa.toFixed(2) : '-'}%</span>
            <span>Empate: {projection?.categories?.empate != null ? projection.categories.empate.toFixed(2) : '-'}%</span>
            <span>Goleada Visitante: {projection?.categories?.goleadaVisitante != null ? projection.categories.goleadaVisitante.toFixed(2) : '-'}%</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="mb-2">
      <h2 className="text-lg font-bold text-dark-900 dark:text-light-100 mb-3 flex items-center gap-2">
        <Target className="w-4 h-4 text-purple-600 dark:text-purple-400" />
        <span>Projeção de Placar Correto</span>
      </h2>
      <p className="text-[11px] text-dark-900/60 dark:text-light-100/60 mb-2">
        Lista de placares mais prováveis por cenário em três janelas (5, 10 e 20). Use como referência comparativa, não como garantia.
      </p>
      <div className="space-y-4">
        <Block title="Últimos 5 Jogos" n={5} />
        <Block title="Últimos 10 Jogos" n={10} />
        <Block title="Últimos 20 Jogos" n={20} />
      </div>
      <div className="mt-2 text-[11px] text-dark-900/70 dark:text-light-100/70 space-y-1">
        <p><span className="font-semibold">Probabilidade</span>: estimativa de ocorrência do placar.</p>
        <p><span className="font-semibold">Categorias</span>: agregações de cenários (goleadas e empates).</p>
      </div>
    </div>
  );
}
