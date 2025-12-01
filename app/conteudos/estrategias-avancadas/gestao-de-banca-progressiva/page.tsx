import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';
import { buildArticleJsonLd } from '@/app/lib/jsonld';

export const metadata = generateContentMetadata({
  title: 'Gestão de banca progressiva',
  description: 'Alocação variável baseada em confiança e variância.',
  path: 'estrategias-avancadas/gestao-de-banca-progressiva',
});

export default function GestaoDeBancaProgressivaPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Gestão de banca progressiva</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Ajuste sizing com base em confiança, EV e variância.</p>
        </header>
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Níveis de confiança</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Baixa: sinais iniciais, alta variância — stake mínimo.</li>
              <li>Média: múltiplos sinais, preço ok — stake moderado.</li>
              <li>Alta: convergência forte, preço ótimo — stake máximo permitido.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Procedimento</h2>
            <ol className="list-decimal list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Classifique a confiança e estime EV esperado.</li>
              <li>Aplique sizing por faixa com limite de drawdown.</li>
              <li>Reavalie sizing por janela ou mudança de cenário.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Checklist</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Faixas de stake e limites definidos no plano.</li>
              <li>Critérios de upgrade/downgrade de confiança objetivos.</li>
              <li>Proteções de risco ativas (stop por sessão/jogo).</li>
            </ul>
          </section>
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Exemplo prático</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Confiança média: 0.5u com EV positivo moderado e variância controlada.</li>
              <li>Upgrade para alta apenas com convergência de sinais e preço ótimo.</li>
              <li>Downgrade para baixa ao perder dois sinais consecutivos.</li>
            </ul>
          </section>
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Leituras relacionadas</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/estrategias-avancadas/gestao-stake-por-confianca">Gestão de stake por confiança</a></li>
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
                url: 'https://palpitesdodia.online/conteudos/estrategias-avancadas/gestao-de-banca-progressiva',
                title: 'Gestão de banca progressiva',
                description: 'Alocação variável baseada em confiança e variância.',
              })
            ),
          }}
        />
      </article>
    </div>
  );
}
