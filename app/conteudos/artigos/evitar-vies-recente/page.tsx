import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';

export const metadata = generateContentMetadata({
  title: 'Como evitar viés recente nas análises',
  description: 'Estratégias práticas para reduzir distorções por eventos recentes.',
  path: 'artigos/evitar-vies-recente',
});

export default function EvitarViesRecentePage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Como evitar viés recente nas análises</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Uso disciplinado de amostras e contexto.</p>
        </header>
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
            <li>Preferir janelas maiores e ponderadas.</li>
            <li>Evitar extrapolar eventos raros.</li>
            <li>Controlar narrativa e confirmar com dados.</li>
            <li>Revisar entradas com checklist objetivo.</li>
          </ul>
        </div>
      </article>
    </div>
  );
}

