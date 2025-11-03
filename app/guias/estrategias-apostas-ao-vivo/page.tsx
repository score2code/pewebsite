export default function ApostasAoVivoPage() {
    return (
        <div className="min-h-screen pt-8 pb-16 px-4">
            <article className="max-w-4xl mx-auto">
                {/* Header */}
                <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8
                    border border-light-300 dark:border-dark-600
                    shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
                    <h1 className="text-4xl font-bold text-dark-900 dark:text-light-100 mb-4">
                        Estratégias para Apostas ao Vivo
                    </h1>
                    <p className="text-lg text-dark-900/70 dark:text-light-100/70">
                        Como analisar partidas em tempo real e identificar oportunidades durante os jogos.
                    </p>
                </header>

                {/* Content */}
                <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8
                    border border-light-300 dark:border-dark-600
                    shadow-custom dark:shadow-custom-dark backdrop-blur-sm">

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">
                            Preparação
                        </h2>
                        <div className="space-y-4">
                            <p className="text-dark-900/70 dark:text-light-100/70 mb-4">
                                Antes de começar a analisar jogos ao vivo:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                                <li>Estude as equipes previamente</li>
                                <li>Prepare um plano de ação</li>
                                <li>Defina limites claros</li>
                                <li>Tenha acesso a estatísticas em tempo real</li>
                                <li>Se possível, assista ao jogo</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">
                            Indicadores Importantes
                        </h2>
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-dark-900 dark:text-light-100">
                                Estatísticas em Tempo Real
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                                <li>Posse de bola e sua evolução</li>
                                <li>Finalizações no alvo</li>
                                <li>Pressão territorial</li>
                                <li>Cartões e faltas</li>
                                <li>Substituições realizadas</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-dark-900 dark:text-light-100 mt-6">
                                Fatores Qualitativos
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                                <li>Linguagem corporal dos times</li>
                                <li>Mudanças táticas</li>
                                <li>Ritmo do jogo</li>
                                <li>Condições climáticas</li>
                                <li>Comportamento dos técnicos</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">
                            Mercados Populares
                        </h2>
                        <div className="space-y-4">
                            <p className="text-dark-900/70 dark:text-light-100/70 mb-4">
                                Principais mercados para apostas ao vivo:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                                <li>Próximo gol</li>
                                <li>Total de gols</li>
                                <li>Handicap asiático ao vivo</li>
                                <li>Intervalo/Final</li>
                                <li>Minutos específicos</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">
                            Momento do Jogo
                        </h2>
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-dark-900 dark:text-light-100">
                                Primeiros 15 Minutos
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                                <li>Observe o padrão tático</li>
                                <li>Analise a intensidade</li>
                                <li>Identifique pontos fracos</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-dark-900 dark:text-light-100 mt-6">
                                Final do Primeiro Tempo
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                                <li>Possíveis substituições</li>
                                <li>Ajustes táticos</li>
                                <li>Fadiga das equipes</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-dark-900 dark:text-light-100 mt-6">
                                Últimos 15 Minutos
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                                <li>Necessidade de gols</li>
                                <li>Cansaço físico</li>
                                <li>Gestão de resultado</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">
                            Dicas Essenciais
                        </h2>
                        <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                            <li>Não aposte por impulso</li>
                            <li>Mantenha registro das análises</li>
                            <li>Use odds mínimas pré-definidas</li>
                            <li>Considere o delay das transmissões</li>
                            <li>Tenha paciência para encontrar valor</li>
                            <li>Evite perseguir prejuízos</li>
                        </ul>
                    </section>
                </div>
            </article>
        </div>
    );
}
