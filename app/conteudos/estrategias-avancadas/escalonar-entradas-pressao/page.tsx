import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';

export const metadata = generateContentMetadata({
  title: 'Escalonando entradas em momentos de pressão',
  description: 'Como fracionar entradas com critério e sinais confiáveis.',
  path: 'estrategias-avancadas/escalonar-entradas-pressao',
});

export default function EscalonarEntradasPressaoPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Escalonando entradas em momentos de pressão</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Fracionamento e gatilhos objetivos.</p>
        </header>
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <p className="text-dark-900/70 dark:text-light-100/70">Defina escalonamento por camadas de pressão, odds e tempo restante.</p>
        </div>
      </article>
    </div>
  );
}

