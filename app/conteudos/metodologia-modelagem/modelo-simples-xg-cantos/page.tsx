import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';
import { buildArticleJsonLd } from '@/app/lib/jsonld';

export const metadata = generateContentMetadata({
  title: 'Modelo simples de xG para cantos',
  description: 'Como estimar probabilidade de canto com features básicas.',
  path: 'metodologia-modelagem/modelo-simples-xg-cantos',
});

export default function ModeloSimplesXGCantosPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Modelo simples de xG para cantos</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Pipeline básico: escolha de features, treino, validação e thresholds.</p>
        </header>
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Features iniciais</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Posse, território, ritmo e volume de finalizações.</li>
              <li>Cruzamentos e bolas paradas por janela temporal.</li>
              <li>Histórico de cantos a favor/contra (equipes e confrontos).</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Treino e validação</h2>
            <p className="text-dark-900/70 dark:text-light-100/70">Utilize regressão logística ou modelos de árvore com validação <span className="font-semibold">walk-forward</span>. Equilibre classes e ajuste thresholds conforme o objetivo (precisão vs. recall).</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Checklist</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Features padronizadas e documentadas.</li>
              <li>Métricas de validação por competição.</li>
              <li>Thresholds definidos por estratégia e risco.</li>
            </ul>
          </section>
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Exemplo prático</h2>
            <p className="text-dark-900/70 dark:text-light-100/70">Treine regressão logística com features básicas e selecione thresholds para cantos HT com base em precisão/recall e ROI simulado. Use walk-forward e ajuste por competição.</p>
          </section>
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Leituras relacionadas</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/estrategias-avancadas/escalonar-entradas-pressao">Escalonar entradas em pressão</a></li>
              <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/estudos-de-caso/leitura-pressao-ht-estudo">Estudo de leitura de pressão HT</a></li>
              <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/metodologia-modelagem/validacao-historica-modelo-simples">Validação histórica do modelo</a></li>
            </ul>
          </section>
        </div>
        {/* JSON-LD para SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              buildArticleJsonLd({
                url: 'https://palpitesdodia.online/conteudos/metodologia-modelagem/modelo-simples-xg-cantos',
                title: 'Modelo simples de xG para cantos',
                description: 'Como estimar probabilidade de canto com features básicas.',
              })
            ),
          }}
        />
      </article>
    </div>
  );
}
