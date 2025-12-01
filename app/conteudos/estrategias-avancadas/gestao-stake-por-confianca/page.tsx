import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';
import { buildArticleJsonLd } from '@/app/lib/jsonld';

export const metadata = generateContentMetadata({
  title: 'Gestão de stake por confiança',
  description: 'Ajuste de exposição conforme nível de convicção e risco.',
  path: 'estrategias-avancadas/gestao-stake-por-confianca',
});

export default function GestaoStakePorConfiancaPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Gestão de stake por confiança</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Dimensionamento por níveis de confiança, EV e variância para controlar risco.</p>
        </header>
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Níveis de confiança</h2>
            <p className="text-dark-900/70 dark:text-light-100/70">Defina faixas (baixa, média, alta) com critérios objetivos de sinal e qualidade de dados. Associe cada nível a um sizing máximo.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">EV e variância</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Estimativa de valor esperado (EV) por entrada e estratégia.</li>
              <li>Variância histórica da estratégia para calibrar exposição.</li>
              <li>Reduza stake quando variância for alta mesmo com EV positivo.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Procedimento</h2>
            <ol className="list-decimal list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Classifique o sinal no nível de confiança apropriado.</li>
              <li>Verifique EV estimado e preço atual.</li>
              <li>Aplique sizing conforme tabela de níveis e variância.</li>
              <li>Evite ultrapassar limite de exposição por jogo.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Checklist</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Tabela de sizing por confiança definida.</li>
              <li>EV e variância medidos e atualizados periodicamente.</li>
              <li>Limites por jogo e por dia documentados.</li>
            </ul>
          </section>
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Exemplo prático</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Nível médio (0.5–1u): EV positivo com variância moderada e sinais confiáveis.</li>
              <li>Upgrade para alto apenas com convergência de sinais e preço ótimo.</li>
              <li>Downgrade para baixo ao perder dois sinais consecutivos ou preço sair do limite.</li>
            </ul>
          </section>
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Leituras relacionadas</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li><a className="text-purple-700 dark:text-purple-400 hover:underline" href="/conteudos/estrategias-avancadas/gestao-de-banca-progressiva">Gestão de banca progressiva</a></li>
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
                url: 'https://palpitesdodia.online/conteudos/estrategias-avancadas/gestao-stake-por-confianca',
                title: 'Gestão de stake por confiança',
                description: 'Ajuste de exposição conforme nível de convicção e risco.',
              })
            ),
          }}
        />
      </article>
    </div>
  );
}
