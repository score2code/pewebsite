import Link from 'next/link';
import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';
import { buildItemListJsonLd } from '@/app/lib/jsonld';

export const metadata = generateContentMetadata({
  title: 'Glossário e Fundamentos',
  description: 'Conceitos base explicados de forma didática para mercados e probabilidades.',
  path: 'glossario',
});

const terms = [
  { title: 'Handicap Asiático', slug: 'handicap-asiatico', description: 'Como funciona e quando usar.' },
  { title: 'Over/Under', slug: 'over-under', description: 'Entendendo totais e suas nuances.' },
  { title: 'Valor Esperado (EV)', slug: 'valor-esperado', description: 'Cálculo, uso e limitações.' },
  { title: 'Probabilidade Implícita', slug: 'probabilidade-implicita', description: 'Convertendo odds em chance.' },
  { title: 'Banca e Stake', slug: 'banca-e-stake', description: 'Fundamentos de gestão e exposição.' },
  { title: 'Margem da Casa (Vig)', slug: 'margem-casa-vig', description: 'Entenda o spread embutido nas odds.' },
  { title: 'Parcialização', slug: 'parcializacao', description: 'Reduzir risco e travar lucro em etapas.' },
  { title: 'Hedge', slug: 'hedge', description: 'Proteção parcial/total em cenários ao vivo.' },
];

