import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';

export const metadata = generateContentMetadata({
  title: 'Impacto do mandante: posse e campo',
  description: 'Como fatores de contexto afetam métricas por partida.',
  path: 'insights/impacto-mandante-posse-campo',
});

export default function ImpactoMandantePosseCampoPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Impacto do mandante: posse e campo</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Efeito do mando em posse, território e pressão por competição.</p>
        </header>
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Métricas</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Posse média e diferencial casa/fora.</li>
              <li>Campo (território) e entradas na área.</li>
              <li>Pressão medida por cantos e finalizações.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Procedimento</h2>
            <ol className="list-decimal list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Compare médias casa/fora por liga e equipe.</li>
              <li>Verifique consistência temporal (últimos 10 jogos).</li>
              <li>Use mando como ajuste, não como gatilho isolado.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Checklist</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Métricas de posse e território validadas por liga.</li>
              <li>Contexto do jogo considerado (viagem, clima, gramado).</li>
              <li>Integração com sinais ao vivo antes da entrada.</li>
            </ul>
          </section>
        </div>
      </article>
    </div>
  );
}
