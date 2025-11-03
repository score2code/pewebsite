
"use client";

import React from 'react';
import { ShieldCheck, BarChart2, Clock } from 'lucide-react';
import { Pick } from '@/app/types';
import Link from 'next/link';

interface PickCardProps {
    pick: Pick;
}

const PickCard: React.FC<PickCardProps> = ({ pick }) => {
    const hardcodedDate = '2025-11-03'; // This should be dynamic in a real app

    return (
        <Link
            href={`/futebol/${hardcodedDate}/${pick.id}`}
            className="block focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-xl group"
        >
            <div className="bg-light-50 dark:bg-dark-800 rounded-xl border border-light-300 dark:border-dark-600
                shadow-custom dark:shadow-custom-dark overflow-hidden transform hover:scale-102
                transition-all duration-300 h-full flex flex-col group-hover:border-purple-500 dark:group-hover:border-purple-400">
                <div className="p-4 border-b border-light-300 dark:border-dark-600 bg-light-100/50 dark:bg-dark-700/50">
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">{pick.league}</span>
                        <span className="text-xs text-dark-900/70 dark:text-light-100/70 flex items-center">
                            <Clock size={12} className="mr-1" /> {pick.dateTime}
                        </span>
                    </div>
                </div>
                <div className="p-6 flex-grow bg-gradient-to-b from-light-50 to-light-100 dark:from-dark-800 dark:to-dark-700">
                    <div className="flex justify-center items-center space-x-6 mb-4">
                        <div className="text-center">
                            <span className="text-lg font-bold text-dark-900 dark:text-light-100">{pick.homeTeam}</span>
                        </div>
                        <span className="text-dark-900/50 dark:text-light-100/50 text-lg font-light">vs</span>
                        <div className="text-center">
                            <span className="text-lg font-bold text-dark-900 dark:text-light-100">{pick.awayTeam}</span>
                        </div>
                    </div>
                    <div className="text-center my-6 p-4 bg-light-200/50 dark:bg-dark-600/50 rounded-lg">
                        <p className="text-dark-900/70 dark:text-light-100/70 text-sm mb-2">Palpite:</p>
                        <p className="text-xl font-bold text-purple-600 dark:text-purple-400">{pick.tip}</p>
                    </div>
                </div>
                <div className="p-4 bg-light-100/50 dark:bg-dark-700/50 border-t border-light-300 dark:border-dark-600">
                    <div className="flex justify-around items-center text-center text-sm">
                        <div className="flex items-center bg-light-200/70 dark:bg-dark-600/70 p-3 rounded-lg">
                            <BarChart2 size={16} className="mr-2 text-purple-600 dark:text-purple-400" />
                            <div>
                                <p className="font-medium text-dark-900/70 dark:text-light-100/70">Odds</p>
                                <p className="text-dark-900 dark:text-light-100 font-bold">{pick.odds.toFixed(2)}</p>
                            </div>
                        </div>
                        <div className="flex items-center bg-light-200/70 dark:bg-dark-600/70 p-3 rounded-lg">
                            <ShieldCheck size={16} className="mr-2 text-purple-600 dark:text-purple-400" />
                            <div>
                                <p className="font-medium text-dark-900/70 dark:text-light-100/70">Confiança</p>
                                <p className="text-dark-900 dark:text-light-100 font-bold">{pick.confidence}%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-3 bg-purple-600 dark:bg-purple-500 text-center text-white font-bold
                    group-hover:bg-purple-700 dark:group-hover:bg-purple-600 transition-colors duration-300">
                    Ver Análise Completa
                </div>
            </div>
        </Link>
    );
};

export default PickCard;
