import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';

export const metadata = generateContentMetadata({
  title: 'Relação entre cantos e xG',
  description: 'Quando volume de cantos antecipa xG e vice-versa.',
  path: 'insights/cantos-e-xg-relacao',
});

export default function CantosExGRelacaoPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Relação entre cantos e xG</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Correlação situacional, direção temporal e limitações por contexto.</p>
        </header>
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">O que analisar</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Lag: cantos antecedem xG ou xG antecede cantos?</li>
              <li>Contexto: estilo da equipe e defesa em bolas paradas.</li>
              <li>Mercado: impacto em preços de over cantos e gols.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Procedimento</h2>
            <ol className="list-decimal list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Calcule correlação por janela com defasagem (lag).</li>
              <li>Verifique consistência por liga e tipo de equipe.</li>
              <li>Integre com sinais ao vivo antes de entrar.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Checklist</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Medição de lag e correlação validadas.</li>
              <li>Filtro por estilo e liga aplicado.</li>
              <li>Critérios para usar relação em decisões definidos.</li>
            </ul>
          </section>
        </div>
      </article>
    </div>
  );
}
