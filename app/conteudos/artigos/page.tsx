import Link from 'next/link';
import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';

export const metadata = generateContentMetadata({
  title: 'Artigos (Blog)',
  description: 'Publicações contínuas com análises, opiniões e aprendizados.',
  path: 'artigos',
});

const articles = [
  { title: 'Checklist pré-jogo para cantos', slug: 'checklist-pre-jogo-cantos', description: 'Passos objetivos antes de operar cantos.' },
  { title: 'Como evitar viés recente nas análises', slug: 'evitar-vies-recente', description: 'Técnicas para reduzir distorções na leitura.' },
  { title: 'Leitura de momento ao vivo', slug: 'leitura-de-momento-ao-vivo', description: 'Identificando picos de pressão e transições.' },
  { title: 'Valor esperado na prática', slug: 'valor-esperado-na-pratica', description: 'Aplicando EV nas decisões diárias.' },
  { title: 'Como documentar análises', slug: 'como-documentar-analises', description: 'Modelos de notas e revisão de decisões.' },
];

export default function ArtigosPage() {
  return (
    <div className="min-h-screen pt-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Artigos (Blog)</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Publicações, aprendizados e opiniões com foco prático.</p>
          <div className="mt-4 bg-white/40 dark:bg-black/20 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">Como aproveitar melhor</h2>
            <ul className="list-disc list-inside space-y-1 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Leia o artigo e identifique 2–3 pontos acionáveis.</li>
              <li>Teste em jogos reais com critérios e registre o resultado.</li>
              <li>Revisite após 1–2 semanas e ajuste sua abordagem.</li>
            </ul>
          </div>
        </header>
        <div className="grid gap-6 md:grid-cols-2">
          {articles.map((a) => (
            <Link key={a.slug} href={`/conteudos/artigos/${a.slug}`} className="group">
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
