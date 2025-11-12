import Link from 'next/link';
import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';

export const metadata = generateContentMetadata({
  title: 'Insights de Dados',
  description: 'Tendências e padrões extraídos de estatísticas.',
  path: 'insights',
});

const insights = [
  { title: 'Tendências de cantos nas últimas 8 semanas', slug: 'tendencias-cantos-8-semanas', description: 'Quais ligas puxam mais cantos recentemente.' },
  { title: 'Variação de gols HT/FT por liga', slug: 'variacao-gols-ht-ft-ligas', description: 'Comparativo entre primeiro e segundo tempo.' },
  { title: 'Impacto do mandante: posse e campo', slug: 'impacto-mandante-posse-campo', description: 'Como fatores de contexto mexem nas métricas.' },
  { title: 'Correlação entre faltas e escanteios', slug: 'correlacao-faltas-escanteios', description: 'Existe relação útil? Onde ela aparece.' },
  { title: 'Distribuição de odds do mercado', slug: 'distribuicao-odds-mercado', description: 'Entendendo concentrações e anomalias.' },
];

export default function InsightsPage() {
  return (
    <div className="min-h-screen pt-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Insights de Dados</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Leituras e tendências a partir de estatísticas.</p>
        </header>
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

