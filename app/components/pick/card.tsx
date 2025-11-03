
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
            <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl border border-light-300 dark:border-dark-600
                shadow-custom dark:shadow-custom-dark overflow-hidden
                transition-all duration-300 h-full flex flex-col
                group-hover:border-purple-500 dark:group-hover:border-purple-400
                backdrop-blur-sm">
                <div className="p-5 border-b border-light-300 dark:border-dark-600 bg-light-200/50 dark:bg-dark-700/50">
                    <div className="flex justify-between items-center">
                        <span className="font-medium text-purple-600 dark:text-purple-400">{pick.league}</span>
                        <span className="text-sm text-dark-900/70 dark:text-light-100/70 flex items-center">
                            <Clock size={14} className="mr-1.5" /> {pick.dateTime}
                        </span>
                    </div>
                </div>
                <div className="p-6 flex-grow bg-gradient-to-b from-light-100/50 to-light-200/50 dark:from-dark-800/50 dark:to-dark-700/50">
                    <div className="flex justify-center items-center space-x-8 mb-6">
                        <div className="text-center flex-1">
                            <span className="text-lg font-bold text-dark-900 dark:text-light-100">{pick.homeTeam}</span>
                        </div>
                        <span className="text-dark-900/40 dark:text-light-100/40 text-lg font-light px-2">vs</span>
                        <div className="text-center flex-1">
                            <span className="text-lg font-bold text-dark-900 dark:text-light-100">{pick.awayTeam}</span>
                        </div>
                    </div>
                    <div className="text-center my-6 p-5 bg-light-200/50 dark:bg-dark-600/50 rounded-xl border border-light-300/50 dark:border-dark-500/50">
                        <p className="text-dark-900/70 dark:text-light-100/70 text-sm mb-2">Previsão:</p>
                        <p className="text-xl font-bold text-purple-600 dark:text-purple-400">{pick.tip}</p>
                    </div>
                </div>
                <div className="px-6 py-5 bg-light-200/50 dark:bg-dark-700/50 border-t border-light-300 dark:border-dark-600">
                    <div className="flex justify-around items-center text-center text-sm gap-4">
                        <div className="flex items-center bg-light-100/70 dark:bg-dark-600/70 px-4 py-3 rounded-lg flex-1">
                            <BarChart2 size={18} className="mr-3 text-purple-600 dark:text-purple-400" />
                            <div>
                                <p className="font-medium text-dark-900/70 dark:text-light-100/70">Probabilidade</p>
                                <p className="text-dark-900 dark:text-light-100 font-bold mt-1">{pick.odds.toFixed(2)}%</p>
                            </div>
                        </div>
                        <div className="flex items-center bg-light-100/70 dark:bg-dark-600/70 px-4 py-3 rounded-lg flex-1">
                            <ShieldCheck size={18} className="mr-3 text-purple-600 dark:text-purple-400" />
                            <div>
                                <p className="font-medium text-dark-900/70 dark:text-light-100/70">Confiança</p>
                                <p className="text-dark-900 dark:text-light-100 font-bold mt-1">{pick.confidence}%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4 bg-purple-600 dark:bg-purple-500 text-center font-bold
                    group-hover:bg-purple-700 dark:group-hover:bg-purple-600 transition-colors duration-300">
                    <span className="text-white/90 group-hover:text-white transition-colors duration-300">
                        Ver Análise Completa →
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default PickCard;
