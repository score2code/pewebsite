import React from 'react';
import { Crosshair } from 'lucide-react';
import RadarMetrics from './radar-metrics';
import type { AnalysisTactical } from '@/app/types';

export default function TacticalAnalysisSection({
  tactical,
  homeTeam,
  awayTeam,
}: {
  tactical?: AnalysisTactical;
  homeTeam: string;
  awayTeam: string;
}) {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-bold text-dark-900 dark:text-light-100 mb-3 flex items-center gap-2">
        <Crosshair className="w-4 h-4 text-purple-600 dark:text-purple-400" />
        <span>Análise Tática</span>
      </h2>
      <p className="text-[11px] text-dark-900/60 dark:text-light-100/60 mb-2">
        Indicadores normalizados (0–100) para comparar perfis. Use a leitura relativa entre os times.
      </p>
      <div className="grid grid-cols-2 gap-4 items-center">
        <div className="flex flex-col items-center gap-2 bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-4 border border-light-300/50 dark:border-dark-600/50">
          <p className="text-sm text-dark-900/70 dark:text-light-100/70">{homeTeam}</p>
          <RadarMetrics metrics={tactical?.home || { mppt: 0, dfpt: 0, nv: 0, nvpf: 0 }} />
        </div>
        <div className="flex flex-col items-center gap-2 bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-4 border border-light-300/50 dark:border-dark-600/50">
          <p className="text-sm text-dark-900/70 dark:text-light-100/70">{awayTeam}</p>
          <RadarMetrics metrics={tactical?.away || { mppt: 0, dfpt: 0, nv: 0, nvpf: 0 }} />
        </div>
      </div>
      <div className="mt-3 text-[11px] text-dark-900/70 dark:text-light-100/70 space-y-1">
        <p><span className="font-semibold">MPPT</span>: posse e pressão efetiva em fase ofensiva.</p>
        <p><span className="font-semibold">DFPT</span>: força defensiva e pressão sem bola.</p>
        <p><span className="font-semibold">NV</span>: forma ajustada por contexto (mando, adversário), escala 0–100.</p>
        <p><span className="font-semibold">NVPF</span>: NV por partida, ajustado por tempo em campo.</p>
      </div>
    </div>
  );
}
