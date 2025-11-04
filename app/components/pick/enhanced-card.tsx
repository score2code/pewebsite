"use client";

import React from 'react';
import { ShieldCheck, BarChart2, Clock, TrendingUp, TrendingDown, Calendar, ExternalLink } from 'lucide-react';
import { Pick } from '@/app/types';
import Link from 'next/link';
import StatusBadge from '@/app/components/ui/status-badge';

interface EnhancedPickCardProps {
    pick: Pick;
    date?: string;
    showStatus?: boolean;
    compact?: boolean;
}

const EnhancedPickCard: React.FC<EnhancedPickCardProps> = ({ 
    pick, 
    date = '2025-11-03', 
    showStatus = true, 
    compact = false 
}) => {
    // Determinar status baseado nos dados
    const getPickStatus = (): 'won' | 'lost' | 'pending' | 'high-confidence' | 'low-odds' => {
        if (pick.result) {
            return pick.result === 'won' ? 'won' : 'lost';
        }
        if (pick.confidence >= 8) return 'high-confidence';
        if (pick.odds <= 30) return 'low-odds';
        return 'pending';
    };

    const status = getPickStatus();
    const isCompact = compact;

    const getOddsColor = (odds: number) => {
        if (odds >= 70) return 'text-green-600 dark:text-green-400';
        if (odds >= 50) return 'text-yellow-600 dark:text-yellow-400';
        if (odds >= 30) return 'text-orange-600 dark:text-orange-400';
        return 'text-red-600 dark:text-red-400';
    };

    const getConfidenceColor = (confidence: number) => {
        if (confidence >= 8) return 'text-purple-600 dark:text-purple-400';
        if (confidence >= 6) return 'text-blue-600 dark:text-blue-400';
        return 'text-gray-600 dark:text-gray-400';
    };

    return (
        <Link
            href={`/futebol/${date}/${pick.id}`}
            className="block focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-xl group transition-all duration-300 hover:scale-[1.02]"
        >
            <div className={`bg-light-100/50 dark:bg-dark-800/50 rounded-xl border border-light-300 dark:border-dark-600
                shadow-custom dark:shadow-custom-dark overflow-hidden
                transition-all duration-300 h-full flex flex-col
                group-hover:border-purple-500 dark:group-hover:border-purple-400
                backdrop-blur-sm ${isCompact ? 'text-sm' : ''}`}>
                
                {/* Header com status e liga */}
                <div className={`p-4 border-b border-light-300 dark:border-dark-600 bg-gradient-to-r from-light-200/50 to-light-100/50 dark:from-dark-700/50 dark:to-dark-800/50 ${isCompact ? 'py-3' : ''}`}>
                    <div className="flex justify-between items-center mb-2">
                        <span className={`font-semibold text-purple-600 dark:text-purple-400 ${isCompact ? 'text-xs' : ''}`}>
                            {pick.league}
                        </span>
                        {showStatus && <StatusBadge status={status} confidence={pick.confidence} odds={pick.odds} />}
                    </div>
                    <div className="flex items-center text-xs text-dark-900/60 dark:text-light-100/60">
                        <Calendar size={12} className="mr-1" />
                        {pick.dateTime}
                    </div>
                </div>

                {/* Times e Previsão */}
                <div className={`p-5 flex-grow bg-gradient-to-b from-light-100/50 to-light-200/50 dark:from-dark-800/50 dark:to-dark-700/50 ${isCompact ? 'py-4 px-4' : ''}`}>
                    <div className={`flex justify-center items-center gap-4 mb-4 ${isCompact ? 'mb-3 gap-3' : ''}`}>
                        <div className="text-center flex-1 min-w-0">
                            <span className={`font-bold text-dark-900 dark:text-light-100 break-words ${isCompact ? 'text-sm' : 'text-lg'}`}>
                                {pick.homeTeam}
                            </span>
                        </div>
                        <span className="text-dark-900/40 dark:text-light-100/40 font-light px-2 text-sm">vs</span>
                        <div className="text-center flex-1 min-w-0">
                            <span className={`font-bold text-dark-900 dark:text-light-100 break-words ${isCompact ? 'text-sm' : 'text-lg'}`}>
                                {pick.awayTeam}
                            </span>
                        </div>
                    </div>
                    
                    <div className={`text-center my-4 p-4 bg-light-200/50 dark:bg-dark-600/50 rounded-xl border border-light-300/50 dark:border-dark-500/50 ${isCompact ? 'my-3 p-3' : ''}`}>
                        <p className="text-dark-900/70 dark:text-light-100/70 text-xs mb-2">Previsão:</p>
                        <p className={`font-bold text-purple-600 dark:text-purple-400 ${isCompact ? 'text-base' : 'text-xl'}`}>
                            {pick.tip}
                        </p>
                        {pick.analysis && !isCompact && (
                            <p className="text-xs text-dark-900/60 dark:text-light-100/60 mt-2 line-clamp-2">
                                {pick.analysis.substring(0, 100)}...
                            </p>
                        )}
                    </div>
                </div>

                {/* Estatísticas */}
                <div className={`px-5 py-4 bg-light-200/50 dark:bg-dark-700/50 border-t border-light-300 dark:border-dark-600 ${isCompact ? 'px-4 py-3' : ''}`}>
                    <div className={`grid gap-3 text-center text-sm ${isCompact ? 'grid-cols-2' : 'grid-cols-2'}`}>
                        <div className="flex items-center bg-light-100/70 dark:bg-dark-600/70 px-3 py-2 rounded-lg">
                            <BarChart2 size={isCompact ? 14 : 16} className="mr-2 text-purple-600 dark:text-purple-400" />
                            <div className="text-left">
                                <p className={`font-medium text-dark-900/70 dark:text-light-100/70 ${isCompact ? 'text-xs' : 'text-xs'}`}>
                                    Probabilidade
                                </p>
                                <p className={`font-bold ${getOddsColor(pick.odds)} ${isCompact ? 'text-sm' : ''}`}>
                                    {pick.odds.toFixed(1)}%
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center bg-light-100/70 dark:bg-dark-600/70 px-3 py-2 rounded-lg">
                            <ShieldCheck size={isCompact ? 14 : 16} className="mr-2 text-purple-600 dark:text-purple-400" />
                            <div className="text-left">
                                <p className={`font-medium text-dark-900/70 dark:text-light-100/70 ${isCompact ? 'text-xs' : 'text-xs'}`}>
                                    Confiança
                                </p>
                                <p className={`font-bold ${getConfidenceColor(pick.confidence)} ${isCompact ? 'text-sm' : ''}`}>
                                    {pick.confidence}/10
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer com call-to-action */}
                <div className={`p-4 bg-purple-600 dark:bg-purple-500 text-center font-bold
                    group-hover:bg-purple-700 dark:group-hover:bg-purple-600 transition-colors duration-300 ${isCompact ? 'py-3' : ''}`}>
                    <div className="flex items-center justify-center text-white/90 group-hover:text-white transition-colors duration-300">
                        <span className={isCompact ? 'text-sm' : ''}>
                            Ver Análise Completa
                        </span>
                        <ExternalLink size={isCompact ? 12 : 14} className="ml-2" />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default EnhancedPickCard;