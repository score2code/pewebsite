import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';
import { buildArticleJsonLd } from '@/app/lib/jsonld';

export const metadata = generateContentMetadata({
  title: 'Escalonando entradas em momentos de pressão',
  description: 'Como fracionar entradas com critério e sinais confiáveis.',
  path: 'estrategias-avancadas/escalonar-entradas-pressao',
});

export default function EscalonarEntradasPressaoPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Escalonando entradas em momentos de pressão</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Fracionamento com critérios objetivos e proteção contra reversões rápidas.</p>
        </header>
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Objetivo</h2>
            <p className="text-dark-900/70 dark:text-light-100/70">Entrar em camadas progressivas quando sinais de pressão se acumulam, evitando alocação excessiva em um único ponto.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Critérios de pressão</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Sequência de finalizações e cruzamentos no terço final.</li>
              <li>Território dominante e posse alta com profundidade.</li>
              <li>Odds ajustando a favor do evento dentro da janela.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Procedimento</h2>
            <ol className="list-decimal list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Defina 3 camadas de entrada (ex.: 0.5u, 0.5u, 1u).</li>
              <li>Entre na primeira camada ao detectar pressão contínua por 3–5 minutos.</li>
              <li>Adicione camadas somente se sinais melhorarem e preço ainda for aceitável.</li>
              <li>Evite adicionar após grandes quedas de preço sem novos sinais.</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Armadilhas</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Confundir posse estéril com pressão efetiva.</li>
              <li>Dobrar tamanho após evento perdido sem sinais renovados.</li>
              <li>Escalonar tarde demais com preço já sem valor.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Checklist</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Camadas e limites definidos antes do jogo.</li>
              <li>Critérios objetivos de pressão documentados.</li>
              <li>Preço mínimo e máximo por camada estabelecidos.</li>
            </ul>
          </section>
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Exemplo prático</h2>
            <p className="text-dark-900/70 dark:text-light-100/70 mb-2">Pressão com cruzamentos e escanteios consecutivos: 0.5u na primeira confirmação, +0.5u na manutenção dos sinais, +1u com preço ainda dentro do limite.</p>
          </section>
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Leituras relacionadas</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/artigos/leitura-de-momento-ao-vivo">Leitura de momento ao vivo</a></li>
              <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/artigos/valor-esperado-na-pratica">Valor esperado na prática</a></li>
            </ul>
          </section>
        </div>
        {/* JSON-LD para SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              buildArticleJsonLd({
                url: 'https://palpitesdodia.online/conteudos/estrategias-avancadas/escalonar-entradas-pressao',
                title: 'Escalonando entradas em momentos de pressão',
                description: 'Fracionamento com critérios e sinais confiáveis para manter valor.',
              })
            ),
          }}
        />
      </article>
    </div>
  );
}
