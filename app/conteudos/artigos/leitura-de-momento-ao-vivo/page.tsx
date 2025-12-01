import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';
import { buildArticleJsonLd } from '@/app/lib/jsonld';

export const metadata = generateContentMetadata({
  title: 'Leitura de momento ao vivo',
  description: 'Identificando picos de pressão e transições com sinais objetivos.',
  path: 'artigos/leitura-de-momento-ao-vivo',
});

export default function LeituraMomentoAoVivoPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Leitura de momento ao vivo</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Sinais objetivos de pressão, transição e ritmo para entradas mais limpas.</p>
        </header>
        <section className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h2 className="text-2xl font-bold mb-3">Sinais objetivos</h2>
          <ul className="list-disc list-inside space-y-2 text-dark-900/80 dark:text-light-100/80 ml-4">
            <li>Sequências de cruzamentos bloqueados (2–3 em até 5 minutos).</li>
            <li>Escanteios consecutivos e bolas paradas próximas.</li>
            <li>Posse sustentada no terço final com entradas na área.</li>
            <li>Mudança de intensidade após substituições ou gols.</li>
          </ul>
        </section>

        <section className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mt-6 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h2 className="text-2xl font-bold mb-3">Entrada e saída</h2>
          <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
            <li>Prefira janelas curtas em picos de pressão (10–15 min).</li>
            <li>Parcial em evento esperado (ex.: 1 canto), total em 2 eventos.</li>
            <li>Defina corte se padrão perder intensidade ou mudar.</li>
          </ul>
        </section>

        <section className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mt-6 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h2 className="text-2xl font-bold mb-3">Erros comuns</h2>
          <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
            <li>Entrar sem padrão objetivo por narrativa ou torcida.</li>
            <li>Ignorar condições de campo/clima que afetam execução.</li>
            <li>Não ajustar plano após substituições-chave.</li>
          </ul>
        </section>

        <section className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mt-6 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h2 className="text-2xl font-bold mb-3">Leituras relacionadas</h2>
          <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
            <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/artigos/como-documentar-analises">Como documentar análises</a></li>
            <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/artigos/evitar-vies-recente">Evitar viés recente</a></li>
            <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/artigos/valor-esperado-na-pratica">Valor esperado na prática</a></li>
          </ul>
        </section>

        {/* JSON-LD para SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              buildArticleJsonLd({
                url: 'https://palpitesdodia.online/conteudos/artigos/leitura-de-momento-ao-vivo',
                title: 'Leitura de momento ao vivo',
                description: 'Identificando picos de pressão e transições com sinais objetivos.',
              })
            ),
          }}
        />
      </article>
    </div>
  );
}
