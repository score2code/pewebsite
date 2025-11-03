
import { LeagueStanding, Pick } from '@/app/types';
import standingsData from '@/app/data/standings.json';
import soccerPicks from '@/app/data/soccer/2025/11/03.json';
import StandingsTable from '@/app/components/statistics/standings-table';
import PickCard from '@/app/components/pick/card';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

// In a real app, you'd fetch this data based on the slug
async function getCompetitionData(slug: string): Promise<{ standing: LeagueStanding; picks: Pick[] } | null> {
    // For this example, we only have data for 'brasileirao-serie-a'
    if (slug !== 'brasileirao-serie-a') {
        return null;
    }

    const standing: LeagueStanding = standingsData;
    const picks: Pick[] = soccerPicks.filter(p => p.league.toUpperCase().includes('BRASILEIRÃO'));

    return { standing, picks };
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    // This is a simplified example. In a real app, you'd fetch league data by slug.
    const leagueName = "Brasileirão Série A"; // Replace with dynamic data

    return {
        title: `Palpites e Classificação: ${leagueName}`,
        description: `Confira a tabela de classificação atualizada e os últimos palpites para o ${leagueName}.`,
    }
}

export async function generateStaticParams() {
    return [
        { slug: 'brasileirao-serie-a' },
    ];
}

export default async function CompetitionPage({ params }: { params: { slug: string } }) {
    const data = await getCompetitionData(params.slug);

    if (!data) {
        notFound();
    }

    const { standing, picks } = data;

    return (
        <div className="bg-gray-900 text-white min-h-screen pt-8">
            <div className="max-w-6xl mx-auto">
                {/* League Header */}
                <div className="bg-gray-800 rounded-xl shadow-lg p-6 mb-8 border-l-4 border-green-500">
                    <h1 className="text-4xl font-bold">{standing.leagueName}</h1>
                    <p className="text-lg text-gray-300 mt-2">Tudo sobre o {standing.country}</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main content: Picks */}
                    <div className="lg:col-span-2 space-y-8">
                        <h2 className="text-3xl font-bold text-white">Últimos Palpites</h2>
                        {picks.length > 0 ? (
                            <div className="grid md:grid-cols-2 gap-6">
                                {picks.map(pick => (
                                    <PickCard key={pick.id} pick={pick} />
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-400">Nenhum palpite recente para este campeonato.</p>
                        )}
                    </div>

                    {/* Sidebar: Standings */}
                    <div className="lg:col-span-1">
                        <h2 className="text-3xl font-bold text-white mb-4">Classificação</h2>
                        <StandingsTable leagueStanding={standing} />
                    </div>
                </div>
            </div>
        </div>
    );
}
