
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Guia: Como Gerenciar sua Banca de Apostas',
    description: 'Aprenda a proteger seu capital e a garantir a sustentabilidade nas suas apostas a longo prazo com nosso guia completo de gestão de banca.',
};

export default function BankrollGuidePage() {
    return (
        <div className="bg-gray-900 text-white min-h-screen pt-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-gray-800 rounded-xl shadow-lg p-8">
                    <h1 className="text-4xl font-bold text-yellow-500 mb-6">Guia Completo: Como Gerenciar sua Banca de Apostas</h1>
                    
                    <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
                        <p className="text-xl">A gestão de banca é, sem dúvida, um dos pilares mais importantes para ser um apostador lucrativo a longo prazo. Não importa quão bons sejam seus palpites, uma má gestão de banca levará à falência.</p>

                        <h2 className="text-2xl font-bold text-white">O que é Gestão de Banca?</h2>
                        <p>Gestão de banca (ou bankroll management) é o processo de administrar o dinheiro que você separou exclusivamente para apostas. O objetivo é simples: proteger seu capital de perdas inevitáveis e garantir que você possa continuar apostando de forma sustentável.</p>

                        <h2 className="text-2xl font-bold text-white">Passo 1: Defina o Tamanho da sua Banca</h2>
                        <p>O primeiro passo é decidir quanto dinheiro você pode se dar ao luxo de perder. Este valor é a sua banca inicial. Seja honesto consigo mesmo. Este deve ser um dinheiro que não fará falta para suas despesas essenciais.</p>
                        
                        <blockquote className="border-l-4 border-yellow-500 pl-4 italic">
                            <strong>Regra de Ouro:</strong> Nunca aposte mais do que você pode perder.
                        </blockquote>

                        <h2 className="text-2xl font-bold text-white">Passo 2: Use um Modelo de Stake</h2>
                        <p>Stake é o valor que você aposta em um único evento. Em vez de apostar valores aleatórios, você deve usar um modelo consistente. O mais comum para iniciantes é o modelo de **stake fixa**.</p>
                        <p>Neste modelo, você define uma porcentagem fixa da sua banca para cada aposta, geralmente entre 1% e 3%. Por exemplo, se sua banca é de R$1.000 e você define uma stake de 2%, cada aposta sua será de R$20,00.</p>
                        
                        <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                            <h3 className="font-bold text-lg text-white">Exemplo Prático:</h3>
                            <p>Banca Total: R$ 1.000,00</p>
                            <p>Stake Fixa: 2%</p>
                            <p>Valor da Aposta (Unidade): R$ 20,00</p>
                            <p>Isso significa que você precisaria perder 50 apostas seguidas para quebrar sua banca, o que é altamente improvável se você seguir boas análises.</p>
                        </div>

                        <h2 className="text-2xl font-bold text-white">Conclusão</h2>
                        <p>A disciplina é a chave para a gestão de banca. Siga seu modelo de stake rigorosamente, não tente recuperar perdas com apostas maiores e sempre reavalie sua banca periodicamente. Fazendo isso, você estará no caminho certo para o sucesso a longo prazo nas apostas esportivas.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
