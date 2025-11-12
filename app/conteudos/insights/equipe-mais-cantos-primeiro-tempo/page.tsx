import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';

export const metadata = generateContentMetadata({
  title: 'Equipes com mais cantos no primeiro tempo',
  description: 'Top clubes em cantos HT e consistência.',
  path: 'insights/equipe-mais-cantos-primeiro-tempo',
});

export default function EquipeMaisCantosPrimeiroTempoPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Equipes com mais cantos no primeiro tempo</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Quem pressiona mais antes do intervalo e como usar isso.</p>
        </header>
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Métricas</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Média de cantos HT por equipe.</li>
              <li>Consistência por janela (variância baixa).</li>
              <li>Correlação com pressão e entradas na área.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Procedimento</h2>
            <ol className="list-decimal list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Liste top-5 por liga com variância controlada.</li>
              <li>Verifique match-up e contexto (casa/fora, escalação).</li>
              <li>Planeje entradas HT por janela com confirmação ao vivo.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Checklist</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Ranking por liga atualizado.</li>
              <li>Critérios de seleção e uso documentados.</li>
              <li>Integração com preço e sinais HT.</li>
            </ul>
          </section>
        </div>
      </article>
    </div>
  );
}
