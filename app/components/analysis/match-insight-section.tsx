import React from 'react';
import { Target, Zap, TrendingUp } from 'lucide-react';

export default function MatchInsightSection({
  homeName,
  awayName,
  stats
}: {
  homeName: string,
  awayName: string,
  stats?: any
}) {
  // Helpers para extrair o último valor do array de stats
  const last = (arr?: number[]) => (arr && arr.length > 0 ? arr[arr.length - 1] : 0);

  const hG = last(stats?.last20?.home?.g);
  const hXG = last(stats?.last20?.home?.xg);
  const aG = last(stats?.last20?.away?.g);
  const aXG = last(stats?.last20?.away?.xg);

  // Cálculo de eficiência: Gols reais vs Gols esperados (Performance de finalização)
  const homePerformance = (hG - hXG).toFixed(2);
  const awayPerformance = (aG - aXG).toFixed(2);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div className="p-4 rounded-xl border border-light-300 dark:border-dark-600 bg-white/50 dark:bg-dark-900/40">
        <div className="flex items-center gap-2 mb-3 text-purple-600">
          <Target className="w-4 h-4" />
          <span className="text-xs font-bold uppercase tracking-wider">Eficiência Ofensiva (Último Jogo)</span>
        </div>

        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-[11px] mb-1">
              <span className="truncate max-w-[150px]">{homeName}</span>
              <span className={Number(homePerformance) >= 0 ? 'text-green-500' : 'text-red-500'}>
                {Number(homePerformance) > 0 ? '+' : ''}{homePerformance} xG
              </span>
            </div>
            <div className="h-1.5 w-full bg-light-200 dark:bg-dark-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-500 transition-all"
                style={{ width: `${Math.min(Math.max((hG / (hXG || 1)) * 50, 10), 100)}%` }}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-[11px] mb-1">
              <span className="truncate max-w-[150px]">{awayName}</span>
              <span className={Number(awayPerformance) >= 0 ? 'text-green-500' : 'text-red-500'}>
                {Number(awayPerformance) > 0 ? '+' : ''}{awayPerformance} xG
              </span>
            </div>
            <div className="h-1.5 w-full bg-light-200 dark:bg-dark-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-purple-500 transition-all"
                style={{ width: `${Math.min(Math.max((aG / (aXG || 1)) * 50, 10), 100)}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 rounded-xl border border-light-300 dark:border-dark-600 bg-white/50 dark:bg-dark-900/40 flex flex-col justify-center">
        <div className="flex items-center gap-2 mb-2 text-blue-600">
          <Zap className="w-4 h-4" />
          <span className="text-xs font-bold uppercase tracking-wider">Análise de Momento</span>
        </div>
        <p className="text-[11px] leading-relaxed text-dark-900/70 dark:text-light-100/70">
          {Number(homePerformance) > Number(awayPerformance)
            ? `O time da casa apresenta uma conversão de chances superior à do visitante no confronto mais recente.`
            : `O visitante demonstrou maior letalidade em relação ao xG criado do que o time mandante.`}
          A projeção ponderada sugere um jogo com tendência de {hXG + aXG > 2.5 ? 'alta' : 'baixa'} criação de oportunidades claras.
        </p>
      </div>
    </div>
  );
}
