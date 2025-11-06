import Breadcrumb from '@/app/components/ui/breadcrumb';

export default function MercadosCartoesPage() {
    return (
        <div className="min-h-screen pt-8 pb-16 px-4">
            <article className="max-w-4xl mx-auto">
                <Breadcrumb className="mb-4" />
                {/* Header */}
                <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8
                    border border-light-300 dark:border-dark-600
                    shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
                    <h1 className="text-4xl font-bold text-dark-900 dark:text-light-100 mb-4">
                        Guia de Mercados de Cartões
                    </h1>
                    <p className="text-lg text-dark-900/70 dark:text-light-100/70">
                        Como analisar e prever cartões em partidas de futebol usando estatísticas e fatores contextuais.
                    </p>
                </header>

                {/* Content */}
                <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8
                    border border-light-300 dark:border-dark-600
                    shadow-custom dark:shadow-custom-dark backdrop-blur-sm">

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">
                            Fatores Principais
                        </h2>
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-dark-900 dark:text-light-100">
                                1. Árbitro
                            </h3>
                            <p className="text-dark-900/70 dark:text-light-100/70 mb-4">
                                O perfil do árbitro é fundamental. Analise:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                                <li>Média de cartões por jogo</li>
                                <li>Consistência nas decisões</li>
                                <li>Histórico em clássicos</li>
                                <li>Tendência em competições específicas</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">
                            Rivalidade e Contexto
                        </h2>
                        <div className="space-y-4">
                            <p className="text-dark-900/70 dark:text-light-100/70 mb-4">
                                Jogos com maior tensão tendem a ter mais cartões:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                                <li>Clássicos regionais</li>
                                <li>Decisões de campeonatos</li>
                                <li>Jogos de rebaixamento</li>
                                <li>Histórico recente de confrontos</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">
                            Estilo de Jogo
                        </h2>
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-dark-900 dark:text-light-100">
                                Características das Equipes
                            </h3>
                            <p className="text-dark-900/70 dark:text-light-100/70 mb-4">
                                Alguns estilos são mais propensos a cartões:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                                <li>Times que fazem muitas faltas táticas</li>
                                <li>Equipes que pressionam alto</li>
                                <li>Times com histórico de má disciplina</li>
                                <li>Jogadores individualmente indisciplinados</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">
                            Momento da Temporada
                        </h2>
                        <div className="space-y-4">
                            <p className="text-dark-900/70 dark:text-light-100/70">
                                A fase da competição influencia o número de cartões:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                                <li>Final de campeonato (mais tensão)</li>
                                <li>Jogos decisivos</li>
                                <li>Sequência de jogos (fadiga)</li>
                                <li>Situação na tabela</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">
                            Mercados Disponíveis
                        </h2>
                        <div className="space-y-4">
                            <p className="text-dark-900/70 dark:text-light-100/70 mb-4">
                                Principais mercados de cartões:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                                <li>Total de cartões na partida</li>
                                <li>Cartões por time</li>
                                <li>Primeiro cartão do jogo</li>
                                <li>Cartões no primeiro/segundo tempo</li>
                                <li>Cartões para jogadores específicos</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">
                            Dicas de Análise
                        </h2>
                        <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                            <li>Compare médias históricas</li>
                            <li>Analise confrontos diretos</li>
                            <li>Verifique suspensões e retornos</li>
                            <li>Considere fatores climáticos</li>
                            <li>Acompanhe notícias sobre arbitragem</li>
                        </ul>
                    </section>
                </div>
            </article>
        </div>
    );
}
