import Link from 'next/link';
import Breadcrumb from '@/app/components/ui/breadcrumb';
import { buildItemListJsonLd } from '@/app/lib/jsonld';
import { generateCourseMetadata } from '@/app/utils/metadata';

export const metadata = generateCourseMetadata({
  title: 'Curso: Geometria Tática: Formações Básicas no Futebol',
  description: 'Formações clássicas e dinâmicas, princípios e variações práticas. Nível iniciante.',
  path: 'geometria-tatica-formacoes-basicas-no-futebol',
});

const modules = [
  { slug: 'modulo-1-historia-dos-numeros', title: 'Módulo 1 - A História dos Números' },
  { slug: 'modulo-2-sistemas-com-3-zagueiros', title: 'Módulo 2 - Sistemas com 3 Zagueiros' },
  { slug: 'modulo-3-jogo-dinamico', title: 'Módulo 3 - O Jogo é Dinâmico' },
];

export default function CursoGeometriaTaticaPage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const itemListJsonLd = buildItemListJsonLd(
    `${baseUrl}/conteudos/cursos/geometria-tatica-formacoes-basicas-no-futebol`,
    'Geometria Tática: Formações Básicas no Futebol',
    modules.map((m) => ({
      url: `${baseUrl}/conteudos/cursos/geometria-tatica-formacoes-basicas-no-futebol/${m.slug}`,
      name: m.title,
    })),
    'Formações clássicas e dinâmicas, princípios, variações e estudo aplicado.'
  );

  return (
    <div className="min-h-screen pt-10 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <h1 className="text-4xl font-bold text-dark-900 dark:text-light-100 mb-3">Geometria Tática: Formações Básicas no Futebol</h1>
          <p className="text-lg text-dark-900/70 dark:text-light-100/70">Nível: Iniciante</p>
          <p className="text-dark-900/70 dark:text-light-100/70 mt-4">Entenda por que certas formações se popularizaram, quando usar cada desenho e como o time muda de forma entre defesa e ataque.</p>
        </header>

        <section className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">Módulos</h2>
          <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70">
            {modules.map((m) => (
              <li key={m.slug}>
                <Link href={`/conteudos/cursos/geometria-tatica-formacoes-basicas-no-futebol/${m.slug}`} className="text-purple-700 dark:text-purple-400 hover:underline">
                  {m.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 mt-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">Objetivos do curso</h2>
          <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70">
            <li>Dominar princípios das formações 4-4-2, 4-2-3-1 e 4-3-3.</li>
            <li>Diferenciar sistemas com 3 zagueiros e suas variações por contexto.</li>
            <li>Reconhecer transições de forma: defender em 4-4-2 e atacar em 3-2-5.</li>
            <li>Avaliar sinais práticos e KPIs para decidir ajustes em jogo.</li>
          </ul>
        </section>

        <section className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 mt-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">Como estudar</h2>
          <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70">
            <li>Observe estrutura sem bola (altura das linhas) e com bola (ocupação por setores).</li>
            <li>Registre 10 posses e identifique se há troca de desenho entre fases.</li>
            <li>Compare contra diferentes adversários e cenários de placar.</li>
            <li>Revise com checklists ao final de cada módulo.</li>
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
          </ul>
        </section>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      </div>
    </div>
  );
}
