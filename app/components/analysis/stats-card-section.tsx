import React from 'react';
import { BarChart3 } from 'lucide-react';
import type { AnalysisStats } from '@/app/types';

type Props = {
  stats?: AnalysisStats;
  homeTeam: string;
  awayTeam: string;
};

function valueClass(home?: number, away?: number) {
  if (home == null || away == null) return 'text-dark-900 dark:text-light-100';
  if (home > away) return 'text-green-600 dark:text-green-400 font-semibold';
  if (away > home) return 'text-red-600 dark:text-red-400';
  return 'text-purple-600 dark:text-purple-400';
}

function fmt(n?: number) {
  if (n == null) return '-';
  const r = Math.round(n * 100) / 100;
  return Number.isInteger(r) ? String(r) : r.toFixed(2);
}

function RowCompare({
  label,
  home,
  away,
}: {
  label: string;
  home?: number;
  away?: number;
}) {
  const hc = valueClass(home, away);
  const ac = valueClass(away, home);
  return (
    <div className="flex justify-between">
      <span>{label}</span>
      <span className="flex items-center gap-1">
        <span className={hc}>{fmt(home)}</span>
        <span className="text-dark-900/60 dark:text-light-100/60">x</span>
        <span className={ac}>{fmt(away)}</span>
      </span>
    </div>
  );
}

function poissonTail(lambda: number, kMinInclusive: number) {
  const kMax = Math.max(10, Math.ceil(lambda + 6 * Math.sqrt(lambda))); // cutoff
  const e = Math.exp(-lambda);
  let sum = 0;
  let term = e;
  for (let k = 0; k < kMinInclusive; k++) {
    if (k === 0) sum += term;
    else {
      term = term * lambda / k;
      sum += term;
    }
  }
  return Math.max(0, Math.min(1, 1 - sum));
}

function avg(arr?: number[], n?: number) {
  if (!arr || arr.length === 0) return undefined;
  const slice = n ? arr.slice(-n) : arr;
  if (slice.length === 0) return undefined;
  const s = slice.reduce((a, b) => a + b, 0);
  return s / slice.length;
}

function sum(arr?: number[], n?: number) {
  if (!arr || arr.length === 0) return undefined;
  const slice = n ? arr.slice(-n) : arr;
  if (slice.length === 0) return undefined;
  return slice.reduce((a, b) => a + b, 0);
}

function computeBlock(n: number, stats?: AnalysisStats) {
  const home = stats?.last20?.home;
  const away = stats?.last20?.away;
  const gHome = sum(home?.g, n);
  const gAway = sum(away?.g, n);
  const gaHome = sum(home?.ga, n);
  const gaAway = sum(away?.ga, n);
  const xgHome = avg(home?.xg, n);
  const xgAway = avg(away?.xg, n);
  const nvHome = avg(home?.nv, n);
  const nvAway = avg(away?.nv, n);

  const lambdaHome = avg(home?.g, n) ?? 0;
  const lambdaAway = avg(away?.g, n) ?? 0;
  const lambdaTotal = lambdaHome + lambdaAway;

  const over15 = Math.round(poissonTail(lambdaTotal, 2) * 100);
  const over25 = Math.round(poissonTail(lambdaTotal, 3) * 100);
  const over35 = Math.round(poissonTail(lambdaTotal, 4) * 100);
  const btts = Math.round((1 - Math.exp(-lambdaHome)) * (1 - Math.exp(-lambdaAway)) * 100);

  return {
    scoreTotal: {
      home: gHome != null && gaHome != null ? gHome + gaHome : undefined,
      away: gAway != null && gaAway != null ? gAway + gaAway : undefined,
    },
    gTotal: { home: gHome, away: gAway },
    xgTotal: { home: xgHome, away: xgAway },
    nvTotal: { home: nvHome, away: nvAway },
    probabilities: { over15, over25, over35, btts },
  };
}

function Block({ title, stats, n }: { title: string; stats?: AnalysisStats; n: number }) {
  const block = computeBlock(n, stats);
  return (
    <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-4 border border-light-300/50 dark:border-dark-600/50">
      <p className="text-sm text-dark-900/70 dark:text-light-100/70 mb-2">{title}</p>
      <div className="space-y-2 text-sm">
        <RowCompare label="Gols Totais (marcados + sofridos)" home={block?.scoreTotal?.home} away={block?.scoreTotal?.away} />
        <RowCompare label="Gols Marcados" home={block?.gTotal?.home} away={block?.gTotal?.away} />
        <RowCompare label="Gols Esperados (xG)" home={block?.xgTotal?.home} away={block?.xgTotal?.away} />
        <RowCompare label="Índice de Valor de Performance" home={block?.nvTotal?.home} away={block?.nvTotal?.away} />
        <div className="flex justify-between"><span>Over 1.5</span><span>{fmt(block?.probabilities?.over15)}%</span></div>
        <div className="flex justify-between"><span>Over 2.5</span><span>{fmt(block?.probabilities?.over25)}%</span></div>
        <div className="flex justify-between"><span>Over 3.5</span><span>{fmt(block?.probabilities?.over35)}%</span></div>
        <div className="flex justify-between"><span>Ambas Marcam (BTTS)</span><span>{fmt(block?.probabilities?.btts)}%</span></div>
      </div>
    </div>
  );
}

export default function StatsCardSection({ stats, homeTeam, awayTeam }: Props) {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-bold text-dark-900 dark:text-light-100 mb-3 flex items-center gap-2">
        <BarChart3 className="w-4 h-4 text-purple-600 dark:text-purple-400" />
        <span>Estatísticas Recentes</span>
      </h2>
      <p className="text-[11px] text-dark-900/60 dark:text-light-100/60 mb-2">
        Comparação das médias dos últimos jogos em duas janelas (5 e 10). Verde indica melhor desempenho relativo, vermelho pior, roxo equilíbrio.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <Block title="Últimos 5 Jogos" stats={stats} n={5} />
        <Block title="Últimos 10 Jogos" stats={stats} n={10} />
      </div>
      <div className="mt-2 text-xs text-dark-900/60 dark:text-light-100/60">
        <span className="mr-2">{homeTeam}</span>
        <span className="text-dark-900/40 dark:text-light-100/40">vs</span>
        <span className="ml-2">{awayTeam}</span>
      </div>
      <div className="mt-2 flex items-center gap-3 text-[11px]">
        <span className="flex items-center gap-1"><span className="inline-block w-2 h-2 rounded-full bg-green-500" /> melhor</span>
        <span className="flex items-center gap-1"><span className="inline-block w-2 h-2 rounded-full bg-red-500" /> pior</span>
        <span className="flex items-center gap-1"><span className="inline-block w-2 h-2 rounded-full bg-purple-600" /> equilíbrio</span>
      </div>
      <div className="mt-3 text-[11px] text-dark-900/70 dark:text-light-100/70 space-y-1">
        <p><span className="font-semibold">Gols Totais (marcados + sofridos)</span>: soma de gols marcados e sofridos no período.</p>
        <p><span className="font-semibold">Gols Marcados</span>: total de gols marcados no período.</p>
        <p><span className="font-semibold">Gols Esperados (xG)</span>: qualidade média das chances no período.</p>
        <p><span className="font-semibold">Índice de Valor de Performance</span>: média recente (0–100) do indicador proprietário.</p>
        <p><span className="font-semibold">Probabilidades Over / Ambas Marcam</span>: percentuais estimados a partir do histórico recente.</p>
      </div>
    </div>
  );
}
