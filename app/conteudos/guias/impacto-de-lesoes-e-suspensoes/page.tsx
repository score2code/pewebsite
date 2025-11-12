import { generateGuideMetadata } from '@/app/utils/metadata';
import RelatedGuides from '@/app/components/related-guides';
import Breadcrumb from '@/app/components/ui/breadcrumb';

export const metadata = generateGuideMetadata({
  title: 'Impacto de Lesões e Suspensões: Guia de Análise',
  description: 'Aprenda a avaliar o impacto real de desfalques em equipes. Metodologia completa para análise de lesões, suspensões e seus efeitos nas probabilidades de jogos.',
  path: 'impacto-de-lesoes-e-suspensoes',
});

export default function ImpactoLesoesSuspensoesPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <h1 className="text-4xl font-bold text-dark-900 dark:text-light-100 mb-4">Impacto de Lesões e Suspensões</h1>
          <p className="text-lg text-dark-900/70 dark:text-light-100/70">Como medir e ajustar previsões com base em desfalques importantes.</p>
        </header>

        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Identificando desfalques críticos</h2>
            <p className="text-dark-900/70 dark:text-light-100/70 mb-4">Nem todas as ausências têm o mesmo peso. Identifique se o jogador é ponto de referência ofensivo, construtor de jogo, líder defensivo ou peça tática essencial.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Métricas para quantificar impacto</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Gols/assistências por 90 minutos</li>
              <li>xG contribuído</li>
              <li>Interceptações e desarmes por 90</li>
              <li>Participação em ações ofensivas</li>
              <li>Participação no esquema tático (pressão, saída de bola)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Ajustando probabilidade</h2>
            <p className="text-dark-900/70 dark:text-light-100/70 mb-4">Crie um multiplicador de impacto baseado no tipo de jogador (goleador, meio-campista criativo, líder defensivo) e na profundidade do elenco. Ex.: ausência de um artilheiro pode reduzir a probabilidade de vitória em X%.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Fontes confiáveis</h2>
            <p className="text-dark-900/70 dark:text-light-100/70">Use sites oficiais, relatórios médicos e fontes locais. Verifique também o histórico de substitutos e a capacidade do treinador de adaptar a equipe.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Resumo</h2>
            <p className="text-dark-900/70 dark:text-light-100/70">Lesões e suspensões são determinantes em várias partidas. Quantifique o impacto, combine com dados e ajuste suas decisões com base na profundidade do elenco e mudanças táticas.</p>
          </section>

          <RelatedGuides
            guides={[
              {
                title: 'Análise de Confrontos Diretos',
                slug: 'analise-de-confrontos-diretos',
                description: 'Como interpretar o histórico entre equipes e usar isso nas suas previsões.',
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
