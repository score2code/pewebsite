
"use client";

import Image from 'next/image';
import { LeagueStanding } from '@/app/types';

interface StandingsTableProps {
    leagueStanding: LeagueStanding;
}

const StandingsTable: React.FC<StandingsTableProps> = ({ leagueStanding }) => {
    return (
        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="p-4 bg-gray-200 dark:bg-gray-700/50">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{leagueStanding.leagueName}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-400">{leagueStanding.country}</p>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-gray-300 dark:bg-gray-900/70 text-sm">
                            <th className="p-3 font-semibold text-gray-900 dark:text-white text-center">#</th>
                            <th className="p-3 font-semibold text-gray-900 dark:text-white">Time</th>
                            <th className="p-3 font-semibold text-gray-900 dark:text-white text-center">P</th>
                            <th className="p-3 font-semibold text-gray-900 dark:text-white text-center">J</th>
                            <th className="p-3 font-semibold text-gray-900 dark:text-white text-center">V</th>
                            <th className="p-3 font-semibold text-gray-900 dark:text-white text-center">E</th>
                            <th className="p-3 font-semibold text-gray-900 dark:text-white text-center">D</th>
                            <th className="p-3 font-semibold text-gray-900 dark:text-white text-center">SG</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leagueStanding.standings.map((s) => (
                            <tr key={s.rank} className="border-t border-gray-300 dark:border-gray-700 text-sm">
                                <td className="p-3 font-bold text-center text-gray-900 dark:text-white">{s.rank}</td>
                                <td className="p-3 flex items-center space-x-3">
                                    <Image src={s.team.logoUrl} alt={`${s.team.name} logo`} width={24} height={24} className="rounded-full" />
                                    <span className="font-semibold text-gray-900 dark:text-white">{s.team.name}</span>
                                </td>
                                <td className="p-3 font-bold text-center text-gray-900 dark:text-white">{s.points}</td>
                                <td className="p-3 text-center text-gray-700 dark:text-gray-300">{s.played}</td>
                                <td className="p-3 text-center text-gray-700 dark:text-gray-300">{s.wins}</td>
                                <td className="p-3 text-center text-gray-700 dark:text-gray-300">{s.draws}</td>
                                <td className="p-3 text-center text-gray-700 dark:text-gray-300">{s.losses}</td>
                                <td className="p-3 text-center text-gray-700 dark:text-gray-300">{s.goalDifference}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StandingsTable;
