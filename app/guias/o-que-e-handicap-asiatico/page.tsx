
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Análise Avançada: Handicap Asiático no Futebol',
    description: 'Compreenda a metodologia do Handicap Asiático, uma ferramenta sofisticada para análise e previsão de resultados no futebol.',
};

export default function AsianHandicapGuidePage() {
    return (
        <div className="min-h-screen pt-8 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8
                    border border-light-300 dark:border-dark-600
                    shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
                    <h1 className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-6">
                        Análise Avançada: Handicap Asiático no Futebol
                    </h1>

                    <div className="prose prose-purple dark:prose-invert max-w-none text-dark-900/70 dark:text-light-100/70 space-y-6">
                        <p className="text-xl">O Handicap Asiático é uma metodologia avançada de análise esportiva que introduz um fator de equalização entre equipes de diferentes níveis técnicos. Esta abordagem permite uma análise mais precisa das probabilidades reais em confrontos desequilibrados.</p>

                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100">Fundamentos da Metodologia</h2>
                        <p>O sistema aplica um ajuste matemático ao placar final, atribuindo uma vantagem ou desvantagem virtual a uma das equipes. Isso permite uma análise mais equilibrada, especialmente em confrontos com grande disparidade técnica.</p>

                        <blockquote className="border-l-4 border-purple-500 dark:border-purple-400 pl-4 italic bg-light-200/30 dark:bg-dark-700/30 p-4 rounded-r-lg">
                            <strong>Conceito Fundamental:</strong> Diferentemente do handicap tradicional, este método permite análises parciais e ajustes dinâmicos baseados no desenvolvimento da partida.
                        </blockquote>                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Exemplos Práticos de Linhas Comuns</h2>

                        <div className="bg-light-200/50 dark:bg-dark-700/50 rounded-lg p-6
                            border border-light-300 dark:border-dark-600">
                            <h3 className="font-bold text-lg text-dark-900 dark:text-light-100 mb-3">Linha Base (0.0)</h3>
                            <p className="text-dark-900/70 dark:text-light-100/70">Análise neutra sem ajustes. Em caso de empate, os dados são desconsiderados para manter a integridade estatística da análise.</p>
                        </div>

                        <div className="bg-light-200/50 dark:bg-dark-700/50 rounded-lg p-6
                            border border-light-300 dark:border-dark-600">
                            <h3 className="font-bold text-lg text-dark-900 dark:text-light-100 mb-3">Ajuste -0.5</h3>
                            <p className="text-dark-900/70 dark:text-light-100/70">Equivalente à análise de vitória simples. A equipe precisa vencer para validar a previsão, sem considerar margens específicas.</p>
                        </div>

                        <div className="bg-light-200/50 dark:bg-dark-700/50 rounded-lg p-6
                            border border-light-300 dark:border-dark-600">
                            <h3 className="font-bold text-lg text-dark-900 dark:text-light-100 mb-3">Ajuste -1.0</h3>
                            <p className="text-dark-900/70 dark:text-light-100/70">Análise de superioridade clara. Requer vitória por 2+ gols para validação completa. Vitória por 1 gol resulta em análise parcial.</p>
                        </div>

                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100">Conclusão</h2>
                        <p>O domínio da metodologia de Handicap Asiático é essencial para análises esportivas avançadas. Esta ferramenta permite uma avaliação mais precisa de confrontos desequilibrados e oferece flexibilidade na análise de diferentes cenários. Recomenda-se começar com ajustes básicos (0.0, -0.5, -1.0) antes de explorar variações mais complexas como quartos (-0.25, -0.75).</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
