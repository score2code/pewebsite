import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';
import { buildArticleJsonLd } from '@/app/lib/jsonld';

export const metadata = generateContentMetadata({
  title: 'Hedge parcial em ao vivo',
  description: 'Proteções e parcialização sem anular o edge.',
  path: 'estrategias-avancadas/hedge-parcial-ao-vivo',
});

export default function HedgeParcialAoVivoPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Hedge parcial em ao vivo</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Como reduzir risco mantendo upside e preservar o edge da posição.</p>
        </header>
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Quando aplicar</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Piora objetiva dos sinais (perda de pressão, substituições negativas).</li>
              <li>Mudança de preço desfavorável sem confirmação de valor.</li>
              <li>Proximidade de eventos contrários ao cenário esperado.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Formas de parcialização</h2>
            <ol className="list-decimal list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Redução de 25–50% da posição conforme gatilhos.</li>
              <li>Switch parcial para mercado complementar de proteção.</li>
              <li>Reentrada condicionada a retomada dos sinais.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Checklist</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Gatilhos de hedge pré-definidos.</li>
              <li>Percentuais de parcialização acordados.</li>
              <li>Registro das decisões para revisão posterior.</li>
            </ul>
          </section>
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Exemplo prático</h2>
            <p className="text-dark-900/70 dark:text-light-100/70 mb-2">Perda de intensidade aos 70' com vantagem no preço: reduzir 30% e manter plano de saída total caso sinais não retomem.</p>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Parcial: 30% ao perder dois sinais consecutivos.</li>
              <li>Proteção: mover para mercado de menos variância se disponível.</li>
              <li>Reentrada: somente com janela e sinais claros.</li>
            </ul>
          </section>
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Leituras relacionadas</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/estrategias-avancadas/hedge-inteligente-cantos">Hedge inteligente em cantos</a></li>
              <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/artigos/leitura-de-momento-ao-vivo">Leitura de momento ao vivo</a></li>
              <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/artigos/evitar-vies-recente">Evitar viés recente</a></li>
            </ul>
          </section>
        </div>
        {/* JSON-LD para SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              buildArticleJsonLd({
                url: 'https://palpitesdodia.online/conteudos/estrategias-avancadas/hedge-parcial-ao-vivo',
                title: 'Hedge parcial em ao vivo',
                description: 'Proteções e parcialização sem anular o edge.',
              })
            ),
          }}
        />
      </article>
    </div>
  );
}
