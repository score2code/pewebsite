import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';

export const metadata = generateContentMetadata({
  title: 'Tratamento de outliers',
  description: 'Reduza o impacto de eventos extremos em métricas e modelos.',
  path: 'metodologia-modelagem/tratamento-outliers',
});

export default function TratamentoOutliersPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Tratamento de outliers</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Detecção, mitigação e padronização de extremos em eventos esportivos.</p>
        </header>
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Métodos</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li><span className="font-semibold">Winsorization</span> e <span className="font-semibold">trimming</span> por percentis.</li>
              <li><span className="font-semibold">Z-score robusto</span> com <span className="font-semibold">MAD</span> (median absolute deviation).</li>
              <li>Regras por competição e por tipo de evento (cantos, faltas, finalizações).</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Fluxo de detecção</h2>
            <ol className="list-decimal list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Defina thresholds por liga e janela temporal.</li>
              <li>Detecte picos anômalos e verifique integridade de fonte.</li>
              <li>Mitigue com regras consistentes e registre transformações.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Checklist</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Procedimentos padronizados por competição e evento.</li>
              <li>Log das decisões e transformações aplicado.</li>
              <li>Validação pós-tratamento nas métricas do modelo.</li>
            </ul>
          </section>
        </div>
      </article>
    </div>
  );
}
