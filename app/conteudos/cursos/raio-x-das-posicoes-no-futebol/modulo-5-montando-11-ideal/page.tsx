import Link from 'next/link';
import Breadcrumb from '@/app/components/ui/breadcrumb';
import { buildArticleJsonLd } from '@/app/lib/jsonld';
import { generateCourseMetadata } from '@/app/utils/metadata';

export const metadata = generateCourseMetadata({
  title: 'Módulo 5 - Montando seu 11 Ideal',
  description: 'Como combinar funções e evitar desequilíbrios estruturais ao montar seu time.',
  path: 'raio-x-das-posicoes-no-futebol/modulo-5-montando-11-ideal',
});

export default function Modulo5Page() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://palpitesdodia.online';
  const jsonLd = buildArticleJsonLd({
    url: `${siteUrl}/conteudos/cursos/raio-x-das-posicoes-no-futebol/modulo-5-montando-11-ideal`,
    title: 'Módulo 5 - Montando seu 11 Ideal',
    description: 'Como combinar funções e evitar desequilíbrios estruturais ao montar seu time.',
  });
  return (
    <div className="min-h-screen pt-10 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <Breadcrumb className="mb-4" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <h1 className="text-3xl font-bold text-dark-900 dark:text-light-100">Montando seu 11 Ideal</h1>
          <p className="text-dark-900/70 dark:text-light-100/70 mt-2">Exercício prático de combinação de funções sem deixar o time torto.</p>
        </header>

        <div className="space-y-8 bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">Princípios</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 mt-2">
              <li>Equilíbrio entre amplitude e interiorização.</li>
              <li>Proteção central e coberturas em transição.</li>
              <li>Definição de referência e criação por dentro.</li>
            </ul>
            <p className="text-dark-900/70 dark:text-light-100/70 mt-2">O desenho ideal nasce do encaixe entre funções e contextos. Em posse, a equipe precisa alternar mecanismos por fora e por dentro; sem bola, ajustar alturas e coberturas sem comprometer profundidade. O meio dita ritmo, a última linha regula risco.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">Modelos alternativos</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 mt-2">
              <li>Superioridade por dentro: laterais invertidos, extremos construtores e 9 falso.</li>
              <li>Produção por fora: laterais clássicos, extremo driblador e 9 referência.</li>
              <li>Transições fortes: 5 posicional, zagueiro rebatedor e extremos de profundidade.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">Exercício avançado</h2>
            <p className="text-dark-900/70 dark:text-light-100/70 mt-2">Monte dois desenhos alternáveis em jogo: um para bloco baixo adversário e outro para pressão alta. Defina gatilhos de troca (placar, minuto, sinais de desgaste) e ajuste funções sem substituições.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">Sinais de desequilíbrio</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 mt-2">
              <li>Perda de amplitude com extremos por dentro sem laterais clássicos.</li>
              <li>Transições sofridas após interiorizações sem coberturas do 5 e 8.</li>
              <li>9 isolado sem aproximação de 10 e interiores na área.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">Exercício</h2>
            <p className="text-dark-900/70 dark:text-light-100/70 mt-2">Monte um 11 equilibrado com laterais complementares, dupla de zaga compatível, meio com 5-8-10 e extremos adequados ao perfil do 9. Defina gatilhos de pressão, zonas de recuperação e mecanismos de saída sob pressão. Ajuste conforme adversário e placar.</p>
            <p className="text-dark-900/70 dark:text-light-100/70">Cenários práticos: contra bloco baixo, laterais clássicos com extremos de pé trocado; contra pressão alta, falso 9 para superioridade; em transições, 5 posicional e zagueiro rebatedor para proteger zona central.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">Exercício extra</h2>
            <p className="text-dark-900/70 dark:text-light-100/70 mt-2">Defina dois desenhos alternáveis em jogo e estabeleça gatilhos claros de troca (placar, minuto, pressão adversária). Simule 6 trocas e documente o impacto no controle de meio e na produção por fora/por dentro.</p>
            <details className="mt-3">
              <summary className="inline-flex px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white cursor-pointer select-none">Mostrar respostas</summary>
              <div className="mt-3 space-y-2 text-dark-900/70 dark:text-light-100/70">
                <p>Respostas esperadas:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Troca para 3-2-5 em posse melhora meia-espaço e rest defense.</li>
                  <li>Recuo para 4-4-2 sem bola estabiliza corredor central e guias para fora.</li>
                  <li>Gatilhos funcionam melhor combinando sinais de pressão e estado de placar.</li>
                </ul>
              </div>
            </details>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">Checklist final</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 mt-2">
              <li>Compatibilidade das duplas e trilhos de passe.</li>
              <li>Superioridade no meio sem perder amplitude.</li>
              <li>Mecanismos de transição e coberturas definidos.</li>
              <li>Plano de variação por contexto de jogo.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">Leituras relacionadas</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 mt-2">
              <li>
                <Link href="/conteudos/guias/interpretando-probabilidades-e-odds" className="text-purple-700 dark:text-purple-400 hover:underline">Interpretando Probabilidades e Odds</Link>
              </li>
              <li>
                <Link href="/conteudos/guias/mercados-over-under-gols" className="text-purple-700 dark:text-purple-400 hover:underline">Mercados Over/Under de Gols</Link>
              </li>
              <li>
                <Link href="/conteudos/guias/analise-por-periodo" className="text-purple-700 dark:text-purple-400 hover:underline">Análise por Período</Link>
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">Exemplos de jogadores</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 mt-2">
              <li>Superioridade por dentro: João Cancelo, Oleksandr Zinchenko, Bernardo Silva, Kevin De Bruyne, falso 9.</li>
              <li>Produção por fora: Trent Alexander-Arnold, Jordi Alba, Vinícius Júnior, Mohamed Salah, 9 referência (Harry Kane/Erling Haaland).</li>
              <li>Transições fortes: Casemiro, Pepe, Federico Valverde, extremos de profundidade (Kylian Mbappé/Vinícius Júnior).</li>
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
                const currentSlug = 'modulo-5-montando-11-ideal';
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
              <Link href="/conteudos/cursos/raio-x-das-posicoes-no-futebol/modulo-4-pes-trocados" className="inline-flex px-3 py-2 rounded-md bg-light-200 dark:bg-dark-700 text-sm text-dark-900 dark:text-light-100">Módulo 4</Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
