import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';

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
        </div>
      </article>
    </div>
  );
}
