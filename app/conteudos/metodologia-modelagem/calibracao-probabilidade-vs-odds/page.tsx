import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';
import { buildArticleJsonLd } from '@/app/lib/jsonld';

export const metadata = generateContentMetadata({
  title: 'Calibração de probabilidade vs. odds',
  description: 'Alinhando estimativas com o mercado e reduzindo erro.',
  path: 'metodologia-modelagem/calibracao-probabilidade-vs-odds',
});

export default function CalibracaoProbabilidadeVsOddsPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Calibração de probabilidade vs. odds</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Compare previsões com preços de mercado e ajuste para confiabilidade.</p>
        </header>
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Objetivo</h2>
            <p className="text-dark-900/70 dark:text-light-100/70">Garantir que a probabilidade prevista pelo modelo represente corretamente a frequência observada, e que esteja alinhada com o mercado após remover a margem da casa.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Métricas de calibração</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li><span className="font-semibold">Brier Score</span>: média de (p − y)^2 ao longo das observações.</li>
              <li><span className="font-semibold">Log Loss</span>: penaliza previsões confiantes quando erradas (cross-entropy).</li>
              <li><span className="font-semibold">Reliability Diagram</span>: comparação de bins de probabilidade prevista vs. frequência observada.</li>
              <li><span className="font-semibold">ECE</span> (Expected Calibration Error): erro médio ponderado por bins.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Procedimento prático</h2>
            <ol className="list-decimal list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Remova a margem (overround) das odds e converta para probabilidade implícita.</li>
              <li>Compare sua previsão com a probabilidade implícita em janelas de tempo e competições.</li>
              <li>Use <span className="font-semibold">isotonic regression</span> ou <span className="font-semibold">Platt scaling</span> para ajustar a confiabilidade.</li>
              <li>Reavalie Brier/Log Loss antes e depois da calibração para medir ganhos.</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Armadilhas comuns</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Calibrar sobre o <span className="font-semibold">mesmo período usado no treino</span> (fuga de informação).</li>
              <li>Ignorar <span className="font-semibold">movimentos de mercado</span> próximos do início do jogo.</li>
              <li>Comparar odds sem remover a margem, produzindo viés sistemático.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Checklist</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Overround removido e odds padronizadas por fonte.</li>
              <li>Reliability diagram com bins estáveis por amostra.</li>
              <li>Ajuste monotônico (isotônico) aplicado quando necessário.</li>
              <li>Métricas antes/depois documentadas por competição.</li>
            </ul>
          </section>
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Exemplo prático</h2>
            <p className="text-dark-900/70 dark:text-light-100/70">Construa bins de probabilidade (ex.: 0.1–0.2, 0.2–0.3…) e compare com frequências observadas. Aplique regressão isotônica para corrigir superconfiança e reavalie Brier/ECE.</p>
          </section>
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Leituras relacionadas</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/glossario/#margem-casa-vig">Margem da Casa (Vig)</a></li>
              <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/guias/calculo-de-probabilidade-e-confianca">Cálculo de probabilidade e confiança</a></li>
              <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/artigos/valor-esperado-na-pratica">Valor esperado na prática</a></li>
            </ul>
          </section>
        </div>
        {/* JSON-LD para SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              buildArticleJsonLd({
                url: 'https://palpitesdodia.online/conteudos/metodologia-modelagem/calibracao-probabilidade-vs-odds',
                title: 'Calibração de probabilidade vs. odds',
                description: 'Alinhando estimativas com o mercado e reduzindo erro.',
              })
            ),
          }}
        />
      </article>
    </div>
  );
}
