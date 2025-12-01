import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';
import { buildArticleJsonLd } from '@/app/lib/jsonld';

export const metadata = generateContentMetadata({
  title: 'Entrada por janelas de tempo',
  description: 'Timing objetivo e disciplina operacional por período de jogo.',
  path: 'estrategias-avancadas/entrada-por-janelas-tempo',
});

export default function EntradaPorJanelasTempoPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Entrada por janelas de tempo</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Use períodos com maior probabilidade de evento e preço favorável.</p>
        </header>
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Mapeamento de janelas</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Probabilidade de eventos por minuto e fase do jogo.</li>
              <li>Comportamento por liga e estilo predominante.</li>
              <li>Relação entre preço e tempo restante para decisão.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Procedimento</h2>
            <ol className="list-decimal list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Defina janelas-alvo por competição (ex.: 30–45', 65–80').</li>
              <li>Confirme sinais no início da janela antes de entrar.</li>
              <li>Evite entradas fora de janela sem sinal excepcional.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Checklist</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Janelas mapeadas e documentadas por liga.</li>
              <li>Critérios de confirmação de sinal claros.</li>
              <li>Limites de preço e tempo definidos.</li>
            </ul>
          </section>
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Exemplo prático</h2>
            <p className="text-dark-900/70 dark:text-light-100/70 mb-2">Entrada entre 65–80' após substituição que aumenta ritmo e pressão pelo flanco.</p>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Confirmação de 2–3 sinais nos primeiros 5 minutos da janela.</li>
              <li>Preço dentro de limite definido para janela.</li>
              <li>Saída parcial em evento esperado; total se cenário se concretizar.</li>
            </ul>
          </section>
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Leituras relacionadas</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/artigos/leitura-de-momento-ao-vivo">Leitura de momento ao vivo</a></li>
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
                url: 'https://palpitesdodia.online/conteudos/estrategias-avancadas/entrada-por-janelas-tempo',
                title: 'Entrada por janelas de tempo',
                description: 'Timing objetivo e disciplina operacional por período de jogo.',
              })
            ),
          }}
        />
      </article>
    </div>
  );
}
