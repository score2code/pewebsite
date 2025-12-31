import React from 'react';
import { TrendingUp } from 'lucide-react';
import type { AnalysisTrend } from '@/app/types';

export default function TrendSection({ trend }: { trend?: AnalysisTrend }) {
  const unitPercent = '%';

  const LineChartCategories = ({
    homeVals,
    awayVals,
    unit,
  }: {
    homeVals: Array<number | undefined>;
    awayVals?: Array<number | undefined>;
    unit: string;
  }) => {
    // Dimensões do gráfico ajustadas para melhor visualização mobile/desktop
    const w = 300;
    const h = 100;
    const padX = 15;
    const padY = 15;
    const count = 4; // 20j, 10j, 5j, PROJ
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
          <circle key={i} cx={xs[i]} cy={toY(v)} r="4" fill={color} stroke="#ffffff" strokeWidth="1.5" className="drop-shadow-sm">
            <title>{unit ? `${v.toFixed(2)} ${unit}` : v.toFixed(2)}</title>
          </circle>
        ) : null
      );

    return (
      <div className="flex justify-center bg-light-200/30 dark:bg-dark-900/30 rounded-lg p-2 overflow-hidden">
        <svg width="100%" height={h} viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="xMidYMid meet">
          {/* Linhas de Grade Horizontais */}
          <line x1={padX} y1={padY} x2={w - padX} y2={padY} stroke="currentColor" strokeOpacity="0.1" />
          <line x1={padX} y1={h - padY} x2={w - padX} y2={h - padY} stroke="currentColor" strokeOpacity="0.1" />

          {/* Polilinhas */}
          {homePts && <polyline points={homePts} fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />}
          {awayPts && <polyline points={awayPts} fill="none" stroke="#7c3aed" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />}

          {/* Marcadores */}
          {drawMarkers(homeVals, '#3b82f6')}
          {awayVals && drawMarkers(awayVals, '#7c3aed')}
        </svg>
      </div>
    );
  };

  const MiniTable = ({
    homeVals,
    awayVals,
  }: {
    homeVals: Array<number | undefined>;
    awayVals?: Array<number | undefined>;
  }) => (
    <div className="mt-3">
      <div className="grid grid-cols-5 text-[10px] font-bold text-dark-900/40 dark:text-light-100/40 uppercase tracking-tighter">
        <div />
        <div className="text-center">20J</div>
        <div className="text-center">10J</div>
        <div className="text-center">5J</div>
        <div className="text-center text-purple-600 dark:text-purple-400">PROJ</div>
      </div>
      <div className="grid grid-cols-5 text-[11px] mt-1.5 items-center font-mono">
        <div className="flex items-center gap-1.5 leading-none font-sans font-semibold opacity-70">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> H
        </div>
        {homeVals.map((v, i) => (
          <div key={i} className={`text-center ${i === 3 ? 'font-bold text-blue-500' : ''}`}>
            {typeof v === 'number' ? v.toFixed(2) : '-'}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-5 text-[11px] mt-1 items-center font-mono">
        <div className="flex items-center gap-1.5 leading-none font-sans font-semibold opacity-70">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-600" /> A
        </div>
        {(awayVals || Array(4).fill(undefined)).map((v, i) => (
          <div key={i} className={`text-center ${i === 3 ? 'font-bold text-purple-600' : ''}`}>
            {typeof v === 'number' ? v.toFixed(2) : '-'}
          </div>
        ))}
      </div>
    </div>
  );

  const Card = ({
    title,
    unit,
    homeS20,
    awayS20,
    note,
  }: {
    title: string;
    unit: string;
    homeS20?: number[];
    awayS20?: number[];
    note: string;
  }) => {
    const mean = (arr?: number[]) => (arr && arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : undefined);

    const project = (s20?: number[]) => {
      const m5 = mean(s20?.slice(-5));
      const m10 = mean(s20?.slice(-10));
      const m20 = mean(s20);
      if (m5 == null) return m10 ?? m20;
      // Peso maior para a forma recente (60% para os últimos 5 jogos)
      const w5 = 0.6, w10 = 0.3, w20 = 0.1;
      return (m5 * w5) + (m10 ?? m5) * w10 + (m20 ?? m5) * w20;
    };

    const getMetrics = (s20?: number[]) => [
      mean(s20),
      mean(s20?.slice(-10)),
      mean(s20?.slice(-5)),
      project(s20)
    ];

    const hv = getMetrics(homeS20);
    const av = getMetrics(awayS20);

    return (
      <div className="bg-white/50 dark:bg-dark-900/40 rounded-xl p-4 border border-light-300 dark:border-dark-600">
        <p className="text-xs font-bold text-dark-900/80 dark:text-light-100/80 mb-3">{title}</p>
        <LineChartCategories homeVals={hv} awayVals={av} unit={unit} />
        <MiniTable homeVals={hv} awayVals={av} />
        <p className="mt-3 text-[10px] italic text-dark-900/50 dark:text-light-100/50 border-t border-light-200 dark:border-dark-700 pt-2">{note}</p>
      </div>
    );
  };

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-dark-900 dark:text-light-100 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-purple-600" />
          <span>Tendências de Longo e Curto Prazo</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card
          title="Eficiência de Pontos (%)"
          unit={unitPercent}
          homeS20={trend?.pointsPct?.home}
          awayS20={trend?.pointsPct?.away}
          note="Aproveitamento de pontos ponderado pelas últimas janelas."
        />
        <Card
          title="xG Score (Poder Ofensivo)"
          unit="pts"
          homeS20={trend?.xgScore?.home}
          awayS20={trend?.xgScore?.away}
          note="Qualidade média das chances criadas por partida."
        />
        <Card
          title="Índice xG (Expectativa)"
          unit="xg"
          homeS20={trend?.xg?.home}
          awayS20={trend?.xg?.away}
          note="Gols esperados brutos acumulados por jogo."
        />
        <Card
          title="Dificuldade do Adversário (CV)"
          unit={unitPercent}
          homeS20={trend?.teamsCV?.home}
          awayS20={trend?.teamsCV?.away}
          note="CV mais baixo indica maior consistência contra adversários variados."
        />
      </div>
    </div>
  );
}
