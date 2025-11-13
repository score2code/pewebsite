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
          <p className="text-dark-900/70 dark:text-light-100/70">Entrada com sinais confiáveis, janelas e controle de preço.</p>
        </header>
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Indicadores de pressão</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Cantos, finalizações e entradas na área.</li>
              <li>Posse territorial e recuperação alta.</li>
              <li>Sequências de ataques e bolas paradas.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Procedimento</h2>
            <ol className="list-decimal list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Defina janelas HT por liga e verifique sinais mínimos.</li>
              <li>Entre com preço dentro do limite e confirmação ao vivo.</li>
              <li>Aplique proteção se sinais caírem antes do fim da janela.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Checklist</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Critérios de pressão definidos e mensuráveis.</li>
              <li>Limites de preço e stake estabelecidos.</li>
              <li>Plano de saída documentado.</li>
            </ul>
          </section>
        </div>
      </article>
    </div>
  );
}
