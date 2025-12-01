import Breadcrumb from '@/app/components/ui/breadcrumb';
import { buildArticleJsonLd } from '@/app/lib/jsonld';
export default function EscanteiosPage() {
    return (
        <div className="min-h-screen pt-8 pb-16 px-4">
            <article className="max-w-4xl mx-auto">
                <Breadcrumb className="mb-4" />
                {/* Header */}
                <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8
                    border border-light-300 dark:border-dark-600
                    shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
                    <h1 className="text-4xl font-bold text-dark-900 dark:text-light-100 mb-4">
                        Guia de Análise de Escanteios
                    </h1>
                    <p className="text-lg text-dark-900/70 dark:text-light-100/70">
                        Estratégias e análises para o mercado de escanteios no futebol.
                    </p>
                </header>

                {/* Content */}
                <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8
                    border border-light-300 dark:border-dark-600
                    shadow-custom dark:shadow-custom-dark backdrop-blur-sm">

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">
                            Fundamentos do Mercado
                        </h2>
                        <div className="space-y-4">
                            <p className="text-dark-900/70 dark:text-light-100/70 mb-4">
                                O mercado de escanteios é baseado em diversos fatores táticos e estatísticos que
                                influenciam a frequência de escanteios em uma partida.
                            </p>
                            <h3 className="text-xl font-semibold text-dark-900 dark:text-light-100">
                                Tipos de Mercado
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                                <li>Total de escanteios na partida</li>
                                <li>Escanteios por time</li>
                                <li>Handicap de escanteios</li>
                                <li>Race to X corners</li>
                                <li>Escanteios por período</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">
                            Fatores de Análise
                        </h2>
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-dark-900 dark:text-light-100">
                                Estilo de Jogo
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                                <li>Posse de bola e domínio territorial</li>
                                <li>Jogo pelos lados do campo</li>
                                <li>Intensidade ofensiva</li>
                                <li>Propensão a cruzamentos</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-dark-900 dark:text-light-100 mt-6">
                                Estatísticas Relevantes
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                                <li>Média de escanteios por jogo</li>
                                <li>Escanteios a favor/contra</li>
                                <li>Desempenho em casa/fora</li>
                                <li>Tendências por competição</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">
                            Situações Favoráveis
                        </h2>
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-dark-900 dark:text-light-100">
                                Alto Número de Escanteios
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                                <li>Times ofensivos se enfrentando</li>
                                <li>Necessidade de resultado</li>
                                <li>Diferença técnica significativa</li>
                                <li>Times que jogam pelas laterais</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-dark-900 dark:text-light-100 mt-6">
                                Baixo Número de Escanteios
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                                <li>Jogos equilibrados</li>
                                <li>Times que jogam pelo meio</li>
                                <li>Partidas decisivas</li>
                                <li>Condições climáticas adversas</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">
                            Análise por Período
                        </h2>
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-dark-900 dark:text-light-100">
                                Primeiro Tempo
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                                <li>Intensidade inicial</li>
                                <li>Estratégia das equipes</li>
                                <li>Pressão alta</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-dark-900 dark:text-light-100 mt-6">
                                Segundo Tempo
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                                <li>Resultado parcial</li>
                                <li>Cansaço físico</li>
                                <li>Substituições</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">
                            Dicas de Análise
                        </h2>
                        <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                            <li>Compare médias das equipes</li>
                            <li>Analise confrontos diretos</li>
                            <li>Considere o contexto do jogo</li>
                            <li>Avalie as condições do campo</li>
                            <li>Monitore mudanças táticas</li>
                            <li>Acompanhe tendências da competição</li>
                        </ul>
                    </section>
                    <section className="mt-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">Metodologia prática</h2>
                        <ol className="list-decimal list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                            <li>Coletar médias de cantos a favor/contra (últimos 8–10 jogos).</li>
                            <li>Verificar estilo (laterais vs. jogo por dentro) e volume de cruzamentos.</li>
                            <li>Confirmar intensidade inicial via scout/estatísticas ao vivo.</li>
                            <li>Ajustar estimativa por contexto (casa/fora, necessidade de resultado, clima).</li>
                            <li>Comparar com a probabilidade implícita da odd e decidir pelo valor.</li>
                        </ol>
                    </section>
                    <section className="mt-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">Exemplo prático</h2>
                        <div className="space-y-4 text-dark-900/70 dark:text-light-100/70">
                            <p>
                                Derby com laterais ativos e pressão alta: médias recentes indicam 5.4 cantos HT somados.
                                Odd para Over 4.5 HT implica ~55%. Com contexto favorável (mandante agressivo), elevamos
                                estimativa para ~58% e encontramos valor moderado, ajustando stake pela variância da liga.
                            </p>
                            <div className="bg-light-200/50 dark:bg-dark-700/50 rounded-lg p-4 border border-light-300 dark:border-dark-600">
                                <ul className="list-disc list-inside ml-4">
                                    <li>Média HT: 5.4 cantos</li>
                                    <li>Odd Over 4.5 HT → p≈55%</li>
                                    <li>Estimativa ajustada: ~58% (contexto + estilo)</li>
                                    <li>Decisão: entrada pequena, confirmar intensidade nos 10’ iniciais</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section className="mt-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">Erros comuns</h2>
                        <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                            <li>Ignorar o estilo dos times e focar só na média bruta.</li>
                            <li>Não ajustar por condições climáticas e estado do gramado.</li>
                            <li>Desconsiderar a necessidade do resultado (time satisfeito reduz intensidade).
                            </li>
                            <li>Usar amostra muito curta sem contexto.</li>
                        </ul>
                    </section>
                    <section className="mt-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">Leituras relacionadas</h2>
                        <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                            <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/insights/cantos-e-xg-relacao">Relação entre cantos e xG</a></li>
                            <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/insights/tendencias-cantos-8-semanas">Tendências de cantos em 8 semanas</a></li>
                            <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/metodologia-modelagem/modelo-simples-xg-cantos">Modelo simples de xG para cantos</a></li>
                        </ul>
                    </section>
                </div>
                {/* JSON-LD para SEO */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(
                            buildArticleJsonLd({
                                url: 'https://score2code.com/conteudos/guias/guia-de-analise-de-escanteios',
                                title: 'Guia de Análise de Escanteios',
                                description: 'Estratégias e sinais para análise de cantos por período e contexto.',
                            })
                        ),
                    }}
                />
            </article>
        </div>
    );
}
