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
    return date.toISOString().split('T')[0];
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
                const response = await fetch(`/api/picks?type=soccer&date=${today}`);
                const result = await response.json();

                if (response.ok && Array.isArray(result.data)) {
                    setLatestPicks(result.data);
                } else {
                    // Handle case where there are no picks for today, maybe try yesterday?
                    // For now, we just clear the list.
                    setLatestPicks([]);
                }
            } catch (error) {
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
                    <h2 className="text-3xl font-bold text-white text-center mb-8">Últimos Palpites</h2>
                    {loading ? (
                        <div className="flex justify-center items-center p-8" role="status" aria-label="Carregando últimos palpites...">
                            <Loader className="w-8 h-8 animate-spin text-green-500" />
                        </div>
                    ) : latestPicks.length > 0 ? (
                        <div className="grid gap-8 md:grid-cols-2">
                            {latestPicks.map((pick) => (
                                <PickCard key={pick.id} pick={pick} />
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-gray-400">Nenhum palpite encontrado para hoje.</p>
                    )}
                </div>

                <Cta />
            </div>
        </div>
    );
};
