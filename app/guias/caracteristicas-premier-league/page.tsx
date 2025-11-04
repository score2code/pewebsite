import { generateGuideMetadata } from '@/app/utils/metadata';
import RelatedGuides from '@/app/components/related-guides';

export const metadata = generateGuideMetadata({
  title: 'Características da Premier League: Guia de Análise',
  description: 'Descubra os padrões únicos do futebol inglês e como eles afetam suas análises. Guia completo sobre ritmo de jogo, competitividade e fatores táticos da Premier League.',
  path: 'caracteristicas-premier-league',
});

export default function PremierLeaguePage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <h1 className="text-4xl font-bold text-dark-900 dark:text-light-100 mb-4">Características da Premier League</h1>
          <p className="text-lg text-dark-900/70 dark:text-light-100/70">O futebol inglês tem padrões e particularidades que influenciam probabilidades e mercados.</p>
        </header>

        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Ritmo e Intensidade</h2>
            <p className="text-dark-900/70 dark:text-light-100/70 mb-4">A Premier League é conhecida pelo ritmo elevado e transições rápidas, o que tende a gerar mais oportunidades e gols em certos duelos.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Competitividade</h2>
            <p className="text-dark-900/70 dark:text-light-100/70 mb-4">Mesmo equipes de menor orçamento costumam competir com intensidade, aumentando a variabilidade. Surpresas e viradas são relativamente comuns.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Fatores Táticos</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Pressão alta</li>
              <li>Transições rápidas</li>
              <li>Importância do jogo aéreo em alguns estádios</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Como adaptar sua análise</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Valorize estatísticas de finalização e transição</li>
              <li>Considere impacto do calendário (copas e europeus)</li>
              <li>Observe ritmo de jogo e histórico de confrontos</li>
            </ul>
          </section>

          <RelatedGuides
            guides={[
              {
                title: 'Peculiaridades do Brasileirão',
                slug: 'peculiaridades-brasileirao',
                description: 'Entenda os fatores que tornam o Campeonato Brasileiro diferente.',
              },
              {
                title: 'Análise por Período',
                slug: 'analise-por-periodo',
                description: 'Como analisar e explorar considerando o comportamento por tempos de jogo.',
              },
              {
                title: 'Impacto de Lesões e Suspensões',
                slug: 'impacto-de-lesoes-e-suspensoes',
                description: 'Como avaliar o impacto real de desfalques no desempenho das equipes.',
              },
            ]}
          />
        </div>
      </article>
    </div>
  );
}
