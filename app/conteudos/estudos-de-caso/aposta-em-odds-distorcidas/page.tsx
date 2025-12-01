import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';
import { buildArticleJsonLd } from '@/app/lib/jsonld';

export const metadata = generateContentMetadata({
  title: 'Apostas em odds distorcidas',
  description: 'Como identificar e explorar com cautela discrepâncias de mercado.',
  path: 'estudos-de-caso/aposta-em-odds-distorcidas',
});

export default function ApostaEmOddsDistorcidasPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Apostas em odds distorcidas</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Casos, hipóteses explicativas, validação e execução com proteção.</p>
        </header>
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Detecção</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Diferenças marcantes entre casas e mercado médio.</li>
              <li>Preço fora da distribuição típica por liga/mercado.</li>
              <li>Mudanças rápidas sem evento aparente.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Hipóteses explicativas</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Limitação de casa, público local e viés.</li>
              <li>Overround e arredondamentos diferentes.</li>
              <li>Informação assimétrica (lesão, escalação) ainda não precificada.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Validação e execução</h2>
            <ol className="list-decimal list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Remova overround e compare preços normalizados.</li>
              <li>Cheque contexto e notícias para evitar erro de leitura.</li>
              <li>Entre com sizing conservador e plano de proteção.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Checklist</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Evidência de distorção confirmada.</li>
              <li>Hipótese plausível e validada.</li>
              <li>Execução com risco controlado e registro da decisão.</li>
            </ul>
          </section>
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Exemplo prático</h2>
            <p className="text-dark-900/70 dark:text-light-100/70 mb-2">Under com preço 1.90 em uma casa e 1.78 em outra: após remover overround e validar contexto sem notícia oculta, entrada conservadora com 0.5u e plano de parcialização se ritmo subir.</p>
          </section>
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Leituras relacionadas</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/artigos/valor-esperado-na-pratica">Valor esperado na prática</a></li>
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
                url: 'https://palpitesdodia.online/conteudos/estudos-de-caso/aposta-em-odds-distorcidas',
                title: 'Apostas em odds distorcidas',
                description: 'Como identificar e explorar com cautela discrepâncias de mercado.',
              })
            ),
          }}
        />
      </article>
    </div>
  );
}
