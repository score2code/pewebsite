import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';

export const metadata = generateContentMetadata({
  title: 'Leitura de Pressão HT: estudo',
  description: 'Sinais ao vivo, timing e execução em cantos HT.',
  path: 'estudos-de-caso/leitura-pressao-ht-estudo',
});

export default function LeituraPressaoHTEstudoPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Leitura de Pressão HT: estudo</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Entrada com sinais confiáveis.</p>
        </header>
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <p className="text-dark-900/70 dark:text-light-100/70">Detalhe o padrão de pressão e ajuste o momento da entrada.</p>
        </div>
      </article>
    </div>
  );
}

