import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';

export const metadata = generateContentMetadata({
  title: 'Avaliação de vieses do modelo',
  description: 'Detectar e mitigar vieses em previsões de cantos.',
  path: 'metodologia-modelagem/avaliacao-vieses-modelo',
});

export default function AvaliacaoViesesModeloPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Avaliação de vieses do modelo</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Detecção de erros sistemáticos, calibragem e correções por contexto.</p>
        </header>
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Onde os vieses aparecem</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Diferenças casa/fora não explícitas nos dados.</li>
              <li>Janelas temporais com dinâmica distinta (início/final de tempo).</li>
              <li>Mudanças de elenco/estilo entre temporadas (drift).</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Como detectar</h2>
            <ol className="list-decimal list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Análise de erros por estrato (liga, fase, minuto, casa/fora).</li>
              <li>Curvas de confiabilidade por estrato e sazonalidade.</li>
              <li>Comparação de métricas ao remover/adicionar features.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Checklist</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Relatórios de erro estratificados.</li>
              <li>Calibração revisada onde houver viés detectado.</li>
              <li>Ajustes documentados e validados por temporada.</li>
            </ul>
          </section>
        </div>
      </article>
    </div>
  );
}
