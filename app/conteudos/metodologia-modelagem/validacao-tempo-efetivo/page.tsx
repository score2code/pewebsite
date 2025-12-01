import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';
import { buildArticleJsonLd } from '@/app/lib/jsonld';

export const metadata = generateContentMetadata({
  title: 'Validação com tempo efetivo',
  description: 'Como tempo de bola rolando afeta métricas e modelos.',
  path: 'metodologia-modelagem/validacao-tempo-efetivo',
});

export default function ValidacaoTempoEfetivoPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Validação com tempo efetivo</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Qualidade de dados, variância e impacto do tempo de bola rolando nas métricas.</p>
        </header>
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">O que é tempo efetivo</h2>
            <p className="text-dark-900/70 dark:text-light-100/70">Tempo efetivo é a duração com bola rolando. Afeta a frequência de eventos e a variância das métricas, exigindo ajustes na interpretação.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Uso na validação</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Normalizar eventos por minuto efetivo.</li>
              <li>Comparar métricas entre ligas com diferentes tempos efetivos.</li>
              <li>Ajustar thresholds de confiança por janela temporal.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Checklist</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Tempo efetivo estimado ou registrado por jogo.</li>
              <li>Eventos normalizados e comparáveis entre competições.</li>
              <li>Impacto refletido nas métricas de validação.</li>
            </ul>
          </section>
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Exemplo prático</h2>
            <p className="text-dark-900/70 dark:text-light-100/70">Ao comparar ligas com 48' vs. 57' de tempo efetivo, normalize cantos por minuto efetivo antes de avaliar thresholds de entrada. Ajuste a confiança quando jogos têm interrupções acima do normal.</p>
          </section>
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Leituras relacionadas</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/metodologia-modelagem/limpeza-dados-eventos">Limpeza de dados de eventos</a></li>
              <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/metodologia-modelagem/tratamento-outliers">Tratamento de outliers</a></li>
              <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/metodologia-modelagem/calibracao-probabilidade-vs-odds">Calibração de probabilidade vs. odds</a></li>
            </ul>
          </section>
        </div>
        {/* JSON-LD para SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              buildArticleJsonLd({
                url: 'https://palpitesdodia.online/conteudos/metodologia-modelagem/validacao-tempo-efetivo',
                title: 'Validação com tempo efetivo',
                description: 'Como tempo de bola rolando afeta métricas e modelos.',
              })
            ),
          }}
        />
      </article>
    </div>
  );
}
