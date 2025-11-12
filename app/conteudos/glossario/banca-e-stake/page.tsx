import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';

export const metadata = generateContentMetadata({
  title: 'Banca e Stake',
  description: 'Fundamentos de gestão de banca e definição de stake.',
  path: 'glossario/banca-e-stake',
});

export default function BancaEStakePage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Banca e Stake</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Exposição responsável e sustentável.</p>
        </header>
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <p className="text-dark-900/70 dark:text-light-100/70">Defina stake por confiança e variância, preserve banca no longo prazo.</p>
        </div>
      </article>
    </div>
  );
}

