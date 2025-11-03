
import { Championship, ChampionshipData, LeagueStanding, Pick } from '@/app/types';
import standingsData from '@/app/data/standings.json';
import soccerPicksData from '@/app/data/soccer/2025/11/03.json';
import StandingsTable from '@/app/components/statistics/standings-table';
import PickCard from '@/app/components/pick/card';
import ChampionshipStats from '@/app/components/championship/stats';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { parsePicks } from '@/app/lib/data-parser';
import championshipsStats from '@/app/data/championships-stats.json';

const championships: Championship[] = [
    // Brasil
    {
        name: 'Brasileirão Série A',
        slug: 'brasileirao-serie-a',
        country: 'Brasil',
        type: 'national',
        region: 'brazil',
        description: 'Principal campeonato do futebol brasileiro.',
        status: 'active',
        season: '2025',
        startDate: '2025-04-13',
        endDate: '2025-12-08'
    },
    {
        name: 'Brasileirão Série B',
        slug: 'brasileirao-serie-b',
        country: 'Brasil',
        type: 'national',
        region: 'brazil',
        description: 'Segunda divisão do Campeonato Brasileiro.',
        status: 'active',
        season: '2025',
        startDate: '2025-04-13',
        endDate: '2025-11-30'
    },
    {
        name: 'Copa do Brasil',
        slug: 'copa-do-brasil',
        country: 'Brasil',
        type: 'national',
        region: 'brazil',
        description: 'Principal copa do futebol brasileiro.',
        status: 'active',
        season: '2025',
        startDate: '2025-02-21',
        endDate: '2025-11-15'
    },
    // Europa
    {
        name: 'Champions League',
        slug: 'champions-league',
        country: 'Europa',
        type: 'international',
        region: 'europe',
        description: 'Principal competição de clubes da Europa.',
        status: 'active',
        season: '2025/26',
        startDate: '2025-09-16',
        endDate: '2026-05-30'
    },
    {
        name: 'Premier League',
        slug: 'premier-league',
        country: 'Inglaterra',
        type: 'national',
        region: 'europe',
        description: 'Primeira divisão do futebol inglês.',
        status: 'active',
        season: '2025/26',
        startDate: '2025-08-09',
        endDate: '2026-05-17'
    },
    {
        name: 'La Liga',
        slug: 'la-liga',
        country: 'Espanha',
        type: 'national',
        region: 'europe',
        description: 'Primeira divisão do futebol espanhol.',
        status: 'active',
        season: '2025/26',
        startDate: '2025-08-16',
        endDate: '2026-05-24'
    },
    {
        name: 'Bundesliga',
        slug: 'bundesliga',
        country: 'Alemanha',
        type: 'national',
        region: 'europe',
        description: 'Primeira divisão do futebol alemão.',
        status: 'active',
        season: '2025/26',
        startDate: '2025-08-23',
        endDate: '2026-05-16'
    },
    {
        name: 'Serie A',
        slug: 'serie-a',
        country: 'Itália',
        type: 'national',
        region: 'europe',
        description: 'Primeira divisão do futebol italiano.',
        status: 'active',
        season: '2025/26',
        startDate: '2025-08-23',
        endDate: '2026-05-24'
    },
    // América do Sul
    {
        name: 'Copa Libertadores',
        slug: 'libertadores',
        country: 'América do Sul',
        type: 'international',
        region: 'south-america',
        description: 'Principal competição de clubes da América do Sul.',
        status: 'active',
        season: '2025',
        startDate: '2025-02-07',
        endDate: '2025-11-30'
    },
    {
        name: 'Copa Sul-Americana',
        slug: 'sul-americana',
        country: 'América do Sul',
        type: 'international',
        region: 'south-america',
        description: 'Segunda principal competição de clubes da América do Sul.',
        status: 'active',
        season: '2025',
        startDate: '2025-03-05',
        endDate: '2025-11-23'
    }
];

