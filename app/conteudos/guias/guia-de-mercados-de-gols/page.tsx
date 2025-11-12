
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Análise de Mercados de Gols | Guia Completo',
    description: 'Domine as técnicas de análise estatística para prever tendências de gols em partidas de futebol com nosso guia especializado.',
};

export default function GoalMarketsGuidePage() {
    return (
        <div className="min-h-screen pt-8 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8
                    border border-light-300 dark:border-dark-600
                    shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
                    <h1 className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-6">
                        Análise Estatística de Gols no Futebol
                    </h1>

                    <div className="prose prose-purple dark:prose-invert max-w-none text-dark-900/70 dark:text-light-100/70 space-y-6">
                        <p className="text-xl">A análise de probabilidade de gols é uma das ferramentas mais valiosas para previsões esportivas. Este método se concentra na análise estatística do total de gols em uma partida, considerando o histórico e padrões de ambas as equipes.</p>

                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100">Como Funciona a Análise de Gols</h2>
                        <p>Na análise estatística de gols, estabelecemos uma linha base e avaliamos a probabilidade do número total de gols ultrapassar (Over) ou ficar abaixo (Under) dessa linha. A referência mais comum é 2.5 gols.</p>

                        <blockquote className="border-l-4 border-purple-500 dark:border-purple-400 pl-4 italic bg-light-200/30 dark:bg-dark-700/30 p-4 rounded-r-lg">
                            <strong>Conceito Fundamental:</strong> A linha decimal (2.5) garante uma análise binária clara, eliminando a possibilidade de resultados indefinidos.
                        </blockquote>                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Exemplos com a Linha 2.5</h2>

                        <div className="bg-light-200/50 dark:bg-dark-700/50 rounded-lg p-6
                            border border-light-300 dark:border-dark-600">
                            <h3 className="font-bold text-lg text-dark-900 dark:text-light-100 mb-3">Cenário: Mais de 2.5 Gols</h3>
                            <p className="text-dark-900/70 dark:text-light-100/70">Previsão confirmada quando o total de gols é 3 ou superior:</p>
                            <ul className="list-disc list-inside mt-2 text-dark-900/70 dark:text-light-100/70">
                                <li>Resultados como 2-1, 3-0, 2-2</li>
                                <li>Padrão típico de jogos mais ofensivos</li>
                            </ul>
                        </div>

                        <div className="bg-light-200/50 dark:bg-dark-700/50 rounded-lg p-6
                            border border-light-300 dark:border-dark-600">
                            <h3 className="font-bold text-lg text-dark-900 dark:text-light-100 mb-3">Cenário: Menos de 2.5 Gols</h3>
                            <p className="text-dark-900/70 dark:text-light-100/70">Previsão confirmada quando o total de gols é 2 ou inferior:</p>
                            <ul className="list-disc list-inside mt-2 text-dark-900/70 dark:text-light-100/70">
                                <li>Resultados como 1-1, 1-0, 0-0</li>
                                <li>Padrão típico de jogos mais defensivos</li>
                            </ul>
                        </div>

                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100">Metodologia de Análise</h2>
                        <p>Para uma análise efetiva, considere os seguintes indicadores estatísticos:</p>
                        <ul className="list-disc list-inside text-dark-900/70 dark:text-light-100/70 space-y-2">
                            <li><strong className="text-dark-900 dark:text-light-100">Média de Gols:</strong> Análise histórica de gols marcados e sofridos</li>
                            <li><strong className="text-dark-900 dark:text-light-100">Padrão Tático:</strong> Tendências ofensivas ou defensivas das equipes</li>
                            <li><strong className="text-dark-900 dark:text-light-100">Histórico de Confrontos:</strong> Padrões estatísticos dos jogos anteriores</li>
                            <li><strong className="text-dark-900 dark:text-light-100">Fatores de Impacto:</strong> Ausências de jogadores-chave e suas implicações táticas</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100">Conclusão</h2>
                        <p>A análise de tendências de gols é uma metodologia estatística poderosa que permite fazer previsões baseadas em dados concretos, independentemente do resultado final da partida. É uma abordagem que privilegia a análise objetiva e quantitativa do futebol.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
