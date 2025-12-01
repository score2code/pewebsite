import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';
import { buildArticleJsonLd } from '@/app/lib/jsonld';

export const metadata = generateContentMetadata({
  title: 'Ajuste por competição',
  description: 'Personalize parâmetros por liga e características de jogo.',
  path: 'metodologia-modelagem/ajuste-por-competicao',
});

export default function AjustePorCompeticaoPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Ajuste por competição</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Modelos sensíveis ao contexto da liga: ritmo, estilo e tempo efetivo.</p>
        </header>
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Parâmetros a ajustar</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Ritmo e tempo efetivo de jogo.</li>
              <li>Estilo tático predominante e distribuição de eventos.</li>
              <li>Intensidade média e variância por liga.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Estratégias</h2>
            <p className="text-dark-900/70 dark:text-light-100/70">Utilize modelos hierárquicos com <span className="font-semibold">shrinkage</span> para compartilhar informação entre ligas. Reavalie parâmetros a cada temporada e aplique transferência com cautela.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Checklist</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Parâmetros por liga documentados e versionados.</li>
              <li>Validação de impacto do ajuste nas métricas-chave.</li>
              <li>Plano de atualização por temporada.</li>
            </ul>
          </section>
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Exemplo prático</h2>
            <p className="text-dark-900/70 dark:text-light-100/70">Ajuste thresholds de cantos por liga considerando ritmo e tempo efetivo; use modelos hierárquicos com shrinkage para evitar sobreajuste e revalide por temporada.</p>
          </section>
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Leituras relacionadas</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/metodologia-modelagem/validacao-tempo-efetivo">Validação com tempo efetivo</a></li>
              <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/metodologia-modelagem/limpeza-dados-eventos">Limpeza de dados de eventos</a></li>
              <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/metodologia-modelagem/tratamento-outliers">Tratamento de outliers</a></li>
            </ul>
          </section>
        </div>
        {/* JSON-LD para SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              buildArticleJsonLd({
                url: 'https://palpitesdodia.online/conteudos/metodologia-modelagem/ajuste-por-competicao',
                title: 'Ajuste por competição',
                description: 'Personalize parâmetros por liga e características de jogo.',
              })
            ),
          }}
        />
      </article>
    </div>
  );
}
