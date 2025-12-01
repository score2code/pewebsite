import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';
import { buildArticleJsonLd } from '@/app/lib/jsonld';

export const metadata = generateContentMetadata({
  title: 'Limpeza de dados de eventos',
  description: 'Tratar inconsistências em cantos, faltas e finalizações.',
  path: 'metodologia-modelagem/limpeza-dados-eventos',
});

export default function LimpezaDadosEventosPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Limpeza de dados de eventos</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Preparação para análises consistentes: deduplicação, padronização e validação cruzada.</p>
        </header>
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Passos principais</h2>
            <ol className="list-decimal list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Deduplicar eventos próximos com heurísticas por tipo.</li>
              <li>Padronizar timestamps e corrigir offsets por fonte.</li>
              <li>Normalizar categorias e códigos de eventos.</li>
              <li>Validar contra placar/cronologia oficial quando possível.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Checklist</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Regras consistentes por tipo de evento e competição.</li>
              <li>Logs de transformações e auditoria de qualidade.</li>
              <li>Validação cruzada entre fontes quando disponível.</li>
            </ul>
          </section>
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Exemplo prático</h2>
            <p className="text-dark-900/70 dark:text-light-100/70">Deduplicar cantos com timestamps muito próximos e corrigir offsets entre fontes. Documente as transformações e valide contra cronologias oficiais quando possível.</p>
          </section>
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Leituras relacionadas</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/metodologia-modelagem/tratamento-outliers">Tratamento de outliers</a></li>
              <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/metodologia-modelagem/validacao-tempo-efetivo">Validação com tempo efetivo</a></li>
              <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/metodologia-modelagem/avaliacao-vieses-modelo">Avaliação de vieses do modelo</a></li>
            </ul>
          </section>
        </div>
        {/* JSON-LD para SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              buildArticleJsonLd({
                url: 'https://palpitesdodia.online/conteudos/metodologia-modelagem/limpeza-dados-eventos',
                title: 'Limpeza de dados de eventos',
                description: 'Tratar inconsistências em cantos, faltas e finalizações.',
              })
            ),
          }}
        />
      </article>
    </div>
  );
}
