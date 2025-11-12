import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';

export const metadata = generateContentMetadata({
  title: 'Hedge inteligente em cantos',
  description: 'Proteção, parcial e reentrada com risco controlado.',
  path: 'estrategias-avancadas/hedge-inteligente-cantos',
});

export default function HedgeInteligenteCantosPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Hedge inteligente em cantos</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Reduza drawdown sem matar upside usando parcialização e reentrada.</p>
        </header>
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Quando aplicar</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Sinais de pressão caem, mas probabilidade ainda é positiva.</li>
              <li>Preço piora e aumenta risco de exposição contínua.</li>
              <li>Evento parcial já ocorreu (ex.: 1 canto) e risco muda.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Métodos</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Parcializar 30–50% da posição com alvo de risco.</li>
              <li>Travar lucro em múltiplos mercados correlatos.</li>
              <li>Reentrar somente em nova janela com confirmação.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Checklist</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Critérios objetivos para parcialização definidos.</li>
              <li>Limites de exposição após hedge claros.</li>
              <li>Plano de reentrada documentado.</li>
            </ul>
          </section>
        </div>
      </article>
    </div>
  );
}
