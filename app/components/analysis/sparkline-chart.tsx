import React from 'react';

type Series = { label: string; values: number[]; color?: string };

export default function SparklineChart({
  values = [],
  color = '#7c3aed',
  series,
  unit,
  width = 240,
  height = 64,
  highlightLast = false,
  showLastTooltip = false,
}: {
  values?: number[];
  color?: string;
  series?: Series[];
  unit?: string;
  width?: number;
  height?: number;
  highlightLast?: boolean;
  showLastTooltip?: boolean;
}) {
  if (series && series.length > 0) {
    const palette = ['#7c3aed', '#3b82f6', '#16a34a'];
    const max = Math.max(
      ...series.flatMap(s => s.values),
      1
    );
    const paths = series.map((s, idx) => {
      const step = s.values.length > 1 ? width / (s.values.length - 1) : width;
      const pts = s.values.map((v, i) => `${i * step},${height - (v / max) * height}`).join(' ');
      const isLatest = /5/.test(s.label);
      const strokeColor = isLatest ? '#22c55e' : (s.color || palette[idx % palette.length]);
      return { pts, color: strokeColor, label: s.label, step, lastValue: s.values[s.values.length - 1] ?? 0, len: s.values.length, isLatest };
    });
    const last5 = series.find(s => /5/.test(s.label));
    let last5Point: { x: number; y: number } | undefined;
    let last5Value: number | undefined;
    if (last5) {
      const step = last5.values.length > 1 ? width / (last5.values.length - 1) : width;
      const x = (last5.values.length - 1) * step;
      const y = height - ((last5.values[last5.values.length - 1] ?? 0) / max) * height;
      last5Point = { x, y };
      last5Value = last5.values[last5.values.length - 1] ?? 0;
    }
    return (
      <div className="flex flex-col gap-1">
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
          {paths.map((p, i) => (
            <polyline key={i} points={p.pts} fill="none" stroke={p.color} strokeWidth={p.isLatest ? 3 : 2} strokeLinecap="round" />
          ))}
          {last5Point && (
            <circle cx={last5Point.x} cy={last5Point.y} r="4" fill="#22c55e" stroke="#ffffff" strokeWidth="1">
              {typeof last5Value !== 'undefined' && (
                <title>{unit ? `${last5Value} ${unit}` : String(last5Value)}</title>
              )}
            </circle>
          )}
        </svg>
        <div className="flex items-center justify-between text-[10px]">
          <div className="flex items-center gap-2">
            {series.map((s, i) => (
              <span key={i} className="flex items-center gap-1">
                <span style={{ backgroundColor: paths[i].color }} className="inline-block w-2 h-2 rounded-full" />
                <span className="text-dark-900/70 dark:text-light-100/70">{s.label}</span>
              </span>
            ))}
          </div>
          {unit && <span className="text-dark-900/60 dark:text-light-100/60">{unit}</span>}
        </div>
      </div>
    );
  }
  const max = Math.max(...values, 1);
  const step = values.length > 1 ? width / (values.length - 1) : width;
  const pts = values.map((v, i) => `${i * step},${height - (v / max) * height}`).join(' ');
  const x = (values.length - 1) * step;
  const y = height - ((values[values.length - 1] ?? 0) / max) * height;
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <polyline points={pts} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" />
      {highlightLast && (
        <circle cx={x} cy={y} r="4" fill={color} stroke="#ffffff" strokeWidth="1">
          {showLastTooltip && typeof values[values.length - 1] !== 'undefined' && (
            <title>{unit ? `${values[values.length - 1]} ${unit}` : String(values[values.length - 1])}</title>
          )}
        </circle>
      )}
    </svg>
  );
}
