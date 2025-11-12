import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';

export const metadata = generateContentMetadata({
  title: 'Ligas mais eficientes para Under',
  description: 'Onde o under tende a performar melhor por características de jogo.',
  path: 'insights/ligas-mais-eficientes-under',
});

export default function LigasMaisEficientesUnderPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Ligas mais eficientes para Under</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Conjunto de ligas com menor ritmo, alta compactação e previsibilidade.</p>
        </header>
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Drivers</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Tempo efetivo baixo e cadência truncada.</li>
              <li>Compactação defensiva e poucos espaços entre linhas.</li>
              <li>Menor variância em xG por jogo.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Procedimento</h2>
            <ol className="list-decimal list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Calcule médias HT/FT e desvio por liga.</li>
              <li>Analise distribuição de xG e ritmo (passes/ataques).</li>
              <li>Priorize jogos com match-up de estilos favoráveis ao Under.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Checklist</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Seleção de ligas com estabilidade confirmada.</li>
              <li>Critérios objetivos para entrar em Under.</li>
              <li>Gestão de risco alinhada à variância por liga.</li>
            </ul>
          </section>
        </div>
      </article>
    </div>
  );
}
