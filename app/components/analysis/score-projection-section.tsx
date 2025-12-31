import React from 'react';
import { Target } from 'lucide-react';
import type { AnalysisStats } from '@/app/types';

// Função de probabilidade de Poisson
function poissonPmf(lambda: number, k: number) {
  if (k < 0) return 0;
  return (Math.exp(-lambda) * Math.pow(lambda, k)) / factorial(k);
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
  const s = slice.reduce((a, b) => a + b, 0);
  return s / slice.length;
}

function computeProjection(stats?: AnalysisStats, n?: number) {
  // Acesso corrigido seguindo a nova hierarquia de tipos
  const lambdaHome = average(stats?.last20?.home?.xg, n) ?? 0;
  const lambdaAway = average(stats?.last20?.away?.xg, n) ?? 0;

  const maxGoals = 5; // Limitamos a 5x5 para focar nos placares mais prováveis
  const rows: Array<{ score: string; p: number; type: 'home' | 'draw' | 'away' }> = [];

  for (let h = 0; h <= maxGoals; h++) {
    for (let a = 0; a <= maxGoals; a++) {
      const p = poissonPmf(lambdaHome, h) * poissonPmf(lambdaAway, a);
      const type = h > a ? 'home' : (h === a ? 'draw' : 'away');
      rows.push({ score: `${h}x${a}`, p, type });
    }
  }

  const getTop = (type: 'home' | 'draw' | 'away') =>
    rows.filter(r => r.type === type).sort((x, y) => y.p - x.p).slice(0, 4);

  const goleadaCasa = rows.filter(r => r.type === 'home' && (Number(r.score[0]) - Number(r.score[2]) >= 2))
    .reduce((s, r) => s + r.p, 0);
  const empate = rows.filter(r => r.type === 'draw').reduce((s, r) => s + r.p, 0);
  const goleadaVisitante = rows.filter(r => r.type === 'away' && (Number(r.score[2]) - Number(r.score[0]) >= 2))
    .reduce((s, r) => s + r.p, 0);

  return {
    homeAdvantage: getTop('home').map(r => ({ score: r.score, probability: r.p * 100 })),
    draw: getTop('draw').map(r => ({ score: r.score, probability: r.p * 100 })),
    awayAdvantage: getTop('away').map(r => ({ score: r.score, probability: r.p * 100 })),
    categories: {
      goleadaCasa: goleadaCasa * 100,
      empate: empate * 100,
      goleadaVisitante: goleadaVisitante * 100,
    }
  };
}

export default function ScoreProjectionSection({ stats }: { stats?: AnalysisStats }) {
  const Row = ({ score, probability, color }: { score: string; probability: number; color: 'green' | 'blue' | 'red' }) => {
    const pct = Math.max(0, probability || 0);
    const fill = color === 'green' ? 'bg-green-500' : color === 'blue' ? 'bg-blue-500' : 'bg-red-500';
    const chipBg = color === 'green' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' :
                   color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' :
                   'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300';

    return (
      <div className="space-y-1">
        <div className="flex justify-between items-center text-[11px]">
          <span className={`px-2 py-0.5 rounded-md font-bold ${chipBg}`}>{score}</span>
          <span className="font-mono text-dark-900/80 dark:text-light-100/80">{pct.toFixed(1)}%</span>
        </div>
        <div className="h-1 w-full rounded-full bg-light-200 dark:bg-dark-700 overflow-hidden">
          <div className={`h-full ${fill} transition-all duration-500`} style={{ width: `${Math.min(pct * 3, 100)}%` }} />
        </div>
      </div>
    );
  };

  const Column = ({ title, rows, color }: { title: string, rows: any[], color: 'green' | 'blue' | 'red' }) => (
    <div className="bg-white/40 dark:bg-dark-900/20 rounded-xl p-3 border border-light-300 dark:border-dark-700">
      <p className="text-[10px] font-bold uppercase tracking-wider mb-3 opacity-60 text-center">{title}</p>
      <div className="space-y-4">
        {rows.map((row, i) => <Row key={i} score={row.score} probability={row.probability} color={color} />)}
      </div>
    </div>
  );

  const Block = ({ title, n }: { title: string; n: number }) => {
    const p = computeProjection(stats, n);
    return (
      <div className="space-y-3 p-4 rounded-xl border border-light-300 dark:border-dark-600/50 bg-light-100/30 dark:bg-dark-800/30">
        <div className="flex justify-between items-center">
          <p className="text-xs font-bold text-purple-600 dark:text-purple-400">{title}</p>
          <div className="flex gap-3 text-[10px] font-mono opacity-70">
            <span>H: {p.categories.goleadaCasa.toFixed(0)}%</span>
            <span>D: {p.categories.empate.toFixed(0)}%</span>
            <span>A: {p.categories.goleadaVisitante.toFixed(0)}%</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <Column title="Vantagem Casa" rows={p.homeAdvantage} color="green" />
          <Column title="Empate" rows={p.draw} color="blue" />
          <Column title="Vantagem Visitante" rows={p.awayAdvantage} color="red" />
        </div>
      </div>
    );
  };

  return (
    <div className="mb-6">
      <h2 className="text-lg font-bold text-dark-900 dark:text-light-100 mb-4 flex items-center gap-2">
        <Target className="w-5 h-5 text-purple-600" />
        <span>Projeção de Placar (Base xG)</span>
      </h2>
      <div className="space-y-6">
        <Block title="Janela de Curto Prazo (5 jogos)" n={5} />
        <Block title="Janela de Médio Prazo (10 jogos)" n={10} />
        <Block title="Média da Temporada (20 jogos)" n={20} />
      </div>
    </div>
  );
}
