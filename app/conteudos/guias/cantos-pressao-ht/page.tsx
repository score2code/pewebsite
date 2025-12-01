import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateGuideMetadata } from '@/app/utils/metadata';

export const metadata = generateGuideMetadata({
  title: 'Guia de Cantos por Pressão HT',
  description:
    'Método alternativo focado em cantos gerados por pressão contínua até o intervalo, com critérios e gestão claros.',
  path: 'cantos-pressao-ht',
});

export default function CantosPressaoHTPage() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />

        {/* Header */}
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8
            border border-light-300 dark:border-dark-600
            shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <h1 className="text-4xl font-bold text-dark-900 dark:text-light-100 mb-4">
            Guia de Cantos por Pressão HT
          </h1>
          <p className="text-lg text-dark-900/70 dark:text-light-100/70">
            Método alternativo focado em cantos gerados por pressão contínua até o intervalo.
          </p>
        </header>

        {/* Content */}
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8
            border border-light-300 dark:border-dark-600
            shadow-custom dark:shadow-custom-dark backdrop-blur-sm">

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">
              Ideia Central
            </h2>
            <p className="text-dark-900/70 dark:text-light-100/70">
              A lógica é semelhante ao 37HT, porém com foco na manutenção da pressão
              (posse final, escanteios sequenciais, cruzamentos bloqueados) ao longo de
              todo o primeiro tempo, procurando janelas onde o mercado permite uma boa
              relação risco/retorno sem depender de um minuto específico.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">
              Critérios Objetivos
            </h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Sequências de cantos ou bolas paradas próximas.</li>
              <li>Amplitude constante e laterais explorados pelos dois times ou favorito.</li>
              <li>Finalizações bloqueadas com desvio para linha de fundo.</li>
              <li>Campo e clima favorecendo cruzamentos (sem chuva intensa ou vento forte).</li>
              <li>Odds que não exigem eventos improváveis no curto prazo.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">
              Entrada e Gestão
            </h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Escalonar entradas em momentos de pico de pressão.</li>
              <li>Reduzir posição quando o ritmo cair ou após cantos consecutivos.</li>
              <li>Evitar exposição longa em jogos truncados ou com anti-jogo.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">
              Checklist Rápido
            </h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Pressão visível no terço final?</li>
              <li>Sequência recente de escanteios ou cruzamentos bloqueados?</li>
              <li>Odds adequadas ao risco e janela de tempo?</li>
              <li>Condições de jogo favoráveis a bola aérea e amplitude?</li>
            </ul>
          </section>
          <section className="mt-8">
            <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">Exemplo prático</h2>
            <div className="space-y-4 text-dark-900/70 dark:text-light-100/70">
              <p>
                Sequência de 2 cantos em 5 minutos, amplitude constante e cruzamentos bloqueados.
                Entrada pequena em cantos HT, com saída parcial após novo canto ou queda de ritmo.
              </p>
              <div className="bg-light-200/50 dark:bg-dark-700/50 rounded-lg p-4 border border-light-300 dark:border-dark-600">
                <ul className="list-disc list-inside ml-4">
                  <li>Critérios: posse avançada, laterais ativos, bloqueios recorrentes.</li>
                  <li>Gestão: stake escalonada, reduzir em queda de pressão.</li>
                  <li>Risco: jogo truncado e anti-jogo → evitar exposição longa.</li>
                </ul>
              </div>
            </div>
          </section>
          <section className="mt-8">
            <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100 mb-4">Erros Comuns</h2>
            <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
              <li>Entrar sem confirmação de padrão por alguns minutos.</li>
              <li>Ignorar clima/campo que reduzem cruzamentos.</li>
              <li>Manter exposição após queda clara de ritmo.</li>
            </ul>
          </section>
        </div>
      </article>
    </div>
  );
}
