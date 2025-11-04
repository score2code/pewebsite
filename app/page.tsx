'use client';

import React, { useState, useEffect } from 'react';
import { Pick } from '@/app/types';
import Hero from '@/app/components/home/hero';
import MainSections from '@/app/components/home/main-sections';
import Cta from '@/app/components/home/cta';
import PickCard from '@/app/components/pick/card';
import { Loader } from 'lucide-react';

// Helper to get date in YYYY-MM-DD format
const getFormattedDate = (date: Date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Mês é 0-indexado
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}

export default function HomePage() {
    const [latestPicks, setLatestPicks] = useState<Pick[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLatestPicks = async () => {
            setLoading(true);
            try {
                // In a real app, you might have a dedicated endpoint for "latest"
                // For now, we fetch for the current day.
                const today = getFormattedDate(new Date());
                const url = `/data/soccer/${today.substring(0, 4)}/${today.substring(5, 7)}/${today.substring(8, 10)}.json`;
                console.log("Fetching from URL:", url); // Adicione esta linha
                const response = await fetch(url);
                console.log("Response status:", response.status); // Adicione esta linha
                                    const result = await response.json();
                                    console.log("Fetched data:", result); // Adicione esta linha
                                    if (Array.isArray(result)) {                    setLatestPicks(result);
                } else {
                    console.error("Failed to fetch picks, response not OK:", response.status, response.statusText);
                    setLatestPicks([]);
                }            } catch (error) {
                console.error("Failed to fetch latest picks:", error);
                setLatestPicks([]);
            } finally {
                setLoading(false);
            }
        };

        fetchLatestPicks();
    }, []);

    return (
        <div className="min-h-screen font-sans pt-12">
            <div className="max-w-6xl mx-auto p-4 sm:p-0">
                <Hero />
                <MainSections />

                {/* Seção de Últimos Palpites */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-dark-900 dark:text-light-100 text-center mb-8">
                        Últimas <span className="text-purple-600 dark:text-purple-400">Análises</span>
                    </h2>
                    {loading ? (
                        <div className="flex justify-center items-center p-8" role="status" aria-label="Carregando últimas análises...">
                            <Loader className="w-8 h-8 animate-spin text-purple-600 dark:text-purple-400" />
                        </div>
                    ) : latestPicks.length > 0 ? (
                        <div className="grid gap-8 md:grid-cols-2">
                            {latestPicks.map((pick) => (
                                <PickCard key={pick.id} pick={pick} />
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
};
