import Breadcrumb from '@/app/components/ui/breadcrumb';
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
                </div>
            </article>
        </div>
    );
}
