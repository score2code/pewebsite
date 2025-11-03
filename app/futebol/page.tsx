"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Zap, Calendar, AlertTriangle, Loader2 } from 'lucide-react';
// IMPORTADO: useRouter para navegação programática
import { useRouter } from 'next/navigation';
import { Pick } from '@/app/types';
import SportPickCard from '@/app/components/sports/pick-card';

// --- Configuração e Tipagem ---

const API_BASE_URL = '/api/picks';

const formatDateDisplay = (dateString: string) => {
    const date = new Date(dateString + 'T03:00:00');
    return date.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });
};

const changeDate = (currentDate: string, days: number) => {
    const date = new Date(currentDate + 'T00:00:00');
    date.setDate(date.getDate() + days);
    return date.toISOString().split('T')[0];
};

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
    const pickDate = getFormattedDate();

    const [selectedDate, setSelectedDate] = useState(pickDate);
    const [picksData, setPicksData] = useState<Pick[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Função para buscar os dados da API
    const fetchPicks = useCallback(async (date: string) => {
        setIsLoading(true);
        setError(null);

        try {
            // Tenta buscar da API primeiro (com timeout)
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 2000);

            const response = await fetch(`${API_BASE_URL}?date=${date}`, { signal: controller.signal });
            clearTimeout(timeoutId);

            if (!response.ok) {
                throw new Error(`Erro HTTP: ${response.status}`);
            }

            const data = await response.json();

            if (data.data && data.data.length > 0) {
                setPicksData(data.data);
            } else {
              setPicksData([]);
            }
        } catch (err) {
          // Se falhar a API (ou timeout), usa o mock
          console.error("Erro ao buscar dados da API. Usando Mock Data:", err);
          setError(`Não foi possível conectar à API. (Usando mock data, mas não há dados para ${date}).`);
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
                    <p className="text-dark-900/70 dark:text-light-100/70 mt-2">Análises e Odds Diárias para Apostas Esportivas</p>
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
                                <SportPickCard
                                    key={pick.id}
                                    pick={pick}
                                    date={selectedDate}
                                    sport="futebol"
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

export default Soccer;

