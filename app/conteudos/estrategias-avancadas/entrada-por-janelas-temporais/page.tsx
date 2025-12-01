import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';
import { buildArticleJsonLd } from '@/app/lib/jsonld';

export const metadata = generateContentMetadata({
  title: 'Entradas por janelas temporais',
  description: 'Exploração de períodos com maior probabilidade de evento.',
  path: 'estrategias-avancadas/entrada-por-janelas-temporais',
});

export default function EntradaPorJanelasTemporaisPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Entradas por janelas temporais</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Maximize probabilidade e preço usando momentos-chave do jogo.</p>
        </header>
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Janelas típicas</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Pré-intervalo com pressão elevada (35–45').</li>
              <li>Pós-substituições que alteram ritmo (60–75').</li>
              <li>Final com necessidade de resultado (80–90'+).</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Boas práticas</h2>
            <ol className="list-decimal list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Combine janelas com sinais objetivos de pressão.</li>
              <li>Evite antecipar janela sem confirmação no live.</li>
              <li>Defina limites de preço por janela e mercado.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Checklist</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Janelas mapeadas por liga e contexto.</li>
              <li>Sinais e limites de preço claros.</li>
              <li>Registro das entradas por janela para revisão.</li>
            </ul>
          </section>
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Exemplo prático</h2>
            <p className="text-dark-900/70 dark:text-light-100/70 mb-2">Pré-intervalo com pressão sustentada e bolas paradas próximas: entrada com parcial em evento único e total em sequência.</p>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Confirmar 2–3 sinais fortes nos primeiros minutos da janela.</li>
              <li>Operar com limite de preço adequado ao tempo restante.</li>
              <li>Registrar execução para avaliar valor e timing.</li>
            </ul>
          </section>
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Leituras relacionadas</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
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
                url: 'https://palpitesdodia.online/conteudos/estrategias-avancadas/entrada-por-janelas-temporais',
                title: 'Entradas por janelas temporais',
                description: 'Exploração de períodos com maior probabilidade de evento.',
              })
            ),
          }}
        />
      </article>
    </div>
  );
}
