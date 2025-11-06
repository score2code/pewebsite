import React from 'react';
import { Pick } from '@/app/types';
import Hero from '@/app/components/home/hero';
import MainSections from '@/app/components/home/main-sections';
import Cta from '@/app/components/home/cta';
import MemoizedPickCard from '@/app/components/pick/memoized-card';
import StatsDashboard from '@/app/components/statistics/dashboard';
import { getFormattedDate, loadPicksData, formatDateDisplay } from '@/app/lib/data-loader';
import * as fs from 'fs/promises';
import * as path from 'path';

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

export default async function HomePage() {
    const today = getFormattedDate(new Date());
    const soccerDates = await listAvailableDatesForSport('soccer');
    const footballDates = await listAvailableDatesForSport('football');
    const soccerDate = soccerDates.includes(today) ? today : (soccerDates[soccerDates.length - 1] || today);
    const footballDate = footballDates.includes(today) ? today : (footballDates[footballDates.length - 1] || today);
    const latestPicksSoccer: Pick[] = await loadPicksData(soccerDate, 'soccer');
    const latestPicksFootball: Pick[] = await loadPicksData(footballDate, 'football');

    // Métricas baseadas em hit/status para o dashboard
    const combinedPicks = [...latestPicksSoccer, ...latestPicksFootball];
    const completed = combinedPicks.filter(p => typeof p.hit === 'boolean' || ['won', 'lost'].includes(p.status)).length;
    const wonCount = combinedPicks.filter(p => (p.hit === true) || p.status === 'won').length;
    const totalPicks = combinedPicks.length;
    const hitRate = completed > 0 ? Math.round((wonCount / completed) * 100) : 0;

    // Série de desempenho diária dos últimos 10 dias disponíveis (soma soccer+football)
    const unionDates = Array.from(new Set([...soccerDates, ...footballDates])).sort();
    const lastDates = unionDates.slice(Math.max(0, unionDates.length - 10));
    const performanceSeries: { label: string; value: number }[] = [];
    for (const d of lastDates) {
        const sPicks: Pick[] = await loadPicksData(d, 'soccer');
        const fPicks: Pick[] = await loadPicksData(d, 'football');
        const dayPicks = [...sPicks, ...fPicks];
        const dayCompleted = dayPicks.filter(p => typeof p.hit === 'boolean' || ['won', 'lost'].includes(p.status)).length;
        const dayWon = dayPicks.filter(p => (p.hit === true) || p.status === 'won').length;
        const dayRate = dayCompleted > 0 ? Math.round((dayWon / dayCompleted) * 100) : 0;
        performanceSeries.push({ label: new Date(d + 'T00:00:00').toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }), value: dayRate });
    }

    return (
        <div className="min-h-screen font-sans pt-12">
            <div className="max-w-6xl mx-auto px-4 py-4">
                <Hero />
                <MainSections />

                {/* Destaque: Bilhete do Dia */}
                <section className="mt-6 mb-6">
                    <div className="bg-purple-100/70 dark:bg-purple-900/30 rounded-xl p-6 border border-purple-300 dark:border-purple-700 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div>
                                <h2 className="text-2xl font-extrabold text-dark-900 dark:text-light-100">Bilhete do Dia</h2>
                                <p className="text-dark-900/70 dark:text-light-100/70 mt-1">
                                    {`Confira nossas melhores seleções de hoje (${formatDateDisplay(today)}) com análise pronta para apostar.`}
                                </p>
                            </div>
                            <a
                                href="/bilhete-do-dia"
                                className="inline-block bg-purple-600 dark:bg-purple-500 text-white font-bold px-5 py-3 rounded-lg hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                aria-label="Acessar Bilhete do Dia"
                            >
                                Acessar Bilhete do Dia
                            </a>
                        </div>
                    </div>
                </section>

                {/* Statistics Dashboard */}
                <section className="py-8 max-w-6xl mx-auto">
                    <StatsDashboard hitRate={hitRate} totalPicks={totalPicks} series={performanceSeries} />
                </section>

                {/* Seção de Últimos Palpites (Futebol e Futebol Americano) */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-dark-900 dark:text-light-100 text-center mb-8">
                        Últimas <span className="text-purple-600 dark:text-purple-400">Análises</span>
                    </h2>
                    {(latestPicksSoccer.length + latestPicksFootball.length) > 0 ? (
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {latestPicksSoccer.slice(0, 3).map((pick) => (
                                <MemoizedPickCard 
                                    key={`soccer-${pick.id}`} 
                                    pick={pick} 
                                    showStatus={true}
                                    compact={false}
                                    date={soccerDate}
                                    sportSegment="futebol"
                                />
                            ))}
                            {latestPicksFootball.slice(0, 3).map((pick) => (
                                <MemoizedPickCard 
                                    key={`football-${pick.id}`} 
                                    pick={pick} 
                                    showStatus={true}
                                    compact={false}
                                    date={footballDate}
                                    sportSegment="futebol-americano"
                                />
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-dark-900/70 dark:text-light-100/70">
                            Nenhuma análise encontrada nas últimas datas disponíveis.
                        </p>
                    )}
                </div>

                <Cta />
            </div>
        </div>
    );
}
