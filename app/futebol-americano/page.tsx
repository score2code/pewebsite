"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Zap, Calendar, AlertTriangle, Loader2 } from 'lucide-react';
// IMPORTADO: useRouter para navegação programática
import { useRouter } from 'next/navigation';

// --- Configuração e Tipagem ---

/**
 * @typedef {object} Pick
 * @property {string} id
 * @property {string} league
 * @property {string} homeTeam
 * @property {string} awayTeam
 * @property {string} dateTime
 * @property {string} tip
 * @property {number} odds
 * @property {number} confidence
 * @property {string} result
 * @property {string} analysis
 */

const API_BASE_URL = '/api/picks';

const formatDateDisplay = (dateString) => {
    const date = new Date(dateString + 'T03:00:00');
    return date.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });
};

const changeDate = (currentDate, days) => {
    const date = new Date(currentDate + 'T00:00:00');
    date.setDate(date.getDate() + days);
    return date.toISOString().split('T')[0];
};

// --- Componentes de UI ---

/**
 * @param {{ pick: Pick }} props
 */
const PickCard = ({ pick, date }) => {
    const router = useRouter(); // Inicializa o hook de roteamento
    const confidenceColor = pick.confidence >= 80 ? 'bg-green-600' :
                            pick.confidence >= 70 ? 'bg-yellow-600' : 'bg-red-600';

    // CORRIGIDO: Agora usa o router.push para navegar
    const handleNavigation = () => {
        router.push(`/futebol-americano/${date}/${pick.id}`);
    };

    return (
        <div
            className="bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-700 transition hover:border-green-500 cursor-pointer"
            onClick={handleNavigation}
        >
            <div className="flex justify-between items-start mb-3">
                <span className="text-sm font-semibold text-green-400 flex items-center">
                    <Zap className="w-4 h-4 mr-1" />
                    {pick.league}
                </span>
                <span className="text-xs text-gray-400 flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {pick.dateTime}
                </span>
            </div>

            <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-white mb-1">
                    {pick.homeTeam} vs {pick.awayTeam}
                </h3>
            </div>

            <div className="grid grid-cols-3 gap-3 items-center text-center">
                {/* Dica de Aposta */}
                <div className="col-span-2 p-2 bg-gray-700 rounded-lg">
                    <p className="text-xs text-gray-400">Palpite</p>
                    <p className="text-lg font-extrabold text-white">{pick.tip}</p>
                </div>

                {/* Odds */}
                <div className="p-2 bg-green-600 rounded-lg shadow-md">
                    <p className="text-xs font-medium text-white/80">Odds</p>
                    <p className="text-xl font-bold text-white">{pick.odds.toFixed(2)}</p>
                </div>
            </div>

            <div className="mt-3 flex justify-end items-center pt-2 border-t border-gray-700/50">
                 <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${confidenceColor} text-white mr-auto`}>
                    Confiança: {pick.confidence}%
                </span>

                {/* Botão de Análise */}
                <button
                    onClick={(e) => { e.stopPropagation(); handleNavigation(); }}
                    className="px-3 py-1 text-sm font-semibold text-white bg-green-700 rounded-full hover:bg-green-600 transition duration-150 shadow-md"
                >
                    Ver Análise
                </button>
            </div>
        </div>
    );
};

// --- Componente Principal da Rota /futebol ---

const Football = () => {
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
    /** @type {[Pick[], React.Dispatch<React.SetStateAction<Pick[]>>]} */
    const [picksData, setPicksData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // Função para buscar os dados da API
    const fetchPicks = useCallback(async (date) => {
        setIsLoading(true);
        setError(null);


        try {
            // Tenta buscar da API primeiro (com timeout)
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 2000);

            const response = await fetch(`${API_BASE_URL}?type=football&date=${date}`, { signal: controller.signal });
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
    const handleDateChange = (days) => {
        const newDate = changeDate(selectedDate, days);
        setSelectedDate(newDate);
        fetchPicks(newDate);
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white font-sans p-4 sm:p-8">
            <div className="max-w-4xl mx-auto">
                {/* Título Principal */}
                <header className="text-center mb-8">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-green-500 tracking-tight flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trophy mr-3"><path d="M6 9H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2"/><path d="M6 10v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-7"/><path d="M5 19v2"/><path d="M19 19v2"/><path d="M12 10l.75 3.5l1.5-2.5l1.5 2.5L17 10"/><path d="M12 17h0"/></svg>
                        Palpites do Dia
                    </h1>
                    <p className="text-gray-400 mt-2">Análises e Odds Diárias para Apostas Esportivas</p>
                </header>

                {/* Seletor de Data */}
                <div className="flex justify-center items-center bg-gray-800 p-3 rounded-xl shadow-lg mb-8">
                    <button
                        onClick={() => handleDateChange(-1)}
                        className="p-2 rounded-full text-gray-400 hover:bg-gray-700 hover:text-white transition"
                        aria-label="Dia Anterior"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <div className="mx-4 text-center">
                        <p className="text-sm text-gray-400 font-medium">Data Selecionada</p>
                        <h2 className="text-xl font-bold text-white">
                            {formatDateDisplay(selectedDate)}
                        </h2>
                    </div>
                    <button
                        onClick={() => handleDateChange(1)}
                        className="p-2 rounded-full text-gray-400 hover:bg-gray-700 hover:text-white transition"
                        aria-label="Próximo Dia"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Conteúdo Principal */}
                <div className="min-h-[200px]">
                    {isLoading && (
                        <div className="flex justify-center items-center py-12">
                            <Loader2 className="w-8 h-8 animate-spin text-green-500 mr-3" />
                            <p className="text-lg text-gray-400">Carregando palpites...</p>
                        </div>
                    )}

                    {error && !isLoading && (
                        <div className="bg-red-900/30 p-4 rounded-lg flex items-center justify-center text-red-400 border border-red-700 shadow-md">
                            <AlertTriangle className="w-5 h-5 mr-2" />
                            <p className="font-medium">{error}</p>
                        </div>
                    )}

                    {!isLoading && !error && picksData.length > 0 && (
                        <div className="grid gap-6 md:grid-cols-2">
                            {picksData.map(pick => (
                                <PickCard
                                    key={pick.id}
                                    pick={pick}
                                    date={selectedDate}
                                />
                            ))}
                        </div>
                    )}

                    {!isLoading && !error && picksData.length === 0 && selectedDate && (
                         <div className="bg-gray-800 p-6 rounded-lg text-center text-gray-400">
                            <Calendar className="w-8 h-8 mx-auto mb-3 text-green-500" />
                            <p className="text-lg font-semibold">Sem palpites agendados.</p>
                            <p className="text-sm">Tente selecionar uma data diferente.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Football;
