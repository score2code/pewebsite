import React from 'react';
import { Pick } from '@/app/types';
import Hero from '@/app/components/home/hero';
import MainSections from '@/app/components/home/main-sections';
import Cta from '@/app/components/home/cta';
import MemoizedPickCard from '@/app/components/pick/memoized-card';
import StatsDashboard from '@/app/components/statistics/dashboard';
import { getFormattedDate, loadPicksData } from '@/app/lib/data-loader';

export default async function HomePage() {
    const today = getFormattedDate(new Date());
    const latestPicks: Pick[] = await loadPicksData(today, 'soccer');

    return (
        <div className="min-h-screen font-sans pt-12">
            <div className="max-w-6xl mx-auto px-4 py-4">
                <Hero />
                <MainSections />

                {/* Statistics Dashboard */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <StatsDashboard />
                </section>

                {/* Seção de Últimos Palpites */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-dark-900 dark:text-light-100 text-center mb-8">
                        Últimas <span className="text-purple-600 dark:text-purple-400">Análises</span>
                    </h2>
                    {latestPicks.length > 0 ? (
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {latestPicks.slice(0, 6).map((pick) => (
                                <MemoizedPickCard 
                                    key={pick.id} 
                                    pick={pick} 
                                    showStatus={true}
                                    compact={false}
                                    date={today}
                                    sportSegment="futebol"
                                />
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-dark-900/70 dark:text-light-100/70">
                            Nenhuma análise encontrada para hoje.
                        </p>
                    )}
                </div>

                <Cta />
            </div>
        </div>
    );
}