async function getCompetitionData(slug: string): Promise<ChampionshipData | null> {
    const championship = championships.find(c => c.slug === slug);

    if (!championship) {
        return null;
    }

    // Em um app real, você buscaria dados específicos do campeonato
    const standing: LeagueStanding = standingsData;
    const soccerPicks: Pick[] = parsePicks(soccerPicksData);
    const picks: Pick[] = soccerPicks.filter(p => p.league.toUpperCase().includes(championship.name.toUpperCase()));
    const stats = championshipsStats[slug as keyof typeof championshipsStats];

    return {
        championship,
        standing,
        picks,
        stats: stats || undefined
    };
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const championship = championships.find(c => c.slug === params.slug);

    if (!championship) {
        return {
            title: 'Campeonato não encontrado',
            description: 'O campeonato solicitado não está disponível.',
        };
    }

    return {
        title: `${championship.name} - Análises e Estatísticas`,
        description: `Análises estatísticas, previsões e dados detalhados do ${championship.name}.`,
    };
}

export async function generateStaticParams() {
    return championships.map(championship => ({
        slug: championship.slug,
    }));
}

export default async function CompetitionPage({ params }: { params: { slug: string } }) {
    const data = await getCompetitionData(params.slug);

    if (!data) {
        notFound();
    }

    const { championship, standing, picks } = data;

    return (
        <div className="min-h-screen pt-10 pb-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* League Header */}
                <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-10
                    border border-light-300 dark:border-dark-600
                    shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        <div>
                            <h1 className="text-4xl font-bold text-dark-900 dark:text-light-100 mb-3">
                                {championship.name}
                            </h1>
                            <p className="text-lg text-dark-900/70 dark:text-light-100/70">
                                {championship.description}
                            </p>
                            <div className="flex items-center gap-3 mt-3">
                                <span className="px-3 py-1 bg-light-200 dark:bg-dark-700 rounded-full text-sm">
                                    {championship.country}
                                </span>
                                <span className="px-3 py-1 bg-light-200 dark:bg-dark-700 rounded-full text-sm">
                                    Temporada {championship.season}
                                </span>
                                <span className={`px-3 py-1 rounded-full text-sm ${
                                    championship.status === 'active'
                                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100'
                                        : championship.status === 'upcoming'
                                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100'
                                        : 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100'
                                }`}>
                                    {championship.status === 'active' ? 'Em andamento'
                                        : championship.status === 'upcoming' ? 'Em breve'
                                        : 'Finalizado'
                                    }
                                </span>
                            </div>
                        </div>
                        {championship.logoUrl && (
                            <img
                                src={championship.logoUrl}
                                alt={`Logo ${championship.name}`}
                                className="w-24 h-24 object-contain"
                            />
                        )}
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-10">
                    {/* Main content: Stats and Picks */}
                    <div className="lg:col-span-2 space-y-8">
                        {data.stats && (
                            <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8
                                border border-light-300 dark:border-dark-600
                                shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
                                <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-6">
                                    Estatísticas da Competição
                                </h2>
                                <ChampionshipStats stats={data.stats} />
                            </div>
                        )}

                        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8
                            border border-light-300 dark:border-dark-600
                            shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
                            <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-6">
                                Análises Recentes
                            </h2>
                            {picks.length > 0 ? (
                                <div className="grid md:grid-cols-2 gap-6">
                                    {picks.map(pick => (
                                        <PickCard key={pick.id} pick={pick} />
                                    ))}
                                </div>
                            ) : (
                                <p className="text-dark-900/70 dark:text-light-100/70">
                                    Nenhuma análise recente disponível para este campeonato.
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Sidebar: Standings */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24">
                            <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8
                                border border-light-300 dark:border-dark-600
                                shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
                                <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-6">
                                    Classificação
                                </h2>
                                <StandingsTable leagueStanding={standing} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
