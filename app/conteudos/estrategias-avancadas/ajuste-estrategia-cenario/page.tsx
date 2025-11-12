import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';

export const metadata = generateContentMetadata({
  title: 'Ajuste de estratégia por cenário',
  description: 'Adapte planos ao jogo real e sinais dinâmicos.',
  path: 'estrategias-avancadas/ajuste-estrategia-cenario',
});

export default function AjusteEstrategiaCenarioPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Ajuste de estratégia por cenário</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Flexibilidade com critérios: adapte plano aos sinais em tempo real.</p>
        </header>
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Cenários comuns</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Domínio sem conversão vs. contra-ataques perigosos.</li>
              <li>Mudanças táticas (substituições, ajuste de linhas).</li>
              <li>Variação de ritmo e tempo efetivo.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Procedimento de ajuste</h2>
            <ol className="list-decimal list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Reavalie sinais e preço a cada janela definida.</li>
              <li>Reduza exposição se sinais enfraquecerem; aumente somente com confirmação.</li>
              <li>Documente mudanças para revisão e aprendizado.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Checklist</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Regras de ajuste claras e reproducíveis.</li>
              <li>Limites de alocação por cenário definidos.</li>
              <li>Registros para análise pós-jogo.</li>
            </ul>
          </section>
        </div>
      </article>
    </div>
  );
}
