import React from 'react';
import { Target, Zap, ShieldAlert } from 'lucide-react';
import type { AnalysisStats } from '@/app/types';

export default function PredictiveClashSection({ stats, homeTeam, awayTeam }: { stats?: AnalysisStats; homeTeam: string; awayTeam: string }) {
  const avg = (arr?: number[], n?: number) => {
    if (!arr || arr.length === 0) return 0;
    const slice = n ? arr.slice(-n) : arr;
    return slice.reduce((a, b) => a + b, 0) / slice.length;
  };

  const hMatch = stats?.last20?.home?.matchRaw;
  const hTactical = stats?.last20?.home?.tacticalRaw;
  const aMatch = stats?.last20?.away?.matchRaw;
  const aTactical = stats?.last20?.away?.tacticalRaw;

  // Cálculos de Previsibilidade
  const metrics = {
    homeEfficiency: (avg(stats?.last20?.home?.g, 10) / (avg(hMatch?.shots, 10) || 1)) * 100,
    awayEfficiency: (avg(stats?.last20?.away?.g, 10) / (avg(aMatch?.shots, 10) || 1)) * 100,
    homePPDA: avg(hTactical?.ppda, 10),
    awayPPDA: avg(aTactical?.ppda, 10),
    chaosIndex: (avg(hMatch?.fouls, 10) + avg(aMatch?.fouls, 10)) / 2
  };

  const PredictorCard = ({ title, icon: Icon, color, homeValue, awayValue, description }: any) => (
    <div className="bg-white/40 dark:bg-dark-900/40 p-4 rounded-2xl border border-light-300 dark:border-dark-700 space-y-3">
      <div className="flex items-center gap-2">
        <div className={`p-1.5 rounded-lg ${color} bg-opacity-20`}>
          <Icon className={`w-4 h-4 ${color.replace('bg-', 'text-')}`} />
        </div>
        <span className="text-[10px] font-black uppercase tracking-widest opacity-60">{title}</span>
      </div>
      <div className="flex justify-between items-end">
        <div>
          <p className="text-[9px] opacity-50 font-bold uppercase">{homeTeam}</p>
          <p className="text-lg font-black">{homeValue}</p>
        </div>
        <div className="text-right">
          <p className="text-[9px] opacity-50 font-bold uppercase">{awayTeam}</p>
          <p className="text-lg font-black">{awayValue}</p>
        </div>
      </div>
      <p className="text-[10px] leading-tight opacity-70 italic border-t border-light-300 dark:border-dark-700 pt-2">
        {description}
      </p>
    </div>
  );

  return (
    <div className="mb-8">
      <h2 className="text-sm font-black uppercase tracking-tighter mb-4 flex items-center gap-2 text-dark-900 dark:text-light-100">
        <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
        Previsibilidade do Confronto
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Letalidade: Quem converte mais as chances? */}
        <PredictorCard
          title="Letalidade (Gols/Chute)"
          icon={Target}
          color="bg-red-500"
          homeValue={`${metrics.homeEfficiency.toFixed(1)}%`}
          awayValue={`${metrics.awayEfficiency.toFixed(1)}%`}
          description={metrics.homeEfficiency > metrics.awayEfficiency
            ? `${homeTeam} é mais cirúrgico nas finalizações.`
            : `${awayTeam} aproveita melhor as chances que cria.`}
        />

        {/* Intensidade de Pressão (PPDA) */}
        <PredictorCard
          title="Intensidade (PPDA)"
          icon={Zap}
          color="bg-blue-500"
          homeValue={metrics.homePPDA.toFixed(1)}
          awayValue={metrics.awayPPDA.toFixed(1)}
          description="Quanto menor o PPDA, mais o time pressiona a saída de bola."
        />

        {/* Risco de Interrupção (Caos) */}
        <PredictorCard
          title="Índice de Caos (Faltas)"
          icon={ShieldAlert}
          color="bg-amber-500"
          homeValue={avg(hMatch?.fouls, 10).toFixed(1)}
          awayValue={avg(aMatch?.fouls, 10).toFixed(1)}
          description={metrics.chaosIndex > 28
            ? "Tendência de jogo muito picotado e com muitos cartões."
            : "Tendência de jogo fluido com poucas interrupções."}
        />
      </div>

      {/* Insight Final de Previsibilidade */}
      <div className="mt-4 p-4 rounded-xl bg-purple-600/5 border border-purple-500/20 text-center">
        <p className="text-[11px] font-medium text-purple-700 dark:text-purple-300">
          <span className="font-bold">Dica de Previsão:</span>
          {metrics.homePPDA < 10 && metrics.awayPPDA < 10
            ? " Ambos os times pressionam alto. Expectativa de jogo de transição rápida e muitos erros de passe."
            : " Um dos times prefere esperar em bloco baixo. Jogo de paciência e posse de bola."}
        </p>
      </div>
    </div>
  );
}
