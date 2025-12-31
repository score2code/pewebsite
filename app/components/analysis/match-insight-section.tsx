import React from 'react';
import { Target, Zap, ShieldAlert } from 'lucide-react';
import type { AnalysisStats } from '@/app/types';

export default function MatchInsightSection({
  homeName,
  awayName,
  stats
}: {
  homeName: string,
  awayName: string,
  stats?: AnalysisStats
}) {
  const last = (arr?: number[]) => (arr && arr.length > 0 ? arr[arr.length - 1] : 0);

  const h = stats?.last20?.home;
  const a = stats?.last20?.away;

  // Dados do último jogo
  const hG = last(h?.g);
  const hSOT = last(h?.matchRaw?.shotsOnTarget) || 1;
  const aG = last(a?.g);
  const aSOT = last(a?.matchRaw?.shotsOnTarget) || 1;

  // Eficiência: Gols por Chute no Alvo
  const hEff = (hG / hSOT) * 100;
  const aEff = (aG / aSOT) * 100;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div className="p-4 rounded-xl border border-light-300 dark:border-dark-600 bg-white/50 dark:bg-dark-900/40">
        <div className="flex items-center gap-2 mb-3 text-blue-500">
          <Target className="w-4 h-4" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Letalidade (Gols/Chutes no Alvo)</span>
        </div>

        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-[11px] mb-1.5">
              <span>{homeName}</span>
              <span className="font-mono">{hEff.toFixed(0)}% de acerto</span>
            </div>
            <div className="h-1.5 w-full bg-light-200 dark:bg-dark-700 rounded-full">
              <div className="h-full bg-blue-500 rounded-full" style={{ width: `${Math.min(hEff, 100)}%` }} />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-[11px] mb-1.5">
              <span>{awayName}</span>
              <span className="font-mono">{aEff.toFixed(0)}% de acerto</span>
            </div>
            <div className="h-1.5 w-full bg-light-200 dark:bg-dark-700 rounded-full">
              <div className="h-full bg-purple-500 rounded-full" style={{ width: `${Math.min(aEff, 100)}%` }} />
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 rounded-xl border border-light-300 dark:border-dark-600 bg-blue-50/30 dark:bg-blue-900/10">
        <div className="flex items-center gap-2 mb-2 text-blue-600 dark:text-blue-400">
          <Zap className="w-4 h-4" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Insight de Finalização</span>
        </div>
        <p className="text-[11px] leading-relaxed text-dark-900/70 dark:text-light-100/70">
          {hEff > aEff
            ? `O ${homeName} demonstra maior precisão técnica, convertendo mais gols por chute no alvo.`
            : `O ${awayName} tem sido mais letal em suas incursões ofensivas.`}
          {last(h?.matchRaw?.saves) > 4 && ` O goleiro do time da casa foi destaque absoluto na última rodada com ${last(h?.matchRaw?.saves)} defesas.`}
        </p>
      </div>
    </div>
  );
}
