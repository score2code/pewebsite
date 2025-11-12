import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';

export const metadata = generateContentMetadata({
  title: 'Pesos e variáveis para escanteios',
  description: 'Quais features ajudam a prever cantos e como ponderá-las.',
  path: 'metodologia-modelagem/pesos-variaveis-escanteios',
});

export default function PesosVariaveisEscanteiosPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Pesos e variáveis para escanteios</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Seleção de features e ponderação.</p>
        </header>
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <p className="text-dark-900/70 dark:text-light-100/70">Avalie posse, finalizações, território e ritmo na previsão de cantos.</p>
        </div>
      </article>
    </div>
  );
}

