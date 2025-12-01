import { generateGuideMetadata } from '@/app/utils/metadata';
import RelatedGuides from '@/app/components/related-guides';
import { buildArticleJsonLd } from '@/app/lib/jsonld';

export const metadata = generateGuideMetadata({
  title: 'Entendendo a Copa Libertadores: Guia de Análise',
  description: 'Aprenda as características únicas da principal competição sul-americana. Guia completo sobre fatores ambientais, viagens, estilos de jogo e aspectos táticos na Libertadores.',
  path: 'entendendo-libertadores',
});

export default function EntendendoLibertadoresPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              buildArticleJsonLd({
                url: 'https://palpitesdodia.online/conteudos/guias/entendendo-libertadores',
                title: 'Entendendo a Copa Libertadores: Guia de Análise',
                description:
                  'Aprenda as características únicas da principal competição sul-americana. Guia sobre fatores ambientais, viagens, estilos de jogo e aspectos táticos na Libertadores.',
              })
            ),
          }}
        />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <h1 className="text-4xl font-bold text-dark-900 dark:text-light-100 mb-4">Entendendo a Copa Libertadores</h1>
          <p className="text-lg text-dark-900/70 dark:text-light-100/70">Características da principal competição sul-americana e como isso afeta previsões e mercados.</p>
        </header>

        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Ambiente e Viagens</h2>
            <p className="text-dark-900/70 dark:text-light-100/70 mb-4">Viagens longas, altitude e condições distintas tornam a Libertadores uma competição com alta variabilidade. Jogos em altitude (ex.: Bolívia) e clima diferente são fatores críticos.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Estilo de Jogo</h2>
            <p className="text-dark-900/70 dark:text-light-100/70 mb-4">A competição mistura estilos: times técnicos e de posse contra adversários físicos e de contra-ataque. Isso exige uma análise contextual por confronto.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Fatores Táticos e Emocionais</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Importância do jogo de ida e volta</li>
              <li>Pressão atmosférica e altitude</li>
              <li>Torque emocional (torcida e rivalidade)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Exemplo prático</h2>
            <div className="space-y-4 text-dark-900/70 dark:text-light-100/70">
              <p>
                Em jogo na altitude de La Paz, ajuste sua estimativa de gols considerando queda de intensidade de equipes visitantes.
                Sua probabilidade base de <strong className="text-dark-900 dark:text-light-100">Over 2.5</strong> era 53%; com ajuste de contexto
                de <strong className="text-dark-900 dark:text-light-100">-8% relativo</strong>, nova estimativa é ~48.8%.
              </p>
              <div className="bg-light-200/50 dark:bg-dark-700/50 rounded-lg p-4 border border-light-300 dark:border-dark-600">
                <ul className="list-disc list-inside ml-4">
                  <li>Probabilidade base Over 2.5: 53%</li>
                  <li>Ajuste relativo altitude: -8% → 53% × (1 - 0.08) ≈ 48.8%</li>
                  <li>Decisão: comparar com odd implícita antes de concluir valor</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Dicas de análise</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Considere o efeito da altitude</li>
              <li>Avalie viagens e tempo de descanso</li>
              <li>Use histórico por estádio e condição climática</li>
              <li>Monitore escalações locais e estratégias táticas</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Checklist Rápida</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Altitude e clima mapeados por local.</li>
              <li>Viagens e janela de descanso avaliadas.</li>
              <li>Prioridade da competição e rotações consideradas.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Erros Comuns</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Ignorar efeito de altitude e viagens longas.</li>
              <li>Generalizar estilo sem análise por confronto.</li>
              <li>Subestimar fator emocional e ambiente.</li>
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
                title: 'Impacto de Lesões e Suspensões',
                slug: 'impacto-de-lesoes-e-suspensoes',
                description: 'Como avaliar o impacto real de desfalques no desempenho das equipes.',
              },
              {
                title: 'Análise de Confrontos Diretos',
                slug: 'analise-de-confrontos-diretos',
                description: 'Como interpretar o histórico entre equipes e usar isso nas suas previsões.',
              },
            ]}
          />

          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Leituras relacionadas</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <a className="text-primary-600 dark:text-primary-400 hover:underline" href="/conteudos/guias/peculiaridades-brasileirao">Peculiaridades do Brasileirão</a>
              </li>
              <li>
                <a className="text-primary-600 dark:text-primary-400 hover:underline" href="/conteudos/guias/analise-por-periodo">Análise por Período</a>
              </li>
              <li>
                <a className="text-primary-600 dark:text-primary-400 hover:underline" href="/conteudos/guias/como-identificar-valor-nas-odds">Como Identificar Valor nas Odds</a>
              </li>
            </ul>
          </section>
        </div>
      </article>
    </div>
  );
}
