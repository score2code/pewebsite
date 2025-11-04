
import { LeagueStanding } from '@/app/types';
async function getStandingsData(): Promise<LeagueStanding> {
    const response = await fetch('/data/standings.json');
    if (!response.ok) return {} as LeagueStanding;
    return await response.json();
}
import StandingsTable from '@/app/components/statistics/standings-table';

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
                    <StandingsTable leagueStanding={standings} />
                    {/* Mais componentes estatísticos serão adicionados aqui */}
                </div>
            </div>
        </div>
    );
}
