import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';

export const metadata = generateContentMetadata({
  title: 'Validação histórica de um modelo simples',
  description: 'Testes básicos, métricas e robustez ao longo de temporadas.',
  path: 'metodologia-modelagem/validacao-historica-modelo-simples',
});

export default function ValidacaoHistoricaModeloSimplesPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Validação histórica de um modelo simples</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Evolução de performance e estabilidade ao longo de temporadas e ligas.</p>
        </header>
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Estratégia de validação</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Divisão temporal: <span className="font-semibold">walk-forward</span> com treinos e testes sequenciais.</li>
              <li>Estratificação por competição e contexto (casa/fora, minutos, fases).</li>
              <li>Controle de fuga de informação (sem misturar janelas e fontes).</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Métricas essenciais</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li><span className="font-semibold">Brier</span> e <span className="font-semibold">Log Loss</span> (qualidade probabilística).</li>
              <li><span className="font-semibold">Hit rate</span> e <span className="font-semibold">AUC</span> (discriminação de classes).</li>
              <li><span className="font-semibold">ROI</span> e <span className="font-semibold">yield</span> por estratégia de execução.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Robustez e ablação</h2>
            <p className="text-dark-900/70 dark:text-light-100/70">Teste o impacto da remoção de features e de diferentes thresholds. Acompanhe curvas de performance por temporada para detectar drift.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Checklist</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Setup walk-forward com partições documentadas.</li>
              <li>Métricas agregadas e por estratos (liga, fase, período).</li>
              <li>Ablação e análise de drift entre temporadas.</li>
            </ul>
          </section>
        </div>
      </article>
    </div>
  );
}
