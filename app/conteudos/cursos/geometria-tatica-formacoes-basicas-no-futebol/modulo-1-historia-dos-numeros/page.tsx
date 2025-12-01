import Link from 'next/link';
import Breadcrumb from '@/app/components/ui/breadcrumb';
import { buildArticleJsonLd } from '@/app/lib/jsonld';
import { generateCourseMetadata } from '@/app/utils/metadata';

export const metadata = generateCourseMetadata({
  title: 'Módulo 1 - A História dos Números',
  description: '4-4-2, 4-2-3-1 e 4-3-3: princípios, vantagens, riscos e uso prático.',
  path: 'geometria-tatica-formacoes-basicas-no-futebol/modulo-1-historia-dos-numeros',
});

export default function Modulo1GeometriaPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://palpitesdodia.online';
  const jsonLd = buildArticleJsonLd({
    url: `${siteUrl}/conteudos/cursos/geometria-tatica-formacoes-basicas-no-futebol/modulo-1-historia-dos-numeros`,
    title: 'Módulo 1 - A História dos Números',
    description: '4-4-2, 4-2-3-1 e 4-3-3: princípios, vantagens, riscos e uso prático.',
  });
  return (
    <div className="min-h-screen pt-10 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <Breadcrumb className="mb-4" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <h1 className="text-3xl font-bold text-dark-900 dark:text-light-100">A História dos Números</h1>
          <p className="text-dark-900/70 dark:text-light-100/70 mt-2">Por que 4-4-2, 4-2-3-1 e 4-3-3 se tornaram tão presentes e quando usar cada um.</p>
        </header>

        <div className="space-y-8 bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">4-4-2: duas linhas de 4</h2>
            <p className="text-dark-900/70 dark:text-light-100/70 mt-2">Segurança, compactação e simplicidade de coberturas. Ideal para equilibrar sem bola e atacar por fora com extremos e laterais em dobradinhas. Riscos: pouca presença entre linhas e previsibilidade por cruzamentos.</p>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 mt-2">
              <li>Vantagens: controle de espaços, disciplina posicional, transições claras.</li>
              <li>Desvantagens: criação limitada por dentro, 10 sem zona natural.</li>
              <li>KPIs: altura das linhas, cruzamentos úteis, recuperações laterais.</li>
            </ul>
            <p className="text-dark-900/70 dark:text-light-100/70 mt-2">Exemplo: Atlético de Madrid (era Simeone) em blocos médios/baixos com 4-4-2 compacto e ataques rápidos.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">4-2-3-1: equilíbrio moderno</h2>
            <p className="text-dark-900/70 dark:text-light-100/70 mt-2">O desenho mais popular na última década. Dois volantes para coberturas e um 10 entre linhas para criar. Varia facilmente para 4-4-2 sem bola e 2-3-5 com laterais por dentro.</p>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 mt-2">
              <li>Vantagens: flexibilidade, proteção central, apoio ao 9 e extremos.</li>
              <li>Desvantagens: risco de isolar o 9 se 10 não conecta; transição exige coordenação.</li>
              <li>KPIs: recepções do 10 em meia-espaço, apoios do 8, coberturas do 6.</li>
            </ul>
            <p className="text-dark-900/70 dark:text-light-100/70 mt-2">Exemplo: Alemanha 2014 e vários times europeus com 10 móvel e extremos equilibrando amplitude.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">4-3-3: jogo posicional</h2>
            <p className="text-dark-900/70 dark:text-light-100/70 mt-2">Agressividade por amplitude e meia-espaço. Dois interiores dão ritmo e o 6 organiza coberturas. Exige coordenação em transição para não sofrer em corredor central.</p>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 mt-2">
              <li>Vantagens: ocupação de zonas críticas, circulação e superioridade por dentro.</li>
              <li>Desvantagens: expõe transições se laterais sobem sem coberturas.</li>
              <li>KPIs: ações em meia-espaço, inversões, progressões do 6/interiores.</li>
            </ul>
            <p className="text-dark-900/70 dark:text-light-100/70 mt-2">Exemplos: Barcelona (Guardiola) e Manchester City (Guardiola) dominando meia-espaço e alternando laterais por dentro/fora.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">Exercício prático</h2>
            <p className="text-dark-900/70 dark:text-light-100/70 mt-2">Em 20 minutos de jogo, identifique o desenho sem bola e com bola. Registre 10 eventos de criação e classifique se nascem por fora ou por dentro. Ajuste mentalmente peças para variar a origem.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">Checklist</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 mt-2">
              <li>Há ocupação de meia-espaço quando necessário?</li>
              <li>Amplitude consistente ou alternância por contexto?</li>
              <li>Proteção central nas transições e coberturas coordenadas?</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">Exercício extra</h2>
            <p className="text-dark-900/70 dark:text-light-100/70 mt-2">Em 15 minutos, identifique 6 momentos em que o time alterna entre 4-4-2 sem bola e variações com bola (2-3-5 ou 3-2-5). Marque quem entra na base de 3 e quem ocupa meia-espaço.</p>
            <details className="mt-3">
              <summary className="inline-flex px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white cursor-pointer select-none">Mostrar respostas</summary>
              <div className="mt-3 space-y-2 text-dark-900/70 dark:text-light-100/70">
                <p>Indícios comuns:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Lateral invertido formando linha de 3 e interior ocupando meia-espaço.</li>
                  <li>6 afundando entre zagueiros para saída curta e proteção central.</li>
                  <li>Extremos garantindo amplitude enquanto 10 alterna apoio entre linhas.</li>
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
                <Link href="/conteudos/guias/interpretando-probabilidades-e-odds" className="text-purple-700 dark:text-purple-400 hover:underline">Interpretando Probabilidades e Odds</Link>
              </li>
              <li>
                <Link href="/conteudos/guias/mercados-over-under-gols" className="text-purple-700 dark:text-purple-400 hover:underline">Mercados Over/Under de Gols</Link>
              </li>
            </ul>
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
                const currentSlug = 'modulo-1-historia-dos-numeros';
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
              <Link href="/conteudos/cursos/geometria-tatica-formacoes-basicas-no-futebol/modulo-2-sistemas-com-3-zagueiros" className="inline-flex px-3 py-2 rounded-md bg-light-200 dark:bg-dark-700 text-sm text-dark-900 dark:text-light-100">Módulo 2</Link>
              <Link href="/conteudos/cursos/geometria-tatica-formacoes-basicas-no-futebol/modulo-3-jogo-dinamico" className="inline-flex px-3 py-2 rounded-md bg-light-200 dark:bg-dark-700 text-sm text-dark-900 dark:text-light-100">Módulo 3</Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
