import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';

export const metadata = generateContentMetadata({
  title: 'Estratégia H2H adaptativa',
  description: 'Use histórico de confrontos com ajuste por elenco e técnico.',
  path: 'estrategias-avancadas/estrategia-h2h-adaptativa',
});

export default function EstrategiaH2HAdaptativaPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Estratégia H2H adaptativa</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Evite extrapolações ingênuas de head-to-head.</p>
        </header>
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <p className="text-dark-900/70 dark:text-light-100/70">Inclua contexto e mudanças para filtrar relevância de confrontos diretos.</p>
        </div>
      </article>
    </div>
  );
}

