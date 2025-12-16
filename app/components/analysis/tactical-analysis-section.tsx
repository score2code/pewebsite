import React from 'react';
import { Crosshair } from 'lucide-react';
import RadarMetrics from './radar-metrics';
import type { AnalysisStats } from '@/app/types';

export default function TacticalAnalysisSection({
  stats,
  homeTeam,
  awayTeam,
}: {
  stats?: AnalysisStats;
  homeTeam: string;
  awayTeam: string;
}) {
  const avg = (arr?: number[], n?: number) => {
    if (!arr || arr.length === 0) return undefined;
    const slice = n ? arr.slice(-n) : arr;
    if (slice.length === 0) return undefined;
    const s = slice.reduce((a, b) => a + b, 0);
    return s / slice.length;
  };
  const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));
  const normPct = (v?: number) => (v == null ? undefined : clamp(v, 0, 100));
  const normRange = (v?: number, lo = 0, hi = 1) => {
    if (v == null) return undefined;
    const x = clamp(v, lo, hi);
    return ((x - lo) / (hi - lo)) * 100;
  };
  const pressureFromPpda = (v?: number) => {
    if (v == null) return undefined;
    const x = clamp(v, 5, 20);
    return ((20 - x) / (20 - 5)) * 100;
  };
  const withWeights = (vals: Array<{ v?: number; w: number }>) => {
    const filtered = vals.filter(x => typeof x.v === 'number');
    if (filtered.length === 0) return 0;
    const num = filtered.reduce((s, x) => s + (x.v as number) * x.w, 0);
    const den = filtered.reduce((s, x) => s + x.w, 0);
    return den > 0 ? num / den : 0;
  };
  const team = (side: 'home' | 'away', n?: number) => {
    const t = stats?.last20?.[side];
    const r = t?.tacticalRaw;
    const pos = normPct(avg(r?.possessionPct, n));
    const tilt = normPct(avg(r?.fieldTiltPct, n));
    const press = normRange(avg(r?.pressuresFinalThird, n), 0, 30);
    const entries = normRange(avg(r?.penaltyAreaEntries, n), 0, 30);
    const shots = normPct(avg(r?.shotsBoxPct, n));
    const xg = normRange(avg(t?.xg, n), 0, 3);
    const mppt = withWeights([
      { v: pos, w: 0.2 },
      { v: tilt, w: 0.2 },
      { v: press, w: 0.15 },
      { v: entries, w: 0.15 },
      { v: shots, w: 0.15 },
      { v: xg, w: 0.15 },
    ]);
    const ppda = pressureFromPpda(avg(r?.ppda, n));
    const defActs = normRange(avg(r?.defensiveActions, n), 0, 40);
    const ga = normRange(3 - clamp(avg(t?.ga, n) ?? 0, 0, 3), 0, 3);
    const dfpt = withWeights([
      { v: ppda, w: 0.4 },
      { v: defActs, w: 0.4 },
      { v: ga, w: 0.2 },
    ]);
    const nvRaw = avg(r?.nvRaw, n);
    const nv = typeof nvRaw === 'number' && !Number.isNaN(nvRaw) ? nvRaw : withWeights([{ v: mppt, w: 0.6 }, { v: dfpt, w: 0.4 }]);
    const nvpf = nv;
    return { mppt: clamp(Math.round(mppt), 0, 100), dfpt: clamp(Math.round(dfpt), 0, 100), nv: clamp(Math.round(nv), 0, 100), nvpf: clamp(Math.round(nvpf), 0, 100) };
  };
  const Block = ({ title, n }: { title: string; n: number }) => {
    const homeMetrics = team('home', n);
    const awayMetrics = team('away', n);
    return (
      <div className="rounded-xl p-4 border border-light-300/50 dark:border-dark-600/50 bg-light-100/50 dark:bg-dark-800/50">
        <p className="text-sm text-dark-900/70 dark:text-light-100/70 mb-2">{title}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm text-dark-900/70 dark:text-light-100/70">{homeTeam}</p>
            <RadarMetrics metrics={homeMetrics} />
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm text-dark-900/70 dark:text-light-100/70">{awayTeam}</p>
            <RadarMetrics metrics={awayMetrics} />
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="mb-6">
      <h2 className="text-lg font-bold text-dark-900 dark:text-light-100 mb-3 flex items-center gap-2">
        <Crosshair className="w-4 h-4 text-purple-600 dark:text-purple-400" />
        <span>Análise Tática</span>
      </h2>
      <p className="text-[11px] text-dark-900/60 dark:text-light-100/60 mb-2">
        Indicadores normalizados (0–100) para comparar perfis. Use a leitura relativa entre os times.
      </p>
      <div className="space-y-4">
        <Block title="Últimos 5 Jogos" n={5} />
        <Block title="Últimos 10 Jogos" n={10} />
        <Block title="Últimos 20 Jogos" n={20} />
      </div>
      <div className="mt-3 text-[11px] text-dark-900/70 dark:text-light-100/70 space-y-1">
        <p><span className="font-semibold">MPPT</span>: posse e pressão efetiva em fase ofensiva.</p>
        <p><span className="font-semibold">DFPT</span>: força defensiva e pressão sem bola.</p>
        <p><span className="font-semibold">NV</span>: forma ajustada por contexto (mando, adversário), escala 0–100.</p>
        <p><span className="font-semibold">NVPF</span>: NV por partida, ajustado por tempo em campo.</p>
      </div>
    </div>
  );
}
