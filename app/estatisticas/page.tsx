
import { LeagueStanding } from '@/app/types';
import standingsData from '@/app/data/standings.json';
import StandingsTable from '@/app/components/statistics/standings-table';

async function getStandingsData(): Promise<LeagueStanding> {
    // In a real app, this would fetch fresh data from an API.
    return standingsData;
}

export default async function StatisticsPage() {
    const standings = await getStandingsData();

    return (
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen pt-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 border-l-4 border-red-500 dark:border-red-500">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Estatísticas</h1>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">Tabelas de classificação, dados de equipes e muito mais.</p>
                </div>

                <div className="space-y-8">
                    <StandingsTable leagueStanding={standings} />
                    {/* More statistics components can be added here in the future */}
                </div>
            </div>
        </div>
    );
}
