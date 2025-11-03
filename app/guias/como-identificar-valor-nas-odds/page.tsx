import { generateGuideMetadata } from '@/app/utils/metadata';
import RelatedGuides from '@/app/components/related-guides';

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
                title: 'Apostas por Período',
                slug: 'apostas-primeiro-segundo-tempo',
                description: 'Como analisar e apostar considerando o comportamento por tempos de jogo.',
              },
            ]}
          />
        </div>
      </article>
    </div>
  );
}
