
import { Metadata } from 'next';
import Breadcrumb from '@/app/components/ui/breadcrumb';
import { buildArticleJsonLd } from '@/app/lib/jsonld';

export const metadata: Metadata = {
    title: 'Gestão Inteligente de Recursos em Trading Esportivo',
    description: 'Aprenda técnicas avançadas de gestão financeira para maximizar seus resultados com análises esportivas de forma consistente e profissional.',
};

export default function BankrollGuidePage() {
    return (
        <div className="min-h-screen pt-8 px-4">
            <div className="max-w-4xl mx-auto">
                <Breadcrumb className="mb-4" />
                <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8
                    border border-light-300 dark:border-dark-600
                    shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
                    <h1 className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-6">
                        Gestão Inteligente de Recursos em Trading Esportivo
                    </h1>

                                        <div className="prose prose-purple dark:prose-invert max-w-none text-dark-900/70 dark:text-light-100/70 space-y-6">
                        <p className="text-xl">A gestão de recursos é um dos pilares mais importantes para o sucesso em trading esportivo. Uma gestão eficiente protege seu capital e maximiza suas chances de resultados consistentes a longo prazo.</p>

                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100">O que é Gestão de Capital?</h2>
                        <p>A gestão de capital (ou money management) é a estratégia de administrar seus recursos de forma profissional. O objetivo é otimizar seus investimentos e proteger seu capital, garantindo sustentabilidade e crescimento consistente.</p>

                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100">Passo 1: Definição do Capital Inicial</h2>
                        <p>O primeiro passo é determinar o capital que será dedicado exclusivamente para suas operações. Este valor deve ser consistente com seus objetivos financeiros e tolerância a risco.</p>

                        <blockquote className="border-l-4 border-purple-500 dark:border-purple-400 pl-4 italic bg-light-200/30 dark:bg-dark-700/30 p-4 rounded-r-lg">
                            <strong>Princípio Fundamental:</strong> Nunca opere com recursos essenciais para suas despesas básicas.
                        </blockquote>

                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100">Passo 2: Estratégia de Posicionamento</h2>
                        <p>O posicionamento refere-se ao tamanho de cada operação em relação ao seu capital total. Uma abordagem sistemática e consistente é essencial. Para iniciantes, recomenda-se o modelo de posição fixa.</p>
                        <p>Neste modelo, define-se uma porcentagem fixa do capital para cada operação, tipicamente entre 1% e 3%. Por exemplo, com um capital de R$10.000 e posição de 2%, cada operação seria de R$200.</p>

                        <div className="bg-light-200/50 dark:bg-dark-700/50 rounded-lg p-6
                            border border-light-300 dark:border-dark-600">
                            <h3 className="font-bold text-lg text-dark-900 dark:text-light-100 mb-3">Exemplo de Gestão:</h3>
                            <div className="space-y-2 text-dark-900/70 dark:text-light-100/70">
                                <p>Capital Total: R$ 10.000,00</p>
                                <p>Posição por Operação: 2%</p>
                                <p>Valor por Operação: R$ 200,00</p>
                                <p className="mt-4 text-sm">Esta estrutura proporciona uma margem de segurança significativa, permitindo absorver flutuações naturais do mercado enquanto mantém o capital protegido.</p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100">Conclusão</h2>
                        <p>A disciplina na gestão de capital é fundamental para o sucesso em trading esportivo. Mantenha-se fiel à sua estratégia de posicionamento, evite aumentar posições para recuperar perdas e faça avaliações periódicas do seu desempenho. Com uma abordagem profissional e sistemática, você estará no caminho certo para resultados consistentes.</p>

                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100">Plano Diário e Semanal</h2>
                        <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                            <li>Definir limite diário de exposição (ex.: 6% do bankroll).</li>
                            <li>Estabelecer número máximo de entradas por dia.</li>
                            <li>Revisar resultados e rationale por semana.</li>
                            <li>Ajustar percentuais conforme volatilidade das ligas.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100">Métricas para Acompanhar</h2>
                        <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                            <li>Retorno por mercado (gols, cantos, cartões).</li>
                            <li>Distribuição de stakes por confiança.</li>
                            <li>Taxa de acerto vs. valor esperado (EV).</li>
                            <li>Drawdown máximo e recuperação média.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100">Erros Comuns</h2>
                        <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                            <li>Aumentar stake após perdas para recuperar.</li>
                            <li>Alterar sistema sem critério após oscilação.</li>
                            <li>Ignorar limites diários/semanalmente definidos.</li>
                            <li>Não registrar contexto das entradas.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100">Checklist Rápida</h2>
                        <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                            <li>Definir percentuais fixos por confiança.</li>
                            <li>Configurar limites e stops objetivos.</li>
                            <li>Registrar todas as entradas e saídas.</li>
                            <li>Revisar performance por mercado semanalmente.</li>
                        </ul>

                        <section className="mt-8">
                            <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">Leituras relacionadas</h2>
                            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                                <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/guias/interpretando-probabilidades-e-odds">Interpretando probabilidades e odds</a></li>
                                <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/guias/mercados-over-under-gols">Mercados Over/Under de gols</a></li>
                                <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/guias/analise-de-confrontos-diretos">Análise de confrontos diretos</a></li>
                            </ul>
                        </section>
                    </div>
                </div>
                {/* JSON-LD para SEO */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(
                            buildArticleJsonLd({
                                url: 'https://palpitesdodia.online/conteudos/guias/como-gerenciar-sua-banca',
                                title: 'Gestão Inteligente de Recursos em Trading Esportivo',
                                description: 'Estratégias práticas de gestão de banca e posicionamento de stake para consistência.',
                            })
                        ),
                    }}
                />
            </div>
        </div>
    );
}
