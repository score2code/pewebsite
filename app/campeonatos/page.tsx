import React from 'react';
import Link from 'next/link';
import { Trophy } from 'lucide-react';

interface Championship {
    name: string;
    slug: string;
    country: string;
    type: 'national' | 'international';
    region: 'brazil' | 'europe' | 'south-america';
}

const championships: Championship[] = [
    // Brasil
    { name: 'Brasileirão Série A', slug: 'brasileirao-serie-a', country: 'Brasil', type: 'national', region: 'brazil' },
    { name: 'Brasileirão Série B', slug: 'brasileirao-serie-b', country: 'Brasil', type: 'national', region: 'brazil' },
    { name: 'Copa do Brasil', slug: 'copa-do-brasil', country: 'Brasil', type: 'national', region: 'brazil' },

    // Europa
    { name: 'Champions League', slug: 'champions-league', country: 'Europa', type: 'international', region: 'europe' },
    { name: 'Premier League', slug: 'premier-league', country: 'Inglaterra', type: 'national', region: 'europe' },
    { name: 'La Liga', slug: 'la-liga', country: 'Espanha', type: 'national', region: 'europe' },
    { name: 'Bundesliga', slug: 'bundesliga', country: 'Alemanha', type: 'national', region: 'europe' },
    { name: 'Serie A', slug: 'serie-a', country: 'Itália', type: 'national', region: 'europe' },

    // América do Sul
    { name: 'Copa Libertadores', slug: 'libertadores', country: 'América do Sul', type: 'international', region: 'south-america' },
    { name: 'Copa Sul-Americana', slug: 'sul-americana', country: 'América do Sul', type: 'international', region: 'south-america' },
];

const ChampionshipCard = ({ championship }: { championship: Championship }) => (
    <Link href={`/campeonatos/${championship.slug}`}
        className="group">
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6
            border border-light-300 dark:border-dark-600
            shadow-custom dark:shadow-custom-dark backdrop-blur-sm
            group-hover:border-purple-500 dark:group-hover:border-purple-400
            transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
                <div>
                    <h3 className="text-lg font-bold text-dark-900 dark:text-light-100 mb-1">
                        {championship.name}
                    </h3>
                    <p className="text-sm text-dark-900/70 dark:text-light-100/70">
                        {championship.country}
                    </p>
                </div>
                <div className="p-2 bg-purple-600/10 dark:bg-purple-400/10 rounded-lg
                    group-hover:bg-purple-600 dark:group-hover:bg-purple-500
                    transition-colors duration-300">
                    <Trophy className="w-5 h-5 text-purple-600 dark:text-purple-400
                        group-hover:text-white dark:group-hover:text-white
                        transition-colors duration-300" />
                </div>
            </div>
            <div className="flex gap-2">
                <span className="text-xs px-2 py-1 rounded-full
                    bg-light-200/50 dark:bg-dark-700/50
                    text-dark-900/70 dark:text-light-100/70">
                    {championship.type === 'national' ? 'Nacional' : 'Internacional'}
                </span>
                <span className="text-xs px-2 py-1 rounded-full
                    bg-purple-600/10 dark:bg-purple-400/10
                    text-purple-600 dark:text-purple-400">
                    Ver análises
                </span>
            </div>
        </div>
    </Link>
);

const ChampionshipSection = ({ title, championships }: { title: string, championships: Championship[] }) => (
    <div>
        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-6">{title}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {championships.map((championship) => (
                <ChampionshipCard key={championship.slug} championship={championship} />
            ))}
        </div>
    </div>
);

export default function ChampionshipsPage() {
    const brazilianChampionships = championships.filter(c => c.region === 'brazil');
    const europeanChampionships = championships.filter(c => c.region === 'europe');
    const southAmericanChampionships = championships.filter(c => c.region === 'south-america');

    return (
        <div className="min-h-screen pt-10 pb-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-10
                    border border-light-300 dark:border-dark-600
                    shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
                    <h1 className="text-4xl font-bold text-dark-900 dark:text-light-100 mb-3">
                        Campeonatos
                    </h1>
                    <p className="text-lg text-dark-900/70 dark:text-light-100/70">
                        Análises estatísticas e previsões dos principais campeonatos do mundo.
                    </p>
                </div>

                {/* Sections */}
                <div className="space-y-12">
                    <ChampionshipSection
                        title="Campeonatos Brasileiros"
                        championships={brazilianChampionships}
                    />
                    <ChampionshipSection
                        title="Campeonatos Europeus"
                        championships={europeanChampionships}
                    />
                    <ChampionshipSection
                        title="Competições Sul-Americanas"
                        championships={southAmericanChampionships}
                    />
                </div>
            </div>
        </div>
    );
}
