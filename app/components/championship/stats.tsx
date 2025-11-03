import { ChampionshipStats } from '@/app/types';

interface ChampionshipStatsProps {
    stats: ChampionshipStats;
}

export default function ChampionshipStatsComponent({ stats }: ChampionshipStatsProps) {
    return (
        <div className="grid md:grid-cols-2 gap-6">
            {/* Estatísticas gerais */}
            <div className="space-y-4">
                <div className="bg-light-200/50 dark:bg-dark-700/50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2 text-dark-900 dark:text-light-100">
                        Estatísticas Gerais
                    </h3>
                    <div className="space-y-2">
                        <p className="text-dark-900/70 dark:text-light-100/70">
                            Jogos disputados: {stats.matchesPlayed}/{stats.totalMatches}
                        </p>
                        <p className="text-dark-900/70 dark:text-light-100/70">
                            Total de gols: {stats.goalsScored}
                        </p>
                        <p className="text-dark-900/70 dark:text-light-100/70">
                            Média de gols: {stats.averageGoalsPerMatch.toFixed(2)}
                        </p>
                    </div>
                </div>

                <div className="bg-light-200/50 dark:bg-dark-700/50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2 text-dark-900 dark:text-light-100">
                        Cartões
                    </h3>
                    <div className="space-y-2">
                        <p className="text-dark-900/70 dark:text-light-100/70">
                            Amarelos: {stats.cardsByType.yellow}
                        </p>
                        <p className="text-dark-900/70 dark:text-light-100/70">
                            Vermelhos: {stats.cardsByType.red}
                        </p>
                    </div>
                </div>
            </div>

            {/* Artilheiros e tendências */}
            <div className="space-y-4">
                <div className="bg-light-200/50 dark:bg-dark-700/50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2 text-dark-900 dark:text-light-100">
                        Resultados (%)
                    </h3>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <span className="text-dark-900/70 dark:text-light-100/70">Vitórias casa</span>
                            <span className="font-medium text-dark-900 dark:text-light-100">
                                {stats.winPercentages.home.toFixed(1)}%
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-dark-900/70 dark:text-light-100/70">Empates</span>
                            <span className="font-medium text-dark-900 dark:text-light-100">
                                {stats.winPercentages.draw.toFixed(1)}%
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-dark-900/70 dark:text-light-100/70">Vitórias fora</span>
                            <span className="font-medium text-dark-900 dark:text-light-100">
                                {stats.winPercentages.away.toFixed(1)}%
                            </span>
                        </div>
                    </div>
                </div>

                <div className="bg-light-200/50 dark:bg-dark-700/50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2 text-dark-900 dark:text-light-100">
                        Artilheiros
                    </h3>
                    <div className="space-y-2">
                        {stats.topScorers.slice(0, 5).map((scorer, index) => (
                            <div key={index} className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <span className="text-dark-900/70 dark:text-light-100/70">
                                        {scorer.name}
                                    </span>
                                    <span className="text-sm text-dark-900/50 dark:text-light-100/50">
                                        {scorer.team}
                                    </span>
                                </div>
                                <span className="font-medium text-dark-900 dark:text-light-100">
                                    {scorer.goals}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
