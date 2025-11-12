import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';

export const metadata = generateContentMetadata({
  title: 'Variação de gols HT/FT por liga',
  description: 'Comparativo entre primeiro e segundo tempo por competição.',
  path: 'insights/variacao-gols-ht-ft-ligas',
});

export default function VariacaoGolsHtFtLigasPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Variação de gols HT/FT por liga</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Entenda padrões entre tempos em diferentes competições.</p>
        </header>
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <p className="text-dark-900/70 dark:text-light-100/70">Compare médias e distribuições para identificar ligas com maior variação HT/FT.</p>
        </div>
      </article>
    </div>
  );
}

