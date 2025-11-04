
import { OddsComparison } from '@/app/types';
import fs from 'fs/promises';
import path from 'path';
async function getOddsComparisonData(): Promise<OddsComparison[]> {
    try {
        const filePath = path.join(process.cwd(), 'public', 'data', 'odds.json');
        const fileContents = await fs.readFile(filePath, 'utf8');
        return JSON.parse(fileContents);
    } catch (error) {
        console.error("Error reading odds.json from filesystem:", error);
        return [];
    }
}
import OddsTable from '@/app/components/odds/table';

// ...existing code...

export default async function OddsPage() {
    const comparisons = await getOddsComparisonData();

    return (
        <div className="min-h-screen pt-8 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8
                    border border-light-300 dark:border-dark-600
                    shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
                    <h1 className="text-4xl font-bold text-dark-900 dark:text-light-100 mb-3">
                        Análise Comparativa de Probabilidades
                    </h1>
                    <p className="text-lg text-dark-900/70 dark:text-light-100/70">
                        Dados estatísticos em tempo real para análise de probabilidades e previsões esportivas.
                    </p>
                </div>

                <div className="space-y-6">
                    {comparisons.map((comparison) => (
                        <OddsTable key={comparison.matchId} comparison={comparison} />
                    ))}
                </div>
            </div>
        </div>
    );
}
