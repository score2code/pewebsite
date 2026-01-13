import type { Metadata } from 'next';
import Breadcrumb from '@/app/components/ui/breadcrumb';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Métodos Punter - Live',
  description: 'Estratégias de apostas diretas em gols e favoritos.',
  robots: { index: false, follow: false },
};

export default function MetodoPunterPage() {
  const metodos = [
    {
      titulo: "Punter Over 1.5 Live",
      selecao: "Jogos com média histórica de gols alta (> 2.5 gols por jogo).",
      entrada: "Aos 15'-20' do 1º tempo se estiver 0x0 OU aos 60' se estiver 1-0 ou 0-1.",
      validacao: "Delay Ball: AP1 > 60. Jogo com muitas transições e ataques rápidos.",
      lucro: "Mais de 1.5 Gols. Odd Alvo entre 1.50 e 1.80.",
      stopLoss: "Punter puro. Aposta mantida até o fim do jogo.",
      obs: "Soros Nível 3: Se ganhar a primeira, usa o (Lucro + Stake) na próxima."
    },
    {
      titulo: "Over 0.5 Gols Final",
      selecao: "Favorito empatando (0-0, 1-1) ou perdendo por 1 golo de diferença.",
      entrada: "Entre os 75 e 80 minutos do segundo tempo.",
      validacao: "AP1 > 75 no Delay Ball + Pelo menos 1 canto nos últimos 5 min.",
      lucro: "Mais de 0.5 Gols no Jogo (Over Limite). Odd entre 1.85 e 2.50.",
      stopLoss: "Se o AP1 cair para < 40 após a entrada, o jogo 'morreu'.",
      obs: "Soros Ciclo Curto: Se bater, use (Stake + Lucro) na próxima."
    },
    {
      titulo: "DH (Favorito) + Over 1.5",
      selecao: "Super Favorito (@1.50 pré-live) que começou sem marcar ou sofrendo 0-1.",
      entrada: "Aos 30 minutos do primeiro tempo (ou no intervalo).",
      validacao: "AP1 > 50 constante e Posse de Bola no Campo de Ataque > 60%.",
      lucro: "Chance Dupla (Favorito ou Empate) + Mais de 1.5 Gols. Odd 1.50-1.75.",
      stopLoss: "Alta taxa de acerto. Sem fechamento antecipado.",
      obs: "Escada de Segurança: Tente 4 sequências para transformar R$ 1 em R$ 5."
    },
    {
      titulo: "Favorito Marcar no 2º Tempo",
      selecao: "Favorito (@1.60 pré-live) que terminou o 1º tempo em 0-0 ou perdendo.",
      entrada: "No intervalo ou aos 50 minutos de jogo.",
      validacao: "AP1 > 60 no início do 2º tempo. Favorito voltando pressionando.",
      lucro: "Total de Gols da Equipe (Favorito): Mais de 0.5. Odd 1.55-1.80.",
      stopLoss: "Red se o favorito passar o jogo em branco.",
      obs: "Ideal para ligas como a Bundesliga ou Premier League."
    },
    {
      titulo: "Over 0.5 Gols HT",
      selecao: "Jogos equilibrados onde os primeiros 15 min foram sem chances.",
      entrada: "Aos 20 a 25 minutos do primeiro tempo.",
      validacao: "AP1 com 'Pico': O gráfico deve sair de < 20 para > 60 subitamente.",
      lucro: "Mais de 0.5 Gols no 1º Tempo (HT). Odd 1.70 e 2.00.",
      stopLoss: "Fim do primeiro tempo sem gols.",
      obs: "Ciclo de Explosão: Use para dobrar a stake rapidamente."
    },
    {
      titulo: "Handicap Asiático +0.5 Zebra",
      selecao: "Favorito 'com nome' que está jogando mal e zebra organizada.",
      entrada: "Aos 60 minutos se o placar estiver 0-0 ou a zebra vencendo.",
      validacao: "AP1 do Favorito < 30 e AP1 da Zebra > 45.",
      lucro: "Handicap Asiático +0.5 Zebra (ou Dupla Hipótese). Odd 1.60-1.90.",
      stopLoss: "Favorito marcar gol e virar o jogo.",
      obs: "Ideal para o Brasileirão Série A/B ou Ligue 1 (zebras seguram bem)."
    }
  ];

  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <Breadcrumb className="mb-4" />

        {/* Header - Identico ao Trader */}
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 md:p-8 mb-6 md:mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <h1 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-light-100 mb-2">Métodos Punter: Live</h1>
          <p className="text-base md:text-lg text-dark-900/70 dark:text-light-100/70">Foco em análise de valor e estatísticas de pressão em tempo real (Punter).</p>
          <div className="mt-3">
            <Link href="/privado/planejamento" className="text-sm inline-flex items-center gap-1 text-purple-700 dark:text-purple-400 font-medium">Ver Planejamento →</Link>
          </div>
        </header>

        {/* Grid de Cards - Estilo Trader */}
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

        {/* Footer Info Box - Estilo Trader */}
        <section className="mt-8 bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <h2 className="font-semibold text-dark-900 dark:text-light-100 mb-3 uppercase text-sm tracking-widest">Mentalidade Punter</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-purple-700 dark:text-purple-400">1. Análise Live</h4>
              <p className="text-xs text-dark-900/70 dark:text-light-100/70">O gráfico de pressão (AP1) é o seu único guia real para validação.</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-purple-700 dark:text-purple-400">2. Paciência</h4>
              <p className="text-xs text-dark-900/70 dark:text-light-100/70">Nunca entre em uma aposta se a Odd estiver abaixo do plano definido.</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-purple-700 dark:text-purple-400">3. Red Faz Parte</h4>
              <p className="text-xs text-dark-900/70 dark:text-light-100/70">No punter, o que importa é a taxa de acerto e o valor a longo prazo.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
