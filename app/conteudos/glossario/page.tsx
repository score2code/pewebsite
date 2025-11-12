import Link from 'next/link';
import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';

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
];

export default function GlossarioPage() {
  return (
    <div className="min-h-screen pt-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Glossário e Fundamentos</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Conceitos essenciais para uma base sólida.</p>
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
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
