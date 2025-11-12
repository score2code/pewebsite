import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';

export const metadata = generateContentMetadata({
  title: 'Cantos 37HT: caso prático',
  description: 'Execução, janela e saída em um exemplo real.',
  path: 'estudos-de-caso/canto-37ht-caso-pratico',
});

export default function Canto37HTCasoPraticoPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Cantos 37HT: caso prático</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Janela de tempo e sinais usados.</p>
        </header>
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <p className="text-dark-900/70 dark:text-light-100/70">Documente contexto, padrão observado, entrada e saída para replicabilidade.</p>
        </div>
      </article>
    </div>
  );
}

