import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';

export const metadata = generateContentMetadata({
  title: 'Valor esperado na prática',
  description: 'Aplicando EV nas decisões diárias de forma simples e objetiva.',
  path: 'artigos/valor-esperado-na-pratica',
});

export default function ValorEsperadoNaPraticaPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Valor esperado na prática</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Quando EV positivo não basta sozinho.</p>
        </header>
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <p className="text-dark-900/70 dark:text-light-100/70">Combine EV com execução, timing e gestão para resultados consistentes.</p>
        </div>
      </article>
    </div>
  );
}

