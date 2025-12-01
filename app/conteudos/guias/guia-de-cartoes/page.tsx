import Breadcrumb from '@/app/components/ui/breadcrumb';
import { buildArticleJsonLd } from '@/app/lib/jsonld';

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
                    {/* Metodologia prática */}
                    <section className="mt-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">Metodologia prática</h2>
                        <p className="text-dark-900/70 dark:text-light-100/70 mb-4">
                            Uma abordagem objetiva para trabalhar mercados de cartões combina preparação pré-jogo com leitura
                            ao vivo do contexto. Estruture sua análise em etapas e defina gatilhos claros.
                        </p>
                        <h3 className="text-xl font-semibold text-dark-900 dark:text-light-100 mb-2">Pré-jogo</h3>
                        <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                            <li>Árbitro: média de cartões/jogo, proporção amarelos/vermelhos, tendência recente.</li>
                            <li>Disciplina das equipes: cartões/90, faltas cometidas/90, faltas sofridas/90.</li>
                            <li>Contexto: clássico, decisão, briga por título/rebaixamento, clima e gramado.</li>
                            <li>Escalações: presença de volantes e zagueiros agressivos, laterais expostos.</li>
                            <li>Histórico de H2H com o mesmo árbitro (quando aplicável).</li>
                        </ul>
                        <h3 className="text-xl font-semibold text-dark-900 dark:text-light-100 mt-6 mb-2">Ao vivo</h3>
                        <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                            <li>Ritmo e intensidade: entradas fortes, pressão alta, número de faltas nos primeiros 15'.</li>
                            <li>Temperatura do jogo: discussões, reclamações, atrasos, cartões técnicos iniciais.</li>
                            <li>Minutos críticos: 30–45' e 70+ costumam concentrar advertências.</li>
                            <li>Ajuste de linha: reavalie expectativas conforme o jogo esfria ou esquenta.</li>
                        </ul>
                    </section>
                    {/* Indicadores-chave */}
                    <section className="mt-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">Indicadores-chave</h2>
                        <div className="space-y-4 text-dark-900/70 dark:text-light-100/70">
                            <p>Priorize indicadores que se traduzem diretamente em probabilidade de advertência:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Árbitro: cartões/jogo, faltas/jogo, tendência de cartões precoces.</li>
                                <li>Disciplina: cartões/90 por equipe e por posição (zagueiros/volantes).</li>
                                <li>Intensidade: duelos, desarmes e pressões por 90 minutos.</li>
                                <li>Contexto: rivalidade, importância da partida, necessidade de resultado.</li>
                                <li>Estratégia: linhas defensivas altas geram faltas táticas e cartões.</li>
                            </ul>
                        </div>
                    </section>
                    {/* Estratégias por período */}
                    <section className="mt-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">Estratégias por período</h2>
                        <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                            <li>0–15': observar ritmo e primeira advertência potencial; evitar entradas precipitadas.</li>
                            <li>30–45': buscar over cartões HT em jogos quentes com árbitro rígido.</li>
                            <li>45–60': cartões táticos no retorno; atenção a faltas repetidas.</li>
                            <li>70+: over FT quando o resultado aperta e a tensão cresce.</li>
                        </ul>
                    </section>
                    {/* Gestão de risco */}
                    <section className="mt-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">Gestão de risco</h2>
                        <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                            <li>Prefira stakes menores e escalonadas conforme o jogo esquenta.</li>
                            <li>Defina stop-loss por período para evitar tilt em partidas frias.</li>
                            <li>Evite aumentar stake após cartões inesperados sem mudança estrutural.</li>
                        </ul>
                    </section>
                    <section className="mt-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">Exemplo prático</h2>
                        <p className="text-dark-900/70 dark:text-light-100/70 mb-4">
                            Clássico com árbitro punitivo e média alta de cartões.
                        </p>
                        <div className="space-y-2 text-dark-900/70 dark:text-light-100/70">
                            <p><span className="font-semibold">Cenário:</span> Árbitro com 5.5 cartões/jogo, equipes com 3.0 e 2.6 cartões/90, duelo direto recente com alta tensão.</p>
                            <p><span className="font-semibold">Plano:</span> Monitorar primeiros 15' para ritmo; se faltas &gt; 10 e discussões frequentes, buscar over cartões HT. Caso o jogo permaneça quente após o intervalo, considerar over cartões FT com stake escalonada.</p>
                            <p><span className="font-semibold">Gatilhos:</span> entradas fortes repetidas, reclamações coletivas, cartões por retardar reinício, faltas táticas em transições.</p>
                            <p><span className="font-semibold">Gestão:</span> stake inicial pequena, incremento após sinais consistentes; stop-loss se ritmo cair drasticamente.</p>
                        </div>
                    </section>
                    {/* Erros comuns */}
                    <section className="mt-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">Erros comuns</h2>
                        <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                            <li>Ignorar perfil do árbitro e focar apenas no H2H.</li>
                            <li>Confundir alta de faltas com garantia de cartões em árbitros permissivos.</li>
                            <li>Desconsiderar suspensões/retornos que alteram a intensidade defensiva.</li>
                            <li>Superestimar clássicos sem evidência recente de jogo físico.</li>
                        </ul>
                    </section>
                    <section className="mt-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">Leituras relacionadas</h2>
                        <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                            <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/guias/interpretando-probabilidades-e-odds">Interpretando probabilidades e odds</a></li>
                            <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/guias/analise-de-confrontos-diretos">Análise de confrontos diretos</a></li>
                            <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/guias/como-gerenciar-sua-banca">Como gerenciar sua banca</a></li>
                            <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/guias/estrategias-analises-ao-vivo">Estratégias e análises ao vivo</a></li>
                            <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/guias/analise-por-periodo">Análise por período</a></li>
                        </ul>
                    </section>
                </div>
                {/* JSON-LD para SEO */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(
                            buildArticleJsonLd({
                                url: 'https://palpitesdodia.online/conteudos/guias/guia-de-cartoes',
                                title: 'Guia de Cartões',
                                description: 'Como analisar mercados de cartões considerando árbitro, contexto e período.',
                            })
                        ),
                    }}
                />
            </article>
        </div>
    );
}
