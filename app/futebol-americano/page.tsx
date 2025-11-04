"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Zap, Calendar, AlertTriangle, Loader2 } from 'lucide-react';
import { Pick } from '@/app/types';
import MemoizedPickCard from '@/app/components/pick/memoized-card';
import { getFormattedDate, formatDateDisplay, changeDate, loadPicksData } from '@/app/lib/data-loader';

// --- Componentes de UI ---

interface LocalPickCardProps {
    pick: Pick;
    date: string;
}

const LocalPickCard: React.FC<LocalPickCardProps> = ({ pick, date }) => {
    const confidenceColor = pick.confidence >= 80 ? 'bg-green-600' :
                            pick.confidence >= 70 ? 'bg-yellow-600' : 'bg-red-600';

    return (
        <div
            className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
            tabIndex={0}
            role="article"
            aria-label={`Análise para ${pick.homeTeam} vs ${pick.awayTeam}`}
        >
            <div className="flex justify-between items-start mb-3">
                <span className="text-sm font-semibold text-green-600 dark:text-green-400 flex items-center">
                    <Zap className="w-4 h-4 mr-1" />
                    {pick.league}
                </span>
                <span className="text-xs text-gray-700 dark:text-gray-400 flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {pick.dateTime}
                </span>
            </div>

            <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {pick.homeTeam} vs {pick.awayTeam}
                </h3>
            </div>

            <div className="grid grid-cols-3 gap-3 items-center text-center">
                {/* Dica do Dia */}
                <div className="col-span-2 p-2 bg-gray-200 dark:bg-gray-700 rounded-lg">
                    <p className="text-xs text-gray-700 dark:text-gray-400">Palpite</p>
                    <p className="text-lg font-extrabold text-gray-900 dark:text-white">{pick.tip}</p>
                </div>

                {/* Odds */}
                <div className="p-2 bg-green-600 rounded-lg shadow-md">
                    <p className="text-xs font-medium text-white/80">Odds</p>
                    <p className="text-xl font-bold text-white">{pick.odds.toFixed(2)}</p>
                </div>
            </div>

            <div className="mt-3 flex justify-end items-center pt-2 border-t border-gray-300 dark:border-gray-700/50">
                 <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${confidenceColor} text-white mr-auto`}>
                    Confiança: {pick.confidence}%
                </span>
            </div>
        </div>
    );
};

// --- Componente Principal da Rota /futebol-americano ---

const AmericanFootball = () => {
    const pickDate = getFormattedDate(new Date());

    const [selectedDate, setSelectedDate] = useState(pickDate);
    const [picksData, setPicksData] = useState<Pick[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Função para buscar os dados
    const fetchPicks = useCallback(async (date: string) => {
        setIsLoading(true);
        setError(null);

        try {
            // Load picks from static JSON files for football (american football)
            const picks = await loadPicksData(date, 'football');
            setPicksData(picks);
            
            if (picks.length === 0) {
                setError(`Nenhum palpite encontrado para ${formatDateDisplay(date)}.`);
            }
        } catch (err) {
            console.error("Erro ao buscar dados:", err);
            setError(`Não foi possível carregar os palpites para ${formatDateDisplay(date)}.`);
            setPicksData([]);
        } finally {
            setIsLoading(false);
        }
    }, []);

    // Chama a busca quando a data selecionada muda
    useEffect(() => {
        fetchPicks(selectedDate);
    }, [selectedDate, fetchPicks]);

    // Lida com a navegação de data
    const handleDateChange = (days: number) => {
        const newDate = changeDate(selectedDate, days);
        setSelectedDate(newDate);
        fetchPicks(newDate);
    };

    return (
        <div className="min-h-screen font-sans p-4 sm:p-8">
            <div className="max-w-4xl mx-auto">
                {/* Título Principal */}
                <header className="text-center mb-8">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-purple-600 dark:text-purple-400 tracking-tight flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trophy mr-3"><path d="M6 9H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2"/><path d="M6 10v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-7"/><path d="M5 19v2"/><path d="M19 19v2"/><path d="M12 10l.75 3.5l1.5-2.5l1.5 2.5L17 10"/><path d="M12 17h0"/></svg>
                        Palpites do Dia
                    </h1>
                    <p className="text-dark-900/70 dark:text-light-100/70 mt-2">Análises e Odds Diárias para Eventos Esportivos</p>
                </header>

                {/* Seletor de Data */}
                <div className="flex justify-center items-center bg-light-100/50 dark:bg-dark-800/50 p-4 rounded-xl
                    shadow-custom dark:shadow-custom-dark border border-light-300 dark:border-dark-600 mb-8 backdrop-blur-sm">
                    <button
                        onClick={() => handleDateChange(-1)}
                        className="p-2 rounded-lg text-dark-900/70 dark:text-light-100/70
                            hover:bg-light-200 dark:hover:bg-dark-700
                            hover:text-purple-600 dark:hover:text-purple-400
                            transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        aria-label="Dia Anterior"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <div className="mx-4 text-center">
                        <p className="text-sm text-dark-900/70 dark:text-light-100/70 font-medium">Data Selecionada</p>
                        <h2 className="text-xl font-bold text-dark-900 dark:text-light-100">
                            {formatDateDisplay(selectedDate)}
                        </h2>
                    </div>
                    <button
                        onClick={() => handleDateChange(1)}
                        className="p-2 rounded-lg text-dark-900/70 dark:text-light-100/70
                            hover:bg-light-200 dark:hover:bg-dark-700
                            hover:text-purple-600 dark:hover:text-purple-400
                            transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        aria-label="Próximo Dia"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Conteúdo Principal */}
                <div className="min-h-[200px]">
                    {isLoading && (
                        <div className="flex justify-center items-center py-12">
                            <Loader2 className="w-8 h-8 animate-spin text-purple-600 dark:text-purple-400 mr-3" />
                            <p className="text-lg text-dark-900/70 dark:text-light-100/70">Carregando palpites...</p>
                        </div>
                    )}

                    {error && !isLoading && (
                        <div className="bg-red-500/10 dark:bg-red-400/10 p-6 rounded-xl
                            flex items-center justify-center text-red-600 dark:text-red-400
                            border border-red-500/30 dark:border-red-400/30
                            shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
                            <AlertTriangle className="w-5 h-5 mr-2" />
                            <p className="font-medium">{error}</p>
                        </div>
                    )}

                    {!isLoading && !error && picksData.length > 0 && (
                        <div className="grid gap-6 md:grid-cols-2">
                            {picksData.map(pick => (
                                <MemoizedPickCard
                                    key={pick.id}
                                    pick={pick}
                                    date={selectedDate}
                                    showStatus={true}
                                    compact={false}
                                />
                            ))}
                        </div>
                    )}

                    {!isLoading && !error && picksData.length === 0 && selectedDate && (
                        <div className="bg-light-100/50 dark:bg-dark-800/50 p-8 rounded-xl
                            text-center border border-light-300 dark:border-dark-600
                            shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
                            <Calendar className="w-8 h-8 mx-auto mb-3 text-purple-600 dark:text-purple-400" />
                            <p className="text-lg font-semibold text-dark-900 dark:text-light-100">Sem palpites agendados.</p>
                            <p className="text-sm text-dark-900/70 dark:text-light-100/70">Tente selecionar uma data diferente.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AmericanFootball;
