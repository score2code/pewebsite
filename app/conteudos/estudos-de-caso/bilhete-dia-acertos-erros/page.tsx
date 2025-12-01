import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';
import { buildArticleJsonLd } from '@/app/lib/jsonld';

export const metadata = generateContentMetadata({
  title: 'Bilhete do Dia: acertos e erros',
  description: 'Revisão estruturada dos bilhetes com lições práticas.',
  path: 'estudos-de-caso/bilhete-dia-acertos-erros',
});

export default function BilheteDiaAcertosErrosPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Bilhete do Dia: acertos e erros</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Revisão objetiva com método, métricas e ajustes acionáveis.</p>
        </header>
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Objetivo</h2>
            <p className="text-dark-900/70 dark:text-light-100/70">Registrar decisões, avaliar sinais e quantificar resultados para melhoria contínua.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Dados e contexto</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Mercados usados, odds, limites e janelas de entrada.</li>
              <li>Sinais pré-jogo e ao vivo (pressão, ritmo, escalação).</li>
              <li>Condições externas (clima, viagem, motivação).</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Método</h2>
            <ol className="list-decimal list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Liste cada decisão com hipótese e critério de entrada.</li>
              <li>Registre execução (preço, stake, timing) e saída.</li>
              <li>Compare com plano e identifique desvios.</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Resultados e métricas</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>EV estimado vs. realizado por mercado.</li>
              <li>Taxa de acerto por tipo de sinal e janela.</li>
              <li>Impacto de parcialização/hedge no drawdown.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Lições e ajustes</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Critérios que funcionaram e devem ser reforçados.</li>
              <li>Erros recorrentes e como evitá-los.</li>
              <li>Atualizações de janelas, limites de preço e sizing.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Checklist</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Todas decisões registradas com hipótese, execução e resultado.</li>
              <li>Métricas calculadas e comparadas ao plano.</li>
              <li>Ajustes documentados para próxima sessão.</li>
            </ul>
          </section>
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Exemplo prático</h2>
            <p className="text-dark-900/70 dark:text-light-100/70 mb-2">Bilhete com três mercados: documentar hipótese de cada entrada, preços e resultados; calcular EV realizado e identificar onde parcialização teria reduzido drawdown.</p>
          </section>
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Leituras relacionadas</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/artigos/como-documentar-analises">Como documentar análises</a></li>
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
                url: 'https://palpitesdodia.online/conteudos/estudos-de-caso/bilhete-dia-acertos-erros',
                title: 'Bilhete do Dia: acertos e erros',
                description: 'Revisão estruturada dos bilhetes com lições práticas.',
              })
            ),
          }}
        />
      </article>
    </div>
  );
}
