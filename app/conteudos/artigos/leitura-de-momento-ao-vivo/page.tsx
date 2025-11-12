import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';

export const metadata = generateContentMetadata({
  title: 'Leitura de momento ao vivo',
  description: 'Identificando picos de pressão e transições com sinais objetivos.',
  path: 'artigos/leitura-de-momento-ao-vivo',
});

export default function LeituraMomentoAoVivoPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Leitura de momento ao vivo</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Sinais de pressão e mudanças de ritmo.</p>
        </header>
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
            <li>Sequências de cruzamentos bloqueados.</li>
            <li>Escanteios consecutivos ou bolas paradas próximas.</li>
            <li>Posse sustentada no terço final.</li>
            <li>Intensidade após substituições ou gols.</li>
          </ul>
        </div>
      </article>
    </div>
  );
}

