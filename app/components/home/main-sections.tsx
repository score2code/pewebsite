import React from 'react';
import { TrendingUp, BookOpen, Goal } from 'lucide-react';
import Link from 'next/link';

const MainSections = () => {
    const mainSections = [
        {
            title: "Palpites de Futebol",
            description: "Prognósticos diários da Série A, Premier League, La Liga e muito mais. Nossas análises mais quentes.",
            icon: Goal,
            href: "/futebol",
            color: 'text-green-500'
        },
        {
            title: "Análise de Odds",
            description: "Ferramenta de comparação de odds em tempo real das principais casas de apostas do mercado.",
            icon: TrendingUp,
            href: "/odds",
            color: 'text-blue-500'
        },
        {
            title: "Guias e Tutoriais",
            description: "Aprenda as melhores estratégias de apostas, gestão de banca e análise de estatísticas avançadas.",
            icon: BookOpen,
            href: "/guias",
            color: 'text-yellow-500'
        },
    ];

    return (
        <div className="grid gap-8 md:grid-cols-3 mb-10">
            {mainSections.map((section, index) => {
                const Icon = section.icon;
                return (
                    <Link key={index} href={section.href} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 rounded-xl block">
                        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:border-green-500 transition duration-300 h-full flex flex-col justify-between">
                            <div>
                                <Icon className={`w-8 h-8 mb-4 ${section.color}`} />
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{section.title}</h3>
                                <p className="text-gray-700 dark:text-gray-400 mb-4">{section.description}</p>
                            </div>
                            <div className="text-center mt-4 py-2 border border-green-600 text-green-500 font-semibold rounded-lg hover:bg-green-900 transition">
                                Acessar Seção
                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default MainSections;
