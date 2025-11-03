import React from 'react';
import { useRouter } from 'next/navigation';
import { Zap, Calendar } from 'lucide-react';
import { Pick } from '@/app/types';

interface SportPickCardProps {
    pick: Pick;
    date: string;
    sport: 'futebol' | 'futebol-americano';
}

const SportPickCard: React.FC<SportPickCardProps> = ({ pick, date, sport }) => {
    const router = useRouter();

    const handleNavigation = () => {
        router.push(`/${sport}/${date}/${pick.id}`);
    };

    const getConfidenceColor = (confidence: number) => {
        if (confidence >= 80) return 'bg-purple-600 dark:bg-purple-500';
        if (confidence >= 70) return 'bg-purple-500/80 dark:bg-purple-400/80';
        return 'bg-purple-400/60 dark:bg-purple-300/60';
    };

    return (
        <div
            onClick={handleNavigation}
            className="bg-light-100/50 dark:bg-dark-800/50 p-6 rounded-xl
                shadow-custom dark:shadow-custom-dark
                border border-light-300 dark:border-dark-600
                hover:border-purple-500 dark:hover:border-purple-400
                cursor-pointer transition-all duration-300
                backdrop-blur-sm group
                focus:outline-none focus:ring-2 focus:ring-purple-500"
            tabIndex={0}
            role="link"
            aria-label={`Ver análise para ${pick.homeTeam} vs ${pick.awayTeam}`}
        >
            <div className="flex justify-between items-start mb-4">
                <span className="text-sm font-semibold text-purple-600 dark:text-purple-400 flex items-center">
                    <Zap className="w-4 h-4 mr-1" />
                    {pick.league}
                </span>
                <span className="text-xs text-dark-900/70 dark:text-light-100/70 flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {pick.dateTime}
                </span>
            </div>

            <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-dark-900 dark:text-light-100 mb-1">
                    {pick.homeTeam} <span className="text-dark-900/50 dark:text-light-100/50">vs</span> {pick.awayTeam}
                </h3>
            </div>

            <div className="grid grid-cols-3 gap-4 items-center">
                {/* Dica de Aposta */}
                <div className="col-span-2 p-3 bg-light-200/50 dark:bg-dark-700/50 rounded-lg">
                    <p className="text-xs text-dark-900/70 dark:text-light-100/70">Palpite</p>
                    <p className="text-lg font-extrabold text-dark-900 dark:text-light-100">{pick.tip}</p>
                </div>

                {/* Odds */}
                <div className="p-3 bg-purple-600/10 dark:bg-purple-400/10 rounded-lg">
                    <p className="text-xs font-medium text-purple-600/90 dark:text-purple-400/90">Odds</p>
                    <p className="text-xl font-bold text-purple-600 dark:text-purple-400">{pick.odds.toFixed(2)}</p>
                </div>
            </div>

            <div className="mt-4 flex justify-between items-center pt-3 border-t border-light-300 dark:border-dark-600">
                <span className={`text-xs font-bold px-3 py-1 rounded-full text-white ${getConfidenceColor(pick.confidence)}`}>
                    Confiança: {pick.confidence}%
                </span>

                <button
                    onClick={(e) => { e.stopPropagation(); handleNavigation(); }}
                    className="px-4 py-1.5 text-sm font-semibold text-white
                        bg-purple-600 dark:bg-purple-500
                        hover:bg-purple-700 dark:hover:bg-purple-600
                        rounded-lg transition-all duration-300
                        shadow-custom dark:shadow-custom-dark
                        focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                    Ver Análise
                </button>
            </div>
        </div>
    );
};

export default SportPickCard;
