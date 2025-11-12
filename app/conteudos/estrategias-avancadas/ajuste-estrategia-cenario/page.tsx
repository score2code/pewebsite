import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';

export const metadata = generateContentMetadata({
  title: 'Ajuste de estratégia por cenário',
  description: 'Adapte planos ao jogo real e sinais dinâmicos.',
  path: 'estrategias-avancadas/ajuste-estrategia-cenario',
});

export default function AjusteEstrategiaCenarioPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Ajuste de estratégia por cenário</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Flexibilidade sem abandonar critérios.</p>
        </header>
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <p className="text-dark-900/70 dark:text-light-100/70">Mantenha regras claras e ajuste entradas conforme jogo se desenvolve.</p>
        </div>
      </article>
    </div>
  );
}

