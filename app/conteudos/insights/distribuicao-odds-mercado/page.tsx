import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';
import { buildArticleJsonLd } from '@/app/lib/jsonld';

export const metadata = generateContentMetadata({
  title: 'Distribuição de odds do mercado',
  description: 'Entendendo concentrações, caudas e anomalias de preços.',
  path: 'insights/distribuicao-odds-mercado',
});

export default function DistribuicaoOddsMercadoPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Distribuição de odds do mercado</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Visualize padrões de preços, caudas e outliers para achar valor.</p>
        </header>
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">O que observar</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Histogramas por mercado e liga (moda, assimetria).</li>
              <li>Caudas gordas indicando precificação irregular.</li>
              <li>Concentração de odds padrão por casas (overround).</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Procedimento</h2>
            <ol className="list-decimal list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Remova overround e normalize preços por casa.</li>
              <li>Monte histogramas por janela e competição.</li>
              <li>Marque outliers e verifique contexto antes de atuar.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Checklist</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Dados limpos e odds comparáveis entre casas.</li>
              <li>Critérios de outlier claros (padrão por z-score/quantis).</li>
              <li>Registro de decisões baseado em distribuição.</li>
            </ul>
          </section>
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Exemplo prático</h2>
            <p className="text-dark-900/70 dark:text-light-100/70">Identifique caudas gordas em mercados de cantos HT com overround removido; investigue outliers antes de entrar e valide com sinais ao vivo.</p>
          </section>
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Leituras relacionadas</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/glossario#margem-da-casa-vig">Margem da Casa (Vig)</a></li>
              <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/metodologia-modelagem/calibracao-probabilidade-vs-odds">Calibração de probabilidade vs. odds</a></li>
              <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/artigos/gestao-banca-stake">Gestão de banca e stake</a></li>
            </ul>
          </section>
        </div>
        {/* JSON-LD para SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              buildArticleJsonLd({
                url: 'https://palpitesdodia.online/conteudos/insights/distribuicao-odds-mercado',
                title: 'Distribuição de odds do mercado',
                description: 'Entendendo concentrações, caudas e anomalias de preços.',
              })
            ),
          }}
        />
      </article>
    </div>
  );
}
