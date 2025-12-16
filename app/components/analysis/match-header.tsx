import React from 'react';
import { Calendar, Clock, Trophy, BadgeCheck } from 'lucide-react';
import type { AnalysisData } from '@/app/types';

export default function MatchHeader({ pick }: { pick: AnalysisData }) {
  const formattedDate = new Date(pick.date + 'T00:00:00').toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
  const timeStr = pick.time ? pick.time + (pick.timezone ? ` ${pick.timezone}` : '') : '';
  return (
    <div className="p-6 border-b border-light-300 dark:border-dark-600">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <Trophy className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          <span className="text-sm font-medium text-purple-600 dark:text-purple-400">{pick.league}</span>
        </div>
        <div className="flex items-center gap-2 flex-wrap text-xs text-dark-900/70 dark:text-light-100/70">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>{formattedDate}</span>
          </div>
          {timeStr && (
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{timeStr}</span>
            </div>
          )}
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-extrabold text-dark-900 dark:text-light-100">
          {pick.homeTeam} vs {pick.awayTeam}
        </h1>
        <BadgeCheck className="w-5 h-5 text-dark-900/30 dark:text-light-100/30" />
      </div>
    </div>
  );
}
