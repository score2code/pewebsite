"use client"

import React from 'react';
import { ChevronLeft, Loader, AlertTriangle, Trophy, TrendingUp } from 'lucide-react';
import { CheckCircle, XCircle, Clock } from 'lucide-react';

import { Pick } from '@/app/types';
import { validatePickArray } from '@/app/lib/validation';
import DisqusComments from '@/app/components/comments/disqus';

const PickAnalysisClient = ({ initialPick }: { initialPick: Pick }) => {
    // Hooks de Estado
    const [pick] = React.useState<Pick | null>(initialPick || null);
    const [loading] = React.useState(false);

    // Componente de botão de volta
    const GoBackButton = () => (
        <button
            onClick={() => window.history.back()}
            className="flex items-center text-green-500 mb-6 hover:text-green-400 transition"
        >
            <ChevronLeft className="w-5 h-5 mr-1" />
            Voltar para os Palpites Diários
        </button>
    );

    // Estado de carregamento
    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] text-center p-6">
                <Loader className="w-10 h-10 animate-spin text-purple-600 dark:text-purple-400 mb-4" />
                <p className="text-xl text-dark-900 dark:text-light-100">Carregando análise...</p>
            </div>
        );
    }

    if (!pick) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] text-center p-6">
                <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8
                    border border-light-300 dark:border-dark-600
                    shadow-custom dark:shadow-custom-dark backdrop-blur-sm
                    max-w-lg w-full">
                    <AlertTriangle className="w-16 h-16 mx-auto mb-6 text-purple-600 dark:text-purple-400" />
                    <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">
                        Análise Não Encontrada
                    </h2>
                    <p className="text-dark-900/70 dark:text-light-100/70 mb-8">
                        A análise solicitada não está disponível para a data informada.
                    </p>
                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center text-purple-600 dark:text-purple-400
                            hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-300"
                    >
                        <ChevronLeft className="w-5 h-5 mr-1.5" />
                        Voltar para Análises
                    </button>
                </div>
            </div>
        );
    }

    // Calcula a cor da confiança
    const confidenceColor = pick.confidence >= 80 ? 'bg-green-600' :
                            pick.confidence >= 70 ? 'bg-yellow-600' : 'bg-red-600';

    // Conteúdo Principal
    return (
        <div className="max-w-4xl mx-auto p-4 sm:px-0 pt-10 pb-16">
            {/* Botão Voltar */}
            <button
                onClick={() => window.history.back()}
                className="flex items-center text-purple-600 dark:text-purple-400 mb-8
                    hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-300"
            >
                <ChevronLeft className="w-5 h-5 mr-1.5" />
                Voltar para Análises
            </button>

            {/* Cabeçalho do Jogo */}
            <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-10
                border border-light-300 dark:border-dark-600
                shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                    <h1 className="text-3xl font-bold text-dark-900 dark:text-light-100">
                        {pick.homeTeam} vs {pick.awayTeam}
                    </h1>
                    <span className="text-sm font-medium text-dark-900/70 dark:text-light-100/70
                        bg-light-200/50 dark:bg-dark-700/50 px-4 py-2 rounded-full
                        flex items-center">
                        <Trophy className="w-4 h-4 mr-2 text-purple-600 dark:text-purple-400" />
                        {pick.league}
                    </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Probabilidades e Previsão */}
                    <div className="bg-light-200/50 dark:bg-dark-700/50 p-6 rounded-xl
                        border border-light-300 dark:border-dark-600">
                        <p className="text-sm font-medium text-dark-900/70 dark:text-light-100/70 mb-2">
                            Análise Principal
                        </p>
                        <p className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-0">{(pick as any).prediction || (pick as any).tip}</p>
                    </div>

                    {/* Confiança */}
                    <div className="bg-purple-600/10 dark:bg-purple-400/10 p-6 rounded-xl
                        border border-purple-600/20 dark:border-purple-400/20
                        flex flex-col justify-center items-center">
                        <p className="text-sm font-medium text-purple-600 dark:text-purple-400 mb-2">
                            Índice de Confiança
                        </p>
                        <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                            {pick.confidence}%
                        </p>
                    </div>
                </div>

                {/* Resultado e Motivo */}
                <div className="mt-6 grid grid-cols-1 gap-6">
                    <div className="bg-light-200/50 dark:bg-dark-700/50 p-6 rounded-xl border border-light-300 dark:border-dark-600">
                        <p className="text-sm font-medium text-dark-900/70 dark:text-light-100/70 mb-2">Resultado</p>
                        {typeof pick.hit === 'boolean' && (
                            <div className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg border text-sm ${pick.hit ? 'bg-green-100 dark:bg-green-900/30 border-green-300 dark:border-green-700 text-green-700 dark:text-green-400' : 'bg-red-100 dark:bg-red-900/30 border-red-300 dark:border-red-700 text-red-700 dark:text-red-400'}`}>
                                {pick.hit ? <CheckCircle className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                                <span>{pick.hit ? 'Ganhou' : 'Perdeu'}</span>
                                <span className="text-sm text-dark-900/70 dark:text-light-100/70"> {pick.reason}</span>
                            </div>
                        )}
                    </div>
                </div>
            </header>

            {/* Análise Detalhada */}
            <section className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8
                border border-light-300 dark:border-dark-600
                shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-6
                    pb-4 border-b border-light-300 dark:border-dark-600">
                    Análise Técnica Detalhada
                </h3>

                <div className="text-dark-900/70 dark:text-light-100/70 space-y-4
                    whitespace-pre-wrap leading-relaxed prose prose-purple dark:prose-invert">
                    <p>{pick.analysis}</p>
                </div>

                {/* Nota de Esclarecimento */}
                <div className="mt-8 p-6 bg-light-200/50 dark:bg-dark-700/50 rounded-xl
                    border border-light-300 dark:border-dark-600 flex items-center gap-4">
                    <TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                    <p className="text-sm text-dark-900/70 dark:text-light-100/70">
                        Nota: Esta é uma análise técnica baseada em dados estatísticos. Os resultados reais podem variar.
                        Recomenda-se usar esta informação como parte de uma estratégia mais ampla de análise esportiva.
                    </p>
                </div>
            </section>

            {/* Comentários (Disqus) */}
            <section className="mt-8">
                    <DisqusComments
                    url={typeof window !== 'undefined' ? window.location.href : ''}
                    identifier={`palpites-${pick?.league}-${pick?.date}-${pick?.id}`}
                    title={`Palpite: ${pick.homeTeam} vs ${pick.awayTeam} (${pick.league})`}
                />
            </section>
        </div>
    );
};

export default PickAnalysisClient;
