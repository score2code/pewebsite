import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';

export const metadata = generateContentMetadata({
  title: 'Cantos 37HT: caso prático',
  description: 'Execução, janela e saída em um exemplo real.',
  path: 'estudos-de-caso/canto-37ht-caso-pratico',
});

export default function Canto37HTCasoPraticoPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Cantos 37HT: caso prático</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Janela, sinais, execução e saída com controle de risco.</p>
        </header>
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Cenário</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Competição, equipes, contexto e janelas mapeadas.</li>
              <li>Padrão de pressão pré-intervalo e bolas paradas.</li>
              <li>Preço por janela e limite de stake.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Sinais e execução</h2>
            <ol className="list-decimal list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Confirmação de pressão (cantos, finalizações, campo).</li>
              <li>Entrada no minuto alvo com preço dentro do plano.</li>
              <li>Gestão ativa: parcialização/hedge se sinais caem.</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Saída e revisão</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Saída por evento (canto, falta perigosa, fim da janela).</li>
              <li>Registro de preço, minuto e decisão de proteção.</li>
              <li>Avaliação de replicabilidade em jogos similares.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Checklist</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Janelas e sinais documentados.</li>
              <li>Execução dentro de preço e plano de risco.</li>
              <li>Revisão pós-jogo com lições registradas.</li>
            </ul>
          </section>
        </div>
      </article>
    </div>
  );
}
