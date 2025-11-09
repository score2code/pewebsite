
import PoissonTool from '@/app/components/statistics/poisson-tool';
import Breadcrumb from '@/app/components/ui/breadcrumb';
import StatsDashboard from '@/app/components/statistics/dashboard';
import { getDashboardStats } from '@/app/lib/statistics';


export default async function StatisticsPage() {
    const dashboardStats = await getDashboardStats();

    return (
        <div className="min-h-screen pt-8 px-4">
            <div className="max-w-6xl mx-auto">
                <Breadcrumb className="mb-4" />
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

                <StatsDashboard {...dashboardStats} />

                <div className="space-y-6 mt-8">
                    <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 border border-light-300 dark:border-dark-600">
                        <h2 className="text-2xl font-semibold mb-2">Modelagem rápida</h2>
                        <p className="text-dark-900/70 dark:text-light-100/70">
                            Use a ferramenta Poisson para estimar probabilidades de resultados,
                            linhas de gols e distribuição de placares com base em médias de gols
                            esperadas das equipes.
                        </p>
                    </div>

                    <PoissonTool />
                </div>
            </div>
        </div>
    );
}
