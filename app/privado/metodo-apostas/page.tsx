import type { Metadata } from 'next';
import Breadcrumb from '@/app/components/ui/breadcrumb';

export const metadata: Metadata = {
  title: 'Método de Apostas (Privado)',
  description: 'Plano semanal avançado para cumprir rollover',
  robots: { index: false, follow: false },
};

export default function MetodoApostasPrivadoPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <Breadcrumb className="mb-4" />

        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 md:p-8 mb-6 md:mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <h1 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-light-100 mb-2">Plano Semanal Avançado para Cumprir Rollover</h1>
          <p className="text-base md:text-lg text-dark-900/70 dark:text-light-100/70">Página privada, fora do menu e não indexável por buscadores.</p>
        </header>

        <div className="space-y-8">
          <section className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 border border-light-300 dark:border-dark-600">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              <div className="rounded-lg border border-light-300 dark:border-dark-600 p-4">
                <div className="text-sm text-dark-900/70 dark:text-light-100/70">Stake fixa</div>
                <div className="text-xl font-bold text-dark-900 dark:text-light-100">R$ 30</div>
              </div>
              <div className="rounded-lg border border-light-300 dark:border-dark-600 p-4">
                <div className="text-sm text-dark-900/70 dark:text-light-100/70">Odds alvo</div>
                <div className="text-xl font-bold text-dark-900 dark:text-light-100">1.18 a 1.30</div>
              </div>
              <div className="rounded-lg border border-light-300 dark:border-dark-600 p-4">
                <div className="text-sm text-dark-900/70 dark:text-light-100/70">Mercados</div>
                <div className="text-sm text-dark-900 dark:text-light-100">Dupla Chance (DC)</div>
                <div className="text-sm text-dark-900 dark:text-light-100">Handicap Asiático +2.5 / +3.0</div>
              </div>
              <div className="rounded-lg border border-light-300 dark:border-dark-600 p-4">
                <div className="text-sm text-dark-900/70 dark:text-light-100/70">Meta diária</div>
                <div className="text-xl font-bold text-dark-900 dark:text-light-100">R$ 120</div>
              </div>
              <div className="rounded-lg border border-light-300 dark:border-dark-600 p-4">
                <div className="text-sm text-dark-900/70 dark:text-light-100/70">Meta semanal</div>
                <div className="text-xl font-bold text-dark-900 dark:text-light-100">R$ 900 a R$ 1.050</div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">1. Ligas Recomendadas por Dia</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-lg border border-light-300 dark:border-dark-600 p-4">
                <h3 className="text-lg font-semibold text-dark-900 dark:text-light-100">Segunda-feira – Ligas menores</h3>
                <ul className="list-disc ml-5 text-dark-900/90 dark:text-light-100/90">
                  <li>Japão J2</li>
                  <li>Coreia K1/K2</li>
                  <li>Sérvia</li>
                  <li>Bulgária</li>
                  <li>Romênia</li>
                  <li>Dinamarca 1ª Divisão</li>
                </ul>
                <div className="mt-2 text-sm text-dark-900/70 dark:text-light-100/70">Foco: Handicap +2.5 ou +3.0</div>
              </div>
              <div className="rounded-lg border border-light-300 dark:border-dark-600 p-4">
                <h3 className="text-lg font-semibold text-dark-900 dark:text-light-100">Terça-feira – Ligas intermediárias</h3>
                <ul className="list-disc ml-5 text-dark-900/90 dark:text-light-100/90">
                  <li>Championship (Inglaterra)</li>
                  <li>Serie B (Itália)</li>
                  <li>Ligue 2 (França)</li>
                  <li>La Liga 2 (Espanha)</li>
                </ul>
                <div className="mt-2 text-sm text-dark-900/70 dark:text-light-100/70">Foco: DC 1X ou X2</div>
              </div>
              <div className="rounded-lg border border-light-300 dark:border-dark-600 p-4">
                <h3 className="text-lg font-semibold text-dark-900 dark:text-light-100">Quarta-feira – Melhores jogos</h3>
                <ul className="list-disc ml-5 text-dark-900/90 dark:text-light-100/90">
                  <li>Alemanha</li>
                  <li>Itália</li>
                  <li>França</li>
                  <li>Inglaterra</li>
                  <li>Espanha</li>
                </ul>
                <div className="mt-2 text-sm text-dark-900/70 dark:text-light-100/70">Foco: DC 1X (favoritos em casa) e HA +2.5 (jogos equilibrados)</div>
              </div>
              <div className="rounded-lg border border-light-300 dark:border-dark-600 p-4">
                <h3 className="text-lg font-semibold text-dark-900 dark:text-light-100">Quinta-feira – Dia fraco</h3>
                <ul className="list-disc ml-5 text-dark-900/90 dark:text-light-100/90">
                  <li>Turquia</li>
                  <li>Bélgica</li>
                  <li>Grécia</li>
                  <li>Países Baixos</li>
                </ul>
                <div className="mt-2 text-sm text-dark-900/70 dark:text-light-100/70">Foco: HA +3.0 e DC 12 (jogos equilibrados)</div>
              </div>
              <div className="rounded-lg border border-light-300 dark:border-dark-600 p-4">
                <h3 className="text-lg font-semibold text-dark-900 dark:text-light-100">Sexta-feira – Principais ligas</h3>
                <ul className="list-disc ml-5 text-dark-900/90 dark:text-light-100/90">
                  <li>Bundesliga</li>
                  <li>Ligue 1</li>
                  <li>Eredivisie</li>
                  <li>Serie A</li>
                  <li>Primeira Liga</li>
                </ul>
                <div className="mt-2 text-sm text-dark-900/70 dark:text-light-100/70">Foco: DC 1X em favoritos médios. Evitar: PSG, Bayern, Benfica</div>
              </div>
              <div className="rounded-lg border border-light-300 dark:border-dark-600 p-4">
                <h3 className="text-lg font-semibold text-dark-900 dark:text-light-100">Sábado – Principal dia</h3>
                <ul className="list-disc ml-5 text-dark-900/90 dark:text-light-100/90">
                  <li>Premier League</li>
                  <li>La Liga</li>
                  <li>Bundesliga</li>
                  <li>Serie A</li>
                  <li>Ligue 1</li>
                </ul>
                <div className="mt-2 text-sm text-dark-900/70 dark:text-light-100/70">Foco: 70% DC e 30% Handicap seguro</div>
              </div>
              <div className="rounded-lg border border-light-300 dark:border-dark-600 p-4">
                <h3 className="text-lg font-semibold text-dark-900 dark:text-light-100">Domingo – Dia perigoso</h3>
                <ul className="list-disc ml-5 text-dark-900/90 dark:text-light-100/90">
                  <li>Dinamarca</li>
                  <li>Suécia</li>
                  <li>Islândia</li>
                  <li>França</li>
                  <li>Alemanha</li>
                </ul>
                <div className="mt-2 text-sm text-dark-900/70 dark:text-light-100/70">Foco: Apenas Handicap +3.0</div>
              </div>
            </div>
          </section>

          <section className="rounded-lg border border-light-300 dark:border-dark-600 p-6">
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100 mb-3">2. Quantidade Exata de Apostas por Dia</h2>
            <ul className="list-disc ml-5 text-dark-900/90 dark:text-light-100/90 space-y-1">
              <li>Segunda: 4 apostas → todas Handicap</li>
              <li>Terça: 4 apostas → todas DC</li>
              <li>Quarta: 5 apostas → 3 DC / 2 HA</li>
              <li>Quinta: 4 apostas → 2 DC 12 / 2 HA</li>
              <li>Sexta: 5 apostas → 4 DC / 1 HA</li>
              <li>Sábado: 6–7 apostas → 4 DC / 2–3 HA</li>
              <li>Domingo: 5 apostas → todas HA +3.0</li>
            </ul>
          </section>

          <section className="rounded-lg border border-light-300 dark:border-dark-600 p-6">
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100 mb-3">3. Checklist Obrigatório</h2>
            <h3 className="text-lg font-semibold text-dark-900 dark:text-light-100">Para Dupla Chance</h3>
            <ul className="list-disc ml-5 text-dark-900/90 dark:text-light-100/90 space-y-1">
              <li>Favorito em casa</li>
              <li>Time completo (sem &gt;5 desfalques)</li>
              <li>Melhor forma nos últimos 5 jogos</li>
              <li>Motivação real para o jogo</li>
              <li>Odd entre 1.18 e 1.30</li>
            </ul>
            <h3 className="text-lg font-semibold text-dark-900 dark:text-light-100 mt-4">Para Handicap +2.5 / +3.0</h3>
            <ul className="list-disc ml-5 text-dark-900/90 dark:text-light-100/90 space-y-1">
              <li>Liga under (baixa média de gols)</li>
              <li>Times que raramente tomam 4 gols</li>
              <li>Favorito não é goleador crônico</li>
              <li>Odd até 1.28</li>
            </ul>
            <div className="mt-3 text-sm text-red-700 dark:text-red-400">Se falhar qualquer item → NÃO apostar.</div>
          </section>

          <section className="rounded-lg border border-light-300 dark:border-dark-600 p-6">
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100 mb-3">4. Protocolo Pós-Red</h2>
            <ol className="list-decimal ml-5 text-dark-900/90 dark:text-light-100/90 space-y-1">
              <li>Manter stake de R$ 30 (nunca aumentar).</li>
              <li>Pular o próximo jogo instável — voltar apenas quando o checklist estiver limpo.</li>
              <li>Limite de reds por dia: 2 → parar imediatamente após o segundo.</li>
            </ol>
          </section>

          <section className="rounded-lg border border-light-300 dark:border-dark-600 p-6">
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100 mb-3">5. Modelo de Controle de Rollover</h2>
            <pre className="bg-light-200 dark:bg-dark-700 rounded p-4 text-sm overflow-x-auto"><code>{`Dia: Segunda
Apostas feitas: 4
Stake total: R$ 120
Mercados: HA +2.5 / +3.0
Odds usadas: 1.20–1.28
Resultado: 3 greens / 1 red
Volume acumulado: R$ 120
Volume restante: 3.420 - 120 = 3.300`}</code></pre>
            <div className="mt-2 text-dark-900/70 dark:text-light-100/70">Use esse modelo diariamente.</div>
          </section>

          <section className="rounded-lg border border-light-300 dark:border-dark-600 p-6">
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100 mb-3">6. Regras de Ouro</h2>
            <ul className="list-disc ml-5 text-dark-900/90 dark:text-light-100/90 space-y-1">
              <li>Nunca fazer múltiplas</li>
              <li>Nunca stake acima de R$ 40</li>
              <li>Evitar ligas malucas (Brasil, MLS, México)</li>
              <li>Apostar apenas em odds 1.18 a 1.30</li>
              <li>Trabalhar pouco e seguro — volume &gt; lucro</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

