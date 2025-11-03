
"use client";

import Image from 'next/image';
import { OddsComparison } from '@/app/types';
import { Calendar } from 'lucide-react';

interface OddsTableProps {
    comparison: OddsComparison;
}

const OddsTable: React.FC<OddsTableProps> = ({ comparison }) => {

    const findBestOdds = () => {
        const best = { home: 0, draw: 0, away: 0 };
        comparison.bookmakers.forEach(b => {
            if (b.odds.home > best.home) best.home = b.odds.home;
            if (b.odds.draw > best.draw) best.draw = b.odds.draw;
            if (b.odds.away > best.away) best.away = b.odds.away;
        });
        return best;
    };

    const bestOdds = findBestOdds();

    return (
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl overflow-hidden
            border border-light-300 dark:border-dark-600
            shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
            <div className="p-6 bg-light-200/50 dark:bg-dark-700/50 border-b border-light-300 dark:border-dark-600">
                <h3 className="text-xl font-bold text-dark-900 dark:text-light-100">{comparison.homeTeam} vs {comparison.awayTeam}</h3>
                <p className="text-sm text-dark-900/70 dark:text-light-100/70 flex items-center mt-2">
                    <Calendar size={14} className="mr-2" />
                    {comparison.league} - {comparison.dateTime}
                </p>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b border-light-300 dark:border-dark-600">
                            <th className="p-4 font-semibold text-dark-900 dark:text-light-100">Plataforma</th>
                            <th className="p-4 font-semibold text-dark-900 dark:text-light-100 text-center">Vitória (M1)</th>
                            <th className="p-4 font-semibold text-dark-900 dark:text-light-100 text-center">Empate (X)</th>
                            <th className="p-4 font-semibold text-dark-900 dark:text-light-100 text-center">Vitória (M2)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comparison.bookmakers.map((bookmaker) => (
                            <tr key={bookmaker.name} className="border-b border-light-300 dark:border-dark-600
                                hover:bg-light-200/30 dark:hover:bg-dark-700/30 transition-colors">
                                <td className="p-4 flex items-center space-x-3">
                                    <div className="bg-light-200/50 dark:bg-dark-700/50 p-1.5 rounded-lg">
                                        <Image src={bookmaker.logoUrl} alt={`${bookmaker.name} logo`} width={28} height={28} className="rounded-md" />
                                    </div>
                                    <a href={bookmaker.affiliateLink} target="_blank" rel="noopener noreferrer"
                                        className="font-semibold text-dark-900 dark:text-light-100 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                                        {bookmaker.name}
                                    </a>
                                </td>
                                <td className={`p-4 font-bold text-center ${bookmaker.odds.home === bestOdds.home ? 'text-purple-600 dark:text-purple-400' : 'text-dark-900/90 dark:text-light-100/90'}`}>
                                    <span className={bookmaker.odds.home === bestOdds.home ? 'bg-purple-600/10 dark:bg-purple-400/10 rounded-md px-3 py-1' : ''}>
                                        {bookmaker.odds.home.toFixed(2)}
                                    </span>
                                </td>
                                <td className={`p-4 font-bold text-center ${bookmaker.odds.draw === bestOdds.draw ? 'text-purple-600 dark:text-purple-400' : 'text-dark-900/90 dark:text-light-100/90'}`}>
                                     <span className={bookmaker.odds.draw === bestOdds.draw ? 'bg-purple-600/10 dark:bg-purple-400/10 rounded-md px-3 py-1' : ''}>
                                        {bookmaker.odds.draw.toFixed(2)}
                                    </span>
                                </td>
                                <td className={`p-4 font-bold text-center ${bookmaker.odds.away === bestOdds.away ? 'text-purple-600 dark:text-purple-400' : 'text-dark-900/90 dark:text-light-100/90'}`}>
                                     <span className={bookmaker.odds.away === bestOdds.away ? 'bg-purple-600/10 dark:bg-purple-400/10 rounded-md px-3 py-1' : ''}>
                                        {bookmaker.odds.away.toFixed(2)}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OddsTable;
