
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
        <Link href={`/futebol/${hardcodedDate}/${pick.id}`} className="block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 rounded-lg">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out h-full flex flex-col">
                <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold text-green-600 dark:text-green-400">{pick.league}</span>
                        <span className="text-xs text-gray-700 dark:text-gray-400 flex items-center">
                            <Clock size={12} className="mr-1" /> {pick.dateTime}
                        </span>
                    </div>
                </div>
                <div className="p-6 flex-grow">
                    <div className="flex justify-center items-center space-x-4 mb-4">
                        <div className="text-center">
                            <span className="text-lg font-bold text-gray-900 dark:text-white">{pick.homeTeam}</span>
                        </div>
                        <span className="text-gray-700 dark:text-gray-400 text-lg">vs</span>
                        <div className="text-center">
                            <span className="text-lg font-bold text-gray-900 dark:text-white">{pick.awayTeam}</span>
                        </div>
                    </div>
                    <div className="text-center my-4">
                        <p className="text-gray-700 dark:text-gray-300 text-sm">Palpite:</p>
                        <p className="text-xl font-bold text-green-600 dark:text-green-500">{pick.tip}</p>
                    </div>
                </div>
                <div className="p-4 bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex justify-around items-center text-center text-sm text-gray-700 dark:text-gray-300">
                        <div className="flex items-center">
                            <BarChart2 size={16} className="mr-2 text-blue-600 dark:text-blue-400" />
                            <div>
                                <p className="font-semibold">Odds</p>
                                <p className="text-gray-900 dark:text-white font-bold">{pick.odds.toFixed(2)}</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <ShieldCheck size={16} className="mr-2 text-yellow-600 dark:text-yellow-400" />
                            <div>
                                <p className="font-semibold">Confiança</p>
                                <p className="text-gray-900 dark:text-white font-bold">{pick.confidence}%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-3 bg-green-600 text-center text-white font-bold">
                    Ver Análise Completa
                </div>
            </div>
        </Link>
    );
};

export default PickCard;
