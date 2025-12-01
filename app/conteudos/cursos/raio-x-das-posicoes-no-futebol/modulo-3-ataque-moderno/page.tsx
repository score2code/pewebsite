import Link from 'next/link';
import Breadcrumb from '@/app/components/ui/breadcrumb';
import { buildArticleJsonLd } from '@/app/lib/jsonld';
import { generateCourseMetadata } from '@/app/utils/metadata';

export const metadata = generateCourseMetadata({
  title: 'Módulo 3 - O Ataque Moderno',
  description: 'Perfis de extremos e variações do camisa 9 no jogo atual.',
  path: 'raio-x-das-posicoes-no-futebol/modulo-3-ataque-moderno',
});

export default function Modulo3Page() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://palpitesdodia.online';
  const jsonLd = buildArticleJsonLd({
    url: `${siteUrl}/conteudos/cursos/raio-x-das-posicoes-no-futebol/modulo-3-ataque-moderno`,
    title: 'Módulo 3 - O Ataque Moderno',
    description: 'Perfis de extremos e variações do camisa 9 no jogo atual.',
  });
  return (
    <div className="min-h-screen pt-10 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <Breadcrumb className="mb-4" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <h1 className="text-3xl font-bold text-dark-900 dark:text-light-100">O Ataque Moderno</h1>
          <p className="text-dark-900/70 dark:text-light-100/70 mt-2">Extremos e o 9 em papéis complementares.</p>
        </header>

        <div className="space-y-8 bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">Extremos/Pontas</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 mt-2">
              <li>Driblador: 1v1, profundidade e desequilíbrio imediato.</li>
              <li>Construtor: criação por dentro, controle de posse e combinações.</li>
            </ul>
            <p className="text-dark-900/70 dark:text-light-100/70 mt-2">O driblador estica o campo, força coberturas e gera cruzamentos ou cortes para finalização. O construtor aproxima entre linhas, gira posse e ativa laterais por fora ou interiores em progressão.</p>
            <p className="text-dark-900/70 dark:text-light-100/70">A escolha depende da estratégia: contra blocos baixos, é útil combinar construtor em um lado e driblador no outro para variar gatilhos de desequilíbrio; contra transições rápidas, controlar posse por dentro protege a equipe.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">KPIs por função</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 mt-2">
              <li>Extremo driblador: ações 1v1, cruzamentos, rupturas atacando profundidade.</li>
              <li>Extremo construtor: passes entre linhas, combinações no meio, controle de posse.</li>
              <li>9 finalizador: toques na área, finalizações de alta qualidade, presença em cruzamentos.</li>
              <li>Falso 9: recepções entre linhas, ligações com meio, arrasto de zagueiros.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">Erros comuns e correções</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 mt-2">
              <li>Dois extremos construtores sem amplitude: abrir lateral clássico e alternar pé natural.</li>
              <li>9 isolado em cruzamentos: aproximar 10 e interior para atacar segunda bola.</li>
              <li>Previsibilidade por dentro: variar lado com driblador e inversões rápidas.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">Exercício prático</h2>
            <p className="text-dark-900/70 dark:text-light-100/70 mt-2">Analise 12 posses ofensivas e classifique a origem da chance: por fora (cruzamento) ou por dentro (meia-espaço). Ajuste a combinação de extremos e 9 para aumentar chances de qualidade.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">Estudo de caso</h2>
            <p className="text-dark-900/70 dark:text-light-100/70 mt-2">Time com dois extremos de pé trocado congestiona por dentro e perde amplitude. Correção: alternar um extremo de pé natural e ativar lateral clássico no lado oposto para reabrir corredor externo e variar origem de chances.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">Checklist</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 mt-2">
              <li>Há pelo menos uma fonte de amplitude consistente?</li>
              <li>9 participa da criação ou fixa referência conforme cenário?</li>
              <li>Extremos alternam pé e funções para evitar previsibilidade?</li>
              <li>Laterais complementam o plano por fora ou por dentro?</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">Exemplos de jogadores</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 mt-2">
              <li>Extremo driblador: Vinícius Júnior, Kylian Mbappé.</li>
              <li>Extremo construtor: Bernardo Silva, Riyad Mahrez.</li>
              <li>9 finalizador: Erling Haaland, Harry Kane.</li>
              <li>Falso 9: Roberto Firmino, Lionel Messi.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">Exercício extra</h2>
            <p className="text-dark-900/70 dark:text-light-100/70 mt-2">Escolha um lado e teste combinações: extremo driblador + lateral clássico vs. extremo construtor + lateral invertido. Em 8 ataques, classifique origem por fora vs. por dentro e qualidade das finalizações.</p>
            <details className="mt-3">
              <summary className="inline-flex px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white cursor-pointer select-none">Mostrar respostas</summary>
              <div className="mt-3 space-y-2 text-dark-900/70 dark:text-light-100/70">
                <p>Padrões esperados:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Driblador + clássico: mais cruzamentos e ataques ao fundo por fora.</li>
                  <li>Construtor + invertido: mais conexões pelo meio e finalizações do funil.</li>
                  <li>Qualidade aumenta quando 9 ajusta entre fixação e ligação conforme cenário.</li>
                </ul>
              </div>
            </details>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">Leituras relacionadas</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 mt-2">
              <li>
                <Link href="/conteudos/guias/guia-de-analise-de-escanteios" className="text-purple-700 dark:text-purple-400 hover:underline">Guia de Análise de Escanteios</Link>
              </li>
              <li>
                <Link href="/conteudos/guias/mercados-over-under-gols" className="text-purple-700 dark:text-purple-400 hover:underline">Mercados Over/Under de Gols</Link>
              </li>
              <li>
                <Link href="/conteudos/guias/estrategias-analises-ao-vivo" className="text-purple-700 dark:text-purple-400 hover:underline">Estratégias e análises ao vivo</Link>
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">Camisa 9</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 mt-2">
              <li>Finalizador de área: referência, ataque ao espaço e ocupação de zona de finalização.</li>
              <li>Falso 9: recuo para ligar jogo, atração de zagueiros e liberação de corredores.</li>
            </ul>
            <p className="text-dark-900/70 dark:text-light-100/70 mt-2">O finalizador fixa zagueiros e oferece presença em cruzamentos e bolas diretas. O falso 9 arrasta marcação, cria superioridade no meio e abre corredor para extremos atacarem espaço.</p>
            <p className="text-dark-900/70 dark:text-light-100/70">Sincronização com extremos e laterais define se o time vai produzir por fora ou por dentro. Perfis mistos podem variar a cada fase do jogo conforme plano e contexto de placar.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">Ajustes práticos</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 mt-2">
              <li>Contra blocos médios: extremos de pé trocado com laterais clássicos para finalizar por dentro.</li>
              <li>Contra pressão alta: falso 9 para atrair zagueiros e ativar ruptura dos extremos.</li>
              <li>Para controlar ritmo: extremo construtor de um lado e lateral invertido para superioridade.</li>
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
                const currentSlug = 'modulo-3-ataque-moderno';
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
              <Link href="/conteudos/cursos/raio-x-das-posicoes-no-futebol/modulo-4-pes-trocados" className="inline-flex px-3 py-2 rounded-md bg-light-200 dark:bg-dark-700 text-sm text-dark-900 dark:text-light-100">Módulo 4</Link>
              <Link href="/conteudos/cursos/raio-x-das-posicoes-no-futebol/modulo-5-montando-11-ideal" className="inline-flex px-3 py-2 rounded-md bg-light-200 dark:bg-dark-700 text-sm text-dark-900 dark:text-light-100">Módulo 5</Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
