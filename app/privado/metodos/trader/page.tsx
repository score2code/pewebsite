import type { Metadata } from 'next';
import Breadcrumb from '@/app/components/ui/breadcrumb';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Métodos Trader - Operações em Exchange',
  description: 'Estratégias de Trading: LTD, Correct Score e Scalping',
  robots: { index: false, follow: false },
};

export default function MetodoTraderPage() {
  const metodos = [
    {
      titulo: "Back ao Favorito 'Delayed'",
      selecao: "Super Favorito (@1.30 a @1.50) jogando em casa.",
      entrada: "Back Favorito: Entre entre os 15' e 20' do 1º tempo se estiver 0x0.",
      validacao: "AP1 > 60. O favorito deve estar dominando, mas a bola não entrou.",
      lucro: "Golo do Favorito: A Odd pré @1.40 estará @1.75+. Lucro limpo.",
      stopLoss: "Golo da Zebra: Se sofrer 0x1, saia com prejuízo ou espere correção.",
      obs: "Você aposta no mesmo time, mas com um preço (odd) muito mais lucrativo."
    },
    {
      titulo: "Correct Score 3x1 - 1x3",
      selecao: "Favorito claro em casa (@ < 1.40). Expectativa de 2+ gols do favorito.",
      entrada: "Back 3-1 Pré-Live (Stake mín) + Back 2-0 após o 1º gol.",
      validacao: "AP1 > 70 no Delay Ball. Favorito precisa estar 'amassando'.",
      lucro: "Se fizer 1x0 rápido, a odd do 3x1 corrige. Cash Out ou protege no 2x0.",
      stopLoss: "Golo da Zebra: Se fizer 0x1, o 2x0 morre. Saia com o que sobrar.",
      obs: "Estratégia de alavancagem. Exige liquidez alta (UCL / Premier League)."
    },
    {
      titulo: "Correct Score Cruzado (2x1 e 1x2)",
      selecao: "Jogos 'Over' com Ambas Marcam. Times ofensivos e defesas frágeis.",
      entrada: "Dutching: Dividir a stake entre o placar 2-1 e o 1-2.",
      validacao: "AP1 de ambos somados > 80. O jogo precisa estar 'lá e cá'.",
      lucro: "Sweet Spot: Se o jogo estiver 1-1, você está na melhor posição. Realize lucro.",
      stopLoss: "Jogo Travado: Se estiver 0-0 ou 1-0 aos 60 min com AP1 baixo.",
      obs: "Estratégia de valorização. Ganha na tensão do 3º gol sair para qualquer lado."
    },
    {
      titulo: "Lay ao Empate (LTD)",
      selecao: "Favorito em casa (Odd 1.5-2.0) + Empate < 4.50",
      entrada: "Aos 20 minutos de jogo com 0x0 no placar",
      validacao: "AP1 > 60 no Delay Ball (Favorito amassando)",
      lucro: "Sai logo após o golo do favorito",
      stopLoss: "Sai aos 70 minutos se continuar 0x0 (Sem exceção!)",
      obs: "Responsabilidade máx R$ 4,00 por jogo (20% da banca)."
    },
    {
      titulo: "Under 2.5 gols",
      selecao: "Ligas de Under (Série B, Ligue 2) + Favorito Fora ou Equipes Equilibradas",
      entrada: "Aos 10 ou 15 minutos do primeiro tempo com 0x0 no placar",
      validacao: "AP1 < 30 e AP2 < 35 (Jogo 'morno', sem pressão)",
      lucro: "Scalping: Sai após 5-10 min / Swing: Sai aos 35' do 1ºT",
      stopLoss: "Saída Imediata em caso de golo ou se o AP1 subir para > 70",
      obs: "Use Stakes fixas (ex: R$ 2,00). O objetivo é a queda da Odd pelo tempo."
    },
    {
      titulo: "Lay 0-1 (Contra a Zebra)",
      selecao: "Favorito @1.40 a @1.70 em casa. Zebra com ataque muito fraco.",
      entrada: "Pré-Live ou nos primeiros 10 min de jogo.",
      validacao: "AP2 (zebra) < 30. A zebra não pode estar contra-atacando.",
      lucro: "Favorito marca: Se faz 1-0, o placar 0-1 'morre' e você ganha a aposta.",
      stopLoss: "Zebra marca: Se ficar 0-1, prejuízo máximo. Saia ou espere o 1-1.",
      obs: "Estratégia de Taxa de Acerto alta. Você ganha em quase todos os cenários."
    }
  ];

  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <Breadcrumb className="mb-4" />

        {/* Header - Identico ao Punther */}
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 md:p-8 mb-6 md:mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <h1 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-light-100 mb-2">Métodos Trader: Exchange</h1>
          <p className="text-base md:text-lg text-dark-900/70 dark:text-light-100/70">Foco em leitura de mercado, variação de odds e tempo de exposição em bolsa esportiva.</p>
          <div className="mt-3">
            <Link href="/privado/planejamento" className="text-sm inline-flex items-center gap-1 text-purple-700 dark:text-purple-400 font-medium">Ver Planejamento →</Link>
          </div>
        </header>

        {/* Grid de Cards - Estilo Punther */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metodos.map((metodo, index) => (
            <section
              key={index}
              className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 border border-light-300 dark:border-dark-600 flex flex-col shadow-custom dark:shadow-custom-dark backdrop-blur-sm"
            >
              <div className="mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-400">Estratégia {index + 1}</span>
                <h2 className="text-xl font-bold text-dark-900 dark:text-light-100">{metodo.titulo}</h2>
              </div>

              <div className="space-y-4 flex-grow text-sm text-dark-900/90 dark:text-light-100/90">
                <div className="rounded-lg border border-light-300 dark:border-dark-600 p-3 bg-light-200/30 dark:bg-dark-900/20">
                  <span className="block font-semibold text-dark-900 dark:text-light-100 uppercase text-[10px] tracking-widest mb-1">Seleção</span>
                  <p className="text-xs">{metodo.selecao}</p>
                </div>

                <div>
                  <span className="block font-semibold text-dark-900 dark:text-light-100 uppercase text-[10px] tracking-widest">Entrada e Live</span>
                  <p className="font-medium text-dark-900 dark:text-light-100">{metodo.entrada}</p>
                  <p className="italic text-xs mt-1 opacity-70">{metodo.validacao}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-2 rounded bg-emerald-500/10 border border-emerald-500/20">
                    <span className="block font-bold text-emerald-600 dark:text-emerald-400 uppercase text-[9px] tracking-widest">Alvo (Lucro)</span>
                    <p className="text-[11px] leading-tight mt-1">{metodo.lucro}</p>
                  </div>
                  <div className="p-2 rounded bg-red-500/10 border border-red-500/20">
                    <span className="block font-bold text-red-600 dark:text-red-400 uppercase text-[9px] tracking-widest">Stop (Saída)</span>
                    <p className="text-[11px] leading-tight mt-1">{metodo.stopLoss}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-light-300 dark:border-dark-600">
                <p className="text-xs text-dark-900/60 dark:text-light-100/60 italic">
                  <strong>Observação:</strong> {metodo.obs}
                </p>
              </div>
            </section>
          ))}
        </div>

        {/* Footer Info Box - Estilo Punther */}
        <section className="mt-8 bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <h2 className="font-semibold text-dark-900 dark:text-light-100 mb-3 uppercase text-sm tracking-widest">Checklist de Operação</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-purple-700 dark:text-purple-400">1. Liquidez</h4>
              <p className="text-xs text-dark-900/70 dark:text-light-100/70">Verificar se o mercado tem volume acima de R$ 50k para facilitar entradas e saídas rápidas.</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-purple-700 dark:text-purple-400">2. Exposição</h4>
              <p className="text-xs text-dark-900/70 dark:text-light-100/70">Respeitar o limite de 20% da banca em responsabilidade por jogo no trading.</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-purple-700 dark:text-purple-400">3. Critério AP</h4>
              <p className="text-xs text-dark-900/70 dark:text-light-100/70">Não operar por "nome" do time. Se o gráfico de pressão estiver baixo, não entre.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
