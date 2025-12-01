import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';
import { buildArticleJsonLd } from '@/app/lib/jsonld';

export const metadata = generateContentMetadata({
  title: 'Valor esperado na prática',
  description: 'Aplicando EV nas decisões diárias de forma simples e objetiva.',
  path: 'artigos/valor-esperado-na-pratica',
});

export default function ValorEsperadoNaPraticaPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Valor esperado na prática</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">EV positivo com execução, timing e gestão para consistência.</p>
        </header>
        <section className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h2 className="text-2xl font-bold mb-3">Conceito</h2>
          <p className="text-dark-900/80 dark:text-light-100/80">EV (valor esperado) estima o retorno médio ponderado pela probabilidade de cada resultado.</p>
        </section>

        <section className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mt-6 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h2 className="text-2xl font-bold mb-3">Exemplo numérico</h2>
          <ul className="list-disc list-inside space-y-2 text-dark-900/80 dark:text-light-100/80 ml-4">
            <li><span className="font-semibold">Odd:</span> 2.10 (decimal). <span className="font-semibold">Probabilidade estimada:</span> 52%.</li>
            <li>EV ≈ (0.52 × 1.10) + (0.48 × -1.00) = 0.572 - 0.48 = 0.092.</li>
            <li>EV positivo sugere vantagem; confirme execução, janela e risco.</li>
          </ul>
        </section>

        <section className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mt-6 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h2 className="text-2xl font-bold mb-3">Aplicação prática</h2>
          <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
            <li>Use EV como filtro, não como único gatilho de entrada.</li>
            <li>Combine com sinais de momento, preço justo e janela de tempo.</li>
            <li>Defina tamanho e pontos de saída antes da execução.</li>
          </ul>
        </section>

        <section className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mt-6 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h2 className="text-2xl font-bold mb-3">Erros comuns</h2>
          <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
            <li>Superestimar probabilidades por viés recente ou narrativa.</li>
            <li>Ignorar fricções de execução (delay, liquidez, suspensão).</li>
            <li>Desalinhamento entre EV e plano de saída/gestão.</li>
          </ul>
        </section>

        <section className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mt-6 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h2 className="text-2xl font-bold mb-3">Leituras relacionadas</h2>
          <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
            <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/artigos/evitar-vies-recente">Evitar viés recente</a></li>
            <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/artigos/leitura-de-momento-ao-vivo">Leitura de momento ao vivo</a></li>
            <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/guias/gestao-de-banca">Gestão e tamanhos de posição</a></li>
          </ul>
        </section>

        {/* JSON-LD para SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              buildArticleJsonLd({
                url: 'https://palpitesdodia.online/conteudos/artigos/valor-esperado-na-pratica',
                title: 'Valor esperado na prática',
                description: 'Aplicando EV nas decisões diárias de forma simples e objetiva.',
              })
            ),
          }}
        />
      </article>
    </div>
  );
}
