import { generateGuideMetadata } from '@/app/utils/metadata';
import RelatedGuides from '@/app/components/related-guides';
import { buildArticleJsonLd } from '@/app/lib/jsonld';

export const metadata = generateGuideMetadata({
  title: 'Como Identificar Valor nas Odds: Guia Prático',
  description: 'Aprenda métodos práticos para encontrar valor real nas odds. Guia completo sobre análise de probabilidades, comparação com odds do mercado e identificação de oportunidades de valor.',
  path: 'como-identificar-valor-nas-odds',
});

export default function IdentificarValorOddsPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <h1 className="text-4xl font-bold text-dark-900 dark:text-light-100 mb-4">Como Identificar Valor nas Odds</h1>
          <p className="text-lg text-dark-900/70 dark:text-light-100/70">Técnicas práticas para comparar sua estimativa com o mercado e encontrar oportunidades de valor.</p>
        </header>

        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Definição de valor</h2>
            <p className="text-dark-900/70 dark:text-light-100/70 mb-4">Valor existe quando sua probabilidade estimada do evento é maior que a probabilidade implícita na odd oferecida pela casa.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Passo a passo</h2>
            <ol className="list-decimal list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Calcule sua probabilidade (modelo ou julgamento experiente)</li>
              <li>Converta a odd em probabilidade implícita (1/odd decimal)</li>
              <li>Compare e avalie a margem da casa</li>
              <li>Se sua probabilidade for significativamente maior, há valor</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Exemplo prático</h2>
            <div className="space-y-4 text-dark-900/70 dark:text-light-100/70">
              <p>
                Suponha que você estime <strong className="text-dark-900 dark:text-light-100">45%</strong> de chance de vitória do Time A.
                O mercado oferece odd decimal <strong className="text-dark-900 dark:text-light-100">2.40</strong>, cuja probabilidade
                implícita é <code className="px-1 py-0.5 bg-light-200/60 dark:bg-dark-700/60 rounded">1 / 2.40 = 41.67%</code>.
              </p>
              <p>
                Como sua estimativa (45%) é maior que 41.67%, há indício de valor. Ajuste para a margem da casa quando necessário
                e verifique consistência do sinal em amostras maiores antes de aumentar a exposição.
              </p>
              <div className="bg-light-200/50 dark:bg-dark-700/50 rounded-lg p-4 border border-light-300 dark:border-dark-600">
                <ul className="list-disc list-inside ml-4">
                  <li>Probabilidade estimada: 45%</li>
                  <li>Odd mercado: 2.40 → Prob. implícita: 41.67%</li>
                  <li>Conclusão: diferença positiva sugere valor (com due diligence)</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Ferramentas úteis</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Calculadoras de probabilidade</li>
              <li>Comparadores de odds</li>
              <li>Modelos simples em spreadsheets</li>
              <li>APIs de odds para monitoramento</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Gestão do valor encontrado</h2>
            <p className="text-dark-900/70 dark:text-light-100/70">Não é porque encontrou valor em uma ocorrência isolada que deve arriscar muito. Integre o valor na estratégia de staking e considere a consistência do sinal.</p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Checklist Rápida</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Converter odd em probabilidade e ajustar margem.</li>
              <li>Comparar com sua estimativa e contexto.</li>
              <li>Definir preço mínimo e stake por confiança.</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Erros Comuns</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Confundir odd alta com valor sem análise.</li>
              <li>Ignorar contexto de desfalques e calendário.</li>
              <li>Não considerar liquidez e variação de preço.</li>
            </ul>
          </section>

          <RelatedGuides
            guides={[
              {
                title: 'Análise de Confrontos Diretos',
                slug: 'analise-de-confrontos-diretos',
                description: 'Como interpretar o histórico entre equipes e usar isso nas suas previsões.',
              },
              {
                title: 'Impacto de Lesões e Suspensões',
                slug: 'impacto-de-lesoes-e-suspensoes',
                description: 'Como avaliar o impacto real de desfalques no desempenho das equipes.',
              },
              {
                title: 'Análise por Período',
                slug: 'analise-por-periodo',
                description: 'Como analisar e explorar considerando o comportamento por tempos de jogo.',
              },
            ]}
          />
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              buildArticleJsonLd({
                url: 'https://palpitesdodia.online/conteudos/guias/como-identificar-valor-nas-odds',
                title: 'Como Identificar Valor nas Odds: Guia Prático',
                description:
                  'Aprenda métodos práticos para encontrar valor real nas odds. Guia completo sobre análise de probabilidades, comparação com odds do mercado e identificação de oportunidades de valor.',
              })
            ),
          }}
        />
      </article>
    </div>
  );
}
