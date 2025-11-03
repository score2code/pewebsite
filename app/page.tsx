"use client"; // CRÍTICO: Este arquivo DEVE ser um Componente de Cliente para usar useState/useMemo.

import React, { useState, useMemo, useEffect } from 'react';
// IMPORTAÇÃO CORRIGIDA: Agora importamos apenas a interface PickData do arquivo de tipos compartilhado.
import { PickData } from '@/app/types';
import { Check, X, Clock, Search, TrendingUp, TrendingDown, RefreshCcwIcon, Eye, ChevronRight } from 'lucide-react';

// --- SHARED COMPONENTS ---

const ConfidencePill: React.FC<{ confidence: number }> = ({ confidence }) => {
    let color = 'bg-gray-500';
    if (confidence >= 80) color = 'bg-green-600';
    else if (confidence >= 60) color = 'bg-yellow-600';
    else if (confidence >= 40) color = 'bg-orange-600';

    return (
        <div className={`text-xs font-semibold px-2 py-0.5 rounded-full text-white ${color} shadow-md`}>
            Confiança: {confidence}%
        </div>
    );
};

const ResultBadge: React.FC<{ result?: PickData['result'] }> = ({ result }) => {
    if (!result || result === 'Pending') {
        return (
            <span className="flex items-center text-xs font-bold text-yellow-400 bg-yellow-900/30 px-3 py-1 rounded-full border border-yellow-700">
                <Clock className="w-3 h-3 mr-1" />
                AGUARDANDO
            </span>
        );
    }

    const isWin = result === 'Win';
    return (
        <span className={`flex items-center text-xs font-bold px-3 py-1 rounded-full border ${isWin ? 'text-green-400 bg-green-900/30 border-green-700' : 'text-red-400 bg-red-900/30 border-red-700'}`}>
            {isWin ? <Check className="w-3 h-3 mr-1" /> : <X className="w-3 h-3 mr-1" />}
            {isWin ? 'GANHO' : 'PERDA'}
        </span>
    );
};

const PickDetailModal: React.FC<{ pick: PickData | null, onClose: () => void }> = ({ pick, onClose }) => {
    if (!pick) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center p-4" onClick={onClose}>
            <div
                className="bg-gray-900 rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border-t-4 border-cyan-500 transform transition-all duration-300 scale-100"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="p-6 bg-gray-800 rounded-t-xl border-b border-gray-700">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-400 bg-gray-700 px-2 py-0.5 rounded">{pick.league}</span>
                        <button onClick={onClose} className="text-gray-400 hover:text-white transition" aria-label="Fechar">
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                    <h2 className="text-2xl font-bold text-white mt-1">{pick.homeTeam} vs {pick.awayTeam}</h2>
                </div>
                <div className="p-6 space-y-5">
                    <div className="flex justify-between items-center p-3 bg-gray-800 rounded-lg">
                        <div className="flex flex-col">
                            <span className="text-sm text-gray-400">Palpite Principal</span>
                            <span className="text-xl font-extrabold text-cyan-400">{pick.tip}</span>
                        </div>
                        <div className="text-right">
                            <ConfidencePill confidence={pick.confidence} />
                            <span className="block text-3xl font-bold text-green-500 mt-1">@{pick.odds.toFixed(2)}</span>
                        </div>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg shadow-inner border border-gray-700">
                        <h3 className="text-lg font-bold text-white mb-2 flex items-center">
                            <ChevronRight className="w-5 h-5 mr-1 text-cyan-500" />
                            Análise Detalhada
                        </h3>
                        {pick.analysis ? (
                            <p className="text-gray-300 whitespace-pre-line text-sm leading-relaxed">{pick.analysis}</p>
                        ) : (
                            <p className="text-gray-500 text-sm italic">Nenhuma análise detalhada fornecida para este palpite.</p>
                        )}
                    </div>
                    <div className="text-center pt-3 border-t border-gray-700">
                        <span className="text-sm font-medium text-gray-400 block mb-1">Status do Palpite</span>
                        <ResultBadge result={pick.result} />
                    </div>
                </div>
            </div>
        </div>
    );
};

