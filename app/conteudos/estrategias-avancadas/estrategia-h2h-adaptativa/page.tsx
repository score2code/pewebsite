import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';

export const metadata = generateContentMetadata({
  title: 'Estratégia H2H adaptativa',
  description: 'Use histórico de confrontos com ajuste por elenco e técnico.',
  path: 'estrategias-avancadas/estrategia-h2h-adaptativa',
});

export default function EstrategiaH2HAdaptativaPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Estratégia H2H adaptativa</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Evite extrapolações ingênuas: incorpore contexto e mudanças recentes.</p>
        </header>
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Onde H2H ajuda</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Padrões de confronto recorrentes (pressão por flanco, bolas paradas).</li>
              <li>Rivalidades com efeito psicológico consistente.</li>
              <li>Adaptação tática entre técnicos em sequência de jogos.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Filtragem de relevância</h2>
            <ol className="list-decimal list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Verifique mudanças de elenco e treinador.</li>
              <li>Compare contexto (casa/fora, clima, gramado).</li>
              <li>Use janela temporal adequada (últimos 2–3 anos).</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Checklist</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Critérios de relevância de H2H definidos.</li>
              <li>Ajustes por mudança de elenco/técnico aplicados.</li>
              <li>Integração com sinais ao vivo antes de entrar.</li>
            </ul>
          </section>
        </div>
      </article>
    </div>
  );
}
