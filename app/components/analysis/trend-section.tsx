import React from 'react';
import { TrendingUp } from 'lucide-react';
import type { AnalysisTrend } from '@/app/types';

export default function TrendSection({ trend }: { trend?: AnalysisTrend }) {
  const unitPercent = '%';
  const last = (arr?: number[]) => (arr && arr.length ? arr[arr.length - 1] : undefined);
  const LineChartCategories = ({
    homeVals,
    awayVals,
    unit,
  }: {
    homeVals: Array<number | undefined>;
    awayVals?: Array<number | undefined>;
    unit: string;
  }) => {
    const w = 228;
    const h = 80;
    const padX = 8;
    const padY = 8;
    const count = 4;
    const stepX = (w - 2 * padX) / (count - 1);
    const xs = Array.from({ length: count }, (_, i) => padX + i * stepX);
    const allVals = [...homeVals, ...(awayVals || [])].filter(v => typeof v === 'number') as number[];
    const max = Math.max(...allVals, 1);
    const min = Math.min(...allVals, 0);
    const range = Math.max(max - min, 1e-6);
    const toY = (v?: number) =>
      typeof v === 'number' ? padY + (1 - (v - min) / range) * (h - 2 * padY) : undefined;
    const toPts = (vals: Array<number | undefined>) =>
      vals.map((v, i) => (typeof v === 'number' ? `${xs[i]},${toY(v)}` : '')).filter(Boolean).join(' ');
    const homePts = toPts(homeVals);
    const awayPts = awayVals ? toPts(awayVals) : '';
    const drawMarkers = (vals: Array<number | undefined>, color: string) =>
      vals.map((v, i) =>
        typeof v === 'number' ? (
          <circle key={i} cx={xs[i]} cy={toY(v)} r="3.5" fill={color} stroke="#ffffff" strokeWidth="1">
            <title>{unit ? `${v} ${unit}` : String(v)}</title>
          </circle>
        ) : null
      );
    return (
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
        {homePts && <polyline points={homePts} fill="none" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" />}
        {drawMarkers(homeVals, '#3b82f6')}
        {awayPts && <polyline points={awayPts} fill="none" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" />}
        {awayVals && drawMarkers(awayVals, '#7c3aed')}
      </svg>
    );
  };
  const MiniTable = ({
    unit,
    homeVals,
    awayVals,
  }: {
    unit: string;
    homeVals: Array<number | undefined>;
    awayVals?: Array<number | undefined>;
  }) => (
    <div className="mt-2">
      <div className="grid grid-cols-5 text-[11px] text-dark-900/70 dark:text-light-100/70">
        <div />
        <div className="text-center">20 JOGOS</div>
        <div className="text-center">10 JOGOS</div>
        <div className="text-center">5 JOGOS</div>
        <div className="text-center">PROJ.</div>
      </div>
      <div className="grid grid-cols-5 text-[11px] mt-1 items-center">
        <div className="flex items-center gap-2 leading-none">
          <span className="inline-block w-2 h-2 rounded-full aspect-square bg-blue-500" /> <span>CASA</span>
        </div>
        {homeVals.map((v, i) => {
          const fmt2 = (n: number) => (Math.round(n * 100) / 100).toFixed(2);
          return (
            <div key={i} className="text-center">
              {typeof v === 'number' ? fmt2(v) : '-'}
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-5 text-[11px] mt-1 items-center">
        <div className="flex items-center gap-2 leading-none">
          <span className="inline-block w-2 h-2 rounded-full aspect-square bg-purple-600" /> <span>VISITA</span>
        </div>
        {(awayVals || Array(homeVals.length).fill(undefined)).map((v, i) => {
          const fmt2 = (n: number) => (Math.round(n * 100) / 100).toFixed(2);
          return (
            <div key={i} className="text-center">
              {typeof v === 'number' ? fmt2(v) : '-'}
            </div>
          );
        })}
      </div>
    </div>
  );
  const Card = ({
    title,
    unit,
    home,
    away,
    note,
  }: {
    title: string;
    unit: string;
    home: { s20?: number[] };
    away?: { s20?: number[] };
    note: string;
  }) => {
    const mean = (arr?: number[]) => (arr && arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : undefined);
    const lastOf = (arr?: number[], n?: number) => {
      if (!arr || arr.length === 0) return undefined;
      if (!n || n >= arr.length) return arr[arr.length - 1];
      const slice = arr.slice(-n);
      return slice[slice.length - 1];
    };
    const project = (s20?: number[]) => {
      const m5 = mean(s20?.slice(-5));
      const m10 = mean(s20?.slice(-10));
      const m20 = mean(s20);
      if (m5 == null && m10 == null && m20 == null) return undefined;
      const w5 = 0.6, w10 = 0.3, w20 = 0.1;
      const num = (m5 ?? 0) * w5 + (m10 ?? (m5 ?? 0)) * w10 + (m20 ?? (m10 ?? m5 ?? 0)) * w20;
      const den = (m5 != null ? w5 : 0) + (m10 != null ? w10 : 0) + (m20 != null ? w20 : 0);
      return den > 0 ? num / den : (m5 ?? m10 ?? m20);
    };
    const m20h = mean(home.s20);
    const m10h = mean(home.s20?.slice(-10));
    const m5h = mean(home.s20?.slice(-5));
    const hv = [m20h, m10h, m5h, project(home.s20)];
    const m20a = away ? mean(away.s20) : undefined;
    const m10a = away ? mean(away.s20?.slice(-10)) : undefined;
    const m5a = away ? mean(away.s20?.slice(-5)) : undefined;
    const av = away ? [m20a, m10a, m5a, project(away.s20)] : undefined;
    return (
      <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-4 border border-light-300/50 dark:border-dark-600/50">
        <p className="text-sm text-dark-900/70 dark:text-light-100/70 mb-2">{title}</p>
        <LineChartCategories homeVals={hv} awayVals={av} unit={unit} />
        <MiniTable unit={unit} homeVals={hv} awayVals={av} />
        <p className="mt-2 text-[11px] text-dark-900/60 dark:text-light-100/60">{note}</p>
      </div>
    );
  };
  return (
    <div className="mb-6">
      <h2 className="text-lg font-bold text-dark-900 dark:text-light-100 mb-3 flex items-center gap-2">
        <TrendingUp className="w-4 h-4 text-purple-600 dark:text-purple-400" />
        <span>Gráficos de Tendência</span>
      </h2>
      <p className="text-[11px] text-dark-900/60 dark:text-light-100/60 mb-2">
        Comparação visual Casa vs. Visitante e tabela com valores dos períodos (20, 10, 5 e Projeção).
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card
          title="% Pontos"
          unit={unitPercent}
          home={{ s20: trend?.pointsPct?.home }}
          away={{ s20: trend?.pointsPct?.away }}
          note="Percentual de pontos por período."
        />
        <Card
          title="XGScore dos Times"
          unit="XGScore"
          home={{ s20: trend?.xgScore?.home }}
          away={{ s20: trend?.xgScore?.away }}
          note="Indicador agregado de gols esperados por período."
        />
        <Card
          title="CV dos Times"
          unit={unitPercent}
          home={{ s20: trend?.teamsCV?.home }}
          away={{ s20: trend?.teamsCV?.away }}
          note="CV baixo = resultados mais consistentes e previsíveis."
        />
        <Card
          title="XG dos Times"
          unit="XG"
          home={{ s20: trend?.xg?.home }}
          away={{ s20: trend?.xg?.away }}
          note="Gols esperados por período."
        />
      </div>
    </div>
  );
}