const PickCard: React.FC<{ pick: PickData, onClick: (pick: PickData) => void }> = ({ pick, onClick }) => {
    const isWin = pick.result === 'Win';
    const borderColor = pick.result === 'Pending' ? 'border-cyan-500' :
                        isWin ? 'border-green-500' : 'border-red-500';

    return (
        <button
            onClick={() => onClick(pick)}
            className={`bg-gray-800 rounded-xl p-6 shadow-xl transition-all hover:scale-[1.02] duration-300 border-t-4 ${borderColor} flex flex-col justify-between h-full text-left w-full group focus:ring-4 focus:ring-cyan-500/50`}
        >
            <div className="flex justify-between items-start mb-4">
                <span className="text-sm font-medium text-gray-400">{pick.league}</span>
                <span className="text-sm font-semibold text-gray-300">{pick.dateTime}</span>
            </div>
            <div className="text-center my-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug group-hover:text-cyan-400 transition-colors duration-300">
                    {pick.homeTeam} <span className="text-cyan-500 mx-2">vs</span> {pick.awayTeam}
                </h2>
                <div className="mt-3">
                    <span className="bg-gray-700 text-cyan-400 font-bold text-lg px-4 py-1.5 rounded-full inline-block">
                        ODDS: {pick.odds.toFixed(2)}
                    </span>
                </div>
            </div>
            <div className="text-center mt-6 p-4 bg-gray-900 rounded-lg border border-gray-700">
                <p className="text-sm text-gray-400 mb-1">NOSSO PALPITE:</p>
                <p className="text-xl font-bold text-white uppercase">{pick.tip}</p>
            </div>
            <div className="mt-5 flex justify-between items-center pt-4 border-t border-gray-700/50">
                <ConfidencePill confidence={pick.confidence} />
                <div className="flex items-center space-x-2">
                    <ResultBadge result={pick.result} />
                    <span className="flex items-center text-xs font-bold text-cyan-400 bg-gray-700 px-3 py-1 rounded-full hover:bg-cyan-700 hover:text-white transition">
                        <Eye className="w-3 h-3 mr-1" />
                        Ver Análise
                    </span>
                </div>
            </div>
        </button>
    );
};

const StatsDashboard: React.FC<{ picks: PickData[] }> = ({ picks }) => {
    const stats = useMemo(() => {
        const historicalPicks = picks.filter(p => p.result !== 'Pending');
        const totalPicks = historicalPicks.length;
        const wins = historicalPicks.filter(p => p.result === 'Win').length;
        const pending = picks.length - totalPicks;
        const accuracy = totalPicks > 0 ? (wins / totalPicks) * 100 : 0;
        const totalReturn = historicalPicks.reduce((acc, pick) => acc + (pick.result === 'Win' ? pick.odds - 1 : -1), 0);
        const yieldPercentage = totalPicks > 0 ? (totalReturn / totalPicks) * 100 : 0;

        const StatBox: React.FC<{ title: string, value: string | number, color: string, icon: React.ReactNode }> = ({ title, value, color, icon }) => (
            <div className="p-4 bg-gray-800 rounded-xl shadow-lg border-l-4 border-cyan-500/0 hover:border-l-4 hover:border-cyan-500 transition-all duration-300">
                <div className="flex items-center space-x-2 text-gray-400 uppercase font-semibold text-sm">
                    {icon}
                    <p>{title}</p>
                </div>
                <p className={`text-3xl font-bold mt-1 ${color}`}>
                    {value}
                </p>
            </div>
        );

        const yieldColor = yieldPercentage >= 5 ? 'text-green-400' : yieldPercentage >= 0 ? 'text-yellow-400' : 'text-red-400';
        const yieldIcon = yieldPercentage >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />;

        return (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                <StatBox title="Palpites Históricos" value={totalPicks} color="text-cyan-400" icon={<RefreshCcwIcon className="w-4 h-4" />} />
                <StatBox title="Taxa de Acerto" value={`${accuracy.toFixed(1)}%`} color="text-green-400" icon={<Check className="w-4 h-4" />} />
                <StatBox title="Yield (Lucro)" value={`${yieldPercentage.toFixed(2)}%`} color={yieldColor} icon={yieldIcon} />
                <StatBox title="Aguardando" value={pending} color="text-yellow-400" icon={<Clock className="w-4 h-4" />} />
            </div>
        );
    }, [picks]);

    return stats;
};


