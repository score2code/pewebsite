import Link from 'next/link';
import Breadcrumb from '@/app/components/ui/breadcrumb';
import { buildArticleJsonLd } from '@/app/lib/jsonld';
import { generateCourseMetadata } from '@/app/utils/metadata';

export const metadata = generateCourseMetadata({
  title: 'Módulo 1 - Goleiros e Defensores',
  description: 'Funções modernas de goleiros, zagueiros e laterais na saída, construção e proteção.',
  path: 'raio-x-das-posicoes-no-futebol/modulo-1-goleiros-defensores',
});

export default function Modulo1Page() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://palpitesdodia.online';
  const jsonLd = buildArticleJsonLd({
    url: `${siteUrl}/conteudos/cursos/raio-x-das-posicoes-no-futebol/modulo-1-goleiros-defensores`,
    title: 'Módulo 1 - Goleiros e Defensores',
    description: 'Funções modernas de goleiros, zagueiros e laterais na saída, construção e proteção.',
  });
  return (
    <div className="min-h-screen pt-10 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <Breadcrumb className="mb-4" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <h1 className="text-3xl font-bold text-dark-900 dark:text-light-100">Goleiros e Defensores</h1>
          <p className="text-dark-900/70 dark:text-light-100/70 mt-2">O Goleiro-Líbero, perfis de zagueiros e variações de laterais.</p>
        </header>

        <div className="space-y-8 bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">O Goleiro-Líbero</h2>
            <p className="text-dark-900/70 dark:text-light-100/70 mt-2">Joga adiantado para controlar profundidade e iniciar a posse com qualidade. Em equipes de pressão alta, precisa alinhar tempo de saída e leitura de bolas nas costas para neutralizar lançamentos. Com bola, oferece linha de passe para atrair primeira pressão e liberar zagueiros/volantes na construção.</p>
            <p className="text-dark-900/70 dark:text-light-100/70">Exige bom jogo de pés, decisão rápida e comunicação constante com a linha defensiva. A função reduz bolas longas adversárias e permite saída curta mesmo sob pressão. Em contextos de vantagem, regula ritmo e acelera/retarda reposições conforme plano de jogo.</p>
            <p className="text-dark-900/70 dark:text-light-100/70">Indicadores: mapa de ações fora da área, acerto de passes sob pressão, reposições curtas versus longas e coordenação de coberturas em transições.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">KPIs por função</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 mt-2">
              <li>Goleiro-líbero: ações fora da área, passes sob pressão, reposições curtas.</li>
              <li>Zagueiro construtor: conduções progressivas, passes entre linhas, inversões bem-sucedidas.</li>
              <li>Zagueiro rebatedor: cortes, duelos aéreos vencidos, alívios em zonas críticas.</li>
              <li>Lateral clássico: cruzamentos eficazes, recebimentos em amplitude, dobradinhas.</li>
              <li>Lateral invertido: passes por dentro, coberturas ao meio, superioridade criada.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">Erros comuns e correções</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 mt-2">
              <li>Saída forçada pelo centro sem apoio: abrir lateral clássico e recuar 5 para triângulo.</li>
              <li>Buracos em transição após lateral invertido: coordenar coberturas com 8 e zagueiro.</li>
              <li>Excesso de bolas diretas do rebatedor: oferecer apoio curto do 5 e interior.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">Exercício prático</h2>
            <p className="text-dark-900/70 dark:text-light-100/70 mt-2">Assista 20 minutos de jogo e mapeie 10 eventos da primeira fase de construção. Classifique por função e avalie se o plano (curto/longo, amplitude/interior) está coerente com os perfis em campo.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">Estudo de caso</h2>
            <p className="text-dark-900/70 dark:text-light-100/70 mt-2">Equipe com laterais invertidos e extremos construtores domina por dentro, mas sofre por fora. Ajuste: extremo de pé natural em um lado e zagueiro rebatedor no corredor mais atacado para reduzir cruzamentos adversários.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">Zagueiro Rebatedor x Construtor</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 mt-2">
              <li>Rebatedor: domínio de bolas aéreas, cortes rápidos, simplicidade na primeira bola.</li>
              <li>Construtor: condução, passe entre linhas, inversões e leitura de pressão.</li>
            </ul>
            <p className="text-dark-900/70 dark:text-light-100/70 mt-2">O rebatedor estabiliza áreas críticas e reduz risco perto da área, ideal em cenários de cruzamentos e ataques diretos. O construtor progride sob pressão, quebra linhas com condução e encontra interiores/laterais invertidos, acelerando a saída.</p>
            <p className="text-dark-900/70 dark:text-light-100/70">Combinações eficientes: dupla mista com um construtor e um rebatedor equilibra progressão e segurança. Ajuste de coberturas do volante e posicionamento dos laterais determina se a equipe pode manter saída curta sem expor o corredor central.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">Laterais: clássico x invertido</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 mt-2">
              <li>Clássico: amplitude, cruzamentos e dobradinhas com o extremo.</li>
              <li>Invertido: arma por dentro, criação de superioridade, cobertura do meio.</li>
            </ul>
            <p className="text-dark-900/70 dark:text-light-100/70 mt-2">O lateral clássico fixa amplitude, atrai o marcador e oferece cruzamentos de zonas favoráveis. O invertido fecha por dentro para formar superioridade com volantes e interiores, protegendo transições e facilitando saídas sob pressão.</p>
            <p className="text-dark-900/70 dark:text-light-100/70">Escolha depende do perfil dos extremos e do 9. Extremos de pé trocado pedem laterais clássicos para abrir o campo; extremos construtores funcionam melhor com laterais invertidos para dominar meia-espaço.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">Sinais para análise</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 mt-2">
              <li>Saída sob pressão: quantas vezes a equipe progride pela primeira linha.</li>
              <li>Controle de profundidade: distância média do goleiro à última linha.</li>
              <li>Uso de amplitude: cruzamentos versus ataques por dentro.</li>
              <li>Transições defensivas: número e qualidade de coberturas rápidas.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">Exercício extra</h2>
            <p className="text-dark-900/70 dark:text-light-100/70 mt-2">Em 12 saídas sob pressão, registre quem oferece a linha de passe segura e como o 5 e os laterais corrigem o primeiro passe. Classifique sucesso por progressão ou reinício.</p>
            <details className="mt-3">
              <summary className="inline-flex px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white cursor-pointer select-none">Mostrar respostas</summary>
              <div className="mt-3 space-y-2 text-dark-900/70 dark:text-light-100/70">
                <p>Padrões esperados:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Goleiro-líbero oferece apoio e atrai pressão para liberar zagueiro/5.</li>
                  <li>5 triangula com lateral/zagueiro para quebrar primeira linha.</li>
                  <li>Lateral clássico dá amplitude e reinício quando centro está bloqueado.</li>
                </ul>
              </div>
            </details>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">Exemplos de jogadores</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 mt-2">
              <li>Goleiro-líbero: Manuel Neuer, Ederson.</li>
              <li>Zagueiro construtor: John Stones, Gerard Piqué, Lisandro Martínez.</li>
              <li>Zagueiro rebatedor: Giorgio Chiellini, Pepe.</li>
              <li>Lateral clássico: Dani Alves, Marcelo.</li>
              <li>Lateral invertido: João Cancelo, Oleksandr Zinchenko.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">Leituras relacionadas</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 mt-2">
              <li>
                <Link href="/conteudos/guias/analise-de-confrontos-diretos" className="text-purple-700 dark:text-purple-400 hover:underline">Análise de Confrontos Diretos</Link>
              </li>
              <li>
                <Link href="/conteudos/guias/peculiaridades-brasileirao" className="text-purple-700 dark:text-purple-400 hover:underline">Peculiaridades do Brasileirão</Link>
              </li>
              <li>
                <Link href="/conteudos/guias/analise-por-periodo" className="text-purple-700 dark:text-purple-400 hover:underline">Análise por Período</Link>
              </li>
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
                const currentSlug = 'modulo-1-goleiros-defensores';
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
              <Link href="/conteudos/cursos/raio-x-das-posicoes-no-futebol/modulo-2-meio-campo" className="inline-flex px-3 py-2 rounded-md bg-light-200 dark:bg-dark-700 text-sm text-dark-900 dark:text-light-100">Módulo 2</Link>
              <Link href="/conteudos/cursos/raio-x-das-posicoes-no-futebol/modulo-3-ataque-moderno" className="inline-flex px-3 py-2 rounded-md bg-light-200 dark:bg-dark-700 text-sm text-dark-900 dark:text-light-100">Módulo 3</Link>
              <Link href="/conteudos/cursos/raio-x-das-posicoes-no-futebol/modulo-4-pes-trocados" className="inline-flex px-3 py-2 rounded-md bg-light-200 dark:bg-dark-700 text-sm text-dark-900 dark:text-light-100">Módulo 4</Link>
              <Link href="/conteudos/cursos/raio-x-das-posicoes-no-futebol/modulo-5-montando-11-ideal" className="inline-flex px-3 py-2 rounded-md bg-light-200 dark:bg-dark-700 text-sm text-dark-900 dark:text-light-100">Módulo 5</Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
