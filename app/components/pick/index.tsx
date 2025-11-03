"use client"

import React from 'react';
import { ChevronLeft, Loader, AlertTriangle, Trophy, TrendingUp } from 'lucide-react';

import { Pick } from '@/app/types';

const PickAnalysisClient = ({ pickId, date, type = 'soccer' }: { pickId: string, date: string, type?: string }) => {
    // Hooks de Estado
    const [pick, setPick] = React.useState<Pick | null>(null);
    const [loading, setLoading] = React.useState(true);

    console.log("PickAnalysisClient Props:", { pickId, date, type });

    // Efeito para buscar os dados da API
    React.useEffect(() => {
        const fetchAnalysis = async () => {
            setLoading(true);

            try {
                // 🛑 CORREÇÃO: Usar um URL absoluto (incluindo window.location.origin)
                // para evitar o erro 'Failed to parse URL' em ambientes restritos.
                const relativePath = `/api/picks?&type=${type}&date=${date}&id=${pickId}`;
                // Garantir que a chamada fetch usa um URL que pode ser parseado corretamente.
                const apiUrl = new URL(relativePath, window.location.origin).toString();

                const response = await fetch(apiUrl);
                const result = await response.json();

                if (response.ok && result.data) {
                    // O resultado.data deve ser o objeto único do palpite
                    setPick(result.data);
                } else {
                    console.error("API Error or Pick not found:", result.message);
                    setPick(null);
                }
            } catch (error) {
                console.error("Fetch failed:", error);
                setPick(null);
            } finally {
                setLoading(false);
            }
        };
        fetchAnalysis();
    }, [pickId]);

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
            <div className="flex flex-col items-center justify-center min-h-screen text-center p-6 bg-gray-900 text-white">
                <Loader className="w-10 h-10 animate-spin text-green-500 mb-4" />
                <p className="text-xl">A carregar análise...</p>
            </div>
        );
    }

    if (!pick) {
        // Renderiza um 404 estilizado
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] text-center p-6">
                 <div className="bg-gray-800 p-10 rounded-xl shadow-2xl border-t-4 border-red-600 max-w-lg w-full">
                    <AlertTriangle className="w-16 h-16 mx-auto mb-6 text-red-500" />
                    <h2 className="text-2xl font-semibold text-gray-200 mb-4">Análise Não Encontrada</h2>
                    <p className="text-gray-400 mb-8">O palpite com ID "{pickId}" não foi encontrado para a data simulada (2025-11-04).</p>
                    <GoBackButton />
                </div>
            </div>
        );
    }

    // Calcula a cor da confiança
    const confidenceColor = pick.confidence >= 80 ? 'bg-green-600' :
                            pick.confidence >= 70 ? 'bg-yellow-600' : 'bg-red-600';

    // Conteúdo Principal
    return (
        <div className="max-w-4xl mx-auto p-4 sm:p-0 pt-8 text-white font-sans">

            {/* Botão Voltar */}
            <GoBackButton />

            {/* Cabeçalho do Jogo */}
            <header className="bg-gray-800 p-6 rounded-xl shadow-lg border-t-4 border-green-500 mb-8">
                <div className="flex justify-between items-start mb-4">
                    <h1 className="text-3xl font-extrabold text-white">
                        {pick.homeTeam} vs {pick.awayTeam}
                    </h1>
                    <span className="text-sm font-semibold text-gray-400">
                        <Trophy className="w-4 h-4 inline mr-1 text-yellow-500" />
                        {pick.league}
                    </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Odds e Dica */}
                    <div className="bg-gray-700 p-4 rounded-lg">
                        <p className="text-sm text-gray-400">Palpite Principal</p>
                        <p className="text-xl font-bold text-green-400">{pick.tip}</p>
                        <p className="text-lg text-white mt-1">Odds: <span className="font-bold">{pick.odds?.toFixed(2) || 'N/A'}</span></p>
                    </div>

                    {/* Confiança */}
                    <div className={`p-4 rounded-lg flex flex-col justify-center items-center ${confidenceColor} shadow-md`}>
                        <p className="text-sm font-medium text-white/80">Nível de Confiança</p>
                        <p className="text-3xl font-extrabold text-white">{pick.confidence}%</p>
                    </div>
                </div>
            </header>

            {/* Análise Detalhada */}
            <section className="bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-green-500 mb-4 border-b border-gray-700 pb-2">
                    Análise Profissional Completa
                </h3>

                <div className="text-gray-300 space-y-4 whitespace-pre-wrap leading-relaxed">
                    <p>{pick.analysis}</p>
                </div>

                {/* Destaque de Risco */}
                <div className="mt-8 p-4 bg-gray-700 rounded-lg flex items-center border border-gray-600">
                    <TrendingUp className="w-6 h-6 mr-3 text-yellow-500" />
                    <p className="text-sm text-gray-400">
                        Lembre-se: Aposte com responsabilidade. Esta análise é uma opinião e não garante resultados.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default PickAnalysisClient;
