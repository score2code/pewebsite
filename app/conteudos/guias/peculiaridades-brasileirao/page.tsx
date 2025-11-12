import { generateGuideMetadata } from '@/app/utils/metadata';
import RelatedGuides from '@/app/components/related-guides';
import Breadcrumb from '@/app/components/ui/breadcrumb';

export const metadata = generateGuideMetadata({
  title: 'Peculiaridades do Brasileirão: O Guia Definitivo',
  description: 'Conheça as características únicas do Campeonato Brasileiro e como elas afetam suas análises. Guia completo sobre calendário, viagens, rotações e fatores climáticos no Brasileirão.',
  path: 'peculiaridades-brasileirao',
});

export default function PeculiaridadesBrasileiraoPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <h1 className="text-4xl font-bold text-dark-900 dark:text-light-100 mb-4">Peculiaridades do Brasileirão</h1>
          <p className="text-lg text-dark-900/70 dark:text-light-100/70">Entenda os fatores que tornam o Campeonato Brasileiro diferente e como adaptar suas análises.</p>
        </header>

        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Calendário e Viagens</h2>
            <p className="text-dark-900/70 dark:text-light-100/70 mb-4">Longas distâncias e jogos em sequência influenciam desempenho e aumentam variabilidade de resultados. Considere desgaste em partidas fora de casa e o efeito de viagens inter-regionais.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Rotações e Prioridades</h2>
            <p className="text-dark-900/70 dark:text-light-100/70 mb-4">Times com calendário continental (Libertadores) costumam rodar elenco no Brasileirão; analise prioridades do clube para cada partida.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Clima e Condições de Jogo</h2>
            <p className="text-dark-900/70 dark:text-light-100/70 mb-4">Variações climáticas entre regiões (chuva, calor) afetam estilo de jogo. Jogos em campos sintéticos ou naturais também têm impacto.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Dicas para análise</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Avalie viagens e descanso</li>
              <li>Considere prioridades de competição</li>
              <li>Use dados por região e tipo de campo</li>
              <li>Monitore mudanças de treinador e rendimento após contratações</li>
            </ul>
          </section>

          <RelatedGuides
            guides={[
              {
                title: 'Características da Premier League',
                slug: 'caracteristicas-premier-league',
                description: 'O futebol inglês e suas particularidades que influenciam probabilidades.',
              },
              {
                title: 'Entendendo a Copa Libertadores',
                slug: 'entendendo-libertadores',
                description: 'Como analisar jogos da principal competição sul-americana.',
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
