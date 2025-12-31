import React from 'react';
import { Activity } from 'lucide-react';
import type { AnalysisStats } from '@/app/types';

export default function PerformanceActivitySection({ stats }: { stats?: AnalysisStats }) {
  const avg = (arr?: number[], n?: number) => {
    if (!arr || arr.length === 0) return 0;
    const slice = n ? arr.slice(-n) : arr;
    return slice.reduce((a, b) => a + b, 0) / slice.length;
  };

  const h = stats?.last20?.home?.matchRaw;
  const a = stats?.last20?.away?.matchRaw;

  const StatBox = ({ label, home, away, sub }: { label: string; home: number; away: number; sub: string }) => (
    <div className="p-3 rounded-xl bg-light-200/50 dark:bg-dark-800/50 border border-light-300 dark:border-dark-700">
      <p className="text-[10px] font-bold opacity-50 uppercase mb-1">{label}</p>
      <div className="flex items-end justify-between">
        <span className="text-xl font-black text-blue-500">{home.toFixed(1)}</span>
        <span className="text-[9px] opacity-40 mb-1 font-bold">VS</span>
        <span className="text-xl font-black text-purple-600">{away.toFixed(1)}</span>
      </div>
      <p className="text-[9px] mt-1 opacity-60 italic">{sub}</p>
    </div>
  );

  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Activity className="w-5 h-5 text-red-500" />
        <h2 className="text-sm font-bold uppercase">Intensidade e Fluxo de Jogo</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <StatBox
          label="Escanteios"
          home={avg(h?.corners, 10)}
          away={avg(a?.corners, 10)}
          sub="Volume de bolas paradas"
        />
        <StatBox
          label="Faltas"
          home={avg(h?.fouls, 10)}
          away={avg(a?.fouls, 10)}
          sub="Índice de interrupções"
        />
        <StatBox
          label="Defesas"
          home={avg(h?.saves, 10)}
          away={avg(a?.saves, 10)}
          sub="Exigência dos goleiros"
        />
        <StatBox
          label="Ataques Perigosos"
          home={avg(h?.dangerousAttacks, 10)}
          away={avg(a?.dangerousAttacks, 10)}
          sub="Pressão no último terço"
        />
      </div>
    </div>
  );
}
