
import { OddsComparison } from '@/app/types';
import oddsData from '@/app/data/odds.json';
import OddsTable from '@/app/components/odds/table';

async function getOddsComparisonData(): Promise<OddsComparison[]> {
    // In a real app, this would fetch fresh data from one or more APIs.
    return oddsData;
}

export default async function OddsPage() {
    const comparisons = await getOddsComparisonData();

    return (
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen pt-8">
            <div className="max-w-6xl mx-auto">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 border-l-4 border-purple-500 dark:border-purple-500">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Comparador de Odds</h1>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">Encontre as melhores cotações para os seus jogos favoritos em tempo real.</p>
                </div>

                <div className="space-y-8">
                    {comparisons.map((comparison) => (
                        <OddsTable key={comparison.matchId} comparison={comparison} />
                    ))}
                </div>
            </div>
        </div>
    );
}
