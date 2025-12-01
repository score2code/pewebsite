import Link from 'next/link';
import Breadcrumb from '@/app/components/ui/breadcrumb';
import { buildArticleJsonLd } from '@/app/lib/jsonld';
import { generateCourseMetadata } from '@/app/utils/metadata';

export const metadata = generateCourseMetadata({
  title: 'Módulo 4 - Pés Trocados',
  description: 'Por que pontas atuam com pé trocado e impactos no modelo ofensivo.',
  path: 'raio-x-das-posicoes-no-futebol/modulo-4-pes-trocados',
});

export default function Modulo4Page() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://palpitesdodia.online';
  const jsonLd = buildArticleJsonLd({
    url: `${siteUrl}/conteudos/cursos/raio-x-das-posicoes-no-futebol/modulo-4-pes-trocados`,
    title: 'Módulo 4 - Pés Trocados',
    description: 'Por que pontas atuam com pé trocado e impactos no modelo ofensivo.',
  });
  return (
    <div className="min-h-screen pt-10 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <Breadcrumb className="mb-4" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <h1 className="text-3xl font-bold text-dark-900 dark:text-light-100">Pés Trocados</h1>
          <p className="text-dark-900/70 dark:text-light-100/70 mt-2">Canhoto na direita e destro na esquerda em funções de construção e finalização.</p>
        </header>

        <div className="space-y-8 bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">Racional</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 mt-2">
              <li>Entrada para finalizar com pé dominante.</li>
              <li>Criação por dentro e ocupação de meia-espaço.</li>
              <li>Complemento com laterais clássicos para amplitude.</li>
            </ul>
            <p className="text-dark-900/70 dark:text-light-100/70 mt-2">A inversão favorece chutes de alta qualidade a partir de meia-espaço, aumenta a densidade criativa no centro e exige compensações de amplitude para não colapsar o campo.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">KPIs por função</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 mt-2">
              <li>Pé trocado: finalizações de qualidade por dentro, passes no funil, ações em meia-espaço.</li>
              <li>Pé natural: recebimentos em amplitude, cruzamentos úteis, ataques ao corredor externo.</li>
              <li>Laterais complementares: cruzamentos ou entradas por dentro conforme desenho ofensivo.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">Exercício prático</h2>
            <p className="text-dark-900/70 dark:text-light-100/70 mt-2">Em duas partidas, registre onde nascem as chances: corredor externo ou meia-espaço. Ajuste a combinação de pés dos extremos e o perfil dos laterais para maximizar a origem mais eficiente.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">Estudo de caso</h2>
            <p className="text-dark-900/70 dark:text-light-100/70 mt-2">Equipe com dois extremos de pé natural produz por fora mas gera poucas chances de alta qualidade. Ajuste: introduzir um extremo de pé trocado no lado do lateral clássico para atacar meia-espaço e aumentar finalizações perigosas.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">Checklist</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 mt-2">
              <li>Combinação de pés garante variedade de origem de chances?</li>
              <li>Laterais complementam extremos sem colidir ocupações?</li>
              <li>Há plano para transições após interiorizações?</li>
              <li>Alternância de pé natural/trocado por contexto adversário?</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">Exemplos de jogadores</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 mt-2">
              <li>Pé trocado: Arjen Robben, Mohamed Salah.</li>
              <li>Pé natural em amplitude: Bukayo Saka, Kingsley Coman.</li>
              <li>Laterais clássicos: Trent Alexander-Arnold, Jordi Alba.</li>
              <li>Laterais invertidos: João Cancelo, Oleksandr Zinchenko.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">Ajustes</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 mt-2">
              <li>Extremos com pé trocado pedem laterais em amplitude.</li>
              <li>Interiorização exige volante e zagueiros com boa saída.</li>
            </ul>
            <p className="text-dark-900/70 dark:text-light-100/70 mt-2">Com laterais invertidos, o time ganha superioridade no meio, mas precisa de extremos de pé natural para alongar o campo. Com laterais clássicos, extremos de pé trocado atacam o funil e criam jogadas de finalização por dentro.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">Exercício extra</h2>
            <p className="text-dark-900/70 dark:text-light-100/70 mt-2">Troque o pé de um extremo e observe 10 ataques. Classifique impacto na origem das chances e no equilíbrio entre amplitude e funil. Ajuste o perfil do lateral do mesmo lado.</p>
            <details className="mt-3">
              <summary className="inline-flex px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white cursor-pointer select-none">Mostrar respostas</summary>
              <div className="mt-3 space-y-2 text-dark-900/70 dark:text-light-100/70">
                <p>Respostas esperadas:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Pé trocado aumenta finalizações por dentro e densidade central.</li>
                  <li>Pé natural sustenta amplitude e cruzamentos úteis.</li>
                  <li>Lateral clássico complementa pé trocado; invertido complementa pé natural.</li>
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
                <Link href="/conteudos/guias/mercados-over-under-gols" className="text-purple-700 dark:text-purple-400 hover:underline">Mercados Over/Under de Gols</Link>
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">Riscos e mitigação</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 mt-2">
              <li>Congestionamento central: alternar apoios e rotações para liberar corredor.</li>
              <li>Transições sofridas: posicionamento do 5 e coberturas dos zagueiros em condução.</li>
              <li>Previsibilidade: variar pé natural e trocado conforme adversário e plano.</li>
            </ul>
          </section>
          <section>
            <div className="flex items-center justify-between mb-4">
              {(() => {
                const base = '/conteudos/cursos/raio-x-das-posicoes-no-futebol';
                const modules = [
                  { slug: 'modulo-1-goleiros-defensores', title: 'Módulo 1' },
                  { slug: 'modulo-2-meio-campo', title: 'Módulo 2' },
                  { slug: 'modulo-3-ataque-moderno', title: 'Módulo 3' },
                  { slug: 'modulo-4-pes-trocados', title: 'Módulo 4' },
                  { slug: 'modulo-5-montando-11-ideal', title: 'Módulo 5' },
                ];
                const currentSlug = 'modulo-4-pes-trocados';
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
              <Link href="/conteudos/cursos/raio-x-das-posicoes-no-futebol" className="inline-flex px-3 py-2 rounded-md border border-light-300 dark:border-dark-600 text-sm text-dark-900 dark:text-light-100 hover:bg-light-200 dark:hover:bg-dark-700">Todos os módulos</Link>
              <Link href="/conteudos/cursos/raio-x-das-posicoes-no-futebol/modulo-1-goleiros-defensores" className="inline-flex px-3 py-2 rounded-md bg-light-200 dark:bg-dark-700 text-sm text-dark-900 dark:text-light-100">Módulo 1</Link>
              <Link href="/conteudos/cursos/raio-x-das-posicoes-no-futebol/modulo-2-meio-campo" className="inline-flex px-3 py-2 rounded-md bg-light-200 dark:bg-dark-700 text-sm text-dark-900 dark:text-light-100">Módulo 2</Link>
              <Link href="/conteudos/cursos/raio-x-das-posicoes-no-futebol/modulo-3-ataque-moderno" className="inline-flex px-3 py-2 rounded-md bg-light-200 dark:bg-dark-700 text-sm text-dark-900 dark:text-light-100">Módulo 3</Link>
              <Link href="/conteudos/cursos/raio-x-das-posicoes-no-futebol/modulo-5-montando-11-ideal" className="inline-flex px-3 py-2 rounded-md bg-light-200 dark:bg-dark-700 text-sm text-dark-900 dark:text-light-100">Módulo 5</Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
