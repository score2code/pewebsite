
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Guia Definitivo: O que é Handicap Asiático?',
    description: 'Aprenda o que é Handicap Asiático, como funciona e como usar este mercado avançado para encontrar mais valor nas suas apostas.',
};

export default function AsianHandicapGuidePage() {
    return (
        <div className="bg-gray-900 text-white min-h-screen pt-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-gray-800 rounded-xl shadow-lg p-8">
                    <h1 className="text-4xl font-bold text-yellow-500 mb-6">Guia Definitivo: O que é Handicap Asiático?</h1>
                    
                    <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
                        <p className="text-xl">O Handicap Asiático é um dos mercados mais populares e, ao mesmo tempo, um dos que mais causam confusão entre apostadores iniciantes. No entanto, entendê-lo pode abrir um leque de oportunidades lucrativas, pois ele elimina a possibilidade do empate.</p>

                        <h2 className="text-2xl font-bold text-white">O Conceito Básico</h2>
                        <p>O Handicap Asiático atribui uma vantagem ou desvantagem de gols a uma das equipes antes mesmo de o jogo começar. O objetivo é equilibrar o confronto, oferecendo odds mais próximas de 2.00 para ambos os lados.</p>
                        
                        <blockquote className="border-l-4 border-yellow-500 pl-4 italic">
                            <strong>Diferença Chave:</strong> Ao contrário do Handicap Europeu, o Handicap Asiático pode resultar em uma aposta devolvida (push) ou metade ganha/perdida.
                        </blockquote>

                        <h2 className="text-2xl font-bold text-white">Exemplos Práticos de Linhas Comuns</h2>
                        
                        <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                            <h3 className="font-bold text-lg text-white">Handicap 0.0 (ou DNB - Draw No Bet)</h3>
                            <p>Você aposta na vitória de um time. Se o jogo empatar, sua aposta é devolvida. É uma aposta mais segura do que a simples vitória.</p>
                        </div>

                        <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                            <h3 className="font-bold text-lg text-white">Handicap -0.5</h3>
                            <p>É exatamente o mesmo que apostar na vitória do time (mercado de Resultado Final). Se o time em que você apostou vencer, você ganha. Se empatar ou perder, você perde.</p>
                        </div>

                        <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                            <h3 className="font-bold text-lg text-white">Handicap -1.0</h3>
                            <p>O time em que você apostou precisa vencer por 2 ou mais gols de diferença para você ganhar a aposta. Se vencer por apenas 1 gol, a aposta é devolvida.</p>
                        </div>

                        <h2 className="text-2xl font-bold text-white">Conclusão</h2>
                        <p>Dominar o Handicap Asiático é um passo fundamental para se tornar um apostador mais sofisticado. Ele oferece mais controle sobre o risco e permite encontrar valor em jogos onde o favoritismo é muito grande. Comece com as linhas inteiras e de meio gol (0.0, -0.5, -1.0) e, aos poucos, explore as linhas de quartos de gol (-0.25, -0.75).</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
