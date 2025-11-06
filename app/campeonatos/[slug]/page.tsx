
import { Championship, ChampionshipData, LeagueStanding, Pick, type ChampionshipStats as ChampionshipStatsType } from '@/app/types';
import fs from 'fs/promises';
import path from 'path';
import PickCard from '@/app/components/pick/card';
import ChampionshipStatsBlock from '@/app/components/championship/stats';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { parsePicks } from '@/app/lib/data-parser';

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

async function listAvailableDatesForSport(sportDir: 'soccer' | 'football'): Promise<string[]> {
    const dates: string[] = [];
    try {
        const baseDir = path.join(process.cwd(), 'app', 'data', sportDir);
        const years = await fs.readdir(baseDir).catch(() => []);
        for (const y of years) {
            const yearDir = path.join(baseDir, y);
            const months = await fs.readdir(yearDir).catch(() => []);
            for (const m of months) {
                const monthDir = path.join(yearDir, m);
                const files = await fs.readdir(monthDir).catch(() => []);
                for (const f of files) {
                    if (f.endsWith('.json')) {
                        const day = f.replace('.json', '');
                        dates.push(`${y}-${m}-${day}`);
                    }
                }
            }
        }
    } catch {}
    return dates.sort();
}

async function loadSeasonStats(slug: string): Promise<Array<{ season: string; stats: ChampionshipStatsType }>> {
    try {
        const baseDir = path.join(process.cwd(), 'app', 'data', 'championships', slug);
        const seasons = await fs.readdir(baseDir).catch(() => []);
        if (!seasons.length) return [];

        const result: Array<{ season: string; stats: ChampionshipStatsType }> = [];

        for (const seasonFile of seasons) {
            if (!seasonFile.endsWith('.json')) continue;
            const filePath = path.join(baseDir, seasonFile);
            const contents = await fs.readFile(filePath, 'utf8');
            const data = JSON.parse(contents);

            const totalMatches = data.totalMatches || 0;
            const matchesPlayed = data.matchesPlayed || 0;
            const goalsScored = data.goalsScored || 0;
            const yellow = data.cardsByType?.yellow || 0;
            const red = data.cardsByType?.red || 0;
            const homeWins = data.winCounts?.home || 0;
            const draws = data.winCounts?.draw || 0;
            const awayWins = data.winCounts?.away || 0;

            const played = matchesPlayed || totalMatches;
            const averageGoalsPerMatch = played > 0 ? Number((goalsScored / played).toFixed(2)) : (data.averageGoalsPerMatch || 0);
            const totalOutcomes = homeWins + draws + awayWins;
            const toPercent = (n: number) => totalOutcomes > 0 ? Number(((n / totalOutcomes) * 100).toFixed(1)) : 0;

            const stats: ChampionshipStatsType = {
                totalMatches,
                matchesPlayed: played,
                goalsScored,
                averageGoalsPerMatch,
                cardsByType: { yellow, red },
                winPercentages: data.winPercentages || {
                    home: toPercent(homeWins),
                    draw: toPercent(draws),
                    away: toPercent(awayWins)
                },
                topScorers: data.topScorers || []
            };

            result.push({ season: seasonFile.replace('.json', ''), stats });
        }

        result.sort((a, b) => b.season.localeCompare(a.season));
        return result;
    } catch {
        return [];
    }
}

async function getCompetitionData(slug: string): Promise<ChampionshipData | null> {
    const championship = championships.find(c => c.slug === slug);

    if (!championship) {
        return null;
    }

    let soccerPicksData = [];
    let championshipsStats: Record<string, any> = {};

    try {
        // Usar a última data disponível ao invés de apenas hoje
        const soccerDates = await listAvailableDatesForSport('soccer');
        const latestDate = soccerDates[soccerDates.length - 1];
        const [y, m, d] = latestDate ? latestDate.split('-') : [];
        const picksFilePath = path.join(process.cwd(), 'app', 'data', 'soccer', y || '1970', m || '01', `${d || '01'}.json`);
        const picksFileContents = await fs.readFile(picksFilePath, 'utf8');
        soccerPicksData = JSON.parse(picksFileContents);
    } catch (error) {
        console.error("Error reading soccer picks data:", error);
    }

    // Carregar estatísticas históricas por temporada (se disponível); caso contrário, fallback agregado
    const seasonStatsFromDir = await loadSeasonStats(slug);
    let aggregatedStats: ChampionshipStatsType | undefined = undefined;
    if (!seasonStatsFromDir.length) {
        try {
            const statsFilePath = path.join(process.cwd(), 'app', 'data', 'championships-stats.json');
            const statsFileContents = await fs.readFile(statsFilePath, 'utf8');
            championshipsStats = JSON.parse(statsFileContents);
            aggregatedStats = championshipsStats[slug as keyof typeof championshipsStats] as ChampionshipStatsType;
        } catch (error) {
            console.error("Error reading championships-stats.json:", error);
        }
    }

    const soccerPicks: Pick[] = parsePicks(soccerPicksData as any[]);
    const picks: Pick[] = soccerPicks.filter(p => (p.league || '').toUpperCase().includes(championship.name.toUpperCase()));
    const stats = aggregatedStats;

    return {
        championship,
        picks,
        stats: stats || undefined,
        seasonStats: seasonStatsFromDir
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

    const { championship, picks } = data;

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

                <div className="space-y-8">
                    {/* Conteúdo principal: Estatísticas e Palpites */}
                        {data.seasonStats && data.seasonStats.length > 0 && (
                            <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8
                                border border-light-300 dark:border-dark-600
                                shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
                                <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-6">
                                    Estatísticas por Temporada
                                </h2>
                                <div className="space-y-8">
                                    {data.seasonStats.map(({ season, stats }) => (
                                        <div key={season}>
                                            <h3 className="text-xl font-semibold text-dark-900 dark:text-light-100 mb-4">
                                                Temporada {season}
                                            </h3>
                                            <ChampionshipStatsBlock stats={stats} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {data.stats && (
                            <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8
                                border border-light-300 dark:border-dark-600
                                shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
                                <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-6">
                                    Estatísticas da Competição
                                </h2>
                                <ChampionshipStatsBlock stats={data.stats} />
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
            </div>
        </div>
    );
}
