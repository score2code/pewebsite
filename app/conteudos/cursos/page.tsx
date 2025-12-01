import Link from 'next/link';
import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateCourseMetadata } from '@/app/utils/metadata';
import { buildItemListJsonLd } from '@/app/lib/jsonld';

export const metadata = generateCourseMetadata({
  title: 'Cursos',
  description: 'Cursos e trilhas em análise e estratégia esportiva.',
  path: '',
});

export default function CursosPage() {
  const courses = [
    {
      title: 'Raio-X das Posições no Futebol',
      level: 'Iniciante',
      slug: 'raio-x-das-posicoes-no-futebol',
      description:
        'Entenda funções por posição, variações modernas e como montar um time equilibrado.',
    },
    {
      title: 'Geometria Tática: Formações Básicas no Futebol',
      level: 'Iniciante',
      slug: 'geometria-tatica-formacoes-basicas-no-futebol',
      description:
        'Formações clássicas e dinâmicas, princípios, transições 4-4-2→3-2-5 e estudo aplicado.',
    },
  ];

  return (
    <div className="min-h-screen pt-10 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <Breadcrumb className="mb-4" />
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <h1 className="text-4xl font-bold text-dark-900 dark:text-light-100 mb-3">Cursos</h1>
          <p className="text-lg text-dark-900/70 dark:text-light-100/70">Cursos e trilhas em análise e estratégia esportiva.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {courses.map((c) => (
            <Link key={c.slug} href={`/conteudos/cursos/${c.slug}`} className="block">
              <div className="p-6 rounded-xl border border-light-300 dark:border-dark-600 bg-light-100/50 dark:bg-dark-800/50 shadow-custom dark:shadow-custom-dark hover:bg-light-200/50 dark:hover:bg-dark-700/50 transition-colors">
                <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">{c.title}</h2>
                <p className="text-sm text-dark-900/70 dark:text-light-100/70 mt-1">Nível: {c.level}</p>
                <p className="text-dark-900/70 dark:text-light-100/70 mt-4">{c.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {(() => {
          const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
          const itemListJsonLd = buildItemListJsonLd(
            `${baseUrl}/conteudos/cursos`,
            'Cursos',
            courses.map(c => ({
              url: `${baseUrl}/conteudos/cursos/${c.slug}`,
              name: c.title,
              description: c.description,
            })),
            'Coleção de cursos e trilhas em análise e estratégia esportiva.'
          );
          return (
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
          );
        })()}
      </div>
    </div>
  );
}
