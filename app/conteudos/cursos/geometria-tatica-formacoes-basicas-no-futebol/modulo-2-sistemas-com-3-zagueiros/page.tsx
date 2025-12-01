import Link from 'next/link';
import Breadcrumb from '@/app/components/ui/breadcrumb';
import { buildArticleJsonLd } from '@/app/lib/jsonld';
import { generateCourseMetadata } from '@/app/utils/metadata';

export const metadata = generateCourseMetadata({
  title: 'Módulo 2 - Sistemas com 3 Zagueiros',
  description: '3-5-2 e 5-4-1: mitos, verdades, funções dos alas e variações por contexto.',
  path: 'geometria-tatica-formacoes-basicas-no-futebol/modulo-2-sistemas-com-3-zagueiros',
});

export default function Modulo2GeometriaPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://palpitesdodia.online';
  const jsonLd = buildArticleJsonLd({
    url: `${siteUrl}/conteudos/cursos/geometria-tatica-formacoes-basicas-no-futebol/modulo-2-sistemas-com-3-zagueiros`,
    title: 'Módulo 2 - Sistemas com 3 Zagueiros',
    description: '3-5-2 e 5-4-1: mitos, verdades, funções dos alas e variações por contexto.',
  });
  return (
    <div className="min-h-screen pt-10 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <Breadcrumb className="mb-4" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <h1 className="text-3xl font-bold text-dark-900 dark:text-light-100">Sistemas com 3 Zagueiros</h1>
          <p className="text-dark-900/70 dark:text-light-100/70 mt-2">Mito x Verdade e a diferença entre 3-5-2 e 5-4-1.</p>
        </header>

        <div className="space-y-8 bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">Mito x Verdade</h2>
            <p className="text-dark-900/70 dark:text-light-100/70 mt-2">Ter 3 zagueiros não é sinônimo de retranca. O desenho depende da altura dos alas, dos interiores e do 9. Com alas agressivos, o time pode atacar com cinco na última linha; com alas baixos, vira um 5 na defesa.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">3-5-2: ofensivo com alas</h2>
            <p className="text-dark-900/70 dark:text-light-100/70 mt-2">Dois atacantes e alas agressivos. Em posse, alas ocupam amplitude e interiores conectam o 9/segundo atacante. Sem bola, pode virar 5-3-2 se alas baixam. Exige coberturas dos zagueiros externos e do 6.</p>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 mt-2">
              <li>Vantagens: presença ofensiva, amplitude natural, variação de ataque.</li>
              <li>Desvantagens: transições expostas se alas não retornam; coberturas complexas.</li>
              <li>KPIs: ações dos alas no terço final, coberturas dos zagueiros externos, ligações dos interiores.</li>
            </ul>
            <p className="text-dark-900/70 dark:text-light-100/70 mt-2">Exemplos: Juventus (Conte), Chelsea (Conte) com alas profundos e dupla na frente.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">5-4-1: defesa pura</h2>
            <p className="text-dark-900/70 dark:text-light-100/70 mt-2">Um 9 isolado e linhas baixas. Objetivo é negar espaço e proteger área. Transição ofensiva depende de extremos ou do 9 atacando profundidade.</p>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 mt-2">
              <li>Vantagens: proteção máxima de área, nega jogo entre linhas.</li>
              <li>Desvantagens: pouca criação; saída difícil sem apoios próximos.</li>
              <li>KPIs: blocos baixos bem-sucedidos, número de cruzamentos defendidos, recuperações em área.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">Exercício e checklist</h2>
            <p className="text-dark-900/70 dark:text-light-100/70 mt-2">Mapeie 12 posses e identifique a altura média dos alas e a ocupação dos interiores. Classifique o desenho em posse e sem bola. Ajuste mentalmente para aumentar presença ofensiva sem perder proteção.</p>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 mt-2">
              <li>Alas garantem amplitude ou baixam muito?</li>
              <li>Interiores conectam com a frente ou ficam paralelos ao 6?</li>
              <li>Zagueiros externos cobrem bem transições e cruzamentos?</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">Exercício extra</h2>
            <p className="text-dark-900/70 dark:text-light-100/70 mt-2">Registre 8 ataques onde alas participam diretamente. Classifique como 3-5-2 ofensivo (alas altos) ou 5-4-1 defensivo (alas baixos). Anote como o 6 e zagueiros externos cobrem a perda.</p>
            <details className="mt-3">
              <summary className="inline-flex px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white cursor-pointer select-none">Mostrar respostas</summary>
              <div className="mt-3 space-y-2 text-dark-900/70 dark:text-light-100/70">
                <p>Padrões típicos:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>3-5-2: alas na última linha, interiores próximos do 9; 6 protege corredor central.</li>
                  <li>5-4-1: ala baixo formando linha de 5; extremos baixam para fechar corredor externo.</li>
                  <li>Cobertura eficiente: zagueiros externos prontos para duelos e cortes em cruzamentos.</li>
                </ul>
              </div>
            </details>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">Leituras relacionadas</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 mt-2">
              <li>
                <Link href="/conteudos/guias/analise-por-periodo" className="text-purple-700 dark:text-purple-400 hover:underline">Análise por Período</Link>
              </li>
              <li>
                <Link href="/conteudos/guias/guia-de-analise-de-escanteios" className="text-purple-700 dark:text-purple-400 hover:underline">Guia de Análise de Escanteios</Link>
              </li>
              <li>
                <Link href="/conteudos/guias/entendendo-libertadores" className="text-purple-700 dark:text-purple-400 hover:underline">Entendendo a Copa Libertadores</Link>
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">Estudos de caso</h2>
            <p className="text-dark-900/70 dark:text-light-100/70 mt-2">Atalanta (Gasperini) em 3-4-2-1 agressivo com alas e interiores altos; Chelsea (Conte) alternando alturas dos alas conforme adversário.</p>
          </section>
          <section>
            <div className="flex items-center justify-between mb-4">
              {(() => {
                const base = '/conteudos/cursos/geometria-tatica-formacoes-basicas-no-futebol';
                const modules = [
                  { slug: 'modulo-1-historia-dos-numeros', title: 'Módulo 1' },
                  { slug: 'modulo-2-sistemas-com-3-zagueiros', title: 'Módulo 2' },
                  { slug: 'modulo-3-jogo-dinamico', title: 'Módulo 3' },
                ];
                const currentSlug = 'modulo-2-sistemas-com-3-zagueiros';
                const idx = modules.findIndex(m => m.slug === currentSlug);
                const prev = idx > 0 ? modules[idx - 1] : null;
                const next = idx < modules.length - 1 ? modules[idx + 1] : null;
                return (
                  <>
                    <div>
                      {prev ? (
                        <Link href={`${base}/${prev.slug}`} className="inline-flex px-4 py-2 rounded-lg border border-light-300 dark:border-dark-600 text-dark-900 dark:text-light-100 hover:bg-light-200 dark:hover:bg-dark-700">
                          ← {prev.title}
                        </Link>
                      ) : (
                        <Link href={`${base}`} className="inline-flex px-4 py-2 rounded-lg border border-light-300 dark:border-dark-600 text-dark-900 dark:text-light-100 hover:bg-light-200 dark:hover:bg-dark-700">
                          ← Índice do curso
                        </Link>
                      )}
                    </div>
                    <div>
                      {next && (
                        <Link href={`${base}/${next.slug}`} className="inline-flex px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white">
                          {next.title} →
                        </Link>
                      )}
                    </div>
                  </>
                );
              })()}
            </div>
            <div className="flex flex-wrap gap-2">
              <Link href="/conteudos/cursos/geometria-tatica-formacoes-basicas-no-futebol" className="inline-flex px-3 py-2 rounded-md border border-light-300 dark:border-dark-600 text-sm text-dark-900 dark:text-light-100 hover:bg-light-200 dark:hover:bg-dark-700">Todos os módulos</Link>
              <Link href="/conteudos/cursos/geometria-tatica-formacoes-basicas-no-futebol/modulo-1-historia-dos-numeros" className="inline-flex px-3 py-2 rounded-md bg-light-200 dark:bg-dark-700 text-sm text-dark-900 dark:text-light-100">Módulo 1</Link>
              <Link href="/conteudos/cursos/geometria-tatica-formacoes-basicas-no-futebol/modulo-3-jogo-dinamico" className="inline-flex px-3 py-2 rounded-md bg-light-200 dark:bg-dark-700 text-sm text-dark-900 dark:text-light-100">Módulo 3</Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
