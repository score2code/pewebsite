import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';
import { buildArticleJsonLd } from '@/app/lib/jsonld';

export const metadata = generateContentMetadata({
  title: 'Checklist pré-jogo para cantos',
  description: 'Passos objetivos antes de operar mercados de escanteios.',
  path: 'artigos/checklist-pre-jogo-cantos',
});

export default function ChecklistPreJogoCantosPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Checklist pré-jogo para cantos</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Critérios objetivos para reduzir ruído e elevar consistência.</p>
        </header>
        <section className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h2 className="text-2xl font-bold mb-3">Checklist essencial</h2>
          <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
            <li><span className="font-semibold">Amplitude e laterais:</span> há padrão de jogo pelos flancos e cruzamentos?</li>
            <li><span className="font-semibold">Odds e risco:</span> relação preço × janela de tempo é adequada ao plano?</li>
            <li><span className="font-semibold">Clima e campo:</span> vento/chuva e gramado impactam a bola parada?</li>
            <li><span className="font-semibold">Sequência recente:</span> cantos/cruzamentos bloqueados indicam pressão sustentada?</li>
            <li><span className="font-semibold">Plano de saída:</span> defina objetivo, parcial e corte (stop) antes de entrar.</li>
          </ul>
        </section>

        <section className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mt-6 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h2 className="text-2xl font-bold mb-3">Exemplo prático</h2>
          <p className="text-dark-900/70 dark:text-light-100/70 mb-3">
            Jogo com mandante forte em cruzamentos e lateral ofensivo participativo. Odd justa para 15 minutos.
            Pressão pelos flancos nos últimos 5 minutos e duas bolas bloqueadas na área: entrada em cantos com plano de saída parcial em 1 canto e total em 2 cantos.
          </p>
          <div className="text-sm text-dark-900/60 dark:text-light-100/60">
            Ajuste se houver mudança de padrão (substituição chave, queda de ritmo) ou condições de campo desfavoráveis.
          </div>
        </section>

        <section className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mt-6 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h2 className="text-2xl font-bold mb-3">Erros comuns</h2>
          <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
            <li>Entrar apenas pela odd, ignorando padrão de jogo.</li>
            <li>Desconsiderar clima/gramado em ligas com variação alta.</li>
            <li>Falta de plano de saída e pontos de corte definidos.</li>
          </ul>
        </section>

        <section className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mt-6 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h2 className="text-2xl font-bold mb-3">Leituras relacionadas</h2>
          <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
            <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/insights/cantos-e-xg-relacao">Relação entre cantos e xG</a></li>
            <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/estrategias-avancadas/hedge-inteligente-cantos">Hedge inteligente em cantos</a></li>
            <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/guias/guia-de-analise-de-escanteios">Guia de análise de escanteios</a></li>
          </ul>
        </section>
        {/* JSON-LD para SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              buildArticleJsonLd({
                url: 'https://palpitesdodia.online/conteudos/artigos/checklist-pre-jogo-cantos',
                title: 'Checklist pré-jogo para cantos',
                description: 'Passos objetivos antes de operar mercados de escanteios.',
              })
            ),
          }}
        />
      </article>
    </div>
  );
}
