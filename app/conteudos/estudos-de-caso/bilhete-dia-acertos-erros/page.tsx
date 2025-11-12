import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';

export const metadata = generateContentMetadata({
  title: 'Bilhete do Dia: acertos e erros',
  description: 'Revisão estruturada dos bilhetes com lições práticas.',
  path: 'estudos-de-caso/bilhete-dia-acertos-erros',
});

export default function BilheteDiaAcertosErrosPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Bilhete do Dia: acertos e erros</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Revisão objetiva e melhoria contínua.</p>
        </header>
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <p className="text-dark-900/70 dark:text-light-100/70">Mapeie decisões, sinais utilizados e pontos de ajuste para evoluir seu processo.</p>
        </div>
      </article>
    </div>
  );
}

