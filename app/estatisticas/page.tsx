
import { LeagueStanding } from '@/app/types';
import fs from 'fs/promises';
import path from 'path';
async function getStandingsData(): Promise<LeagueStanding> {
    try {
        const filePath = path.join(process.cwd(), 'public', 'data', 'standings.json');
        const fileContents = await fs.readFile(filePath, 'utf8');
        return JSON.parse(fileContents);
    } catch (error) {
        console.error("Error reading standings.json from filesystem:", error);
        return {} as LeagueStanding;
    }
}
import StandingsTable from '@/app/components/statistics/standings-table';
import PoissonTool from '@/app/components/statistics/poisson-tool';

// ...existing code...

export default async function StatisticsPage() {
    const standings = await getStandingsData();

    return (
        <div className="min-h-screen pt-8 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8
                    border border-light-300 dark:border-dark-600
                    shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
                    <h1 className="text-4xl font-bold text-dark-900 dark:text-light-100 mb-3">
                        Análise de Desempenho
                    </h1>
                    <p className="text-lg text-dark-900/70 dark:text-light-100/70">
                        Dados estatísticos detalhados, classificações e métricas de performance das equipes.
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 border border-light-300 dark:border-dark-600">
                        <h2 className="text-2xl font-semibold mb-2">Modelagem rápida</h2>
                        <p className="text-dark-900/70 dark:text-light-100/70">
                            Use a ferramenta Poisson para estimar probabilidades de resultados,
                            linhas de gols e distribuição de placares com base em médias de gols
                            esperadas das equipes.
                        </p>
                    </div>

                    <PoissonTool />
                    <StandingsTable leagueStanding={standings} />
                </div>
            </div>
        </div>
    );
}
