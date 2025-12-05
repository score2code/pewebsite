import type { Metadata } from 'next';
import Breadcrumb from '@/app/components/ui/breadcrumb';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Método Trader (Privado)',
  description: 'Operações orientadas a mercado e gestão ativa de risco',
  robots: { index: false, follow: false },
};

export default function MetodoTraderPrivadoPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <Breadcrumb className="mb-4" />

        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 md:p-8 mb-6 md:mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <h1 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-light-100 mb-2">Método Trader</h1>
          <p className="text-base md:text-lg text-dark-900/70 dark:text-light-100/70">Banca menor que o Salary, sem meta fixa diária. Operações ao vivo em CS (Correct Score) usando exchange.</p>
          <div className="mt-3">
            <Link href="/privado/backlog" className="text-sm inline-flex items-center gap-1 text-purple-700 dark:text-purple-400">Abrir Backlog →</Link>
          </div>
        </header>

        <div className="space-y-8">
          <section className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 border border-light-300 dark:border-dark-600">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              <div className="rounded-lg border border-light-300 dark:border-dark-600 p-4">
                <div className="text-sm text-dark-900/70 dark:text-light-100/70">Stake base</div>
                <div className="text-xl font-bold text-dark-900 dark:text-light-100">R$ 10–20</div>
              </div>
              <div className="rounded-lg border border-light-300 dark:border-dark-600 p-4">
                <div className="text-sm text-dark-900/70 dark:text-light-100/70">Alocação por operação</div>
                <div className="text-xl font-bold text-dark-900 dark:text-light-100">1–3 stakes</div>
              </div>
              <div className="rounded-lg border border-light-300 dark:border-dark-600 p-4">
                <div className="text-sm text-dark-900/70 dark:text-light-100/70">Mercados</div>
                <div className="text-sm text-dark-900 dark:text-light-100">CS (Correct Score) — Exchange — Ao vivo</div>
                <div className="text-xs text-dark-900/70 dark:text-light-100/70 mt-1">Padrões: 1×2/2×1, 3×1 casa favorito, lay 0×1</div>
              </div>
              <div className="rounded-lg border border-light-300 dark:border-dark-600 p-4">
                <div className="text-sm text-dark-900/70 dark:text-light-100/70">Risk stop</div>
                <div className="text-xl font-bold text-dark-900 dark:text-light-100">2 reds/dia</div>
              </div>
              <div className="rounded-lg border border-light-300 dark:border-dark-600 p-4">
                <div className="text-sm text-dark-900/70 dark:text-light-100/70">Liquidez mínima</div>
                <div className="text-xl font-bold text-dark-900 dark:text-light-100">Alta (top ligas)</div>
              </div>
            </div>
          </section>

          <section className="rounded-lg border border-light-300 dark:border-dark-600 p-6 space-y-6">
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">1. Setup de Entrada (CS Live)</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-lg border border-light-300 dark:border-dark-600 p-4">
                <h3 className="text-lg font-semibold text-dark-900 dark:text-light-100">Lay do placar atual</h3>
                <ul className="list-disc ml-5 text-dark-900/90 dark:text-light-100/90 space-y-1">
                  <li>Janela 55'–75' com jogo aberto</li>
                  <li>Pressão/volume ofensivo consistente (chutes, escanteios, ataques perigosos)</li>
                  <li>Sem cartões vermelhos que distorçam o ritmo</li>
                  <li>Odd com liquidez adequada</li>
                </ul>
              </div>
              <div className="rounded-lg border border-light-300 dark:border-dark-600 p-4">
                <h3 className="text-lg font-semibold text-dark-900 dark:text-light-100">Hedge/Fechamento</h3>
                <ul className="list-disc ml-5 text-dark-900/90 dark:text-light-100/90 space-y-1">
                  <li>Take profit: 15–30% sobre a posição</li>
                  <li>Stop loss: -20% com saída técnica</li>
                  <li>Hedge parcial ao sofrer pressão contrária</li>
                </ul>
              </div>
              <div className="rounded-lg border border-light-300 dark:border-dark-600 p-4">
                <h3 className="text-lg font-semibold text-dark-900 dark:text-light-100">Padrões CS</h3>
                <ul className="list-disc ml-5 text-dark-900/90 dark:text-light-100/90 space-y-1">
                  <li>Cruzado 1×2 ou 2×1: jogo aberto, favorito leve, liquidez</li>
                  <li>3×1 casa favorito: vantagem técnica e pressão constante</li>
                  <li>Lay 0×1: janela 5'–35' com mandante favorito pressionando</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-lg border border-light-300 dark:border-dark-600 p-6">
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100 mb-3">2. Agenda e Janelas</h2>
            <ul className="list-disc ml-5 text-dark-900/90 dark:text-light-100/90 space-y-1">
              <li>0'–15': observar ritmo e liquidez</li>
              <li>5'–35': padrão lay 0×1 se mandante favorito pressiona</li>
              <li>15'–30': evitar entradas precipitadas</li>
              <li>HT–60': início de monitoramento ativo</li>
              <li>60'–75': janela principal de operações</li>
              <li>75'–90': operar com parcimônia; foco em hedge</li>
            </ul>
          </section>

          <section className="rounded-lg border border-light-300 dark:border-dark-600 p-6">
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100 mb-3">3. Gestão de Risco</h2>
            <ul className="list-disc ml-5 text-dark-900/90 dark:text-light-100/90 space-y-1">
              <li>Máx. 2 reds por dia</li>
              <li>Nunca aumentar stake para recuperar</li>
              <li>Limitar 1–2 operações por jogo</li>
              <li>Evitar ligas de baixa liquidez</li>
            </ul>
          </section>

          <section className="rounded-lg border border-light-300 dark:border-dark-600 p-6">
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100 mb-3">4. KPIs e Controle</h2>
            <ul className="list-disc ml-5 text-dark-900/90 dark:text-light-100/90 space-y-1">
              <li>Win-rate por janela (60'–75')</li>
              <li>Tempo médio em posição</li>
              <li>Slippage e execução em momentos de gol</li>
              <li>Lucro/Perda por liga</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
