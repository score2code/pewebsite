import Link from 'next/link';
import Breadcrumb from '@/app/components/ui/breadcrumb';

export default function ConteudosIndexPage() {
  const categories = [
    { title: 'Artigos (Blog)', slug: 'artigos', description: 'Publicações contínuas com análises e opiniões.' },
    { title: 'Estudos de Caso', slug: 'estudos-de-caso', description: 'Deep dives em jogos e tickets específicos.' },
    { title: 'Insights de Dados', slug: 'insights', description: 'Tendências e padrões a partir de estatísticas.' },
    { title: 'Estratégias Avançadas', slug: 'estrategias-avancadas', description: 'Táticas, gestão de risco e execução ao vivo.' },
    { title: 'Metodologia e Modelagem', slug: 'metodologia-modelagem', description: 'Como os modelos são construídos e validados.' },
    { title: 'Glossário e Fundamentos', slug: 'glossario', description: 'Conceitos base de mercados e probabilidades.' },
  ];

  return (
    <div className="min-h-screen pt-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl shadow-custom dark:shadow-custom-dark p-8 mb-8 border border-light-300 dark:border-dark-600 backdrop-blur-sm">
          <h1 className="text-4xl font-bold text-dark-900 dark:text-light-100 mb-3">Conteúdos</h1>
          <p className="text-lg text-dark-900/70 dark:text-light-100/70">Coleção de artigos, guias e estudos para evoluir sua análise e execução.</p>
          <div className="mt-4 grid gap-3">
            <p className="text-dark-900/70 dark:text-light-100/70">
              Como aproveitar melhor:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-dark-900/70 dark:text-light-100/70">
              <li>Comece pelos Guias e Glossário para nivelar conceitos.</li>
              <li>Use Insights de Dados para orientar liga e mercado.</li>
              <li>Valide suas entradas com Estratégias e Estudos de Caso.</li>
            </ul>
            <div className="mt-2">
              <a
                href="/bilhete-do-dia"
                className="inline-block bg-purple-600 dark:bg-purple-500 text-white font-bold px-5 py-3 rounded-lg hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                Ver Bilhete do Dia
              </a>
            </div>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((c) => (
            <Link key={c.slug} href={`/conteudos/${c.slug}`} className="group focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-xl">
              <div className="h-full bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark transition-all">
                <h2 className="text-xl font-bold text-dark-900 dark:text-light-100 mb-2">{c.title}</h2>
                <p className="text-dark-900/70 dark:text-light-100/70">{c.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
