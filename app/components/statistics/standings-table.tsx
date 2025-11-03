
"use client";

import Image from 'next/image';
import { LeagueStanding } from '@/app/types';

interface StandingsTableProps {
    leagueStanding: LeagueStanding;
}

const StandingsTable: React.FC<StandingsTableProps> = ({ leagueStanding }) => {
    return (
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl overflow-hidden
            border border-light-300 dark:border-dark-600
            shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
            <div className="p-6 bg-light-200/50 dark:bg-dark-700/50 border-b border-light-300 dark:border-dark-600">
                <h3 className="text-xl font-bold text-dark-900 dark:text-light-100">{leagueStanding.leagueName}</h3>
                <p className="text-sm text-dark-900/70 dark:text-light-100/70 mt-1">{leagueStanding.country}</p>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b border-light-300 dark:border-dark-600 text-sm">
                            <th className="p-4 font-semibold text-dark-900 dark:text-light-100 text-center">#</th>
                            <th className="p-4 font-semibold text-dark-900 dark:text-light-100">Equipe</th>
                            <th className="p-4 font-semibold text-dark-900 dark:text-light-100 text-center">PTS</th>
                            <th className="p-4 font-semibold text-dark-900 dark:text-light-100 text-center">J</th>
                            <th className="p-4 font-semibold text-dark-900 dark:text-light-100 text-center">V</th>
                            <th className="p-4 font-semibold text-dark-900 dark:text-light-100 text-center">E</th>
                            <th className="p-4 font-semibold text-dark-900 dark:text-light-100 text-center">D</th>
                            <th className="p-4 font-semibold text-dark-900 dark:text-light-100 text-center">SG</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leagueStanding.standings.map((s) => (
                            <tr key={s.rank} className="border-b border-light-300 dark:border-dark-600 text-sm
                                hover:bg-light-200/30 dark:hover:bg-dark-700/30 transition-colors">
                                <td className="p-4 font-bold text-center text-dark-900 dark:text-light-100">{s.rank}</td>
                                <td className="p-4 flex items-center space-x-3">
                                    <div className="bg-light-200/50 dark:bg-dark-700/50 p-1 rounded-lg">
                                        <Image src={s.team.logoUrl} alt={`${s.team.name} logo`} width={24} height={24} className="rounded-md" />
                                    </div>
                                    <span className="font-medium text-dark-900 dark:text-light-100">{s.team.name}</span>
                                </td>
                                <td className="p-4 font-bold text-center text-purple-600 dark:text-purple-400">{s.points}</td>
                                <td className="p-4 text-center text-dark-900/70 dark:text-light-100/70">{s.played}</td>
                                <td className="p-4 text-center text-dark-900/70 dark:text-light-100/70">{s.wins}</td>
                                <td className="p-4 text-center text-dark-900/70 dark:text-light-100/70">{s.draws}</td>
                                <td className="p-4 text-center text-dark-900/70 dark:text-light-100/70">{s.losses}</td>
                                <td className="p-4 text-center text-dark-900/70 dark:text-light-100/70">{s.goalDifference}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StandingsTable;
