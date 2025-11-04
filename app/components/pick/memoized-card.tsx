import React, { memo } from 'react';
import { Pick } from '@/app/types';
import StatusBadge from '@/app/components/ui/status-badge';
import { useFormattedDate, useFormattedTime } from '@/app/hooks/use-picks';
import { TrendingUp, Calendar, Clock, Trophy, Target } from 'lucide-react';
import Link from 'next/link';

interface MemoizedPickCardProps {
  pick: Pick;
  showStatus?: boolean;
  compact?: boolean;
  className?: string;
}

const MemoizedPickCard = memo<MemoizedPickCardProps>(({
  pick,
  showStatus = true,
  compact = false,
  className = ''
}) => {
  const formattedDate = useFormattedDate(pick.date || new Date().toISOString());
  const formattedTime = useFormattedTime(pick.date || new Date().toISOString());
  
  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 80) return 'text-green-600 dark:text-green-400';
    if (confidence >= 60) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  };

  const getOddsColor = (odds: number) => {
    if (odds >= 2.0) return 'text-purple-600 dark:text-purple-400';
    if (odds >= 1.5) return 'text-blue-600 dark:text-blue-400';
    return 'text-gray-600 dark:text-gray-400';
  };

  if (compact) {
    return (
      <div className={`bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm rounded-lg border border-light-300 dark:border-dark-600 p-3 hover:shadow-md transition-all duration-200 ${className}`}>
        <div className="flex items-center justify-between">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-medium text-purple-600 dark:text-purple-400 truncate">
                {pick.league}
              </span>
              {showStatus && <StatusBadge status={pick.status} size="sm" />}
            </div>
            <p className="text-sm font-semibold text-dark-900 dark:text-light-100 truncate">
              {pick.homeTeam} vs {pick.awayTeam}
            </p>
            <p className="text-xs text-dark-900/70 dark:text-light-100/70 truncate">
              {pick.prediction}
            </p>
          </div>
          <div className="flex flex-col items-end gap-1 ml-2">
            <span className={`text-sm font-bold ${getConfidenceColor(pick.confidence)}`}>
              {pick.confidence}%
            </span>
            <span className={`text-xs ${getOddsColor(pick.odds)}`}>
              @{pick.odds}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm rounded-xl border border-light-300 dark:border-dark-600 p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Trophy className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
            {pick.league}
          </span>
        </div>
        {showStatus && <StatusBadge status={pick.status} />}
      </div>

      {/* Teams */}
      <div className="mb-4">
        <h3 className="text-lg font-bold text-dark-900 dark:text-light-100 mb-2">
          {pick.homeTeam} vs {pick.awayTeam}
        </h3>
        <p className="text-sm text-dark-900/80 dark:text-light-100/80">
          {pick.prediction}
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 mb-1">
            <Target className="w-3 h-3 text-blue-600 dark:text-blue-400" />
            <span className="text-xs text-dark-900/70 dark:text-light-100/70">Confiança</span>
          </div>
          <span className={`text-lg font-bold ${getConfidenceColor(pick.confidence)}`}>
            {pick.confidence}%
          </span>
        </div>
        
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 mb-1">
            <TrendingUp className="w-3 h-3 text-green-600 dark:text-green-400" />
            <span className="text-xs text-dark-900/70 dark:text-light-100/70">Odds</span>
          </div>
          <span className={`text-lg font-bold ${getOddsColor(pick.odds)}`}>
            @{pick.odds}
          </span>
        </div>
        
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 mb-1">
            <Target className="w-3 h-3 text-purple-600 dark:text-purple-400" />
            <span className="text-xs text-dark-900/70 dark:text-light-100/70">Prob.</span>
          </div>
          <span className="text-lg font-bold text-purple-600 dark:text-purple-400">
            {pick.probability || Math.round(pick.confidence * 0.8)}%
          </span>
        </div>
      </div>

      {/* Date and Time */}
      <div className="flex items-center justify-between text-xs text-dark-900/60 dark:text-light-100/60 mb-4">
        <div className="flex items-center gap-1">
          <Calendar className="w-3 h-3" />
          <span>{formattedDate}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          <span>{formattedTime}</span>
        </div>
      </div>

      {/* Analysis Link */}
      <Link
        href={`/analise/${pick.id}`}
        className="block w-full text-center bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors duration-200 text-sm font-medium"
      >
        Ver Análise Completa
      </Link>
    </div>
  );
});

MemoizedPickCard.displayName = 'MemoizedPickCard';

export default MemoizedPickCard;