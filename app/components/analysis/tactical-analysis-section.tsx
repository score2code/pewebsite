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
    const x = clamp(v, 8, 16); // Faixa técnica ideal: 8 (pressão alta) a 16 (bloco baixo)
    return ((16 - x) / (16 - 8)) * 100;
  };

  const withWeights = (vals: Array<{ v?: number; w: number }>) => {
    const filtered = vals.filter(x => typeof x.v === 'number');
    if (filtered.length === 0) return 0;
    const num = filtered.reduce((s, x) => s + (x.v as number) * x.w, 0);
    const den = filtered.reduce((s, x) => s + x.w, 0);
    return den > 0 ? num / den : 0;
  };

  const computeMetrics = (side: 'home' | 'away', n: number) => {
    const t = stats?.last20?.[side];
    const r = t?.tacticalRaw;

    // Métricas Ofensivas
    const pos = normPct(avg(r?.possessionPct, n));
    const tilt = normPct(avg(r?.fieldTiltPct, n));
    const press = normRange(avg(r?.pressuresFinalThird, n), 0, 50); // teto de 50 pressões
    const entries = normRange(avg(r?.penaltyAreaEntries, n), 0, 40); // teto de 40 entradas
    const shotsBox = normPct(avg(r?.shotsBoxPct, n));
    const xg = normRange(avg(t?.xg, n), 0, 2.5);

    const mppt = withWeights([
      { v: pos, w: 0.15 },
      { v: tilt, w: 0.20 },
      { v: press, w: 0.15 },
      { v: entries, w: 0.20 },
      { v: shotsBox, w: 0.15 },
      { v: xg, w: 0.15 },
    ]);

    // Métricas Defensivas
    const ppda = pressureFromPpda(avg(r?.ppda, n));
    const defActs = normRange(avg(r?.defensiveActions, n), 0, 50);
    const ga = normRange(2.5 - clamp(avg(t?.ga, n) ?? 0, 0, 2.5), 0, 2.5); // Inverso: menos gols sofridos = maior nota

    const dfpt = withWeights([
      { v: ppda, w: 0.35 },
      { v: defActs, w: 0.35 },
      { v: ga, w: 0.30 },
    ]);

    // Performance Final (NV)
    const nvRaw = avg(r?.nvRaw, n);
    const nv = typeof nvRaw === 'number' && !Number.isNaN(nvRaw)
      ? nvRaw
      : withWeights([{ v: mppt, w: 0.5 }, { v: dfpt, w: 0.5 }]);

    return {
      mppt: clamp(Math.round(mppt), 0, 100),
      dfpt: clamp(Math.round(dfpt), 0, 100),
      nv: clamp(Math.round(nv), 0, 100),
      nvpf: clamp(Math.round(nv), 0, 100) // NVPF segue a lógica do NV normalizado
    };
  };

  const Block = ({ title, n }: { title: string; n: number }) => {
    const homeMetrics = computeMetrics('home', n);
    const awayMetrics = computeMetrics('away', n);

    return (
      <div className="rounded-xl p-4 border border-light-300/50 dark:border-dark-600/50 bg-light-100/50 dark:bg-dark-800/50">
        <p className="text-[10px] font-bold text-dark-900/40 dark:text-light-100/40 uppercase tracking-widest mb-4">{title}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs font-semibold text-dark-900/80 dark:text-light-100/80">{homeTeam}</span>
            <RadarMetrics metrics={homeMetrics} />
          </div>
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs font-semibold text-dark-900/80 dark:text-light-100/80">{awayTeam}</span>
            <RadarMetrics metrics={awayMetrics} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="mb-8">
      <h2 className="text-lg font-bold text-dark-900 dark:text-light-100 mb-3 flex items-center gap-2">
        <Crosshair className="w-5 h-5 text-purple-600" />
        <span>DNA Tático (Radar)</span>
      </h2>
      <p className="text-[11px] text-dark-900/60 dark:text-light-100/60 mb-4 leading-relaxed">
        Visualização da identidade das equipes. Valores baseados em dados táticos avançados (field tilt, PPDA e entradas na área).
      </p>

      <div className="space-y-6">
        <Block title="Tendência Recente (Últimos 5)" n={5} />
        <Block title="Tendência Recente (Últimos 10)" n={10} />
        <Block title="Histórico da Temporada (Últimos 20)" n={20} />
      </div>

      <div className="mt-5 grid grid-cols-2 gap-4 text-[10px] text-dark-900/70 dark:text-light-100/70 bg-light-200/30 dark:bg-dark-900/20 p-3 rounded-lg border border-light-300 dark:border-dark-700">
        <div>
          <p className="mb-1"><span className="font-bold text-purple-600">MPPT</span>: Força ofensiva, posse útil e presença na área adversária.</p>
          <p><span className="font-bold text-purple-600">DFPT</span>: Solidez defensiva, controle de gols e intensidade de marcação.</p>
        </div>
        <div>
          <p className="mb-1"><span className="font-bold text-purple-600">NV</span>: Índice de Valor (forma atual ajustada por contexto).</p>
          <p><span className="font-bold text-purple-600">NVPF</span>: Performance média esperada por 90 minutos.</p>
        </div>
      </div>
    </div>
  );
}
