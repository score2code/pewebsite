import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';

export const metadata = generateContentMetadata({
  title: 'Distribuição de odds do mercado',
  description: 'Entendendo concentrações, caudas e anomalias de preços.',
  path: 'insights/distribuicao-odds-mercado',
});

export default function DistribuicaoOddsMercadoPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Distribuição de odds do mercado</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Visualize padrões e identifique outliers.</p>
        </header>
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <p className="text-dark-900/70 dark:text-light-100/70">Explore histogramas e caudas para entender oportunidades e riscos.</p>
        </div>
      </article>
    </div>
  );
}

