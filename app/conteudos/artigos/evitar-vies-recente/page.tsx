import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';
import { buildArticleJsonLd } from '@/app/lib/jsonld';

export const metadata = generateContentMetadata({
  title: 'Como evitar viés recente nas análises',
  description: 'Estratégias práticas para reduzir distorções por eventos recentes.',
  path: 'artigos/evitar-vies-recente',
});

export default function EvitarViesRecentePage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Como evitar viés recente nas análises</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Amostras robustas, base rates e checagens objetivas.</p>
        </header>
        <section className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h2 className="text-2xl font-bold mb-3">Sinais de viés recente</h2>
          <ul className="list-disc list-inside space-y-2 text-dark-900/80 dark:text-light-100/80 ml-4">
            <li>Confiar demais em 1–2 jogos sem contexto maior.</li>
            <li>Reagir a eventos raros como se fossem padrão.</li>
            <li>Adotar narrativas sem confirmação por dados.
            </li>
          </ul>
        </section>

        <section className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mt-6 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h2 className="text-2xl font-bold mb-3">Técnicas de mitigação</h2>
          <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
            <li>Usar janelas maiores e ponderar por relevância do jogo.</li>
            <li>Aplicar base rates (médias históricas por liga/time).</li>
            <li>Criar checklist de confirmação com 2–3 sinais objetivos.</li>
            <li>Registrar e revisar decisões para detectar vieses.</li>
          </ul>
        </section>

        <section className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mt-6 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h2 className="text-2xl font-bold mb-3">Exemplo prático</h2>
          <p className="text-dark-900/70 dark:text-light-100/70 mb-2">Time marcou muitos gols no último jogo por pênaltis e bolas paradas raras.</p>
          <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
            <li>Cheque base rate de gols sem pênalti e xG aberto.</li>
            <li>Evite extrapolar evento raro; busque padrão sustentado.</li>
            <li>Confirme com posse, finalizações e pressão recente.</li>
          </ul>
        </section>

        <section className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mt-6 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h2 className="text-2xl font-bold mb-3">Leituras relacionadas</h2>
          <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
            <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/artigos/valor-esperado-na-pratica">Valor esperado na prática</a></li>
            <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/artigos/leitura-de-momento-ao-vivo">Leitura de momento ao vivo</a></li>
            <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/artigos/como-documentar-analises">Como documentar análises</a></li>
          </ul>
        </section>

        {/* JSON-LD para SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              buildArticleJsonLd({
                url: 'https://palpitesdodia.online/conteudos/artigos/evitar-vies-recente',
                title: 'Como evitar viés recente nas análises',
                description: 'Estratégias práticas para reduzir distorções por eventos recentes.',
              })
            ),
          }}
        />
      </article>
    </div>
  );
}
