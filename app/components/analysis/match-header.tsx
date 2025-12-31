import React from 'react';
import { Calendar, Clock, Trophy, BadgeCheck, Globe } from 'lucide-react';
import type { AnalysisData } from '@/app/types';

export default function MatchHeader({ pick }: { pick: AnalysisData }) {
  // Tratamento de data robusto para evitar que o fuso horário mude o dia (comum em JS)
  const dateObj = pick.date ? new Date(pick.date + 'T12:00:00') : new Date();
  const formattedDate = dateObj.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  const timeStr = pick.time ? pick.time : '';
  const timezoneStr = pick.timezone ? pick.timezone : 'GMT';

  return (
    <div className="p-6 border-b border-light-300 dark:border-dark-600 bg-gradient-to-br from-white to-light-100/50 dark:from-dark-900 dark:to-dark-800/50">
      <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
        {/* Badge da Liga */}
        <div className="flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded-full border border-purple-200 dark:border-purple-800/50">
          <Trophy className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          <span className="text-xs font-bold text-purple-700 dark:text-purple-300 uppercase tracking-wide">
            {pick.league}
          </span>
        </div>

        {/* Informações de Tempo */}
        <div className="flex items-center gap-4 text-[11px] font-medium text-dark-900/60 dark:text-light-100/60 uppercase tracking-wider">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>{formattedDate}</span>
          </div>
          {timeStr && (
            <div className="flex items-center gap-1.5 border-l border-light-300 dark:border-dark-700 pl-4">
              <Clock className="w-3.5 h-3.5" />
              <span>{timeStr} <span className="opacity-50 text-[9px]">{timezoneStr}</span></span>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-end justify-between gap-4">
        <div className="flex-1">
          <p className="text-[10px] font-bold text-purple-600 dark:text-purple-400 uppercase mb-1 tracking-widest opacity-80">
            Confronto Direto
          </p>
          <h1 className="text-2xl md:text-4xl font-black text-dark-900 dark:text-light-100 tracking-tight leading-none">
            {pick.homeTeam} <span className="text-dark-900/20 dark:text-light-100/20 mx-1">VS</span> {pick.awayTeam}
          </h1>
        </div>

        <div className="hidden sm:flex flex-col items-end opacity-40">
          <BadgeCheck className="w-8 h-8 text-blue-500" />
          <span className="text-[9px] font-bold uppercase mt-1">Dados Verificados</span>
        </div>
      </div>

      {/* Breadcrumb / Localização extra se houver */}
      <div className="mt-4 flex items-center gap-2 text-[10px] text-dark-900/40 dark:text-light-100/40 font-bold uppercase tracking-widest">
        <Globe className="w-3 h-3" />
        <span>Análise Profissional Baseada em Volume de Jogo</span>
      </div>
    </div>
  );
}
