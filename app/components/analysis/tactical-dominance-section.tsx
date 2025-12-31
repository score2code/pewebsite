import React from 'react';
import { Gauge } from 'lucide-react';
import type { AnalysisStats } from '@/app/types';

export default function TacticalDominanceSection({ stats, homeTeam, awayTeam }: { stats?: AnalysisStats; homeTeam: string; awayTeam: string }) {
  const avg = (arr?: number[], n?: number) => {
    if (!arr || arr.length === 0) return 0;
    const slice = n ? arr.slice(-n) : arr;
    return slice.reduce((a, b) => a + b, 0) / slice.length;
  };

  const h = stats?.last20?.home?.tacticalRaw;
  const a = stats?.last20?.away?.tacticalRaw;

  // Calculamos a média dos últimos 10 jogos para estabilidade
  const metrics = {
    homePos: avg(h?.possessionPct, 10),
    homeTilt: avg(h?.fieldTiltPct, 10),
    awayPos: avg(a?.possessionPct, 10),
    awayTilt: avg(a?.fieldTiltPct, 10),
  };

  const Bar = ({ label, home, away, unit = "%" }: { label: string; home: number; away: number; unit?: string }) => (
    <div className="space-y-2">
      <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest opacity-70">
        <span>{label}</span>
        <span>{home.toFixed(0)}{unit} vs {away.toFixed(0)}{unit}</span>
      </div>
      <div className="relative h-3 w-full bg-light-300 dark:bg-dark-700 rounded-full overflow-hidden flex">
        <div
          className="h-full bg-blue-500 transition-all duration-1000"
          style={{ width: `${(home / (home + away)) * 100}%`, borderRight: '2px solid white' }}
        />
        <div
          className="h-full bg-purple-600 transition-all duration-1000"
          style={{ width: `${(away / (home + away)) * 100}%` }}
        />
      </div>
    </div>
  );

  return (
    <div className="mb-8 p-5 rounded-2xl border border-light-300 dark:border-dark-600 bg-white/50 dark:bg-dark-900/40">
      <div className="flex items-center gap-2 mb-6">
        <Gauge className="w-5 h-5 text-blue-500" />
        <h2 className="text-sm font-bold uppercase tracking-tight">Domínio de Território (Últimos 10j)</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Bar label="Posse de Bola Média" home={metrics.homePos} away={metrics.awayPos} />
          <Bar label="Pressão no Ataque (Field Tilt)" home={metrics.homeTilt} away={metrics.awayTilt} />
        </div>

        <div className="bg-blue-50/50 dark:bg-blue-900/10 p-4 rounded-xl border border-blue-100 dark:border-blue-800/30">
          <h3 className="text-[10px] font-bold uppercase mb-2 text-blue-600">Leitura de Fluxo</h3>
          <p className="text-[11px] leading-relaxed opacity-80">
            {metrics.homeTilt > metrics.homePos + 5
              ? `O ${homeTeam} é extremamente vertical; domina o campo adversário mesmo sem reter tanto a bola.`
              : metrics.awayTilt > metrics.awayPos + 5
              ? `O ${awayTeam} consegue empurrar o adversário para o campo de defesa com eficiência superior à sua posse.`
              : `O domínio territorial está equilibrado e condizente com a posse de bola de ambas as equipes.`}
          </p>
        </div>
      </div>
    </div>
  );
}
