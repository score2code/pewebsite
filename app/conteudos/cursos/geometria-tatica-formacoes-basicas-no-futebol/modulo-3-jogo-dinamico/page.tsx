import Link from 'next/link';
import Breadcrumb from '@/app/components/ui/breadcrumb';
import { buildArticleJsonLd } from '@/app/lib/jsonld';
import { generateCourseMetadata } from '@/app/utils/metadata';

export const metadata = generateCourseMetadata({
  title: 'Módulo 3 - O Jogo é Dinâmico',
  description: 'Como um time defende em 4-4-2 e ataca em 3-2-5: mecanismos, sinais e estudo de caso.',
  path: 'geometria-tatica-formacoes-basicas-no-futebol/modulo-3-jogo-dinamico',
});

export default function Modulo3GeometriaPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://palpitesdodia.online';
  const jsonLd = buildArticleJsonLd({
    url: `${siteUrl}/conteudos/cursos/geometria-tatica-formacoes-basicas-no-futebol/modulo-3-jogo-dinamico`,
    title: 'Módulo 3 - O Jogo é Dinâmico',
    description: 'Como um time defende em 4-4-2 e ataca em 3-2-5: mecanismos, sinais e estudo de caso.',
  });
  return (
    <div className="min-h-screen pt-10 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <Breadcrumb className="mb-4" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <h1 className="text-3xl font-bold text-dark-900 dark:text-light-100">O Jogo é Dinâmico</h1>
          <p className="text-dark-900/70 dark:text-light-100/70 mt-2">Defender em 4-4-2 e atacar em 3-2-5: por que e como o desenho muda entre fases.</p>
        </header>

        <div className="space-y-8 bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">Transições: 4-4-2 sem bola → 3-2-5 com bola</h2>
            <p className="text-dark-900/70 dark:text-light-100/70 mt-2">Sem bola, o 4-4-2 oferece duas linhas de quatro para proteger corredor central e guiar o adversário para fora. Com bola, muitas equipes transformam a estrutura em 3-2-5 para ocupar amplitude e meia-espaço com cinco na última linha, estabilizando transições com um trio de base.</p>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 mt-2">
              <li>Última linha de 3: lateral entra por dentro ou zagueiro conduz, formando 3 atrás.</li>
              <li>Dupla de meio (2): 6 + interior regulam ritmo e coberturas no corredor central.</li>
              <li>Linha de 5: extremos em amplitude, 9 fixa, interior em meia-espaço para ligações.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">Mecanismos de transformação</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 mt-2">
              <li>Lateral invertido: entra por dentro para formar o 3-2 na base e dar superioridade no meio.</li>
              <li>Zagueiro volante: conduz até meia-espaço (ex.: zagueiro direito avança como interior).</li>
              <li>6 afunda: posiciona-se entre zagueiros para saída limpa e cobertura de transições.</li>
              <li>Extremos alternam pé: um dá amplitude natural, outro ataca funil em pé trocado.</li>
              <li>9 ajusta função: referência para cruzamentos ou falso 9 para ligações por dentro.</li>
            </ul>
            <p className="text-dark-900/70 dark:text-light-100/70 mt-2">A escolha do mecanismo depende do perfil dos laterais/zagueiros e da estratégia contra o adversário. O importante é manter estabilidade defensiva (rest defense) com 2+1 na base para interromper contra-ataques.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">Case de sucesso</h2>
            <p className="text-dark-900/70 dark:text-light-100/70 mt-2">Manchester City (Guardiola) alternando: pressão sem bola muitas vezes em 4-4-2, e em posse estruturando 3-2-5 com lateral invertido ou zagueiro entrando no meio para criar superioridade. Interiores ocupam meia-espaço, extremos variam pé e o 9 ajusta presença entre fixação e ligações.</p>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 mt-2">
              <li>Sinais: lateral por dentro, zagueiro conduzindo e interior recebendo entre linhas.</li>
              <li>Benefícios: circulação rápida, ataques pelo funil e cobertura imediata na perda.</li>
              <li>Riscos: exposição em transição se amplitude sobe sem 2+1 organizado na base.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">Exercício prático</h2>
            <p className="text-dark-900/70 dark:text-light-100/70 mt-2">Observe 15 posses consecutivas. Classifique a estrutura sem bola (4-4-2) e com bola (3-2-5) e marque o mecanismo de transformação (lateral invertido, zagueiro volante, 6 afundando). Registre 8 eventos de criação e identifique se nasceram por amplitude, meia-espaço ou funil.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">Checklist</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 mt-2">
              <li>Há 2+1 na base para estabilizar transições?</li>
              <li>Meia-espaço é ocupado por pelo menos um interior?</li>
              <li>Amplitude consistente em ambos os lados para alongar a última linha?</li>
              <li>9 ajusta entre fixar zagueiros e ligar jogo por dentro?</li>
              <li>Laterais e zagueiros coordenam coberturas quando a posse perde?</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">KPIs e sinais</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 mt-2">
              <li>Ações em meia-espaço por interiores/lateral invertido.</li>
              <li>Recuperações imediatas após perda (rest defense funcionando).</li>
              <li>Inversões de corredor e ligações 6→interior→extremo.</li>
              <li>Progressões dos zagueiros e 6 sem comprometer cobertura.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">Exercício extra</h2>
            <p className="text-dark-900/70 dark:text-light-100/70 mt-2">Em 10 perdas de posse, avalie a estrutura de rest defense: conte quantos jogadores ficam na base (2+1) e se há pressão imediata no portador adversário.</p>
            <details className="mt-3">
              <summary className="inline-flex px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white cursor-pointer select-none">Mostrar respostas</summary>
              <div className="mt-3 space-y-2 text-dark-900/70 dark:text-light-100/70">
                <p>Respostas esperadas:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Base estável: 2 jogadores na última linha + 1 à frente para cobrir progressões.</li>
                  <li>Pressão pós-perda coordenada no lado da bola para recuperar ou atrasar ataque.</li>
                  <li>Extremos ajustam amplitude após perda para fechar linhas de passe diagonais.</li>
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
                <Link href="/conteudos/guias/estrategias-analises-ao-vivo" className="text-purple-700 dark:text-purple-400 hover:underline">Estratégias e análises ao vivo</Link>
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
                const currentSlug = 'modulo-3-jogo-dinamico';
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
              <Link href="/conteudos/cursos/geometria-tatica-formacoes-basicas-no-futebol/modulo-2-sistemas-com-3-zagueiros" className="inline-flex px-3 py-2 rounded-md bg-light-200 dark:bg-dark-700 text-sm text-dark-900 dark:text-light-100">Módulo 2</Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
