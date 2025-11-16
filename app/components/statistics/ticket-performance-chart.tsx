"use client";

import React from 'react';

type SeriesPoint = { label: string; value: number };

interface TicketPerformanceChartProps {
  series: SeriesPoint[];
  height?: number; // px
}

// Gráfico binário: cada dia é um marcador colorido (verde=ganhou, vermelho=perdeu)
// Simples, acessível e responsivo usando SVG
const TicketPerformanceChart: React.FC<TicketPerformanceChartProps> = ({ series, height = 140 }) => {
  const dotGap = 14; // px (maior espaçamento entre dias)
  const dotSize = 18; // px
  const paddingX = 24;
  const paddingY = 24;
  const chartWidth = series.length * dotSize + (series.length - 1) * dotGap;
  const width = chartWidth + paddingX * 2;
  const innerHeight = height - paddingY * 2;

  const centerY = paddingY + innerHeight / 2;

  // value mapping: 100=Vencedor (verde), 0=Perdedor (vermelho), 50=Pendente (cinza), 75=Adiado (azul)
  const colorFor = (v: number) => {
    if (v >= 100) return '#22c55e'; // green-500
    if (v <= 0) return '#ef4444';  // red-500
    if (v === 75) return '#3b82f6'; // blue-500 (adiado)
    return '#9ca3af';              // gray-400 (pendente)
  };

  // Exibir rótulos de data com espaçamento adaptativo (máx. ~10 labels)
  const maxLabels = 10;
  const showEvery = Math.max(1, Math.ceil(series.length / maxLabels));

  return (
    <div className="w-full overflow-x-auto">
      <svg
        width={width}
        height={height}
        role="img"
        aria-label="Desempenho recente de bilhetes (verde=vitória, vermelho=derrota)"
        className="block"
      >
        {/* fundo */}
        <rect x={0} y={0} width={width} height={height} fill="transparent" />

        {/* marcadores por dia */}
        {/* Ajustar rótulos para evitar poluição visual */}
        {series.map((s, idx) => {
          const x = paddingX + (idx - 0.5) * (dotSize + dotGap);
          const fill = colorFor(s.value);
          return (
            <g key={idx}>
              <rect
                x={x}
                y={centerY - dotSize / 2}
                width={dotSize}
                height={dotSize}
                rx={4}
                fill={fill}
              />
              {/* Tooltip simples via title */}
              <title>{`${s.label} · ${s.value >= 100 ? 'Vencedor' : s.value <= 0 ? 'Perdedor' : (s.value === 75 ? 'Adiado' : 'Pendente')}`}</title>
              {/* label do dia abaixo */}
              {(idx % showEvery === 0 || idx === 0 || idx === series.length - 1) && (
                <text
                  x={x + dotSize / 2}
                  y={height}
                  textAnchor="middle"
                  className="fill-current text-sm text-dark-900/90 dark:text-light-100"
                >
                  {s.label.split('/')[0]}
                </text>
              )}
            </g>
          );
        })}
      </svg>

      {/* Legenda fora do SVG para maior legibilidade */}
      <div className="mt-5 flex items-center gap-4 text-sm">
        <div className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 rounded-sm" style={{ backgroundColor: '#22c55e' }} />
          <span className="text-dark-900/90 dark:text-light-100">Vencedor</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 rounded-sm" style={{ backgroundColor: '#ef4444' }} />
          <span className="text-dark-900/90 dark:text-light-100">Perdedor</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 rounded-sm" style={{ backgroundColor: '#3b82f6' }} />
          <span className="text-dark-900/90 dark:text-light-100">Adiado</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 rounded-sm" style={{ backgroundColor: '#9ca3af' }} />
          <span className="text-dark-900/90 dark:text-light-100">Pendente</span>
        </div>
      </div>
    </div>
  );
};

export default TicketPerformanceChart;
