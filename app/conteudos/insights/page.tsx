import Link from 'next/link';
import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';

export const metadata = generateContentMetadata({
  title: 'Insights de Dados',
  description: 'Tendências, padrões e sinais úteis extraídos de estatísticas.',
  path: 'insights',
});

const insights = [
  { title: 'Tendências de cantos nas últimas 8 semanas', slug: 'tendencias-cantos-8-semanas', description: 'Quais ligas puxam mais cantos no período recente.' },
  { title: 'Variação de gols HT/FT por liga', slug: 'variacao-gols-ht-ft-ligas', description: 'Comparativo entre primeiro e segundo tempo por competição.' },
  { title: 'Impacto do mandante: posse e campo', slug: 'impacto-mandante-posse-campo', description: 'Como fatores de contexto afetam métricas por partida.' },
  { title: 'Correlação entre faltas e escanteios', slug: 'correlacao-faltas-escanteios', description: 'Existe relação útil? Onde ela aparece e como usar.' },
  { title: 'Distribuição de odds do mercado', slug: 'distribuicao-odds-mercado', description: 'Entendendo concentrações, caudas e anomalias de preços.' },
  { title: 'Relação entre cantos e xG', slug: 'cantos-e-xg-relacao', description: 'Quando volume de cantos antecipa xG e vice-versa.' },
  { title: 'Equipes com mais cantos no primeiro tempo', slug: 'equipe-mais-cantos-primeiro-tempo', description: 'Top clubes em cantos HT e consistência.' },
  { title: 'Ligas mais eficientes para Under', slug: 'ligas-mais-eficientes-under', description: 'Onde o under tende a performar melhor por características de jogo.' },
];

export default function InsightsPage() {
  return (
    <div className="min-h-screen pt-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Insights de Dados</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Leituras acionáveis de tendências e padrões estatísticos por ligas e contextos.</p>
        </header>
        <section className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h2 className="text-2xl font-bold mb-3">Como usar</h2>
          <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
            <li>Combine os insights com sinais ao vivo (pressão, ritmo) e preço.</li>
            <li>Priorize ligas com estabilidade e amostras robustas.</li>
            <li>Documente entradas baseadas em insights para revisão e melhoria.</li>
          </ul>
          <div className="mt-4 text-sm text-dark-900/60 dark:text-light-100/60">
            Ex.: se uma liga mostra alta correlação entre faltas e escanteios, priorize cenários de pressão lateral e bolas paradas para mercados de cantos.
          </div>
        </section>
        <div className="grid gap-6 md:grid-cols-2">
          {insights.map((a) => (
            <Link key={a.slug} href={`/conteudos/insights/${a.slug}`} className="group">
              <div className="h-full bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
                <h2 className="text-xl font-bold mb-2">{a.title}</h2>
                <p className="text-dark-900/70 dark:text-light-100/70">{a.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
