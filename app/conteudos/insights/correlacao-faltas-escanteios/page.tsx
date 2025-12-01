import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';
import { buildArticleJsonLd } from '@/app/lib/jsonld';

export const metadata = generateContentMetadata({
  title: 'Correlação entre faltas e escanteios',
  description: 'Existe relação útil? Onde ela aparece e como usar.',
  path: 'insights/correlacao-faltas-escanteios',
});

export default function CorrelacaoFaltasEscanteiosPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Correlação entre faltas e escanteios</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Relações por liga, contexto e limitações na interpretação.</p>
        </header>
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Interpretação</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Faltas podem indicar truncamento, não necessariamente pressão.</li>
              <li>Correlação varia por estilo de liga e arbitragem.</li>
              <li>Mais útil quando há posse/território alinhados.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Procedimento</h2>
            <ol className="list-decimal list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Calcule correlação condicional com posse e campo.</li>
              <li>Analise por janela e situação de jogo (placar, tempo).</li>
              <li>Use como reforço, não como sinal isolado.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Checklist</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Correlação medida com controle de contexto.</li>
              <li>Critérios para usar correlação como filtro definidos.</li>
              <li>Evitar entradas baseadas apenas em faltas.</li>
            </ul>
          </section>
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Exemplo prático</h2>
            <p className="text-dark-900/70 dark:text-light-100/70">Use correlação entre faltas e escanteios apenas quando houver posse territorial e sequência de ataques; caso contrário, faltas podem indicar truncamento.</p>
          </section>
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Leituras relacionadas</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/insights/impacto-mandante-posse-campo">Impacto do mandante: posse e campo</a></li>
              <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/insights/cantos-e-xg-relacao">Relação entre cantos e xG</a></li>
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
                url: 'https://palpitesdodia.online/conteudos/insights/correlacao-faltas-escanteios',
                title: 'Correlação entre faltas e escanteios',
                description: 'Existe relação útil? Onde ela aparece e como usar.',
              })
            ),
          }}
        />
      </article>
    </div>
  );
}
