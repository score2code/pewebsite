import Breadcrumb from '@/app/components/ui/breadcrumb';
import { buildArticleJsonLd } from '@/app/lib/jsonld';
export default function AnaliseEstatisticaPage() {
    return (
        <div className="min-h-screen pt-8 pb-16 px-4">
            <article className="max-w-4xl mx-auto">
                <Breadcrumb className="mb-4" />
                {/* Header */}
                <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8
                    border border-light-300 dark:border-dark-600
                    shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
                    <h1 className="text-4xl font-bold text-dark-900 dark:text-light-100 mb-4">
                        Análise Estatística no Futebol
                    </h1>
                    <p className="text-lg text-dark-900/70 dark:text-light-100/70">
                        Um guia completo sobre como utilizar estatísticas avançadas para melhorar suas análises no futebol.
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
                          url: 'https://palpitesdodia.online/conteudos/guias/analise-estatistica-no-futebol',
                            title: 'Análise Estatística no Futebol',
                            description:
                              'Guia completo sobre métricas avançadas (xG, posse efetiva, pressão) e como contextualizar dados nas suas análises.',
                          })
                        ),
                      }}
                    />

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">
                            Introdução à Análise Estatística
                        </h2>
                        <p className="text-dark-900/70 dark:text-light-100/70 mb-4">
                            A análise estatística no futebol vai muito além dos números básicos de vitórias, empates e derrotas.
                            Compreender como interpretar e aplicar dados estatísticos avançados pode fazer a diferença entre
                            uma análise superficial e uma análise profunda e precisa.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">
                            Métricas Fundamentais
                        </h2>
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-dark-900 dark:text-light-100">
                                Expected Goals (xG)
                            </h3>
                            <p className="text-dark-900/70 dark:text-light-100/70 mb-4">
                                O xG é uma métrica avançada que mede a qualidade das chances criadas por uma equipe.
                                Cada finalização recebe um valor entre 0 e 1, representando a probabilidade daquela
                                chance resultar em gol.
                            </p>

                            <h3 className="text-xl font-semibold text-dark-900 dark:text-light-100">
                                Posse de Bola Efetiva
                            </h3>
                            <p className="text-dark-900/70 dark:text-light-100/70 mb-4">
                                A posse de bola deve ser analisada em conjunto com a posição do campo onde ela ocorre
                                e as ações resultantes. Uma equipe pode ter menos posse, mas ser mais efetiva em zonas
                                de finalização.
                            </p>

                            <h3 className="text-xl font-semibold text-dark-900 dark:text-light-100">
                                Pressão e Recuperação
                            </h3>
                            <p className="text-dark-900/70 dark:text-light-100/70 mb-4">
                                Indicadores de pressão alta e recuperação de bola são cruciais para entender o estilo
                                de jogo e a efetividade defensiva de uma equipe.
                            </p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">
                            Contextualizando os Dados
                        </h2>
                        <div className="space-y-4">
                            <p className="text-dark-900/70 dark:text-light-100/70">
                                Números isolados podem enganar. É fundamental considerar:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                                <li>Qualidade dos adversários</li>
                                <li>Condições do jogo (casa/fora)</li>
                                <li>Momento da temporada</li>
                                <li>Histórico recente</li>
                                <li>Desfalques e retornos</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">
                            Ferramentas e Recursos
                        </h2>
                        <div className="space-y-4">
                            <p className="text-dark-900/70 dark:text-light-100/70">
                                Para uma análise estatística eficiente, recomendamos o uso de:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                                <li>Plataformas de análise de dados (WhoScored, Sofascore)</li>
                                <li>Bancos de dados históricos</li>
                                <li>Ferramentas de visualização de dados</li>
                                <li>Modelos preditivos</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">Estudo de Caso</h2>
                        <div className="space-y-4 text-dark-900/70 dark:text-light-100/70">
                            <p>
                                Equipe A acumula <strong className="text-dark-900 dark:text-light-100">1.8 xG</strong> médio nas últimas 6 partidas,
                                porém converte pouco por finalizar fora da área. Já a Equipe B concede muitas chances
                                de alta qualidade pelo corredor esquerdo. O cruzamento de métricas sugere valor em
                                <em>finalizações no alvo</em> e <em>over xG</em>, enquanto o mercado de gols pode permanecer cauteloso.
                            </p>
                            <div className="bg-light-200/50 dark:bg-dark-700/50 rounded-lg p-4 border border-light-300 dark:border-dark-600">
                                <ul className="list-disc list-inside ml-4">
                                    <li>xG A (média 6 jogos): 1.8</li>
                                    <li>Local de finalização: 42% fora da área</li>
                                    <li>Concessão B: altas chances pelo lado esquerdo</li>
                                    <li>Leitura: focar métricas de qualidade, não apenas volume</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">Erros Comuns</h2>
                        <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                            <li>Usar métricas sem contexto de adversário e local.</li>
                            <li>Confundir volume com qualidade de chances.</li>
                            <li>Ignorar viés de amostra pequena (2–3 jogos).</li>
                            <li>Desconsiderar mudanças táticas e ausências relevantes.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">Checklist Rápida</h2>
                        <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                            <li>Verificar xG e locais de finalização.</li>
                            <li>Comparar tendências em casa/fora.</li>
                            <li>Cruzar dados com estilo tático e pressão.</li>
                            <li>Ajustar leitura por desfalques e calendário.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">
                            Conclusão
                        </h2>
                        <p className="text-dark-900/70 dark:text-light-100/70">
                            A análise estatística é uma ferramenta poderosa, mas deve ser usada em conjunto com
                            outros fatores como análise tática, condições físicas dos jogadores e fatores externos.
                            O segredo está em encontrar o equilíbrio entre dados quantitativos e análise qualitativa.
                        </p>
                    </section>

                    <section className="mt-8">
                      <h2 className="text-2xl font-bold mb-4">Leituras relacionadas</h2>
                      <ul className="list-disc list-inside space-y-2 ml-4 text-dark-900/80 dark:text-light-100/80">
                        <li>
                          <a className="text-primary-600 dark:text-primary-400 hover:underline" href="/conteudos/guias/interpretando-probabilidades-e-odds">Interpretando Probabilidades e Odds</a>
                        </li>
                        <li>
                          <a className="text-primary-600 dark:text-primary-400 hover:underline" href="/conteudos/guias/como-identificar-valor-nas-odds">Como Identificar Valor nas Odds</a>
                        </li>
                        <li>
                          <a className="text-primary-600 dark:text-primary-400 hover:underline" href="/conteudos/guias/analise-por-periodo">Análise por Período</a>
                        </li>
                      </ul>
                    </section>
                </div>
            </article>
        </div>
    );
}
