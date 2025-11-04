import { generateGuideMetadata } from '@/app/utils/metadata';
import RelatedGuides from '@/app/components/related-guides';

export const metadata = generateGuideMetadata({
  title: 'Análise por Tempo de Jogo: 1º e 2º Tempo',
  description: 'Guia completo sobre análise de padrões de gols e eventos por período de jogo. Aprenda estratégias para análise no primeiro e segundo tempo, considerando comportamentos e tendências.',
  path: 'analise-por-periodo',
});

export default function ApostasPorTempoPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <h1 className="text-4xl font-bold text-dark-900 dark:text-light-100 mb-4">Análise por Período (1º / 2º Tempo)</h1>
          <p className="text-lg text-dark-900/70 dark:text-light-100/70">Como analisar e explorar considerando o comportamento por tempos de jogo.</p>
        </header>

        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Por que dividir por períodos</h2>
            <p className="text-dark-900/70 dark:text-light-100/70 mb-4">Equipes apresentam comportamentos distintos entre primeiro e segundo tempo (ritmo, substituições, desgaste). Analisar por períodos permite explorar essas diferenças.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Indicadores por tempo</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Média de gols no 1º / 2º tempo</li>
              <li>Finalizações por 45 minutos</li>
              <li>Substituições e impacto tático</li>
              <li>Comportamento defensivo após sofrer gol</li>
              <li>Tempo de posse por período</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Estratégias comuns</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Buscar gols no final do 2º tempo (times que atacam após substituir)</li>
              <li>Explorar under no 1º tempo quando equipes são cautelosas</li>
              <li>Explorar mercados de intervalo/resultado</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Dicas práticas</h2>
            <p className="text-dark-900/70 dark:text-light-100/70">Use dados segmentados por intervalos, observe a média dos últimos 6 jogos por período e combine com contexto (árbitro, clima, desfalques).</p>
          </section>

          <RelatedGuides
            guides={[
              {
                title: 'Como Identificar Valor nas Odds',
                slug: 'como-identificar-valor-nas-odds',
                description: 'Técnicas práticas para encontrar oportunidades de valor nas odds.',
              },
              {
                title: 'Peculiaridades do Brasileirão',
                slug: 'peculiaridades-brasileirao',
                description: 'Entenda os fatores que tornam o Campeonato Brasileiro diferente.',
              },
              {
                title: 'Características da Premier League',
                slug: 'caracteristicas-premier-league',
                description: 'O futebol inglês e suas particularidades que influenciam probabilidades.',
              },
            ]}
          />
        </div>
      </article>
    </div>
  );
}
