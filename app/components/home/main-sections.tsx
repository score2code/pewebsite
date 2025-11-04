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
            color: 'text-purple-600 dark:text-purple-400'
        },
        {
            title: "Análise de Odds",
            description: "Ferramenta de comparação de odds em tempo real dos principais eventos esportivos do mercado.",
            icon: TrendingUp,
            href: "/odds",
            color: 'text-purple-500 dark:text-purple-300'
        },
        {
            title: "Guias e Tutoriais",
            description: "Aprenda as melhores estratégias esportivas, gestão de banca e análise de estatísticas avançadas.",
            icon: BookOpen,
            href: "/guias",
            color: 'text-purple-700 dark:text-purple-500'
        },
    ];

    return (
        <div className="grid gap-8 md:grid-cols-3 mb-10">
            {mainSections.map((section, index) => {
                const Icon = section.icon;
                return (
                    <Link key={index} href={section.href} className="focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-xl block group">
                        <div className="bg-light-100/50 dark:bg-dark-800/50 p-6 rounded-xl shadow-custom dark:shadow-custom-dark
                            border border-light-300 dark:border-dark-600
                            group-hover:border-purple-500 dark:group-hover:border-purple-400
                            transition-all duration-300 h-full flex flex-col justify-between backdrop-blur-sm">
                            <div>
                                <Icon className={`w-8 h-8 mb-4 ${section.color}`} />
                                <h3 className="text-xl font-bold text-dark-900 dark:text-light-100 mb-2">{section.title}</h3>
                                <p className="text-dark-900/70 dark:text-light-100/70 mb-4">{section.description}</p>
                            </div>
                            <div className="text-center mt-4 py-2 px-4 bg-purple-600/10 dark:bg-purple-400/10
                                text-purple-600 dark:text-purple-400 font-semibold rounded-lg
                                group-hover:bg-purple-600 dark:group-hover:bg-purple-500
                                group-hover:text-white dark:group-hover:text-white transition-all duration-300">
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
