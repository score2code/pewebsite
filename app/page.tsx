"use client"

import React from 'react';
// Importa apenas os ícones necessários para a Página Inicial.
import { BarChart3, TrendingUp, BookOpen, Goal } from 'lucide-react';

/**
 * Componente principal para a Página Inicial do site (simula o conteúdo de /page.tsx).
 * Este componente não contém lógica de roteamento interna, mas os botões estão prontos
 * para serem envolvidos por um <Link href="/futebol"> do seu sistema de rotas.
 */
const HomePage = () => {

    // Configuração dos cartões de seção.
    const mainSections = [
        {
            title: "Palpites de Futebol",
            description: "Prognósticos diários da Série A, Premier League, La Liga e muito mais. Nossas análises mais quentes.",
            icon: Goal,
            linkText: "Ver Palpites",
            // Ação simulada: em seu projeto, isto seria um Link ou router.push('/futebol')
            action: () => console.log('Navegar para a rota /futebol'),
            color: 'text-green-500'
        },
        {
            title: "Análise de Odds",
            description: "Ferramenta de comparação de odds em tempo real das principais casas de apostas do mercado.",
            icon: TrendingUp,
            linkText: "Comparar Agora",
            action: () => console.log('Navegar para a rota /odds'),
            color: 'text-blue-500'
        },
        {
            title: "Guias e Tutoriais",
            description: "Aprenda as melhores estratégias de apostas, gestão de banca e análise de estatísticas avançadas.",
            icon: BookOpen,
            linkText: "Acessar Guias",
            action: () => console.log('Navegar para a rota /guias'),
            color: 'text-yellow-500'
        },
    ];

    // Estrutura principal da página
    return (
        <div className="min-h-screen bg-gray-900 font-sans pt-12">
            <div className="max-w-6xl mx-auto p-4 sm:p-0">

                {/* Seção Hero - Destaque Principal */}
                <div className="text-center bg-gray-800 rounded-2xl p-8 sm:p-12 mb-10 shadow-xl border-t-4 border-green-500">
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
                        Seu Ponto de Partida para <span className="text-green-500">Apostas Inteligentes</span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Acesse análises, prognósticos e as melhores odds para lucrar com seus palpites esportivos.
                    </p>
                    <button
                        onClick={() => console.log('Navegar para a rota /futebol')}
                        className="px-8 py-3 bg-green-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-green-500 transition duration-300 transform hover:scale-105"
                    >
                        Ver Palpites de Futebol HOJE!
                    </button>
                </div>

                {/* Cartões de Seção - Navegação Rápida */}
                <div className="grid gap-8 md:grid-cols-3 mb-10">
                    {mainSections.map((section, index) => {
                        const Icon = section.icon;
                        return (
                            <div
                                key={index}
                                className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-green-500 transition duration-300"
                            >
                                <Icon className={`w-8 h-8 mb-4 ${section.color}`} />
                                <h3 className="text-xl font-bold text-white mb-2">{section.title}</h3>
                                {/* Altura fixa para garantir que o layout dos cartões não mude (CLS) */}
                                <p className="text-gray-400 mb-4 h-16">{section.description}</p>
                                <button
                                    onClick={section.action}
                                    className="w-full py-2 border border-green-600 text-green-500 font-semibold rounded-lg hover:bg-green-900 transition"
                                >
                                    {section.linkText}
                                </button>
                            </div>
                        );
                    })}
                </div>

                {/* Seção de Destaque / Chamada à Ação */}
                <div className="bg-gray-900 p-6 rounded-xl border border-dashed border-gray-700 text-center mb-12">
                    <p className="text-lg font-semibold text-gray-300">
                        <BarChart3 className="inline w-5 h-5 text-green-500 mr-2" />
                        Mais de 100 mil apostadores confiam em nossas análises diariamente. Junte-se à comunidade vencedora!
                    </p>
                </div>
            </div>
            {/* O rodapé do site seria adicionado aqui (fora do escopo da Home Page, mas em um layout real) */}
        </div>
    );
};

export default HomePage;
