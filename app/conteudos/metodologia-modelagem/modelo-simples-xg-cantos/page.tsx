import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';

export const metadata = generateContentMetadata({
  title: 'Modelo simples de xG para cantos',
  description: 'Como estimar probabilidade de canto com features básicas.',
  path: 'metodologia-modelagem/modelo-simples-xg-cantos',
});

export default function ModeloSimplesXGCantosPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Modelo simples de xG para cantos</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Pipeline básico: escolha de features, treino, validação e thresholds.</p>
        </header>
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Features iniciais</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Posse, território, ritmo e volume de finalizações.</li>
              <li>Cruzamentos e bolas paradas por janela temporal.</li>
              <li>Histórico de cantos a favor/contra (equipes e confrontos).</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Treino e validação</h2>
            <p className="text-dark-900/70 dark:text-light-100/70">Utilize regressão logística ou modelos de árvore com validação <span className="font-semibold">walk-forward</span>. Equilibre classes e ajuste thresholds conforme o objetivo (precisão vs. recall).</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Checklist</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Features padronizadas e documentadas.</li>
              <li>Métricas de validação por competição.</li>
              <li>Thresholds definidos por estratégia e risco.</li>
            </ul>
          </section>
        </div>
      </article>
    </div>
  );
}
