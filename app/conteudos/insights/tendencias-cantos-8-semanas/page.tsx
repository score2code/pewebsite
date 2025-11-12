import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';

export const metadata = generateContentMetadata({
  title: 'Tendências de cantos nas últimas 8 semanas',
  description: 'Quais ligas puxam mais cantos recentemente.',
  path: 'insights/tendencias-cantos-8-semanas',
});

export default function TendenciasCantos8SemanasPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Tendências de cantos nas últimas 8 semanas</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Variações recentes por liga.</p>
        </header>
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <p className="text-dark-900/70 dark:text-light-100/70">Resumo das ligas com maior volume e estabilidade de cantos no período.</p>
        </div>
      </article>
    </div>
  );
}

