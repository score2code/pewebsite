import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';

export const metadata = generateContentMetadata({
  title: 'Checklist pré-jogo para cantos',
  description: 'Passos objetivos antes de operar mercados de escanteios.',
  path: 'artigos/checklist-pre-jogo-cantos',
});

export default function ChecklistPreJogoCantosPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Checklist pré-jogo para cantos</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Garantindo critérios antes da execução.</p>
        </header>
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
            <li>Laterais e amplitude: padrões de ataque pelos flancos.</li>
            <li>Odds e risco: relação adequada para janela de tempo.</li>
            <li>Clima e campo: favorecem cruzamentos e bolas paradas?</li>
            <li>Sequência recente de cantos/cruzamentos bloqueados.</li>
            <li>Plano de saída: objetivos e pontos de corte.</li>
          </ul>
        </div>
      </article>
    </div>
  );
}

