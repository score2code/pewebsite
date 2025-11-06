'use client';

import React from 'react';

type SeriesPoint = { label: string; value: number };

interface PerformanceChartProps {
  series: SeriesPoint[];
  height?: number; // px
}

// Simple responsive bar chart using SVG, accent-aware
const PerformanceChart: React.FC<PerformanceChartProps> = ({ series, height = 200 }) => {
  const maxValue = Math.max(100, ...series.map(s => s.value));
  const barGap = 8; // px gap between bars
  const barWidth = Math.max(12, Math.floor((600 - (series.length - 1) * barGap) / series.length));
  const chartWidth = series.length * barWidth + (series.length - 1) * barGap;
  const padding = 24;
  const width = chartWidth + padding * 2;
  const innerHeight = height - padding * 2;

  const getBarHeight = (v: number) => Math.round((v / maxValue) * innerHeight);

  return (
    <div className="w-full overflow-x-auto">
      <svg
        width={width}
        height={height}
        role="img"
        aria-label="Gráfico de desempenho diário"
        className="block"
      >
        {/* Background */}
        <rect x={0} y={0} width={width} height={height} fill="transparent" />

        {/* Grid lines (25%, 50%, 75%) */}
        {[0.25, 0.5, 0.75].map((g, i) => (
          <line
            key={i}
            x1={padding}
            x2={width - padding}
            y1={padding + innerHeight * (1 - g)}
            y2={padding + innerHeight * (1 - g)}
            stroke="currentColor"
            className="text-dark-900/10 dark:text-light-100/10"
          />
        ))}

        {/* Bars */}
        {series.map((s, idx) => {
          const h = getBarHeight(s.value);
          const x = padding + idx * (barWidth + barGap);
          const y = padding + (innerHeight - h);
          return (
            <g key={idx}>
              <rect
                x={x}
                y={y}
                width={barWidth}
                height={h}
                rx={4}
                fill="currentColor"
                className="accent-text"
              />
              {/* Value label */}
              <text
                x={x + barWidth / 2}
                y={y - 6}
                textAnchor="middle"
                className="fill-current text-xs text-dark-900/70 dark:text-light-100/70"
              >
                {Math.round(s.value)}%
              </text>
              {/* X label */}
              <text
                x={x + barWidth / 2}
                y={height - 6}
                textAnchor="middle"
                className="fill-current text-xs text-dark-900/70 dark:text-light-100/70"
              >
                {s.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default PerformanceChart;