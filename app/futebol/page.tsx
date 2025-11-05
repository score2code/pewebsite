"use client";

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Zap, Calendar, AlertTriangle, Loader2 } from 'lucide-react';
import { Pick } from '@/app/types';
import MemoizedPickCard from '@/app/components/pick/memoized-card';
import FilterSort from '@/app/components/filters/filter-sort';
import { getFormattedDate, formatDateDisplay, changeDate, loadPicksData } from '@/app/lib/data-loader';

// --- Componente Principal da Rota /futebol ---

const Soccer = () => {
    const getFormattedDate = () => {
      const date = new Date();
      const year = date.getFullYear();
      // Os meses são base 0, por isso adicionamos 1
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    };
    const pickDate = getFormattedDate(new Date());

    const [selectedDate, setSelectedDate] = useState(pickDate);
    const [picksData, setPicksData] = useState<Pick[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [selectedLeague, setSelectedLeague] = useState('');
    const [selectedConfidence, setSelectedConfidence] = useState('');
    const [sortBy, setSortBy] = useState('date');

    // Função para buscar os dados
    const fetchPicks = useCallback(async (date: string) => {
        setIsLoading(true);
        setError(null);

        try {
            // Load picks from static JSON files for soccer
            const picks = await loadPicksData(date, 'soccer');
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

    // Processar ligas únicas para o filtro
    const leagues = useMemo(() => {
        const leagueCounts = picksData.reduce((acc, pick) => {
            acc[pick.league] = (acc[pick.league] || 0) + 1;
            return acc;
        }, {} as Record<string, number>);

        return Object.entries(leagueCounts)
            .map(([league, count]) => ({ value: league, label: league, count }))
            .sort((a, b) => b.count - a.count);
    }, [picksData]);

    // Filtrar e ordenar palpites
    const filteredAndSortedPicks = useMemo(() => {
        let filtered = [...picksData];

        // Filtrar por liga
        if (selectedLeague) {
            filtered = filtered.filter(pick => pick.league === selectedLeague);
        }

        // Filtrar por confiança
        if (selectedConfidence) {
            const confidenceMap = {
                high: (conf: number) => conf >= 80,
                medium: (conf: number) => conf >= 60 && conf < 80,
                low: (conf: number) => conf < 60
            };
            
            if (confidenceMap[selectedConfidence as keyof typeof confidenceMap]) {
                filtered = filtered.filter(pick => 
                    confidenceMap[selectedConfidence as keyof typeof confidenceMap](pick.confidence)
                );
            }
        }

        // Ordenar
        const safeTime = (d?: string) => (d ? new Date(d).getTime() : 0);
        switch (sortBy) {
            case 'confidence':
                filtered.sort((a, b) => b.confidence - a.confidence);
                break;
            case 'league':
                filtered.sort((a, b) => a.league.localeCompare(b.league));
                break;
            case 'probability':
                filtered.sort((a, b) => (b.probability ?? 0) - (a.probability ?? 0));
                break;
            default: // date
                filtered.sort((a, b) => safeTime(b.date) - safeTime(a.date));
        }

        return filtered;
    }, [picksData, selectedLeague, selectedConfidence, sortBy]);

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

                {/* Filters */}
                <div className="mb-8">
                  <FilterSort
                    selectedLeague={selectedLeague}
                    onLeagueChange={setSelectedLeague}
                    selectedConfidence={selectedConfidence}
                    onConfidenceChange={setSelectedConfidence}
                    selectedDate={selectedDate}
                    onDateChange={setSelectedDate}
                    sortBy={sortBy}
                    onSortChange={setSortBy}
                    leagues={leagues}
                    showDateFilter={false} // Já temos navegação de data separada
                  />
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

                    {!isLoading && !error && filteredAndSortedPicks.length > 0 && (
                        <div className="grid gap-6 md:grid-cols-2">
                            {filteredAndSortedPicks.map(pick => (
                                <MemoizedPickCard
                                    key={pick.id}
                                    pick={pick}
                                    showStatus={true}
                                    compact={false}
                                    date={selectedDate}
                                />
                            ))}
                        </div>
                    )}

                    {!isLoading && !error && filteredAndSortedPicks.length === 0 && selectedDate && (
                        <div className="bg-light-100/50 dark:bg-dark-800/50 p-8 rounded-xl
                            text-center border border-light-300 dark:border-dark-600
                            shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
                            <AlertTriangle className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
                            <h3 className="text-xl font-semibold text-dark-900 dark:text-light-100 mb-2">
                                Nenhum palpite encontrado
                            </h3>
                            <p className="text-dark-900/70 dark:text-light-100/70">
                                {selectedLeague || selectedConfidence 
                                    ? 'Nenhum palpite atende aos filtros selecionados.'
                                    : `Não há palpites disponíveis para ${formatDateDisplay(selectedDate)}.`
                                }
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Soccer;

