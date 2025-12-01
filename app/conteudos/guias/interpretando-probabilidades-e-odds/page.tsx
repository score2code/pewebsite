import Breadcrumb from '@/app/components/ui/breadcrumb';
import { buildArticleJsonLd } from '@/app/lib/jsonld';
export default function ProbabilidadesOddsPage() {
    return (
        <div className="min-h-screen pt-8 pb-16 px-4">
            <article className="max-w-4xl mx-auto">
                <Breadcrumb className="mb-4" />
                {/* Header */}
                <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8
                    border border-light-300 dark:border-dark-600
                    shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
                    <h1 className="text-4xl font-bold text-dark-900 dark:text-light-100 mb-4">
                        Interpretando Probabilidades e Odds
                    </h1>
                    <p className="text-lg text-dark-900/70 dark:text-light-100/70">
                        Guia completo sobre como converter odds em probabilidades reais e identificar valor nas cotações.
                    </p>
                </header>

                {/* Content */}
                <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8
                    border border-light-300 dark:border-dark-600
                    shadow-custom dark:shadow-custom-dark backdrop-blur-sm">

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">
                            Entendendo as Odds
                        </h2>
                        <p className="text-dark-900/70 dark:text-light-100/70 mb-4">
                            As odds representam a probabilidade implícita de um evento acontecer, mas também incluem
                            a margem dos eventos esportivos. Saber interpretar essas informações é fundamental
                            para encontrar valor real.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">
                            Convertendo Odds em Probabilidades
                        </h2>
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-dark-900 dark:text-light-100">
                                Odds Decimais
                            </h3>
                            <p className="text-dark-900/70 dark:text-light-100/70 mb-4">
                                Para converter odds decimais em probabilidade:
                                Probabilidade = 1 / Odd Decimal
                                Exemplo: Odd 2.00 = 1/2.00 = 50% de probabilidade
                            </p>

                            <h3 className="text-xl font-semibold text-dark-900 dark:text-light-100">
                                Odds Fracionárias
                            </h3>
                            <p className="text-dark-900/70 dark:text-light-100/70 mb-4">
                                Para odds fracionárias (5/1):
                                Probabilidade = 1 / (5+1) = 16.67%
                            </p>

                            <h3 className="text-xl font-semibold text-dark-900 dark:text-light-100">
                                Odds Americanas
                            </h3>
                            <p className="text-dark-900/70 dark:text-light-100/70 mb-4">
                                Para odds positivas (+150):
                                Probabilidade = 100 / (150 + 100) = 40%

                                Para odds negativas (-150):
                                Probabilidade = 150 / (150 + 100) = 60%
                            </p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">
                            Identificando Valor
                        </h2>
                        <div className="space-y-4">
                            <p className="text-dark-900/70 dark:text-light-100/70">
                                O valor existe quando sua probabilidade calculada é maior que a probabilidade implícita na odd:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                                <li>Calcule sua probabilidade estimada do evento</li>
                                <li>Compare com a probabilidade implícita na odd</li>
                                <li>Se sua probabilidade maior que probabilidade da odd = Valor positivo</li>
                                <li>Considere a margem do evento</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">
                            Margem dos Eventos Esportivos
                        </h2>
                        <div className="space-y-4">
                            <p className="text-dark-900/70 dark:text-light-100/70 mb-4">
                                A margem é o lucro embutido nas odds. Para calculá-la:
                            </p>
                            <ol className="list-decimal list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                                <li>Some as probabilidades implícitas de todos os resultados possíveis</li>
                                <li>Subtraia 100%</li>
                                <li>O resultado é a margem da casa</li>
                            </ol>
                            <p className="text-dark-900/70 dark:text-light-100/70 mt-4">
                                Exemplo: Vitória (50%) + Empate (30%) + Derrota (30%) = 110%
                                Margem = 10%
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">
                            Dicas Práticas
                        </h2>
                        <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                            <li>Compare odds entre diferentes eventos</li>
                            <li>Acompanhe as movimentações das odds</li>
                            <li>Considere o momento de entrada</li>
                            <li>Use calculadoras de odds e probabilidades</li>
                            <li>Mantenha um registro de suas análises</li>
                        </ul>
                    </section>
                    <section className="mt-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">Checklist Rápida</h2>
                        <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                            <li>Converter odd em probabilidade implícita.</li>
                            <li>Comparar com sua estimativa ajustada por contexto.</li>
                            <li>Considerar margem e liquidez do mercado.</li>
                            <li>Definir preço mínimo para entrada.</li>
                        </ul>
                    </section>
                    <section className="mt-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">Erros Comuns</h2>
                        <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                            <li>Usar odds sem ajustar margem.</li>
                            <li>Confundir valor com probabilidade alta isolada.</li>
                            <li>Ignorar contexto (desfalques, calendário, clima).</li>
                        </ul>
                    </section>
                    <section className="mt-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">Exemplo prático</h2>
                        <p className="text-dark-900/70 dark:text-light-100/70">Odd 2.10 (47.6%) para Over 2.5; sua estimativa é 52% com base em xG e contexto. Há valor positivo: entrada válida com stake proporcional ao edge (52% - 47.6%).</p>
                    </section>
                    <section className="mt-8">
                        <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">Leituras relacionadas</h2>
                        <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
                            <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/guias/mercados-over-under-gols">Mercados Over/Under de gols</a></li>
                            <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/guias/como-gerenciar-sua-banca">Como gerenciar sua banca</a></li>
                            <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/guias/analise-de-confrontos-diretos">Análise de confrontos diretos</a></li>
                        </ul>
                    </section>
                </div>
                {/* JSON-LD para SEO */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(
                            buildArticleJsonLd({
                                url: 'https://palpitesdodia.online/conteudos/guias/interpretando-probabilidades-e-odds',
                                title: 'Interpretando Probabilidades e Odds',
                                description: 'Como converter odds em probabilidades e identificar valor real.',
                            })
                        ),
                    }}
                />
            </article>
        </div>
    );
}
