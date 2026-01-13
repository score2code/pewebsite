import type { Metadata } from 'next';
import Breadcrumb from '@/app/components/ui/breadcrumb';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Método Rollover - Volume de Banca',
  description: 'Estratégias de baixo risco para cumprimento de bônus e giro de volume.',
  robots: { index: false, follow: false },
};

export default function MetodoRolloverPage() {
  const metodos = [
    {
      titulo: "Handicap Asiático +2.5",
      selecao: "Ligas Under (Série B, Ligue 2, Argentina) + Favorito não goleador.",
      entrada: "Pré-live em odds entre 1.15 e 1.25.",
      validacao: "Zebra não pode ter sofrido mais de 2 gols nos últimos 3 jogos fora.",
      lucro: "Segurança: O time pode perder por até 2 gols de diferença.",
      stopLoss: "Goleada histórica (Zebra entregue). Raríssimo em ligas under.",
      obs: "Foco 100% em volume. Stake fixa de R$ 30,00 sem martingalle."
    },
    {
      titulo: "Dupla Chance (1X)",
      selecao: "Favorito Real (@1.40 a @1.60) jogando contra time do Z4.",
      entrada: "Mercado Casa ou Empate. Odd alvo: 1.18 a 1.25.",
      validacao: "Favorito com time titular e sem competições paralelas (foco total).",
      lucro: "Ganho no 1-0, 2-1 ou qualquer empate (0-0, 1-1).",
      stopLoss: "Zebra histórica. Se o favorito sofrer 0-1, aceite o red.",
      obs: "Ideal para dias de Premier League e La Liga (Sábados)."
    },
    {
      titulo: "Over 0.5 Gols Live",
      selecao: "Times com 90% de jogos com pelo menos 1 gol (ex: Bundesliga).",
      entrada: "Aguardar 10-15 min de jogo live para pegar odd 1.20.",
      validacao: "AP1 > 40 nos primeiros 10 min. O jogo não pode estar parado.",
      lucro: "Qualquer gol no jogo (1-0, 0-1) encerra a aposta com Green.",
      stopLoss: "O 0-0 persistente. Se aos 70' continuar 0-0, aceite o prejuízo.",
      obs: "Método de giro rápido. Ótimo para fazer 5 a 6 entradas por dia."
    },
    {
      titulo: "Under 4.5 Gols",
      selecao: "Clássicos ou jogos eliminatórios (tensão alta, poucos riscos).",
      entrada: "Pré-live ou Live (odd 1.20).",
      validacao: "Média de gols das equipes somadas inferior a 3.0 por jogo.",
      lucro: "O jogo pode ter até 4 gols. Margem de segurança altíssima.",
      stopLoss: "Jogo totalmente aberto com 2 gols antes dos 20 minutos.",
      obs: "Excelente para limpar bônus de forma constante e silenciosa."
    },
    {
      titulo: "Handicap +2.0 Favorito Fora",
      selecao: "Favorito jogando fora de casa contra time médio.",
      entrada: "Favorito +2.0 (ou +1.5 se quiser odd maior). Odd 1.15-1.25.",
      validacao: "O favorito dificilmente perde por 2 gols, mesmo fora de casa.",
      lucro: "Favorito ganha, empata ou perde por 1 gol. Se perder por 2, a stake volta.",
      stopLoss: "Derrota por 3 ou mais gols (ex: 3-0). Muito difícil ocorrer.",
      obs: "Proteção máxima para o seu capital de bônus."
    },
    {
      titulo: "DNB (Empate Anula) Favorito",
      selecao: "Favoritos jogando fora de casa mas com shape muito superior.",
      entrada: "Mercado 'Draw No Bet'. Odd alvo: 1.25 a 1.35.",
      validacao: "Time da casa com muitos desfalques ou em crise interna.",
      lucro: "Vitória do favorito. Se empatar, a stake volta (não conta pro volume).",
      stopLoss: "Derrota do favorito. Saia com Red e aguarde próximo dia.",
      obs: "Usa-se para proteger a stake principal enquanto gira o bônus."
    }
  ];

  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <Breadcrumb className="mb-4" />

        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 md:p-8 mb-6 md:mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <h1 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-light-100 mb-2">Método Rollover: Volume</h1>
          <p className="text-base md:text-lg text-dark-900/70 dark:text-light-100/70">Plano de segurança máxima para giro de bônus e cumprimento de metas de volume semanal.</p>
          <div className="mt-3">
            <Link href="/privado/planejamento" className="text-sm inline-flex items-center gap-1 text-purple-700 dark:text-purple-400 font-medium">Ver Planejamento →</Link>
          </div>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-light-100/50 dark:bg-dark-800/50 p-4 rounded-xl border border-light-300 dark:border-dark-600 shadow-custom">
                <span className="block text-[10px] uppercase tracking-widest text-dark-900/50 dark:text-light-100/50 font-bold">Stake Padrão</span>
                <span className="text-xl font-bold text-dark-900 dark:text-light-100">R$ 30,00</span>
            </div>
            <div className="bg-light-100/50 dark:bg-dark-800/50 p-4 rounded-xl border border-light-300 dark:border-dark-600 shadow-custom">
                <span className="block text-[10px] uppercase tracking-widest text-dark-900/50 dark:text-light-100/50 font-bold">Odd Média</span>
                <span className="text-xl font-bold text-dark-900 dark:text-light-100">1.22</span>
            </div>
            <div className="bg-light-100/50 dark:bg-dark-800/50 p-4 rounded-xl border border-light-300 dark:border-dark-600 shadow-custom">
                <span className="block text-[10px] uppercase tracking-widest text-dark-900/50 dark:text-light-100/50 font-bold">Meta Volume/Dia</span>
                <span className="text-xl font-bold text-dark-900 dark:text-light-100">R$ 150,00</span>
            </div>
            <div className="bg-light-100/50 dark:bg-dark-800/50 p-4 rounded-xl border border-light-300 dark:border-dark-600 shadow-custom">
                <span className="block text-[10px] uppercase tracking-widest text-dark-900/50 dark:text-light-100/50 font-bold">Foco Total</span>
                <span className="text-xl font-bold text-purple-700 dark:text-purple-400">Segurança</span>
            </div>
        </div>

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
                  <span className="block font-semibold text-dark-900 dark:text-light-100 uppercase text-[10px] tracking-widest">Execução</span>
                  <p className="font-medium text-dark-900 dark:text-light-100">{metodo.entrada}</p>
                  <p className="italic text-xs mt-1 opacity-70">{metodo.validacao}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-2 rounded bg-emerald-500/10 border border-emerald-500/20">
                    <span className="block font-bold text-emerald-600 dark:text-emerald-400 uppercase text-[9px] tracking-widest">Alvo (Segurança)</span>
                    <p className="text-[11px] leading-tight mt-1">{metodo.lucro}</p>
                  </div>
                  <div className="p-2 rounded bg-red-500/10 border border-red-500/20">
                    <span className="block font-bold text-red-600 dark:text-red-400 uppercase text-[9px] tracking-widest">Risco (Saída)</span>
                    <p className="text-[11px] leading-tight mt-1">{metodo.stopLoss}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-light-300 dark:border-dark-600">
                <p className="text-xs text-dark-900/60 dark:text-light-100/60 italic">
                  <strong>Regra de Giro:</strong> {metodo.obs}
                </p>
              </div>
            </section>
          ))}
        </div>

        <section className="mt-8 bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <h2 className="font-semibold text-dark-900 dark:text-light-100 mb-3 uppercase text-sm tracking-widest">Checklist do Giro</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-purple-700 dark:text-purple-400">1. Disciplina de Stake</h4>
              <p className="text-xs text-dark-900/70 dark:text-light-100/70">Nunca aumente a aposta para "acelerar" o rollover. O volume vem com o tempo.</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-purple-700 dark:text-purple-400">2. Filtro de Ligas</h4>
              <p className="text-xs text-dark-900/70 dark:text-light-100/70">Priorize ligas onde os placares são mais previsíveis. Evite mercados muito voláteis.</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-purple-700 dark:text-purple-400">3. Foco no Volume</h4>
              <p className="text-xs text-dark-900/70 dark:text-light-100/70">Nesta página, o objetivo é girar o capital. O lucro alto deve ser buscado nas páginas de Trader e Punter.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
