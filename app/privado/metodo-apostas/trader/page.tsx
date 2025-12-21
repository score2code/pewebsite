import type { Metadata } from 'next';
import Breadcrumb from '@/app/components/ui/breadcrumb';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Método Trader (Banca de Crescimento)',
  description: 'Gestão de micro-banca e operações de alta rotatividade',
  robots: { index: false, follow: false },
};

export default function MetodoTraderPrivadoPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <Breadcrumb className="mb-4" />

        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 md:p-8 mb-6 md:mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <h1 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-light-100 mb-2">Método Trader: Low Bank</h1>
          <p className="text-base md:text-lg text-dark-900/70 dark:text-light-100/70">Foco em preservação de capital (R$ 8,80). Operações curtas de Scalping e LTD em Exchange.</p>
          <div className="mt-3">
            <Link href="/privado/backlog" className="text-sm inline-flex items-center gap-1 text-purple-700 dark:text-purple-400">Ver Histórico de Crescimento →</Link>
          </div>
        </header>

        <div className="space-y-8">
          <section className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 border border-light-300 dark:border-dark-600">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              <div className="rounded-lg border border-light-300 dark:border-dark-600 p-4">
                <div className="text-sm text-dark-900/70 dark:text-light-100/70">Stake inicial</div>
                <div className="text-xl font-bold text-dark-900 dark:text-light-100">R$ 1,00 - 2,00</div>
              </div>
              <div className="rounded-lg border border-light-300 dark:border-dark-600 p-4">
                <div className="text-sm text-dark-900/70 dark:text-light-100/70">Exposição Máx</div>
                <div className="text-xl font-bold text-dark-900 dark:text-light-100">25% da Banca</div>
              </div>
              <div className="rounded-lg border border-light-300 dark:border-dark-600 p-4">
                <div className="text-sm text-dark-900/70 dark:text-light-100/70">Mercados Chave</div>
                <div className="text-sm text-dark-900 dark:text-light-100">Scalping Under / LTD / CS (Proteção)</div>
                <div className="text-xs text-dark-900/70 dark:text-light-100/70 mt-1">Ligas: Top Europa (Liquidez)</div>
              </div>
              <div className="rounded-lg border border-light-300 dark:border-dark-600 p-4">
                <div className="text-sm text-dark-900/70 dark:text-light-100/70">Stop Loss</div>
                <div className="text-xl font-bold text-dark-900 dark:text-light-100">R$ 2,50/dia</div>
              </div>
              <div className="rounded-lg border border-light-300 dark:border-dark-600 p-4">
                <div className="text-sm text-dark-900/70 dark:text-light-100/70">Alvo p/ banca</div>
                <div className="text-xl font-bold text-dark-900 dark:text-light-100">R$ 20,00 (Nível 2)</div>
              </div>
            </div>
          </section>

          <section className="rounded-lg border border-light-300 dark:border-dark-600 p-6 space-y-6">
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">1. Setups de Entrada (Banca Curta)</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-lg border border-light-300 dark:border-dark-600 p-4">
                <h3 className="text-lg font-semibold text-dark-900 dark:text-light-100">Scalping Under</h3>
                <ul className="list-disc ml-5 text-dark-900/90 dark:text-light-100/90 space-y-1">
                  <li>Entrada em momentos mortos (lesão/VAR)</li>
                  <li>Permanência: Máx 2 min</li>
                  <li>Foco: Coleta de ticks rápidos</li>
                </ul>
              </div>
              <div className="rounded-lg border border-light-300 dark:border-dark-600 p-4">
                <h3 className="text-lg font-semibold text-dark-900 dark:text-light-100">LTD (Lay the Draw)</h3>
                <ul className="list-disc ml-5 text-dark-900/90 dark:text-light-100/90 space-y-1">
                  <li>Janela: 45' - 65' (empate 0x0 ou 1x1)</li>
                  <li>Saída: Imediata após o primeiro gol</li>
                  <li>Critério: Favorito com &gt;60% posse</li>
                </ul>
              </div>
              <div className="rounded-lg border border-light-300 dark:border-dark-600 p-4">
                <h3 className="text-lg font-semibold text-dark-900 dark:text-light-100">CS (Lay Placar)</h3>
                <ul className="list-disc ml-5 text-dark-900/90 dark:text-light-100/90 space-y-1">
                  <li>Lay 0x1 contra zebra vencendo</li>
                  <li>Aproveitar desespero do favorito</li>
                  <li>Hedge total se o jogo esfriar</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-lg border border-light-300 dark:border-dark-600 p-6">
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100 mb-3">2. Cronograma de Operação</h2>
            <ul className="list-disc ml-5 text-dark-900/90 dark:text-light-100/90 space-y-1">
              <li>**00-15:** Apenas leitura de jogo (não entrar com banca baixa)</li>
              <li>**15-45:** Scalping pontual em Under 2.5/3.5</li>
              <li>**HT:** Reavaliar estatísticas de perigo (xG)</li>
              <li>**60-80:** Janela de valor para Correct Score (Lay Placar Atual)</li>
              <li>**85+:** Fechar todas as posições (preservar stake)</li>
            </ul>
          </section>

          <section className="rounded-lg border border-light-300 dark:border-dark-600 p-6">
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100 mb-3">3. Gestão de Risco Estrita</h2>
            <ul className="list-disc ml-5 text-dark-900/90 dark:text-light-100/90 space-y-1">
              <li>Proibido "All-in" (Máximo 2 stakes por jogo)</li>
              <li>Em caso de Red, não dobrar a próxima entrada</li>
              <li>Aceitar o lucro de centavos (Juros compostos são a chave)</li>
              <li>Priorizar jogos com liquidez &gt; R$ 100k</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
