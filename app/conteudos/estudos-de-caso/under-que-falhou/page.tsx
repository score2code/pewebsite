import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';

export const metadata = generateContentMetadata({
  title: 'Por que esse Under falhou?',
  description: 'Diagnóstico de entradas e contexto de jogo para under.',
  path: 'estudos-de-caso/under-que-falhou',
});

export default function UnderQueFalhouPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Por que esse Under falhou?</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Causas, contra-exemplos e ajustes futuros para decisão melhor.</p>
        </header>
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Hipótese e entrada</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Hipótese: ritmo baixo, compactação, poucas transições.</li>
              <li>Critérios: janelas, preço, sinais pré-jogo.</li>
              <li>Execução: timing, stake, gestão de risco.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contra-exemplos observados</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Aumento de ritmo por substituições e necessidade de resultado.</li>
              <li>Transições rápidas e erros individuais gerando chances claras.</li>
              <li>Bolas paradas perigosas alterando xG e cantos.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Preço e EV</h2>
            <ol className="list-decimal list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Recalcule EV com eventos ao vivo e novo preço.</li>
              <li>Avalie se parcialização/hedge deveria ter sido aplicada.</li>
              <li>Registre impacto no resultado e drawdown.</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Ajustes futuros</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Refinar critérios para detectar aumento de ritmo.</li>
              <li>Limites de preço mais conservadores em ligas voláteis.</li>
              <li>Planos de saída por eventos-chave (subs, cartões, gol).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Checklist</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Hipótese, execução e eventos ao vivo registrados.</li>
              <li>EV reavaliado e decisão de hedge documentada.</li>
              <li>Critérios atualizados para próximas entradas em Under.</li>
            </ul>
          </section>
        </div>
      </article>
    </div>
  );
}
