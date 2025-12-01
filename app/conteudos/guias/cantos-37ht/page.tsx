import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateGuideMetadata } from '@/app/utils/metadata';

export const metadata = generateGuideMetadata({
  title: 'Guia de Cantos 37HT',
  description:
    'Estratégia focada em escanteios até aproximadamente 37 minutos do primeiro tempo, com critérios objetivos e gestão de risco.',
  path: 'cantos-37ht',
});

export default function Cantos37HTPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />

        {/* Header */}
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8
            border border-light-300 dark:border-dark-600
            shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <h1 className="text-4xl font-bold text-dark-900 dark:text-light-100 mb-4">
            Guia de Cantos 37HT
          </h1>
          <p className="text-lg text-dark-900/70 dark:text-light-100/70">
            Estratégia focada em escanteios até ~37 minutos do primeiro tempo.
          </p>
        </header>

        {/* Content */}
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8
            border border-light-300 dark:border-dark-600
            shadow-custom dark:shadow-custom-dark backdrop-blur-sm">

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">
              Conceito e Objetivo
            </h2>
            <p className="text-dark-900/70 dark:text-light-100/70">
              O método "Cantos 37HT" busca capturar a pressão ofensiva típica da reta final do
              primeiro tempo, quando times aumentam o volume de cruzamentos e bolas paradas.
              A entrada é feita em mercados de "escanteios até o intervalo" com um limite
              de tempo operacional aproximado entre 30 e 37 minutos de jogo (ajuste conforme
              ritmo e contexto).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">
              Mercados e Critérios
            </h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Mercado: escanteios HT (total ou por equipe).</li>
              <li>Pressão ofensiva clara: posse no terço final, volume de cruzamentos.</li>
              <li>Laterais fortes e amplitude: uso constante dos corredores.</li>
              <li>Odds razoáveis: risco/retorno compatível com a janela curta.</li>
              <li>Evitar: jogos travados, clima adverso, campo pesado, anti-jogo.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">
              Sinais ao Vivo (Entrada)
            </h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Sequência de ataques pelo flanco e cruzamentos bloqueados.</li>
              <li>Escanteios recentes sugerindo padrão de repetição.</li>
              <li>Faltas próximas à área e pressão de segundas bolas.</li>
              <li>Superioridade técnica e tática do mandante ou do favorito.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">
              Gestão e Saída
            </h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Stake moderada (janela curta + variância elevada).</li>
              <li>Encerrar ao bater meta de escanteios ou ao reduzir pressão.</li>
              <li>Evitar re-entradas sem sinais claros de continuidade.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">
              Exemplo Prático
            </h2>
            <p className="text-dark-900/70 dark:text-light-100/70">
              Jogo com 2–3 cantos já ocorridos e sequência de ataques laterais. Entre 32–37'
              a tendência é manter a pressão por mais 1–2 cantos antes do intervalo.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">Checklist Rápido</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Pressão consistente nos últimos 5–10 minutos.</li>
              <li>Laterais ativos e cruzamentos bloqueados recorrentes.</li>
              <li>Preço compatível com janela e variância da liga.</li>
              <li>Plano de saída ao reduzir ritmo ou bater meta.</li>
            </ul>
          </section>
        </div>
      </article>
    </div>
  );
}
