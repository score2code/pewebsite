import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';

export const metadata = generateContentMetadata({
  title: 'Pesos e variáveis para escanteios',
  description: 'Quais features ajudam a prever cantos e como ponderá-las.',
  path: 'metodologia-modelagem/pesos-variaveis-escanteios',
});

export default function PesosVariaveisEscanteiosPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Pesos e variáveis para escanteios</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Seleção de features, ponderação e ajustes contextuais para previsão de cantos.</p>
        </header>
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Principais variáveis</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Posse de bola, território e pressão no terço final.</li>
              <li>Volume de finalizações, cruzamentos e bolas paradas.</li>
              <li>Taxas históricas de cantos a favor/contra por equipe e fase.</li>
              <li>Ritmo (pace), estilo tático e discrepância de forças.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Ponderação e interpretação</h2>
            <p className="text-dark-900/70 dark:text-light-100/70">Utilize regressões interpretáveis ou importância de features em modelos de árvore para definir pesos. Ajuste por contexto (casa/fora, minuto, competição) para robustez.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Checklist</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Features padronizadas por competição e janela temporal.</li>
              <li>Ponderação validada com ablação e análise de sensibilidade.</li>
              <li>Documentação de hipóteses e contexto de uso.</li>
            </ul>
          </section>
        </div>
      </article>
    </div>
  );
}
