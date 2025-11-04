import React from 'react';
import { useRouter } from 'next/navigation';
import { Zap, Calendar, TrendingUp, Shield, BarChart3 } from 'lucide-react';
import { Pick } from '@/app/types';
import StatusBadge from '@/app/components/ui/status-badge';

interface SportPickCardProps {
    pick: Pick;
    date: string;
    sport: 'futebol' | 'futebol-americano';
    showStatus?: boolean;
    compact?: boolean;
}

const SportPickCard: React.FC<SportPickCardProps> = ({ pick, date, sport, showStatus = true, compact = false }) => {
    const router = useRouter();

    const handleNavigation = () => {
        router.push(`/${sport}/${date}/${pick.id}`);
    };

    // Determinar status do palpite
    const getPickStatus = () => {
        if (pick.result) {
            return pick.result === 'won' ? 'won' : 'lost';
        }
        if (pick.confidence >= 8) return 'high-confidence';
        if (pick.odds <= 30) return 'low-odds';
        return 'pending';
    };

    const getOddsColor = (odds: number) => {
        if (odds >= 70) return 'text-green-600 dark:text-green-400';
        if (odds >= 50) return 'text-yellow-600 dark:text-yellow-400';
        if (odds >= 30) return 'text-orange-600 dark:text-orange-400';
        return 'text-red-600 dark:text-red-400';
    };

    const getConfidenceColor = (confidence: number) => {
        if (confidence >= 8) return 'bg-green-600 dark:bg-green-500';
        if (confidence >= 6) return 'bg-yellow-600 dark:bg-yellow-500';
        return 'bg-red-600 dark:bg-red-500';
    };

    const status = getPickStatus();

    return (
        <div
            onClick={handleNavigation}
            className={`bg-light-100/50 dark:bg-dark-800/50 rounded-xl
                shadow-custom dark:shadow-custom-dark
                border border-light-300 dark:border-dark-600
                hover:border-purple-500 dark:hover:border-purple-400
                cursor-pointer transition-all duration-300
                backdrop-blur-sm group
                focus:outline-none focus:ring-2 focus:ring-purple-500
                ${compact ? 'p-4' : 'p-6'}`}
            tabIndex={0}
            role="link"
            aria-label={`Ver análise para ${pick.homeTeam} vs ${pick.awayTeam}`}
        >
            <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-2">
                    <span className={`font-semibold text-purple-600 dark:text-purple-400 flex items-center ${compact ? 'text-xs' : 'text-sm'}`}>
                        <Zap className={`${compact ? 'w-3 h-3' : 'w-4 h-4'} mr-1`} />
                        {pick.league}
                    </span>
                    {showStatus && <StatusBadge status={status} confidence={pick.confidence} odds={pick.odds} />}
                </div>
                <span className={`text-dark-900/70 dark:text-light-100/70 flex items-center ${compact ? 'text-xs' : 'text-xs'}`}>
                    <Calendar className={`${compact ? 'w-3 h-3' : 'w-3 h-3'} mr-1`} />
                    {pick.dateTime}
                </span>
            </div>

            <div className={`text-center mb-6 ${compact ? 'mb-4' : ''}`}>
                <h3 className={`font-bold text-dark-900 dark:text-light-100 mb-1 ${compact ? 'text-base' : 'text-xl'}`}>
                    {pick.homeTeam} <span className="text-dark-900/50 dark:text-light-100/50">vs</span> {pick.awayTeam}
                </h3>
            </div>

            <div className={`grid gap-4 items-center ${compact ? 'grid-cols-1' : 'grid-cols-3'}`}>
                {/* Dica de Aposta */}
                <div className={`${compact ? '' : 'col-span-2'} p-3 bg-light-200/50 dark:bg-dark-700/50 rounded-lg`}>
                    <p className={`text-dark-900/70 dark:text-light-100/70 ${compact ? 'text-xs' : 'text-xs'}`}>Palpite</p>
                    <p className={`font-extrabold text-dark-900 dark:text-light-100 ${compact ? 'text-base' : 'text-lg'}`}>{pick.tip}</p>
                </div>

                {/* Odds com cor dinâmica */}
                <div className={`p-3 bg-purple-600/10 dark:bg-purple-400/10 rounded-lg ${compact ? 'flex justify-between items-center' : ''}`}>
                    <p className={`font-medium text-purple-600/90 dark:text-purple-400/90 ${compact ? 'text-xs' : 'text-xs'}`}>Probabilidade</p>
                    <p className={`font-bold ${getOddsColor(pick.odds)} ${compact ? 'text-base' : 'text-xl'}`}>
                        {pick.odds.toFixed(1)}%
                    </p>
                </div>
            </div>

            <div className={`mt-4 flex justify-between items-center pt-3 border-t border-light-300 dark:border-dark-600 ${compact ? 'mt-3' : ''}`}>
                <div className="flex items-center space-x-2">
                    <div className={`${getConfidenceColor(pick.confidence)} text-white px-2 py-1 rounded-full text-xs font-bold`}>
                        {pick.confidence}/10
                    </div>
                    {pick.confidence >= 8 && (
                        <TrendingUp className="w-4 h-4 text-green-500" />
                    )}
                </div>

                <button
                    onClick={(e) => { e.stopPropagation(); handleNavigation(); }}
                    className={`text-white
                        bg-purple-600 dark:bg-purple-500
                        hover:bg-purple-700 dark:hover:bg-purple-600
                        rounded-lg transition-all duration-300
                        shadow-custom dark:shadow-custom-dark
                        focus:outline-none focus:ring-2 focus:ring-purple-500
                        ${compact ? 'px-3 py-1.5 text-xs' : 'px-4 py-1.5 text-sm'}`}
                >
                    Ver Análise
                </button>
            </div>
        </div>
    );
};

export default SportPickCard;
