
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Guia de Mercados de Gols (Over/Under)',
    description: 'Aprenda a apostar no total de gols de uma partida com nosso guia completo sobre o mercado de Mais/Menos Gols (Over/Under).',
};

export default function GoalMarketsGuidePage() {
    return (
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen pt-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg p-8">
                    <h1 className="text-4xl font-bold text-yellow-500 mb-6">Guia de Mercados de Gols (Over/Under)</h1>
                    
                    <div className="prose prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-6">
                        <p className="text-xl">O mercado de "Mais/Menos Gols" (ou Over/Under) é um dos mais populares nas apostas de futebol. Em vez de prever o vencedor, você aposta no número total de gols que serão marcados na partida, somando os gols de ambas as equipes.</p>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Como Funciona o Mercado Over/Under</h2>
                        <p>A casa de apostas define uma linha, e você aposta se o número total de gols no jogo será maior (Over) ou menor (Under) que essa linha. A linha mais comum é a de 2.5 gols.</p>
                        
                        <blockquote className="border-l-4 border-yellow-500 dark:border-yellow-500 pl-4 italic">
                            <strong>Ponto Chave:</strong> A linha decimal (como 2.5) é usada para garantir que haja sempre um resultado vencedor ou perdedor, sem a possibilidade de empate (aposta devolvida).
                        </blockquote>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Exemplos com a Linha 2.5</h2>
                        
                        <div className="bg-gray-200 dark:bg-gray-900 rounded-lg p-4 border border-gray-300 dark:border-gray-700">
                            <h3 className="font-bold text-lg text-gray-900 dark:text-white">Aposta em "Mais de 2.5 Gols" (Over 2.5)</h3>
                            <p>Você ganha se o jogo tiver 3 ou mais gols no total (ex: 2-1, 3-0, 2-2).</p>
                            <p>Você perde se o jogo tiver 2 ou menos gols (ex: 1-1, 1-0, 0-0).</p>
                        </div>

                        <div className="bg-gray-200 dark:bg-gray-900 rounded-lg p-4 border border-gray-300 dark:border-gray-700">
                            <h3 className="font-bold text-lg text-gray-900 dark:text-white">Aposta em "Menos de 2.5 Gols" (Under 2.5)</h3>
                            <p>Você ganha se o jogo tiver 2 ou menos gols (ex: 1-1, 1-0, 0-0).</p>
                            <p>Você perde se o jogo tiver 3 ou mais gols (ex: 2-1, 3-0, 2-2).</p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Analisando um Jogo para o Mercado de Gols</h2>
                        <p>Para ter sucesso neste mercado, analise fatores como:</p>
                        <ul className="list-disc list-inside">
                            <li><strong>Média de Gols:</strong> Qual a média de gols marcados e sofridos das equipes?</li>
                            <li><strong>Estilo de Jogo:</strong> As equipes são ofensivas ou defensivas?</li>
                            <li><strong>Confrontos Diretos (H2H):</strong> Os jogos entre elas costumam ter muitos ou poucos gols?</li>
                            <li><strong>Desfalques:</strong> Algum jogador chave, especialmente um artilheiro ou um zagueiro importante, está fora da partida?</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Conclusão</h2>
                        <p>O mercado de Over/Under é uma excelente alternativa quando você não tem certeza sobre qual time vencerá a partida, mas tem uma boa leitura sobre se o jogo será aberto e com muitos gols, ou fechado e com poucas chances. É um mercado que recompensa a análise estatística.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
