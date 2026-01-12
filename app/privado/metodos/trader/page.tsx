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
      selecao: "Super Favorito (@1.30 a @1.50) jogando em casa + Zebra recuada (formação defensiva).",
      entrada: "Entre aos 15-20' SE: (1) estiver 0x0, (2) odd subiu 15%+ da pré-live, (3) favorito teve 2+ finalizações no gol.",
      validacao: "AP1 > 60 + Zebra com formação 5-4-1 ou similar. O favorito deve estar dominando.",
      lucro: "Golo do Favorito: A Odd pré @1.40 estará @1.75+. Saia imediatamente com lucro limpo.",
      stopLoss: "Golo da Zebra: Se sofrer 0x1, saia com prejuízo máximo de 50%. Não espere correção.",
      obs: "Você aposta no mesmo time, mas com odd muito mais lucrativa. Evite se o favorito estiver sem artilheiro titular."
    },
    {
      titulo: "Correct Score 3x1 - 1x3",
      selecao: "Favorito claro em casa (@ < 1.40) + Zebra com ataque fraco (xG < 0.8 nos últimos 3 jogos).",
      entrada: "Back 3-1 Pré-Live na odd >20.0 OU após gol da zebra (odd dispara 50%+). Back 2-0 após 1º gol do favorito.",
      validacao: "AP1 > 70 no Delay Ball. Favorito precisa estar 'amassando'. Evite se zebra for tecnicamente superior em casa.",
      lucro: "Se fizer 1x0 rápido (até 30'), a odd do 3x1 corrige para 8-12. Cash Out com 60-80% de lucro.",
      stopLoss: "Se favorito fizer 2x0 antes dos 60', SAIA — fica preso no 3x0/4x0. Se zebra faz 0x1, saia imediatamente.",
      obs: "Estratégia de alavancagem. Exige liquidez alta (UCL / Premier League). Não opere em jogos com zebra forte em casa."
    },
    {
      titulo: "Correct Score Cruzado (2x1 e 1x2)",
      selecao: "Jogos 'Over' com Ambas Marcam. Times ofensivos e defesas frágeis (média >2.5 gols/jogo).",
      entrada: "Dutching: Dividir stake entre 2-1 e 1-2 no pré-live ou aos 15-20' se 0x0.",
      validacao: "AP1 de ambos somados > 80. O jogo precisa estar 'lá e cá'. Se zebra fizer 1x0, só continue se favorito tiver >5 finalizações.",
      lucro: "Sweet Spot no 1x1: Se bater 1x1 entre 60-75', REALIZE 80% da posição. Deixe 20% para o 2x1/1x2.",
      stopLoss: "Se chegar aos 80' ainda 0x0 ou 1x0 com AP1 caindo, saia com -30% máximo. Não espere milagre.",
      obs: "Ganha na tensão do 3º gol. CRÍTICO: No 1x1, sempre realize lucro parcial. Não seja ganancioso."
    },
    {
      titulo: "Lay ao Empate (LTD)",
      selecao: "Favorito em casa (Odd 1.5-2.0) + Empate < 4.50. Evite clássicos/derbies (times se respeitam no 1ºT).",
      entrada: "Aos 20 minutos de jogo com 0x0 no placar.",
      validacao: "AP1 > 60 no Delay Ball (Favorito amassando). Se favorito sem artilheiro titular, reduza stake em 50%.",
      lucro: "Sai logo após o golo do favorito com 15-25% de lucro.",
      stopLoss: "Sai aos 70 minutos se continuar 0x0 (Sem exceção! Aceite o loss de -100%).",
      obs: "Responsabilidade máx R$ 4,00 por jogo (20% da banca). Em PSG x Marseille e similares, evite operar."
    },
    {
      titulo: "Under 2.5 gols",
      selecao: "Ligas de Under (Série B, Ligue 2) + Favorito Fora ou Equipes Equilibradas.",
      entrada: "Aos 10-15' com 0x0 + AP1+AP2 < 60 (somatório de ataques perigosos de ambos times).",
      validacao: "AP1 < 30 e AP2 < 35 individualmente. Jogo 'morno', sem pressão ofensiva.",
      lucro: "Meta: 3-5% de lucro. Saia quando atingir OU aos 40' do 1ºT (o que vier primeiro).",
      stopLoss: "Saída Imediata em caso de golo. NÃO faça martingale — aceite o loss e procure outro jogo.",
      obs: "Use Stakes fixas (ex: R$ 2,00). O objetivo é a queda da Odd pelo tempo. Scalping de baixo risco."
    },
    {
      titulo: "Lay 0-1 (Contra a Zebra)",
      selecao: "Favorito @1.40 a @1.70 em casa. Zebra com ataque muito fraco (< 0.5 gols/jogo fora).",
      entrada: "Pré-Live ou nos primeiros 10 min de jogo.",
      validacao: "AP2 (zebra) < 30. A zebra não pode estar contra-atacando. Favorito deve ter >65% de posse.",
      lucro: "Favorito marca: Se faz 1-0, o placar 0-1 'morre' e você ganha. Saia com 80-100% de lucro.",
      stopLoss: "Zebra marca: Se ficar 0-1, prejuízo máximo de -200%. Saia imediatamente ou espere 1-1 se favorito reagir forte.",
      obs: "Alta Taxa de Acerto (70-80%). Você ganha em quase todos os cenários, mas o risco no 0-1 é alto."
    }
  ];

  const overMetodos = [
    {
      titulo: "Over 2.5 Gols",
      selecao: "Times ofensivos (média >2 gols/jogo) + Defesas frágeis. EVITE clássicos travados (Arsenal x Liverpool).",
      entrada: "Entre apenas entre 60-75' com favorito PERDENDO ou EMPATANDO. Após 75', desista — risco > retorno.",
      validacao: "Já deve ter havido >8 finalizações no jogo. Favorito precisa estar pressionando forte (AP1 > 70).",
      lucro: "Saia assim que bater 1x1 ou 2x0 com 40-60% de lucro. Não espere o 3º gol.",
      stopLoss: "Se favorito fizer 1x0 antes dos 30', DESISTA — jogo pode 'morrer'. PROIBIDO entrar 2x no mesmo jogo.",
      obs: "Alta variância. Stake máx: 5% da banca. Se entrar aos 70' e chegar aos 85' sem gol, aceite -100%."
    },
    {
      titulo: "Over 1.5 Gols",
      selecao: "Jogos equilibrados ou com zebra ganhando. Odd mínima: @2.0 para compensar risco.",
      entrada: "Entre aos 70'+ com 0x0 ou 1x0 + odd >2.0 OU aos 45-55' apenas se >8 finalizações no 1ºT.",
      validacao: "Jogo precisa estar 'corrido' (ritmo alto, contra-ataques). Evite jogos travados taticamente.",
      lucro: "Meta: 40-60% de lucro. Saia assim que bater 1x1 ou 2x0. Suas melhores entradas foram aos 78-83'.",
      stopLoss: "Se entrar aos 70' e chegar aos 85' sem gol, aceite o loss (-100%). Não insista.",
      obs: "CRÍTICO: Stake máx 5%. Suas entradas tardias (70'+) tiveram melhor taxa de acerto que entradas aos 45-60'."
    }
  ];

  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <Breadcrumb className="mb-4" />

        {/* Header */}
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 md:p-8 mb-6 md:mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <h1 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-light-100 mb-2">Métodos Trader: Exchange</h1>
          <p className="text-base md:text-lg text-dark-900/70 dark:text-light-100/70">Foco em leitura de mercado, variação de odds e tempo de exposição em bolsa esportiva.</p>
          <div className="mt-3">
            <Link href="/privado/planejamento" className="text-sm inline-flex items-center gap-1 text-purple-700 dark:text-purple-400 font-medium">Ver Planejamento →</Link>
          </div>
        </header>

        {/* Anti-Padrões - Avisos Críticos */}
        <section className="mb-8 bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 md:p-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-red-500/10 dark:bg-red-500/20 flex items-center justify-center border border-red-500/30">
              <span className="text-2xl">🚫</span>
            </div>
            <div>
              <h2 className="font-bold text-dark-900 dark:text-light-100 uppercase text-sm tracking-widest">Anti-Padrões</h2>
              <p className="text-xs text-dark-900/60 dark:text-light-100/60">Erros comprovados em suas anotações reais</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-red-500/5 dark:bg-red-500/10 rounded-lg p-4 border border-red-500/20">
              <div className="flex items-start gap-3">
                <span className="text-red-600 dark:text-red-400 font-bold text-lg flex-shrink-0">❌</span>
                <div>
                  <p className="font-semibold text-dark-900 dark:text-light-100 text-sm mb-1">Entrada tardia em Correct Score</p>
                  <p className="text-xs text-dark-900/70 dark:text-light-100/70">Não entre em jogos 0x0 após os 70' em estratégias de CS. O tempo não compensa o risco.</p>
                  <p className="text-xs text-red-600 dark:text-red-400 mt-2 italic">Caso real: Twente x Zwolle - Full red</p>
                </div>
              </div>
            </div>

            <div className="bg-red-500/5 dark:bg-red-500/10 rounded-lg p-4 border border-red-500/20">
              <div className="flex items-start gap-3">
                <span className="text-red-600 dark:text-red-400 font-bold text-lg flex-shrink-0">❌</span>
                <div>
                  <p className="font-semibold text-dark-900 dark:text-light-100 text-sm mb-1">Reentrada no mesmo jogo (Martingale)</p>
                  <p className="text-xs text-dark-900/70 dark:text-light-100/70">Entrar 2x no mesmo jogo tentando "recuperar" ou "dobrar" lucro é viés emocional, não análise.</p>
                  <p className="text-xs text-red-600 dark:text-red-400 mt-2 italic">Caso real: Portuguesa x Palmeiras - Prejuízo de 22%</p>
                </div>
              </div>
            </div>

            <div className="bg-red-500/5 dark:bg-red-500/10 rounded-lg p-4 border border-red-500/20">
              <div className="flex items-start gap-3">
                <span className="text-red-600 dark:text-red-400 font-bold text-lg flex-shrink-0">❌</span>
                <div>
                  <p className="font-semibold text-dark-900 dark:text-light-100 text-sm mb-1">Esperar "milagre" com -50% de prejuízo</p>
                  <p className="text-xs text-dark-900/70 dark:text-light-100/70">Se o prejuízo passar de 50%, saia imediatamente. Cada minuto extra aumenta o risco de -100%.</p>
                  <p className="text-xs text-red-600 dark:text-red-400 mt-2 italic">Regra: Stop loss máximo = -50%</p>
                </div>
              </div>
            </div>

            <div className="bg-red-500/5 dark:bg-red-500/10 rounded-lg p-4 border border-red-500/20">
              <div className="flex items-start gap-3">
                <span className="text-red-600 dark:text-red-400 font-bold text-lg flex-shrink-0">❌</span>
                <div>
                  <p className="font-semibold text-dark-900 dark:text-light-100 text-sm mb-1">Operar clássicos e mata-matas</p>
                  <p className="text-xs text-dark-900/70 dark:text-light-100/70">Evite derbies (PSG x Marseille) e finais de semana de eliminatórias. Jogos táticos e travados.</p>
                  <p className="text-xs text-red-600 dark:text-red-400 mt-2 italic">Caso real: Arsenal x Liverpool - 0x0, Full red</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-light-300 dark:border-dark-600">
            <p className="text-xs text-dark-900/60 dark:text-light-100/60 text-center">
              <strong>Lembrete:</strong> Estes erros custaram entre 22% e 100% da stake. Evitá-los aumenta sua taxa de acerto em 30%+
            </p>
          </div>
        </section>

        {/* Grid Principal - Métodos Core */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {metodos.map((metodo, index) => (
            <section
              key={index}
              className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 border border-light-300 dark:border-dark-600 flex flex-col shadow-custom dark:shadow-custom-dark backdrop-blur-sm"
            >
              <div className="mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-400">Estratégia {index + 1}</span>
                <h3 className="text-xl font-bold text-dark-900 dark:text-light-100">{metodo.titulo}</h3>
              </div>

              <div className="space-y-4 flex-grow text-sm text-dark-900/90 dark:text-light-100/90">
                <div className="rounded-lg border border-light-300 dark:border-dark-600 p-3 bg-light-200/30 dark:bg-dark-900/20">
                  <span className="block font-semibold text-dark-900 dark:text-light-100 uppercase text-[10px] tracking-widest mb-1">Seleção</span>
                  <p className="text-xs">{metodo.selecao}</p>
                </div>

                <div>
                  <span className="block font-semibold text-dark-900 dark:text-light-100 uppercase text-[10px] tracking-widest">Entrada e Live</span>
                  <p className="font-medium text-dark-900 dark:text-light-100 text-xs">{metodo.entrada}</p>
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

        {/* Métodos Over */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {overMetodos.map((metodo, index) => (
            <section
              key={index}
              className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 border border-light-300 dark:border-dark-600 flex flex-col shadow-custom dark:shadow-custom-dark backdrop-blur-sm"
            >
              <div className="mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-700 dark:text-orange-400">Alta Variância</span>
                <h3 className="text-xl font-bold text-dark-900 dark:text-light-100">{metodo.titulo}</h3>
              </div>

              <div className="space-y-4 flex-grow text-sm text-dark-900/90 dark:text-light-100/90">
                <div className="rounded-lg border border-light-300 dark:border-dark-600 p-3 bg-light-200/30 dark:bg-dark-900/20">
                  <span className="block font-semibold text-dark-900 dark:text-light-100 uppercase text-[10px] tracking-widest mb-1">Seleção</span>
                  <p className="text-xs">{metodo.selecao}</p>
                </div>

                <div>
                  <span className="block font-semibold text-dark-900 dark:text-light-100 uppercase text-[10px] tracking-widest">Entrada e Live</span>
                  <p className="font-medium text-dark-900 dark:text-light-100 text-xs">{metodo.entrada}</p>
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

        {/* Footer Info Box */}
        <section className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <h2 className="font-semibold text-dark-900 dark:text-light-100 mb-3 uppercase text-sm tracking-widest">Checklist de Operação</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-purple-700 dark:text-purple-400">1. Liquidez</h4>
              <p className="text-xs text-dark-900/70 dark:text-light-100/70">Verificar se o mercado tem volume acima de R$ 50k para facilitar entradas e saídas rápidas.</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-purple-700 dark:text-purple-400">2. Exposição</h4>
              <p className="text-xs text-dark-900/70 dark:text-light-100/70">Respeitar o limite de 20% da banca em responsabilidade por jogo. Overs: máx 5% da banca.</p>
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
