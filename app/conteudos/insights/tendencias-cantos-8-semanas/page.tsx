import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';

export const metadata = generateContentMetadata({
  title: 'Tendências de cantos nas últimas 8 semanas',
  description: 'Quais ligas puxam mais cantos recentemente.',
  path: 'insights/tendencias-cantos-8-semanas',
});

export default function TendenciasCantos8SemanasPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Tendências de cantos nas últimas 8 semanas</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Variações recentes por liga com foco em estabilidade e valor.</p>
        </header>
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Métricas</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Média de cantos por jogo e por tempo.</li>
              <li>Variância e estabilidade em janelas semanais.</li>
              <li>Pressão efetiva (cantos + finalizações/ataques).</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Procedimento</h2>
            <ol className="list-decimal list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Calcule médias móveis de 8 semanas por liga.</li>
              <li>Identifique ligas com tendência e baixa variância.</li>
              <li>Priorize mercados de cantos nas ligas estáveis.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Checklist</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Dados consistentes e janela adequada.</li>
              <li>Seleção de ligas com tendência sustentada.</li>
              <li>Integração com preço e sinais ao vivo.</li>
            </ul>
          </section>
        </div>
      </article>
    </div>
  );
}
