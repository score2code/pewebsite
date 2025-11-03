
"use client";

import React from 'react';
import { ShieldCheck, BarChart2, Calendar, Clock } from 'lucide-react';
import { Pick } from '@/app/types';

interface PickCardProps {
    pick: Pick;
}

const PickCard: React.FC<PickCardProps> = ({ pick }) => {
    return (
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="p-4 border-b border-gray-700">
                <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-green-400">{pick.league}</span>
                    <span className="text-xs text-gray-400 flex items-center">
                        <Clock size={12} className="mr-1" /> {pick.dateTime}
                    </span>
                </div>
            </div>
            <div className="p-6">
                <div className="flex justify-center items-center space-x-4 mb-4">
                    <div className="text-center">
                        <span className="text-lg font-bold text-white">{pick.homeTeam}</span>
                    </div>
                    <span className="text-gray-400 text-lg">vs</span>
                    <div className="text-center">
                        <span className="text-lg font-bold text-white">{pick.awayTeam}</span>
                    </div>
                </div>
                <div className="text-center my-4">
                    <p className="text-gray-300 text-sm">Palpite:</p>
                    <p className="text-xl font-bold text-green-500">{pick.tip}</p>
                </div>
                <div className="flex justify-around items-center text-center text-sm text-gray-300 mt-4">
                    <div className="flex items-center">
                        <BarChart2 size={16} className="mr-2 text-blue-400" />
                        <div>
                            <p className="font-semibold">Odds</p>
                            <p className="text-white font-bold">{pick.odds.toFixed(2)}</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <ShieldCheck size={16} className="mr-2 text-yellow-400" />
                        <div>
                            <p className="font-semibold">Confiança</p>
                            <p className="text-white font-bold">{pick.confidence}%</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-4 bg-gray-900">
                <button className="w-full bg-green-600 text-white font-bold py-2 rounded-lg hover:bg-green-500 transition-colors duration-300">
                    Ver Análise
                </button>
            </div>
        </div>
    );
};

export default PickCard;
