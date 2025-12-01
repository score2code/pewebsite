import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';
import { buildArticleJsonLd } from '@/app/lib/jsonld';

export const metadata = generateContentMetadata({
  title: 'Variação de gols HT/FT por liga',
  description: 'Comparativo entre primeiro e segundo tempo por competição.',
  path: 'insights/variacao-gols-ht-ft-ligas',
});

export default function VariacaoGolsHtFtLigasPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Variação de gols HT/FT por liga</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Entenda padrões entre tempos e ajuste janelas por competição.</p>
        </header>
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Métricas</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Médias de gols HT e FT por liga.</li>
              <li>Diferença HT-FT e distribuição por competição.</li>
              <li>Ritmo e substituições como fatores explicativos.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Procedimento</h2>
            <ol className="list-decimal list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Calcule deltas HT-FT e identifique ligas com maior variação.</li>
              <li>Ajuste janelas de entrada conforme padrão de cada liga.</li>
              <li>Combine com sinais ao vivo para confirmar ritmo.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Checklist</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Métricas de variação HT-FT consolidadas.</li>
              <li>Plano de janelas por liga definido.</li>
              <li>Integração com gestão de risco por variância.</li>
            </ul>
          </section>
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Exemplo prático</h2>
            <p className="text-dark-900/70 dark:text-light-100/70">Em ligas com maior produção de gols no FT, seja conservador em overs no HT e ajuste entradas para o segundo tempo com confirmação de ritmo.</p>
          </section>
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Leituras relacionadas</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/insights/ligas-mais-eficientes-under">Ligas mais eficientes para Under</a></li>
              <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/insights/impacto-mandante-posse-campo">Impacto do mandante: posse e campo</a></li>
              <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/artigos/leitura-momento-ao-vivo">Leitura de momento ao vivo</a></li>
            </ul>
          </section>
        </div>
        {/* JSON-LD para SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              buildArticleJsonLd({
                url: 'https://palpitesdodia.online/conteudos/insights/variacao-gols-ht-ft-ligas',
                title: 'Variação de gols HT/FT por liga',
                description: 'Comparativo entre primeiro e segundo tempo por competição.',
              })
            ),
          }}
        />
      </article>
    </div>
  );
}
