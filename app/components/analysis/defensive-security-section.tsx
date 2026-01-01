import React from 'react';
import { ShieldCheck, HeartPulse, ShieldAlert, Swords } from 'lucide-react';
import type { AnalysisStats } from '@/app/types';

export default function DefensiveSecuritySection({
  stats,
  homeTeam,
  awayTeam
}: {
  stats?: AnalysisStats;
  homeTeam: string;
  awayTeam: string
}) {
  const avg = (arr?: number[], n?: number) => {
    if (!arr || arr.length === 0) return 0;
    const slice = n ? arr.slice(-n) : arr;
    return slice.reduce((a, b) => a + b, 0) / slice.length;
  };

  const h = stats?.last20?.home;
  const a = stats?.last20?.away;

  const security = {
    homeSaves: avg(h?.matchRaw?.saves, 10),
    awaySaves: avg(a?.matchRaw?.saves, 10),
    homeTackles: avg(h?.matchRaw?.tackles, 10),
    awayTackles: avg(a?.matchRaw?.tackles, 10),
    homeGA: avg(h?.ga, 10),
    awayGA: avg(a?.ga, 10),
  };

  const SecurityCard = ({ title, homeVal, awayVal, sub, icon: Icon, isInverse = false }: any) => {
    const homeHasData = homeVal > 0;
    const awayHasData = awayVal > 0;
    const homeIsBetter = isInverse ? homeVal < awayVal : homeVal > awayVal;

    return (
      <div className="flex flex-col p-4 rounded-2xl bg-white/40 dark:bg-dark-900/40 border border-light-300 dark:border-dark-700">
        <div className="flex items-center gap-2 mb-3">
          <Icon className="w-3.5 h-3.5 opacity-50" />
          <span className="text-[10px] font-black uppercase tracking-widest opacity-60">{title}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-center">
            <span className={`text-xl font-black ${homeHasData && homeIsBetter ? 'text-green-500' : 'text-dark-900/30 dark:text-light-100/30'}`}>
              {homeHasData ? homeVal.toFixed(1) : '--'}
            </span>
          </div>
          <div className="h-8 w-[1px] bg-light-300 dark:bg-dark-700 mx-2" />
          <div className="text-center">
            <span className={`text-xl font-black ${awayHasData && !homeIsBetter ? 'text-green-500' : 'text-dark-900/30 dark:text-light-100/30'}`}>
              {awayHasData ? awayVal.toFixed(1) : '--'}
            </span>
          </div>
        </div>
        <p className="text-[9px] text-center mt-2 opacity-50 font-bold uppercase">{sub}</p>
      </div>
    );
  };

  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <ShieldCheck className="w-5 h-5 text-green-600" />
        <h2 className="text-sm font-black uppercase italic tracking-tight">Solidez e Resistência Defensiva</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SecurityCard
          title="Proteção do Goleiro"
          homeVal={security.homeSaves}
          awayVal={security.awaySaves}
          sub="Defesas por Partida"
          icon={HeartPulse}
        />
        <SecurityCard
          title="Volume de Combate"
          homeVal={security.homeTackles}
          awayVal={security.awayTackles}
          sub="Desarmes por Jogo"
          icon={Swords}
        />
        <SecurityCard
          title="Média Gols Sofridos"
          homeVal={security.homeGA}
          awayVal={security.awayGA}
          sub="Gols por jogo (Menor é melhor)"
          icon={ShieldAlert}
          isInverse={true}
        />
      </div>

      <div className="mt-4 p-4 rounded-xl bg-green-500/5 border border-green-500/20 text-dark-900 dark:text-light-100">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[11px] leading-relaxed opacity-80 text-center md:text-left">
            <strong>Análise de Resistência:</strong>{' '}
            {security.homeGA < security.awayGA
              ? `O ${homeTeam} apresenta uma organização defensiva superior ao ${awayTeam}, sofrendo menos gols em média.`
              : `O ${awayTeam} chega para o confronto com números defensivos mais sólidos que o ${homeTeam}.`}
          </div>

          <div className="flex shrink-0 gap-2">
             <div className="px-3 py-1 bg-white dark:bg-dark-800 text-[9px] font-black rounded-full border border-light-300 dark:border-dark-600 uppercase">
               {homeTeam.substring(0, 3)}: {security.homeGA < 1.2 ? 'Sólido' : 'Instável'}
             </div>
             <div className="px-3 py-1 bg-white dark:bg-dark-800 text-[9px] font-black rounded-full border border-light-300 dark:border-dark-600 uppercase">
               {awayTeam.substring(0, 3)}: {security.awayGA < 1.2 ? 'Sólido' : 'Instável'}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
