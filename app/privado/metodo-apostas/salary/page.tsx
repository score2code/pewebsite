import type { Metadata } from 'next';
import Breadcrumb from '@/app/components/ui/breadcrumb';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Método Salary (Privado)',
  description: 'Meta financeira mensal baseada em salário mínimo',
  robots: { index: false, follow: false },
};

export default function MetodoSalaryPrivadoPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <Breadcrumb className="mb-4" />

        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 md:p-8 mb-6 md:mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <h1 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-light-100 mb-2">Método Salary</h1>
          <p className="text-base md:text-lg text-dark-900/70 dark:text-light-100/70">Foco em renda segura mensal, com metas diárias conservadoras.</p>
          <div className="mt-3">
            <Link href="/privado/backlog" className="text-sm inline-flex items-center gap-1 text-purple-700 dark:text-purple-400">Abrir Backlog →</Link>
          </div>
        </header>

        <div className="space-y-8">
          <section className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 border border-light-300 dark:border-dark-600">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              <div className="rounded-lg border border-light-300 dark:border-dark-600 p-4">
                <div className="text-sm text-dark-900/70 dark:text-light-100/70">Meta mensal</div>
                <div className="text-xl font-bold text-dark-900 dark:text-light-100">R$ 1.518</div>
              </div>
              <div className="rounded-lg border border-light-300 dark:border-dark-600 p-4">
                <div className="text-sm text-dark-900/70 dark:text-light-100/70">Meta diária</div>
                <div className="text-xl font-bold text-dark-900 dark:text-light-100">R$ 60–70</div>
              </div>
              <div className="rounded-lg border border-light-300 dark:border-dark-600 p-4">
                <div className="text-sm text-dark-900/70 dark:text-light-100/70">Stake base</div>
                <div className="text-xl font-bold text-dark-900 dark:text-light-100">R$ 30</div>
              </div>
              <div className="rounded-lg border border-light-300 dark:border-dark-600 p-4">
                <div className="text-sm text-dark-900/70 dark:text-light-100/70">Odds alvo</div>
                <div className="text-xl font-bold text-dark-900 dark:text-light-100">1.18–1.28</div>
              </div>
              <div className="rounded-lg border border-light-300 dark:border-dark-600 p-4">
                <div className="text-sm text-dark-900/70 dark:text-light-100/70">Apostas/dia</div>
                <div className="text-xl font-bold text-dark-900 dark:text-light-100">2–4</div>
              </div>
            </div>
          </section>

          <section className="rounded-lg border border-light-300 dark:border-dark-600 p-6 space-y-6">
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100">1. Mercados e Critérios</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-lg border border-light-300 dark:border-dark-600 p-4">
                <h3 className="text-lg font-semibold text-dark-900 dark:text-light-100">Dupla Chance (DC)</h3>
                <ul className="list-disc ml-5 text-dark-900/90 dark:text-light-100/90 space-y-1">
                  <li>Favorito médio em casa; evitar ultra favoritos</li>
                  <li>Sem mais de 4–5 desfalques relevantes</li>
                  <li>Motivação objetiva e forma estável</li>
                  <li>Odd entre 1.18 e 1.28</li>
                </ul>
              </div>
              <div className="rounded-lg border border-light-300 dark:border-dark-600 p-4">
                <h3 className="text-lg font-semibold text-dark-900 dark:text-light-100">Empate Anula (DNB)</h3>
                <ul className="list-disc ml-5 text-dark-900/90 dark:text-light-100/90 space-y-1">
                  <li>Favorito leve com leve vantagem técnica</li>
                  <li>Contexto de jogo sem necessidade de forçar</li>
                  <li>Usar quando DC estiver abaixo de 1.15</li>
                  <li>Odd preferencial 1.30–1.45 (limite 1.50)</li>
                </ul>
              </div>
              <div className="rounded-lg border border-light-300 dark:border-dark-600 p-4">
                <h3 className="text-lg font-semibold text-dark-900 dark:text-light-100">Handicap Asiático +3.0 (seguro)</h3>
                <ul className="list-disc ml-5 text-dark-900/90 dark:text-light-100/90 space-y-1">
                  <li>Partidas com baixa probabilidade de goleada</li>
                  <li>Times que raramente sofrem 4 gols</li>
                  <li>Equilíbrio defensivo e ritmo moderado</li>
                  <li>Odd até 1.28</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-lg border border-light-300 dark:border-dark-600 p-6">
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100 mb-3">2. Agenda e Quantidade</h2>
            <ul className="list-disc ml-5 text-dark-900/90 dark:text-light-100/90 space-y-1">
              <li>Segunda a sexta: 3–4 apostas/dia (mix DC/HA)</li>
              <li>Sábado: 3–5 apostas (priorizar DC em favoritos médios)</li>
              <li>Domingo: 2–3 apostas no máximo (preferência HA +3.0)</li>
              <li>Evitar rodadas finais com alta volatilidade</li>
            </ul>
          </section>

          <section className="rounded-lg border border-light-300 dark:border-dark-600 p-6">
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100 mb-3">3. Gestão de Risco</h2>
            <ul className="list-disc ml-5 text-dark-900/90 dark:text-light-100/90 space-y-1">
              <li>Limite de 2 reds por dia → parar após o segundo</li>
              <li>Nunca aumentar stake após red</li>
              <li>Sem múltiplas; apenas apostas simples</li>
              <li>Pular jogos com checklist incompleto</li>
              <li>Evitar ligas imprevisíveis (Brasil, MLS, México)</li>
            </ul>
          </section>

          <section className="rounded-lg border border-light-300 dark:border-dark-600 p-6">
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100 mb-3">4. Regras de Banca</h2>
            <ul className="list-disc ml-5 text-dark-900/90 dark:text-light-100/90 space-y-1">
              <li>Stake base: R$ 30 (aprox. 1–2% da banca alvo)</li>
              <li>Revisão semanal: ajustar stake apenas com incremento sustentável</li>
              <li>Reservar colchão de segurança (10–15% da banca)</li>
              <li>Usar depósitos/saques com <em>affectsInitial</em> para redefinir banca de partida</li>
            </ul>
          </section>

          <section className="rounded-lg border border-light-300 dark:border-dark-600 p-6">
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100 mb-3">5. KPIs e Controle</h2>
            <ul className="list-disc ml-5 text-dark-900/90 dark:text-light-100/90 space-y-1">
              <li>Lucro diário realizado (meta R$ 60–70)</li>
              <li>Greens/Reds por dia e por mercado</li>
              <li>Desvio de odds alvo (média usada vs. 1.18–1.28)</li>
              <li>Progresso mensal vs. meta</li>
            </ul>
            <pre className="bg-light-200 dark:bg-dark-700 rounded p-4 text-sm overflow-x-auto"><code>{`Dia: Terça\nApostas feitas: 3\nStake total: R$ 90\nMercados: 2 DC / 1 HA +3.0\nOdds usadas: 1.20–1.26\nResultado: 2 greens / 1 red\nLucro do dia: R$ 48\nProgresso mensal: +R$ 360`}</code></pre>
          </section>

          <section className="rounded-lg border border-light-300 dark:border-dark-600 p-6">
            <h2 className="text-2xl font-semibold text-dark-900 dark:text-light-100 mb-3">6. Protocolo Pós-Red</h2>
            <ol className="list-decimal ml-5 text-dark-900/90 dark:text-light-100/90 space-y-1">
              <li>Manter stake base</li>
              <li>Pausar próximo jogo volátil</li>
              <li>Revisar checklist e liga antes de voltar</li>
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
}
