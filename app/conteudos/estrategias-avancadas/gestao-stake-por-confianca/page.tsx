import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';

export const metadata = generateContentMetadata({
  title: 'Gestão de stake por confiança',
  description: 'Ajuste de exposição conforme nível de convicção e risco.',
  path: 'estrategias-avancadas/gestao-stake-por-confianca',
});

export default function GestaoStakePorConfiancaPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Gestão de stake por confiança</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Dimensionamento baseado em sinais e variância.</p>
        </header>
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <p className="text-dark-900/70 dark:text-light-100/70">Use níveis de confiança, EV estimado e volatilidade para ajustar stake.</p>
        </div>
      </article>
    </div>
  );
}

