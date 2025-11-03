
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
        <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700">
            <div className="p-4 bg-gray-700/50">
                <h3 className="text-xl font-bold text-white">{comparison.homeTeam} vs {comparison.awayTeam}</h3>
                <p className="text-sm text-gray-400 flex items-center mt-1">
                    <Calendar size={14} className="mr-2" />
                    {comparison.league} - {comparison.dateTime}
                </p>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-gray-900/70">
                            <th className="p-4 font-semibold text-white">Casa de Aposta</th>
                            <th className="p-4 font-semibold text-white text-center">1 (Casa)</th>
                            <th className="p-4 font-semibold text-white text-center">X (Empate)</th>
                            <th className="p-4 font-semibold text-white text-center">2 (Fora)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comparison.bookmakers.map((bookmaker) => (
                            <tr key={bookmaker.name} className="border-t border-gray-700">
                                <td className="p-4 flex items-center space-x-3">
                                    <Image src={bookmaker.logoUrl} alt={`${bookmaker.name} logo`} width={32} height={32} className="rounded-full" />
                                    <a href={bookmaker.affiliateLink} target="_blank" rel="noopener noreferrer" className="font-semibold text-white hover:underline">
                                        {bookmaker.name}
                                    </a>
                                </td>
                                <td className={`p-4 font-bold text-center ${bookmaker.odds.home === bestOdds.home ? 'text-green-400' : 'text-white'}`}>
                                    <span className={bookmaker.odds.home === bestOdds.home ? 'bg-green-500/20 rounded-md px-3 py-1' : ''}>
                                        {bookmaker.odds.home.toFixed(2)}
                                    </span>
                                </td>
                                <td className={`p-4 font-bold text-center ${bookmaker.odds.draw === bestOdds.draw ? 'text-green-400' : 'text-white'}`}>
                                     <span className={bookmaker.odds.draw === bestOdds.draw ? 'bg-green-500/20 rounded-md px-3 py-1' : ''}>
                                        {bookmaker.odds.draw.toFixed(2)}
                                    </span>
                                </td>
                                <td className={`p-4 font-bold text-center ${bookmaker.odds.away === bestOdds.away ? 'text-green-400' : 'text-white'}`}>
                                     <span className={bookmaker.odds.away === bestOdds.away ? 'bg-green-500/20 rounded-md px-3 py-1' : ''}>
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