export default function GlossarioPage() {
  return (
    <div className="min-h-screen pt-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Glossário e Fundamentos</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Conceitos essenciais para uma base sólida.</p>
          <div className="mt-4 bg-white/40 dark:bg-black/20 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">Como aproveitar melhor</h2>
            <ul className="list-disc list-inside space-y-1 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Leia 2–3 termos por vez e aplique em jogos reais.</li>
              <li>Ligue conceitos: probabilidade implícita → EV → preço mínimo.</li>
              <li>Registre exemplos e revisite semanalmente para consolidar.</li>
            </ul>
          </div>
        </header>
        <div className="grid gap-6 md:grid-cols-2">
          {terms.map((a) => (
            <a key={a.slug} href={`#${a.slug}`} className="group">
              <div className="h-full bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
                <h2 className="text-xl font-bold mb-2">{a.title}</h2>
                <p className="text-dark-900/70 dark:text-light-100/70">{a.description}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 space-y-12">
          {terms.map((a) => (
            <section id={a.slug} key={a.slug} className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
              <h2 className="text-2xl font-bold mb-3">{a.title}</h2>
              <p className="text-dark-900/70 dark:text-light-100/70 mb-4">{a.description}</p>

              {a.slug === 'handicap-asiatico' && (
                <div className="space-y-4 text-dark-900/70 dark:text-light-100/70">
                  <p>
                    O handicap aplica um ajuste virtual ao placar para equilibrar confrontos. Linhas comuns incluem
                    +0.5, -1.0 e -1.5, com possibilidade de <em>push</em> (devolução) em linhas inteiras.
                  </p>
                  <ul className="list-disc list-inside ml-4">
                    <li><strong>0.0</strong>: análise neutra; empate resulta em devolução.</li>
                    <li><strong>-0.5</strong>: equivalente à vitória simples; precisa vencer.</li>
                    <li><strong>-1.0</strong>: requer vitória por 2+ gols para validação completa; 1 gol é parcial.</li>
                  </ul>
                </div>
              )}

              {a.slug === 'over-under' && (
                <div className="space-y-4 text-dark-900/70 dark:text-light-100/70">
                  <p>
                    Over/Under (Mais/Menos) prevê se o total de gols ficará acima ou abaixo de uma linha (ex.: 2.5).
                    Relacione ritmo de jogo e xG para contextualizar as expectativas.
                  </p>
                  <h3 className="text-xl font-semibold text-dark-900 dark:text-light-100">Linhas comuns</h3>
                  <ul className="list-disc list-inside ml-4">
                    <li>0.5 • 1.5 • 2.5 • 3.5 • 4.5</li>
                  </ul>
                  <h3 className="text-xl font-semibold text-dark-900 dark:text-light-100">Fatores de análise</h3>
                  <ul className="list-disc list-inside ml-4">
                    <li>Médias de gols e percentual Over/Under</li>
                    <li>Casa/fora, confronto direto e estilo tático</li>
                    <li>Desfalques relevantes e contexto da partida</li>
                  </ul>
                </div>
              )}

              {a.slug === 'valor-esperado' && (
                <div className="space-y-4 text-dark-900/70 dark:text-light-100/70">
                  <p>
                    EV (Valor Esperado) combina sua probabilidade estimada com o preço (odd) para avaliar decisões.
                    Existe valor quando sua probabilidade é maior que a probabilidade implícita na odd.
                  </p>
                  <ul className="list-disc list-inside ml-4">
                    <li>Calcule a probabilidade do evento com seu modelo</li>
                    <li>Converta a odd em probabilidade implícita</li>
                    <li>Compare e considere a margem do evento</li>
                  </ul>
                </div>
              )}

              {a.slug === 'probabilidade-implicita' && (
                <div className="space-y-4 text-dark-900/70 dark:text-light-100/70">
                  <h3 className="text-xl font-semibold text-dark-900 dark:text-light-100">Conversões</h3>
                  <ul className="list-disc list-inside ml-4">
                    <li><strong>Decimais</strong>: Prob = 1 / Odd (ex.: 2.00 → 50%)</li>
                    <li><strong>Fracionárias</strong>: Prob = 1 / (a+b) (ex.: 5/1 → 16.67%)</li>
                    <li><strong>Americanas</strong>: +150 → 100/(150+100) = 40% • -150 → 150/(150+100) = 60%</li>
                  </ul>
                  <p>Some as probabilidades implícitas dos resultados e subtraia 100% para estimar a margem.</p>
                </div>
              )}

              {a.slug === 'banca-e-stake' && (
                <div className="space-y-4 text-dark-900/70 dark:text-light-100/70">
                  <p>
                    Defina exposição responsável e sustentável. Use stake por confiança e variância para proteger a banca.
                  </p>
                  <h3 className="text-xl font-semibold text-dark-900 dark:text-light-100">Staking básico</h3>
                  <ul className="list-disc list-inside ml-4">
                    <li>Stake fixo: 1–2% do bankroll por operação</li>
                    <li>Por confiança: 1% baixa • 2% média • 3% alta (máx. 5%)</li>
                    <li>Regra de ouro: evite perseguir prejuízos e mantenha registros</li>
                  </ul>
                </div>
              )}

              {a.slug === 'margem-casa-vig' && (
                <div className="space-y-4 text-dark-900/70 dark:text-light-100/70">
                  <p>A margem da casa (vig) é o spread embutido nas odds. Ao somar probabilidades implícitas dos resultados, o total excede 100% pela margem.</p>
                  <h3 className="text-xl font-semibold text-dark-900 dark:text-light-100">Como estimar</h3>
                  <ul className="list-disc list-inside ml-4">
                    <li>Converta odds 1X2 em probabilidades implícitas.</li>
                    <li>Some as probabilidades e subtraia 100% para a margem.</li>
                    <li>Ajuste seu modelo levando a vig em conta.</li>
                  </ul>
                </div>
              )}

              {a.slug === 'parcializacao' && (
                <div className="space-y-4 text-dark-900/70 dark:text-light-100/70">
                  <p>Parcializar é realizar parte do lucro (ou reduzir risco) em eventos/condições definidas, preservando upside e controlando drawdown.</p>
                  <h3 className="text-xl font-semibold text-dark-900 dark:text-light-100">Princípios</h3>
                  <ul className="list-disc list-inside ml-4">
                    <li>Defina gatilhos objetivos (evento, preço, tempo).</li>
                    <li>Evite parcializar por medo sem critérios.</li>
                    <li>Documente impacto no EV e variância.</li>
                  </ul>
                </div>
              )}

              {a.slug === 'hedge' && (
                <div className="space-y-4 text-dark-900/70 dark:text-light-100/70">
                  <p>Hedge é proteção parcial/total de uma posição aberta. Útil em ao vivo quando contexto muda e risco aumenta.</p>
                  <h3 className="text-xl font-semibold text-dark-900 dark:text-light-100">Boas práticas</h3>
                  <ul className="list-disc list-inside ml-4">
                    <li>Preferir proteção parcial para manter upside.</li>
                    <li>Basear decisão em sinais e preço, não emoção.</li>
                    <li>Planejar a saída e registrar a decisão.</li>
                  </ul>
                </div>
              )}
            </section>
          ))}

          {/* Leituras relacionadas */}
          <section className="bg-white/40 dark:bg-black/20 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-3">Leituras relacionadas</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li><Link className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/guias/calculo-de-probabilidade-e-confianca">Cálculo de probabilidade e confiança</Link></li>
              <li><Link className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/artigos/valor-esperado-na-pratica">Valor esperado na prática</Link></li>
              <li><Link className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/estrategias-avancadas/gestao-stake-por-confianca">Gestão de stake por confiança</Link></li>
            </ul>
          </section>
        </div>

        {/* JSON-LD ItemList para SEO do glossário */}
        {(() => {
          const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
          const itemListJsonLd = buildItemListJsonLd(
            `${baseUrl}/conteudos/glossario`,
            'Glossário e Fundamentos',
            terms.map(t => ({
              url: `${baseUrl}/conteudos/glossario/#${t.slug}`,
              name: t.title,
              description: t.description,
            })),
            'Coleção de termos e fundamentos para análise de mercados e probabilidades.'
          );
          return (
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
          );
        })()}
      </div>
    </div>
  );
}
