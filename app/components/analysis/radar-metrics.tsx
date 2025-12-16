import React from 'react';

export default function RadarMetrics({ metrics, size = 140, color = '#7c3aed' }: { metrics: { mppt: number; dfpt: number; nv: number; nvpf: number }; size?: number; color?: string }) {
  const cx = size / 2;
  const cy = size / 2;
  const r = size / 2 - 10;
  const vals = [metrics.mppt, metrics.dfpt, metrics.nv, metrics.nvpf].map(v => Math.max(0, Math.min(100, v)));
  const ang = [0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2];
  const pts = vals.map((v, i) => {
    const rr = (v / 100) * r;
    const x = cx + rr * Math.cos(ang[i]);
    const y = cy - rr * Math.sin(ang[i]);
    return `${x},${y}`;
  }).join(' ');
  const labelPos = [
    { x: cx + r + 6, y: cy, text: 'MPPT' },
    { x: cx, y: cy - r - 6, text: 'DFPT' },
    { x: cx - r - 6, y: cy, text: 'NV' },
    { x: cx, y: cy + r + 14, text: 'NVPF' },
  ];
  return (
    <div className="relative inline-block">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="#e5e7eb" />
        <polyline points={`${cx + r},${cy} ${cx},${cy - r} ${cx - r},${cy} ${cx},${cy + r} ${cx + r},${cy}`} fill="none" stroke="#e5e7eb" />
        <polygon points={pts} fill={color + '22'} stroke={color} strokeWidth="2" />
      </svg>
      {labelPos.map((p, i) => (
        <span
          key={i}
          style={{ position: 'absolute', left: p.x, top: p.y, transform: 'translate(-50%, -50%)' }}
          className="text-xs text-dark-900/70 dark:text-light-100/70"
        >
          {p.text}
        </span>
      ))}
    </div>
  );
}
