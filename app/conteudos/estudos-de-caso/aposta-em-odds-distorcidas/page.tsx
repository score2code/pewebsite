import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';

export const metadata = generateContentMetadata({
  title: 'Apostas em odds distorcidas',
  description: 'Como identificar e explorar com cautela discrepâncias de mercado.',
  path: 'estudos-de-caso/aposta-em-odds-distorcidas',
});

export default function ApostaEmOddsDistorcidasPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Apostas em odds distorcidas</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Casos e cuidados.</p>
        </header>
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <p className="text-dark-900/70 dark:text-light-100/70">Procure razões plausíveis antes de assumir edge por anomalia de preço.</p>
        </div>
      </article>
    </div>
  );
}

