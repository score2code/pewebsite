import { buildArticleJsonLd } from '@/app/lib/jsonld';

export default function MercadosOverUnderPage() {
    return (
        <div className="min-h-screen pt-8 pb-16 px-4">
            <article className="max-w-4xl mx-auto">
                {/* Header */}
                <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8
                    border border-light-300 dark:border-dark-600
                    shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
                    <h1 className="text-4xl font-bold text-dark-900 dark:text-light-100 mb-4">
                        Mercados Over/Under de Gols
                    </h1>
                    <p className="text-lg text-dark-900/70 dark:text-light-100/70">
                        Guia completo sobre análise e previsão de gols em partidas de futebol.
                    </p>
                </header>

                {/* Content */}
                <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8
                    border border-light-300 dark:border-dark-600
                    shadow-custom dark:shadow-custom-dark backdrop-blur-sm">

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">
                            Entendendo o Mercado
                        </h2>
                        <div className="space-y-4">
                            <p className="text-dark-900/70 dark:text-light-100/70 mb-4">
                                O mercado Over/Under (Mais/Menos) de gols é um dos mais populares no futebol.
                                Consiste em prever se o número total de gols em uma partida será maior ou menor
                                que uma linha específica.
                            </p>
                            <h3 className="text-xl font-semibold text-dark-900 dark:text-light-100">
                                Linhas Comuns
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                                <li>Over/Under 0.5 gols</li>
                                <li>Over/Under 1.5 gols</li>
                                <li>Over/Under 2.5 gols (mais comum)</li>
                                <li>Over/Under 3.5 gols</li>
                                <li>Over/Under 4.5 gols</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">
                            Fatores de Análise
                        </h2>
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-dark-900 dark:text-light-100">
                                Estatísticos
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                                <li>Média de gols marcados/sofridos</li>
                                <li>Percentual de jogos Over/Under</li>
                                <li>Desempenho em casa/fora</li>
                                <li>Histórico de confrontos diretos</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-dark-900 dark:text-light-100 mt-6">
                                Táticos
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                                <li>Estilo de jogo das equipes</li>
                                <li>Formação tática</li>
                                <li>Qualidade ofensiva/defensiva</li>
                                <li>Estratégia para a partida</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">
                            Situações Favoráveis
                        </h2>
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-dark-900 dark:text-light-100">
                                Para Over
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                                <li>Times ofensivos se enfrentando</li>
                                <li>Necessidade de vitória</li>
                                <li>Defesas desfalcadas</li>
                                <li>Histórico de jogos movimentados</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-dark-900 dark:text-light-100 mt-6">
                                Para Under
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                                <li>Times defensivos</li>
                                <li>Jogos decisivos</li>
                                <li>Clássicos importantes</li>
                                <li>Condições climáticas desfavoráveis</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">
                            Variações do Mercado
                        </h2>
                        <div className="space-y-4">
                            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                                <li>Over/Under por time</li>
                                <li>Over/Under primeiro tempo</li>
                                <li>Over/Under segundo tempo</li>
                                <li>Over/Under intervalos específicos</li>
                                <li>Over/Under gols asiático</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">
                            Estratégias de Análise
                        </h2>
                        <div className="space-y-4">
                            <p className="text-dark-900/70 dark:text-light-100/70">
                                Passos para uma análise efetiva:
                            </p>
                            <ol className="list-decimal list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                                <li>Analise as médias de gols</li>
                                <li>Verifique o histórico recente</li>
                                <li>Considere o contexto do jogo</li>
                                <li>Avalie desfalques importantes</li>
                                <li>Compare odds e probabilidades</li>
                            </ol>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">
                            Dicas Importantes
                        </h2>
                        <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                            <li>Compare odds em diferentes casas</li>
                            <li>Considere a fase da competição</li>
                            <li>Acompanhe lesões e suspensões</li>
                            <li>Analise o histórico do árbitro</li>
                            <li>Mantenha registros das análises</li>
                        </ul>
                    </section>
                    <section className="mt-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">Segmentação HT/FT</h2>
                        <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                            <li>HT under em jogos cautelosos; FT over com substituições ofensivas.</li>
                            <li>Minutagem crítica: 30–45' e 70+ alteram ritmo e risco.</li>
                            <li>Combine com xG por período e finalizações no alvo.</li>
                        </ul>
                    </section>
                    <section className="mt-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">Sinais de Reversão</h2>
                        <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                            <li>Queda de ritmo após gols ou cartões.</li>
                            <li>Mudança tática para segurar resultado.</li>
                            <li>Redução de finalizações claras e posse avançada.</li>
                        </ul>
                    </section>
                    <section className="mt-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">Checklist Rápida</h2>
                        <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                            <li>Validar médias e tendências recentes.</li>
                            <li>Checar contexto (necessidade de vitória, clima, árbitro).</li>
                            <li>Comparar com probabilidade implícita das odds.</li>
                            <li>Definir preço mínimo e stake por variância da liga.</li>
                        </ul>
                    </section>
                    <section className="mt-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">Erros Comuns</h2>
                        <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                            <li>Forçar Over em clássicos de baixa criação.</li>
                            <li>Ignorar substituições e ajuste de risco no FT.</li>
                            <li>Basear-se apenas em H2H sem contexto atual.</li>
                        </ul>
                    </section>
                    <section className="mt-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">Exemplo prático</h2>
                        <p className="text-dark-900/70 dark:text-light-100/70">Jogo com necessidade de vitória e xG recente alto: Over 2.5 com odd 2.05 (48.8%) frente estimativa de 54% indica valor; ajuste stake considerando variância da competição.</p>
                    </section>
                    <section className="mt-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">Leituras relacionadas</h2>
                        <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                            <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/guias/interpretando-probabilidades-e-odds">Interpretando probabilidades e odds</a></li>
                            <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/guias/analise-de-confrontos-diretos">Análise de confrontos diretos</a></li>
                            <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/guias/guia-de-analise-de-escanteios">Guia de análise de escanteios</a></li>
                        </ul>
                    </section>
                </div>
                {/* JSON-LD para SEO */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(
                            buildArticleJsonLd({
                                url: 'https://palpitesdodia.online/conteudos/guias/mercados-over-under-gols',
                                title: 'Mercados Over/Under de Gols',
                                description: 'Como analisar Over/Under usando estatísticas, contexto e probabilidades.',
                            })
                        ),
                    }}
                />
            </article>
        </div>
    );
}
