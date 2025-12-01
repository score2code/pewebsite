import Link from 'next/link';
import Breadcrumb from '@/app/components/ui/breadcrumb';
import { buildItemListJsonLd } from '@/app/lib/jsonld';
import { generateCourseMetadata } from '@/app/utils/metadata';

export const metadata = generateCourseMetadata({
  title: 'Curso: Raio-X das Posições no Futebol',
  description:
    'Curso iniciante sobre funções por posição, variações modernas e montagem equilibrada do time.',
  path: 'raio-x-das-posicoes-no-futebol',
});

const modules = [
  { slug: 'modulo-1-goleiros-defensores', title: 'Módulo 1 - Goleiros e Defensores' },
  { slug: 'modulo-2-meio-campo', title: 'Módulo 2 - O Coração do Time (Meio-Campo)' },
  { slug: 'modulo-3-ataque-moderno', title: 'Módulo 3 - O Ataque Moderno' },
  { slug: 'modulo-4-pes-trocados', title: 'Módulo 4 - Pés Trocados' },
  { slug: 'modulo-5-montando-11-ideal', title: 'Módulo 5 - Montando seu 11 Ideal' },
];

export default function CursoRaioXPosicoesPage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const itemListJsonLd = buildItemListJsonLd(
    `${baseUrl}/conteudos/cursos/raio-x-das-posicoes-no-futebol`,
    'Raio-X das Posições no Futebol',
    modules.map((m) => ({
      url: `${baseUrl}/conteudos/cursos/raio-x-das-posicoes-no-futebol/${m.slug}`,
      name: m.title,
    })),
    'Formação iniciante em funções, variações e equilíbrio tático.'
  );

  return (
    <div className="min-h-screen pt-10 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <Breadcrumb className="mb-4" />

        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <h1 className="text-4xl font-bold text-dark-900 dark:text-light-100 mb-3">Raio-X das Posições no Futebol</h1>
          <p className="text-lg text-dark-900/70 dark:text-light-100/70">Nível: Iniciante</p>
          <p className="text-dark-900/70 dark:text-light-100/70 mt-4">
            Entenda as funções por posição, como evoluíram com o jogo moderno e como combinar essas peças sem
            desequilibrar sua equipe.
          </p>
        </header>

        <section className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">Módulos</h2>
          <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70">
            {modules.map((m) => (
              <li key={m.slug}>
                <Link href={`/conteudos/cursos/raio-x-das-posicoes-no-futebol/${m.slug}`} className="text-purple-700 dark:text-purple-400 hover:underline">
                  {m.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 mt-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">Objetivos do curso</h2>
          <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70">
            <li>Reconhecer funções por posição e suas variações modernas.</li>
            <li>Identificar compatibilidades entre perfis para montar um 11 equilibrado.</li>
            <li>Ler sinais de jogo para ajustar o plano por contexto e adversário.</li>
            <li>Aplicar checklists e KPIs simples para avaliar desempenho por função.</li>
          </ul>
        </section>

        <section className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 mt-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">Como estudar</h2>
          <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70">
            <li>Assista a um jogo focando em uma função por vez.</li>
            <li>Anote 3–5 sinais por fase: saída, construção, criação e transição.</li>
            <li>Compare o plano inicial com ajustes feitos durante a partida.</li>
            <li>Replique com equipes e ligas diferentes para ampliar repertório.</li>
          </ul>
        </section>

        <section className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 mt-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">Materiais de apoio</h2>
          <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70">
            <li>
              <Link href="/conteudos/guias/interpretando-probabilidades-e-odds" className="text-purple-700 dark:text-purple-400 hover:underline">Interpretando Probabilidades e Odds</Link>
            </li>
            <li>
              <Link href="/conteudos/guias/analise-por-periodo" className="text-purple-700 dark:text-purple-400 hover:underline">Análise por Período</Link>
            </li>
            <li>
              <Link href="/conteudos/guias/peculiaridades-brasileirao" className="text-purple-700 dark:text-purple-400 hover:underline">Peculiaridades do Brasileirão</Link>
            </li>
            <li>
              <Link href="/conteudos/guias/entendendo-libertadores" className="text-purple-700 dark:text-purple-400 hover:underline">Entendendo a Copa Libertadores</Link>
            </li>
          </ul>
        </section>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      </div>
    </div>
  );
}
