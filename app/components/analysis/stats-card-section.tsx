import React from 'react';
import { BarChart3 } from 'lucide-react';
import type { AnalysisStats } from '@/app/types';

type Props = {
  stats?: AnalysisStats;
  homeTeam: string;
  awayTeam: string;
};

function valueClass(home?: number, away?: number, invert = false) {
  if (home == null || away == null) return 'text-dark-900 dark:text-light-100';
  const isBetter = invert ? home < away : home > away;
  const isWorse = invert ? home > away : home < away;
  if (isBetter) return 'text-green-600 dark:text-green-400 font-semibold';
  if (isWorse) return 'text-red-600 dark:text-red-400';
  return 'text-purple-600 dark:text-purple-400';
}

function fmt(n?: number) {
  if (n == null) return '-';
  const r = Math.round(n * 100) / 100;
  return Number.isInteger(r) ? String(r) : r.toFixed(2);
}

function RowCompare({ label, home, away, invert = false }: { label: string; home?: number; away?: number; invert?: boolean }) {
  const hc = valueClass(home, away, invert);
  const ac = valueClass(away, home, invert);
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

function avg(arr?: number[], n?: number) {
  if (!arr || arr.length === 0) return undefined;
  const slice = n ? arr.slice(-n) : arr;
  return slice.reduce((a, b) => a + b, 0) / slice.length;
}

function computeBlock(n: number, stats?: AnalysisStats) {
  const home = stats?.last20?.home;
  const away = stats?.last20?.away;

  return {
    g: { home: avg(home?.g, n), away: avg(away?.g, n) },
    xg: { home: avg(home?.xg, n), away: avg(away?.xg, n) },
    corners: { home: avg(home?.matchRaw?.corners, n), away: avg(away?.matchRaw?.corners, n) },
    shotsOnTarget: { home: avg(home?.matchRaw?.shotsOnTarget, n), away: avg(away?.matchRaw?.shotsOnTarget, n) },
    nv: { home: avg(home?.nv, n), away: avg(away?.nv, n) },
  };
}

function Block({ title, stats, n }: { title: string; stats?: AnalysisStats; n: number }) {
  const b = computeBlock(n, stats);
  return (
    <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-4 border border-light-300/50 dark:border-dark-600/50">
      <p className="text-xs font-bold text-dark-900/40 dark:text-light-100/40 uppercase mb-3 tracking-wider">{title}</p>
      <div className="space-y-2.5 text-sm">
        <RowCompare label="Gols Marcados (Média)" home={b.g.home} away={b.g.away} />
        <RowCompare label="xG (Qualidade Ofensiva)" home={b.xg.home} away={b.xg.away} />
        <RowCompare label="Escanteios" home={b.corners.home} away={b.corners.away} />
        <RowCompare label="Chutes no Alvo" home={b.shotsOnTarget.home} away={b.shotsOnTarget.away} />
        <div className="pt-2 border-t border-light-300 dark:border-dark-700">
          <RowCompare label="Performance (NV)" home={b.nv.home} away={b.nv.away} />
        </div>
      </div>
    </div>
  );
}

export default function StatsCardSection({ stats, homeTeam, awayTeam }: Props) {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-bold text-dark-900 dark:text-light-100 mb-4 flex items-center gap-2">
        <BarChart3 className="w-5 h-5 text-purple-600" />
        <span>Métricas de Volume e Eficiência</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Block title="Janela Curta (5 jogos)" stats={stats} n={5} />
        <Block title="Janela Curta (10 jogos)" stats={stats} n={10} />
        <Block title="Janela Ampla (20 jogos)" stats={stats} n={20} />
      </div>
    </div>
  );
}
