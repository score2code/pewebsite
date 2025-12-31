import React from 'react';

export default function RadarMetrics({
  metrics,
  size = 160,
  color = '#7c3aed'
}: {
  metrics: { mppt: number; dfpt: number; nv: number; nvpf: number };
  size?: number;
  color?: string
}) {
  const cx = size / 2;
  const cy = size / 2;
  const r = size / 2 - 25; // Aumentamos o recuo para caber as labels dentro do SVG

  // Valores normalizados
  const vals = [metrics.mppt, metrics.dfpt, metrics.nv, metrics.nvpf].map(v => Math.max(5, Math.min(100, v)));

  // Ângulos (MPPT no topo, DFPT na direita, NV embaixo, NVPF na esquerda)
  const ang = [-Math.PI / 2, 0, Math.PI / 2, Math.PI];

  const getPos = (v: number, i: number, radius: number) => {
    const rr = (v / 100) * radius;
    const x = cx + rr * Math.cos(ang[i]);
    const y = cy + rr * Math.sin(ang[i]);
    return { x, y };
  };

  const points = vals.map((v, i) => {
    const p = getPos(v, i, r);
    return `${p.x},${p.y}`;
  }).join(' ');

  const labels = ['MPPT', 'DFPT', 'NV', 'NVPF'];

  return (
    <div className="relative inline-block">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="overflow-visible">
        {/* Grades de Fundo (25%, 50%, 75%, 100%) */}
        {[0.25, 0.5, 0.75, 1].map((factor) => (
          <path
            key={factor}
            d={ang.map((a, i) => {
              const p = getPos(100, i, r * factor);
              return `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`;
            }).join(' ') + 'Z'}
            fill="none"
            stroke="currentColor"
            className="text-dark-900/5 dark:text-light-100/10"
            strokeWidth="1"
          />
        ))}

        {/* Eixos (Linhas cruzadas) */}
        <line x1={cx} y1={cy - r} x2={cx} y2={cy + r} stroke="currentColor" className="text-dark-900/5 dark:text-light-100/10" />
        <line x1={cx - r} y1={cy} x2={cx + r} y2={cy} stroke="currentColor" className="text-dark-900/5 dark:text-light-100/10" />

        {/* Área de Dados */}
        <polygon
          points={points}
          fill={color}
          fillOpacity="0.15"
          stroke={color}
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Pontos nos vértices para destaque */}
        {vals.map((v, i) => {
          const p = getPos(v, i, r);
          return <circle key={i} cx={p.x} cy={p.y} r="3" fill={color} />;
        })}

        {/* Labels integradas ao SVG para evitar desalinhamento */}
        {labels.map((label, i) => {
          const p = getPos(125, i, r); // Posiciona um pouco além do raio máximo
          return (
            <text
              key={i}
              x={p.x}
              y={p.y}
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-[10px] font-bold fill-dark-900/60 dark:fill-light-100/60 uppercase tracking-tighter"
            >
              {label}
            </text>
          );
        })}
      </svg>
    </div>
  );
}
