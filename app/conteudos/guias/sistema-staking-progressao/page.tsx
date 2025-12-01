import { buildArticleJsonLd } from '@/app/lib/jsonld';

export default function SistemaDeStalingPage() {
    return (
        <div className="min-h-screen pt-8 pb-16 px-4">
            <article className="max-w-4xl mx-auto">
                {/* Header */}
                <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8
                    border border-light-300 dark:border-dark-600
                    shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
                    <h1 className="text-4xl font-bold text-dark-900 dark:text-light-100 mb-4">
                        Sistema de Staking e Progressão
                    </h1>
                    <p className="text-lg text-dark-900/70 dark:text-light-100/70">
                        Aprenda a gerenciar sua banca e aplicar estratégias de progressão de forma responsável.
                    </p>
                </header>

                {/* Content */}
                <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8
                    border border-light-300 dark:border-dark-600
                    shadow-custom dark:shadow-custom-dark backdrop-blur-sm">

                    <script
                      type="application/ld+json"
                      dangerouslySetInnerHTML={{
                        __html: JSON.stringify(
                          buildArticleJsonLd({
                            url: 'https://score2code.com/conteudos/guias/sistema-staking-progressao',
                            title: 'Sistema de Staking e Progressão',
                            description:
                              'Aprenda a gerenciar sua banca e aplicar estratégias de progressão com responsabilidade e critérios claros.',
                          })
                        ),
                      }}
                    />

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">
                            O que é Staking?
                        </h2>
                        <p className="text-dark-900/70 dark:text-light-100/70 mb-4">
                            Staking é o método de definir quanto investir em cada análise em relação ao seu
                            capital total. Um bom sistema de staking é fundamental para o sucesso a longo prazo
                            e para minimizar riscos.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">
                            Tipos de Staking
                        </h2>
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-dark-900 dark:text-light-100">
                                1. Stake Fixo
                            </h3>
                            <p className="text-dark-900/70 dark:text-light-100/70 mb-4">
                                O método mais conservador e recomendado para iniciantes:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                                <li>Mesmo valor em todas as análises</li>
                                <li>Geralmente 1-2% do bankroll total</li>
                                <li>Menor risco de falência</li>
                                <li>Crescimento mais lento mas consistente</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-dark-900 dark:text-light-100 mt-6">
                                2. Stake por Confiança
                            </h3>
                            <p className="text-dark-900/70 dark:text-light-100/70 mb-4">
                                Varia o investimento baseado no nível de confiança:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                                <li>1% - Confiança baixa</li>
                                <li>2% - Confiança média</li>
                                <li>3% - Confiança alta</li>
                                <li>Nunca exceder 5% do bankroll</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-dark-900 dark:text-light-100 mt-6">
                                3. Progressão
                            </h3>
                            <p className="text-dark-900/70 dark:text-light-100/70 mb-4">
                                Ajuste do stake baseado nos resultados anteriores:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                                <li>Progressão positiva (aumenta após vitória)</li>
                                <li>Progressão negativa (aumenta após derrota)</li>
                                <li>Maior risco - use com cautela</li>
                                <li>Requer disciplina extrema</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">
                            Critérios de Avaliação
                        </h2>
                        <div className="space-y-4">
                            <p className="text-dark-900/70 dark:text-light-100/70">
                                Fatores a considerar ao definir o stake:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                                <li>Valor encontrado nas odds</li>
                                <li>Qualidade da informação disponível</li>
                                <li>Momento do mercado</li>
                                <li>Histórico recente</li>
                                <li>Situação do bankroll</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">
                            Gestão de Risco
                        </h2>
                        <div className="space-y-4">
                            <p className="text-dark-900/70 dark:text-light-100/70 mb-4">
                                Regras fundamentais para proteção do capital:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                                <li>Nunca arrisque mais que 5% do bankroll</li>
                                <li>Mantenha registro detalhado</li>
                                <li>Defina stop loss diário/semanal</li>
                                <li>Evite perseguir prejuízos</li>
                                <li>Revise o sistema periodicamente</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">Exemplo Numérico</h2>
                        <div className="space-y-4 text-dark-900/70 dark:text-light-100/70">
                            <p>Bankroll: R$10.000. Stake por confiança: 1%/2%/3%.</p>
                            <div className="bg-light-200/50 dark:bg-dark-700/50 rounded-lg p-4 border border-light-300 dark:border-dark-600">
                                <ul className="list-disc list-inside ml-4">
                                    <li>Entrada A (baixa confiança): R$100</li>
                                    <li>Entrada B (média confiança): R$200</li>
                                    <li>Entrada C (alta confiança): R$300</li>
                                    <li>Limite diário: 6% do bankroll distribuído</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">Plano de Progressão Seguro</h2>
                        <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                            <li>Progressão positiva apenas após leituras repetidamente validadas.</li>
                            <li>Limitar aumento a +0.5% do bankroll por sequência.</li>
                            <li>Zerar progressão após duas perdas consecutivas.</li>
                            <li>Registrar motivo objetivo para cada ajuste.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">Erros Comuns</h2>
                        <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                            <li>Aumentar stake para recuperar perdas.</li>
                            <li>Ignorar limite diário/semanal.</li>
                            <li>Variar sistema sem critério após oscilações.</li>
                            <li>Não registrar entradas e contexto.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">Checklist Rápida</h2>
                        <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                            <li>Definir sistema e percentuais antes do jogo.</li>
                            <li>Aplicar limites e stop com disciplina.</li>
                            <li>Revisar resultados por semana e por mercado.</li>
                            <li>Documentar rationale de cada entrada.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">
                            Dicas para Sucesso
                        </h2>
                        <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                            <li>Mantenha registros detalhados</li>
                            <li>Seja consistente com o sistema escolhido</li>
                            <li>Não mude de sistema após perdas</li>
                            <li>Reavalie periodicamente os resultados</li>
                            <li>Mantenha disciplina emocional</li>
                            <li>Use ferramentas de tracking</li>
                        </ul>
                    </section>

                    <section className="mt-8">
                      <h2 className="text-2xl font-bold mb-4">Leituras relacionadas</h2>
                      <ul className="list-disc list-inside space-y-2 ml-4 text-dark-900/80 dark:text-light-100/80">
                        <li>
                          <a className="text-primary-600 dark:text-primary-400 hover:underline" href="/conteudos/guias/como-gerenciar-sua-banca">Como Gerenciar Sua Banca</a>
                        </li>
                        <li>
                          <a className="text-primary-600 dark:text-primary-400 hover:underline" href="/conteudos/guias/como-identificar-valor-nas-odds">Como Identificar Valor nas Odds</a>
                        </li>
                        <li>
                          <a className="text-primary-600 dark:text-primary-400 hover:underline" href="/conteudos/guias/calculo-de-probabilidade-e-confianca">Cálculo de Probabilidade e Confiança</a>
                        </li>
                      </ul>
                    </section>
                </div>
            </article>
        </div>
    );
}
