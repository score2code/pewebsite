import { generateGuideMetadata } from '@/app/utils/metadata';
import RelatedGuides from '@/app/components/related-guides';
import Breadcrumb from '@/app/components/ui/breadcrumb';

export const metadata = generateGuideMetadata({
  title: 'Análise de Confrontos Diretos: Guia Completo para Avaliação',
  description: 'Aprenda a interpretar o histórico entre equipes de forma eficaz. Guia completo sobre análise de confrontos diretos, tendências e padrões táticos para previsões mais precisas.',
  path: 'analise-de-confrontos-diretos',
});

export default function AnaliseConfrontosDiretosPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <h1 className="text-4xl font-bold text-dark-900 dark:text-light-100 mb-4">Análise de Confrontos Diretos</h1>
          <p className="text-lg text-dark-900/70 dark:text-light-100/70">Como interpretar o histórico entre equipes e usar isso nas suas previsões.</p>
        </header>

        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Por que confrontos diretos importam</h2>
            <p className="text-dark-900/70 dark:text-light-100/70 mb-4">O histórico entre dois times revela tendências, padrões táticos e fatores psicológicos que nem sempre aparecem nas estatísticas agregadas. Em alguns confrontos, determinadas equipes repetem comportamentos (ex.: bloqueio defensivo, contra-ataques) que alteram as probabilidades reais do evento.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">O que observar</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Resultados nos últimos 5-10 encontros</li>
              <li>Local dos jogos (casa/fora/neutro)</li>
              <li>Diferença tática entre os confrontos</li>
              <li>Eventos recorrentes: muitos gols, cartões ou escanteios</li>
              <li>Impacto de jogadores-chave ausentes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Limitando vieses</h2>
            <p className="text-dark-900/70 dark:text-light-100/70 mb-4">Evite extrapolar um pequeno número de jogos. Use confrontos diretos como um sinal complementar, não como a única evidência. Dê peso maior a encontros recentes e a jogos em contextos semelhantes (mesma competição, mesmas circunstâncias).</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Método prático</h2>
            <ol className="list-decimal list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Colete resultados dos últimos 5-10 duelos</li>
              <li>Compare forma atual das equipes nas mesmas janelas</li>
              <li>Avalie mudanças táticas e de elenco</li>
              <li>Combine com métricas avançadas (xG, finalizações esperadas)</li>
              <li>Aplique ajuste na probabilidade estimada quando houver sinal forte</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Conclusão</h2>
            <p className="text-dark-900/70 dark:text-light-100/70">Confrontos diretos são uma ferramenta valiosa quando usados com critério. Integre esse olhar à análise estatística e ao contexto atual das equipes para decisões mais informadas.</p>
          </section>

          <RelatedGuides
            guides={[
              {
                title: 'Impacto de Lesões e Suspensões',
                slug: 'impacto-de-lesoes-e-suspensoes',
                description: 'Como avaliar o impacto real de desfalques no desempenho das equipes.',
              },
              {
                title: 'Como Identificar Valor nas Odds',
                slug: 'como-identificar-valor-nas-odds',
                description: 'Técnicas práticas para encontrar oportunidades de valor nas odds.',
              },
            ]}
          />
        </div>
      </article>
    </div>
  );
}
