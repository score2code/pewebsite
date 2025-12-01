import Link from 'next/link';
import Breadcrumb from '@/app/components/ui/breadcrumb';
import { buildArticleJsonLd } from '@/app/lib/jsonld';
import { generateCourseMetadata } from '@/app/utils/metadata';

export const metadata = generateCourseMetadata({
  title: 'Módulo 2 - O Coração do Time (Meio-Campo)',
  description: 'Funções do 5, 8 e 10 no equilíbrio, progressão e criação.',
  path: 'raio-x-das-posicoes-no-futebol/modulo-2-meio-campo',
});

export default function Modulo2Page() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://palpitesdodia.online';
  const jsonLd = buildArticleJsonLd({
    url: `${siteUrl}/conteudos/cursos/raio-x-das-posicoes-no-futebol/modulo-2-meio-campo`,
    title: 'Módulo 2 - O Coração do Time (Meio-Campo)',
    description: 'Funções do 5, 8 e 10 no equilíbrio, progressão e criação.',
  });
  return (
    <div className="min-h-screen pt-10 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <Breadcrumb className="mb-4" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <h1 className="text-3xl font-bold text-dark-900 dark:text-light-100">O Coração do Time</h1>
          <p className="text-dark-900/70 dark:text-light-100/70 mt-2">O 5, o 8 e o 10 em funções complementares.</p>
        </header>

        <div className="space-y-8 bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">O 5</h2>
            <p className="text-dark-900/70 dark:text-light-100/70 mt-2">Âncora defensiva que protege zona central, faz coberturas laterais e regula transições. Em posse, posiciona-se para oferecer apoio e segurança à saída, ajustando corpo para receber sob pressão e devolver ritmo.</p>
            <p className="text-dark-900/70 dark:text-light-100/70">Fundamentais: leitura de jogo, tempo de desarme, orientação corporal e passe de segurança/progressão curta. Em jogos de alta pressão, determina se a equipe pode manter saída curta sem expor corredores.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">KPIs por função</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 mt-2">
              <li>5: coberturas bem-sucedidas, recuperações no corredor central, passes de segurança.</li>
              <li>8: chegadas à área, apoios entre linhas, conduções progressivas.</li>
              <li>10: recepções em meia-espaço, passes-chave, pressão pós-perda.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">Erros comuns e correções</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 mt-2">
              <li>10 muito baixo para receber: fixar entre linhas e alternar lado de apoio.</li>
              <li>8 sem coordenação com lateral invertido: separar alturas e criar triângulos.</li>
              <li>5 exposto em transição: ajustar posicionamento dos zagueiros e do 8 na perda.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">Exercício prático</h2>
            <p className="text-dark-900/70 dark:text-light-100/70 mt-2">Em 15 minutos, registre 8 interações entre 5-8-10. Classifique como apoio, ruptura ou criação. Avalie se o trio gera superioridade no meio sem perder amplitude.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">Estudo de caso</h2>
            <p className="text-dark-900/70 dark:text-light-100/70 mt-2">Contra bloco baixo, 10 interior e lateral clássico oferecem cruzamentos; ajuste: 8 corredor alterna chegada e proteção para evitar transições perigosas.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">O 8</h2>
            <p className="text-dark-900/70 dark:text-light-100/70 mt-2">Pulmão da equipe. Conecta fases, chega à área e volta para proteger. Em transições, é o primeiro a acelerar ou estabilizar o ritmo conforme contexto e plano.</p>
            <p className="text-dark-900/70 dark:text-light-100/70">Perfis: corredor de chegada para atacar espaço e finalizar; construtor dinâmico que gira posse e encontra interiores; híbrido que alterna apoio e ruptura. A compatibilidade com 5 e 10 define o balanço tático.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">O 10</h2>
            <p className="text-dark-900/70 dark:text-light-100/70 mt-2">Criador que recebe entre linhas, acelera combinação e define última bola. No modelo moderno, pode atuar como interior, segundo atacante ou meia de apoio para pressionar a saída adversária.</p>
            <p className="text-dark-900/70 dark:text-light-100/70">Chaves: ocupação de meia-espaço, variação de zona de recepção, sincronização com extremos e 9, e trabalho sem bola para pressionar gatilhos de saída rival.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">Combinações</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 mt-2">
              <li>5 posicional + 8 corredor + 10 criador: domínio de meio e chegada em área.</li>
              <li>5 híbrido + 8 construtor + 10 interior: controle de posse e pressão coordenada.</li>
              <li>Ajustes com laterais invertidos para superioridade no centro e proteção de transições.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">Exercício extra</h2>
            <p className="text-dark-900/70 dark:text-light-100/70 mt-2">Em 10 sequências, identifique triângulos funcionais envolvendo 5-8-10 e um lateral. Classifique cada sequência como apoio, ruptura ou criação entre linhas.</p>
            <details className="mt-3">
              <summary className="inline-flex px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white cursor-pointer select-none">Mostrar respostas</summary>
              <div className="mt-3 space-y-2 text-dark-900/70 dark:text-light-100/70">
                <p>Respostas esperadas:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Apoio: 5 fixa atrás, 8 aproxima, 10 recebe entre linhas para girar posse.</li>
                  <li>Ruptura: 8 ataca espaço após passe do 10; lateral oferece amplitude.</li>
                  <li>Criação: 10 encontra meia-espaço, combina com 8 e ativa extremo/9.</li>
                </ul>
              </div>
            </details>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">Exemplos de jogadores</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 mt-2">
              <li>5: Sergio Busquets, Rodri, Casemiro.</li>
              <li>8: Kevin De Bruyne, Federico Valverde, Jude Bellingham.</li>
              <li>10: Lionel Messi, Bruno Fernandes, Neymar.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">Leituras relacionadas</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 mt-2">
              <li>
                <Link href="/conteudos/guias/como-identificar-valor-nas-odds" className="text-purple-700 dark:text-purple-400 hover:underline">Como Identificar Valor nas Odds</Link>
              </li>
              <li>
                <Link href="/conteudos/guias/impacto-de-lesoes-e-suspensoes" className="text-purple-700 dark:text-purple-400 hover:underline">Impacto de Lesões e Suspensões</Link>
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
                const currentSlug = 'modulo-2-meio-campo';
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
