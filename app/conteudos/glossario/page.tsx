import Link from 'next/link';
import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';

export const metadata = generateContentMetadata({
  title: 'Glossário e Fundamentos',
  description: 'Conceitos base explicados de forma didática para mercados e probabilidades.',
  path: 'glossario',
});

const terms = [
  { title: 'Handicap Asiático', slug: 'handicap-asiatico', description: 'Como funciona e quando usar.' },
  { title: 'Over/Under', slug: 'over-under', description: 'Entendendo totais e suas nuances.' },
  { title: 'Valor Esperado (EV)', slug: 'valor-esperado', description: 'Cálculo, uso e limitações.' },
  { title: 'Probabilidade Implícita', slug: 'probabilidade-implicita', description: 'Convertendo odds em chance.' },
  { title: 'Banca e Stake', slug: 'banca-e-stake', description: 'Fundamentos de gestão e exposição.' },
];

export default function GlossarioPage() {
  return (
    <div className="min-h-screen pt-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Glossário e Fundamentos</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Conceitos essenciais para uma base sólida.</p>
        </header>
        <div className="grid gap-6 md:grid-cols-2">
          {terms.map((a) => (
            <Link key={a.slug} href={`/conteudos/glossario/${a.slug}`} className="group">
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

