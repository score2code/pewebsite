import { buildArticleJsonLd } from '@/app/lib/jsonld';

export default function ChampionsLeaguePage() {
    return (
        <div className="min-h-screen pt-8 pb-16 px-4">
            <article className="max-w-4xl mx-auto">
                {/* Header */}
                <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8
                    border border-light-300 dark:border-dark-600
                    shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
                    <h1 className="text-4xl font-bold text-dark-900 dark:text-light-100 mb-4">
                        Guia da Champions League
                    </h1>
                    <p className="text-lg text-dark-900/70 dark:text-light-100/70">
                        Análise completa dos padrões e características da principal competição europeia.
                    </p>
                </header>

                {/* Content */}
                <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8
                    border border-light-300 dark:border-dark-600
                    shadow-custom dark:shadow-custom-dark backdrop-blur-sm">

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">
                            Características Únicas
                        </h2>
                        <div className="space-y-4">
                            <p className="text-dark-900/70 dark:text-light-100/70 mb-4">
                                A UEFA Champions League possui particularidades que a tornam única:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                                <li>Nível técnico elevado</li>
                                <li>Confrontos diretos em mata-mata</li>
                                <li>Regra do gol fora (abolida em 2021)</li>
                                <li>Importância da fase de grupos</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">
                            Fase de Grupos
                        </h2>
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-dark-900 dark:text-light-100">
                                Características
                            </h3>
                            <p className="text-dark-900/70 dark:text-light-100/70 mb-4">
                                Padrões observados na fase de grupos:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                                <li>Times grandes tendem a dominar</li>
                                <li>Últimas rodadas são decisivas</li>
                                <li>Jogos em casa são fundamentais</li>
                                <li>Rotação de elenco em alguns jogos</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">
                            Fase Eliminatória
                        </h2>
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-dark-900 dark:text-light-100">
                                Estratégias Comuns
                            </h3>
                            <p className="text-dark-900/70 dark:text-light-100/70 mb-4">
                                No mata-mata, observe:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                                <li>Cautela no jogo de ida</li>
                                <li>Importância do fator casa</li>
                                <li>Gestão de vantagem</li>
                                <li>Impacto da prorrogação</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">
                            Fatores de Análise
                        </h2>
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-dark-900 dark:text-light-100">
                                Elementos Chave
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                                <li>Calendário e desgaste físico</li>
                                <li>Prioridades do clube</li>
                                <li>Histórico na competição</li>
                                <li>Experiência do elenco</li>
                                <li>Condições climáticas</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">
                            Mercados Populares
                        </h2>
                        <div className="space-y-4">
                            <p className="text-dark-900/70 dark:text-light-100/70">
                                Mercados mais analisados na Champions:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                                <li>Resultado final</li>
                                <li>Ambas equipes marcam</li>
                                <li>Over/Under de gols</li>
                                <li>Handicap asiático</li>
                                <li>Classificação/Eliminação</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">
                            Dicas de Análise
                        </h2>
                        <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                            <li>Acompanhe o desempenho nas ligas nacionais</li>
                            <li>Observe o histórico na Champions</li>
                            <li>Analise o estilo de jogo dos times</li>
                            <li>Considere lesões e suspensões</li>
                            <li>Avalie o momento da temporada</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">Exemplo prático</h2>
                        <div className="space-y-4 text-dark-900/70 dark:text-light-100/70">
                            <p>
                                Em jogo de ida entre equipe dominante e adversário sólido, a tendência é maior cautela.
                                Sua estimativa para <strong className="text-dark-900 dark:text-light-100">Under 2.5</strong> é de 57%.
                                O mercado oferece odd <strong className="text-dark-900 dark:text-light-100">2.10</strong> (probabilidade implícita 47.6%).
                            </p>
                            <div className="bg-light-200/50 dark:bg-dark-700/50 rounded-lg p-4 border border-light-300 dark:border-dark-600">
                                <ul className="list-disc list-inside ml-4">
                                    <li>Prob. estimada Under 2.5: 57%</li>
                                    <li>Odd mercado: 2.10 → 47.6%</li>
                                    <li>Conclusão: há indício de valor, confirmar com ritmo e contexto</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">Checklist Rápida</h2>
                        <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                            <li>Validar prioridade do clube e calendário.</li>
                            <li>Checar histórico recente na competição.</li>
                            <li>Definir mercados por fase (grupos vs. mata-mata).</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">Erros Comuns</h2>
                        <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                            <li>Generalizar padrões das ligas nacionais.</li>
                            <li>Subestimar gestão de vantagem no mata-mata.</li>
                            <li>Ignorar impacto de viagens e clima europeu.</li>
                        </ul>
                    </section>

                    <section className="mb-2">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">Leituras relacionadas</h2>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>
                                <a className="text-primary-600 dark:text-primary-400 hover:underline" href="/conteudos/guias/entendendo-libertadores">Entendendo a Copa Libertadores</a>
                            </li>
                            <li>
                                <a className="text-primary-600 dark:text-primary-400 hover:underline" href="/conteudos/guias/caracteristicas-premier-league">Características da Premier League</a>
                            </li>
                            <li>
                                <a className="text-primary-600 dark:text-primary-400 hover:underline" href="/conteudos/guias/analise-por-periodo">Análise por Período</a>
                            </li>
                        </ul>
                    </section>
                </div>

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(
                            buildArticleJsonLd({
                                url: 'https://palpitesdodia.online/conteudos/guias/analise-champions-league',
                                title: 'Guia da Champions League',
                                description:
                                    'Análise dos padrões e características da UEFA Champions League, incluindo fases, estratégias e mercados populares.',
                            })
                        ),
                    }}
                />
            </article>
        </div>
    );
}