// --- COMPONENTE PRINCIPAL (CLIENTE) ---

const Home: React.FC = () => {
    // 1. ESTADO DE DADOS E CARREGAMENTO
    const [picks, setPicks] = useState<PickData[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // 2. ESTADOS DE FILTRO (Adicionado o filtro de liga)
    const [activeFilter, setActiveFilter] = useState('ALL');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedPick, setSelectedPick] = useState<PickData | null>(null);
    const [activeLeagueFilter, setActiveLeagueFilter] = useState('ALL');

    // 3. FUNÇÃO DE BUSCA DE DADOS (Simulando o fetch da API)
    useEffect(() => {
        const fetchPicks = async () => {
            setIsLoading(true);
            setError(null);
            try {
                // Acessamos o Route Handler para buscar os dados de forma correta e segura
                // Nota: O Next.js otimiza fetches para o mesmo projeto.
                // Usamos uma data fixa para simular o carregamento do seu picks.json
                const fetchUrl = `/api/picks?date=2025-11-04`;

                const response = await fetch(fetchUrl);

                if (!response.ok) {
                    throw new Error(`Falha na busca de dados: ${response.statusText}`);
                }

                const result = await response.json();
                setPicks(result.data || []);
            } catch (err) {
                // Lidar com o erro de forma mais visível para o usuário
                setError("Não foi possível carregar os palpites. Verifique se o servidor está rodando e se o arquivo 'picks.json' existe.");
                console.error("Erro no fetch de dados:", err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPicks();
    }, []); // Executa apenas na montagem

    // 4. LÓGICA DE FILTRO E LIGAS ÚNICAS
    const uniqueLeagues = useMemo(() => {
        const leagues = picks.map(p => p.league);
        // Usa Set para obter valores únicos e depois converte para Array
        return ['ALL', ...Array.from(new Set(leagues))].sort();
    }, [picks]);

    const handleOpenModal = (pick: PickData) => setSelectedPick(pick);
    const handleCloseModal = () => setSelectedPick(null);

    const filteredPicks = useMemo(() => {
        return picks
            .filter(pick => {
                // 1. FILTRO POR STATUS
                if (activeFilter === 'WIN' && pick.result !== 'Win') return false;
                if (activeFilter === 'LOSS' && pick.result !== 'Loss') return false;
                if (activeFilter === 'PENDING' && pick.result !== 'Pending') return false;

                // 2. FILTRO POR LIGA
                if (activeLeagueFilter !== 'ALL' && pick.league !== activeLeagueFilter) return false;

                // 3. FILTRO POR BUSCA DE TEXTO
                const lowerSearch = searchTerm.toLowerCase();
                if (searchTerm.trim() !== '' &&
                    !pick.homeTeam.toLowerCase().includes(lowerSearch) &&
                    !pick.awayTeam.toLowerCase().includes(lowerSearch) &&
                    !pick.league.toLowerCase().includes(lowerSearch) &&
                    !pick.tip.toLowerCase().includes(lowerSearch)
                ) {
                    return false;
                }

                return true;
            })
            .sort((a, b) => {
                if (a.result === 'Pending' && b.result !== 'Pending') return -1;
                if (a.result !== 'Pending' && b.result === 'Pending') return 1;
                return b.confidence - a.confidence;
            });
    }, [activeFilter, searchTerm, activeLeagueFilter, picks]);


    // 5. RENDERIZAÇÃO
    return (
        <div className="p-4 sm:p-8 max-w-7xl mx-auto min-h-screen bg-gray-900">
            {/* Header and Branding */}
            <header className="text-center mb-12 py-8 bg-gray-800 rounded-xl shadow-2xl border-b-4 border-cyan-500">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-2">
                    palpiteesportivo.<span className="text-cyan-500">website</span>
                </h1>
                <p className="text-lg text-gray-400">
                    Análises de valor para os jogos de hoje. Simples e transparente.
                </p>
            </header>

            {/* Conteúdo Principal */}
            {isLoading ? (
                <div className="text-center p-12 text-cyan-400 text-xl">
                    <div className="animate-spin inline-block mr-2"><RefreshCcwIcon /></div>
                    Carregando palpites...
                </div>
            ) : error ? (
                <div className="text-center p-12 bg-red-900/30 rounded-xl text-red-400 border border-red-700">
                    <p className="text-xl font-bold mb-2">ERRO!</p>
                    <p>{error}</p>
                </div>
            ) : (
                <>
                    <StatsDashboard picks={picks} />

                    {/* Filters and Search (Div principal) */}
                    <div className="bg-gray-800 p-4 sm:p-6 rounded-xl shadow-inner mb-8 flex flex-col space-y-4">

                        {/* Linha 1: Pesquisa de Texto */}
                        <div className="relative w-full">
                            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Buscar Time, Liga ou Palpite..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full p-3 pl-10 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition"
                            />
                        </div>

                        {/* Linha 2: Filtros de Liga */}
                        <div>
                            <h3 className="text-sm font-semibold text-gray-400 mb-2">Filtrar por Liga:</h3>
                            <div className="flex flex-wrap gap-2 max-h-24 overflow-y-auto pr-2">
                                {uniqueLeagues.map((league) => (
                                    <button
                                        key={league}
                                        onClick={() => setActiveLeagueFilter(league)}
                                        className={`px-3 py-1 text-sm rounded-lg font-medium transition whitespace-nowrap ${
                                            activeLeagueFilter === league
                                                ? 'bg-cyan-600 text-white shadow-md shadow-cyan-500/50'
                                                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                        }`}
                                    >
                                        {league === 'ALL' ? 'Todas as Ligas' : league}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Linha 3: Filtros de Status (WIN/LOSS/PENDING) */}
                        <div>
                            <h3 className="text-sm font-semibold text-gray-400 mb-2">Filtrar por Status:</h3>
                            <div className="flex flex-wrap gap-3">
                                {['ALL', 'PENDING', 'WIN', 'LOSS'].map((filter) => (
                                    <button
                                        key={filter}
                                        onClick={() => setActiveFilter(filter)}
                                        className={`px-4 py-2 rounded-lg font-semibold transition ${
                                            activeFilter === filter
                                                ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/50'
                                                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                        }`}
                                    >
                                        {filter === 'ALL' && 'Todos'}
                                        {filter === 'PENDING' && `Aguardando (${picks.filter(p => p.result === 'Pending' || !p.result).length})`}
                                        {filter === 'WIN' && `Ganhos (${picks.filter(p => p.result === 'Win').length})`}
                                        {filter === 'LOSS' && `Perdidos (${picks.filter(p => p.result === 'Loss').length})`}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Picks Grid */}
                    <h2 className="text-3xl font-bold text-white mb-6 border-b border-gray-700 pb-3">
                        {activeLeagueFilter !== 'ALL' ? activeLeagueFilter + ' - ' : ''}
                        {activeFilter === 'ALL' ? 'Todos os Palpites' :
                         activeFilter === 'PENDING' ? 'Palpites de Hoje (Aguardando)' :
                         activeFilter === 'WIN' ? 'Histórico de Ganhos' : 'Histórico de Perdas'}
                    </h2>

                    {filteredPicks.length === 0 ? (
                        <div className="text-center p-12 bg-gray-800 rounded-xl text-gray-400 border border-gray-700">
                            <p className="text-xl font-bold mb-2">Nenhum Palpite Encontrado</p>
                            <p>Sua busca não retornou resultados. Tente ajustar os filtros ou a busca.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {filteredPicks.map(pick => (
                                <PickCard key={pick.id} pick={pick} onClick={handleOpenModal} />
                            ))}
                        </div>
                    )}

                    {/* Modal de Detalhes */}
                    <PickDetailModal pick={selectedPick} onClose={handleCloseModal} />
                </>
            )}

            {/* Footer */}
            <footer className="text-center mt-16 pt-8 border-t border-gray-700">
                <p className="text-sm text-gray-500">
                    © {new Date().getFullYear()} palpiteesportivo.website. Todos os direitos reservados.
                </p>
                <p className="text-xs text-gray-600 mt-1">
                    Jogue com responsabilidade. As apostas são por sua conta e risco.
                </p>
            </footer>
        </div>
    );
};

export default Home;
