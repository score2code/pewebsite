import Breadcrumb from '@/app/components/ui/breadcrumb';
import RelatedGuides from '@/app/components/related-guides';
import { generateGuideMetadata } from '@/app/utils/metadata';
import { buildArticleJsonLd } from '@/app/lib/jsonld';

export const metadata = generateGuideMetadata({
  title: 'Cálculo de Probabilidade e Confiança: Metodologia do Site',
  description:
    'Entenda como estimamos probabilidade e confiança exibidas nos cards de palpites: dados, pesos, ajustes e casos especiais.',
  path: 'calculo-de-probabilidade-e-confianca',
});

export default function GuideProbabilityConfidence() {
  return (
    <div className="min-h-screen pt-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />

        <article
          className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 border border-light-300 dark:border-dark-600
            shadow-custom dark:shadow-custom-dark backdrop-blur-sm"
        >
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(
                buildArticleJsonLd({
                  url: 'https://palpitesdodia.online/conteudos/guias/calculo-de-probabilidade-e-confianca',
                  title: 'Cálculo de Probabilidade e Confiança: Metodologia do Site',
                  description:
                    'Entenda como estimamos probabilidade e confiança exibidas nos cards de palpites: dados, pesos, ajustes e casos especiais.',
                })
              ),
            }}
          />
          <header className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-light-100 mb-3">
              Cálculo de Probabilidade e Confiança
            </h1>
            <p className="text-dark-900/70 dark:text-light-100/70">
              Este guia descreve como o site estima as métricas de <strong>probabilidade</strong> e
              <strong> confiança</strong> exibidas nos cards de palpites, com foco em dados utilizados,
              etapas de cálculo, ponderações e ajustes de risco.
            </p>
          </header>

          <section className="space-y-4 mb-8">
            <h2 className="text-2xl font-bold">Definições</h2>
            <ul className="list-disc pl-6 text-dark-900/80 dark:text-light-100/80">
              <li>
                <strong>Probabilidade (%)</strong>: estimativa objetivo-estatística de ocorrência do mercado
                proposto (ex.: Over 2.5, BTTS, Resultado 1X2), expressa em 0–100.
              </li>
              <li>
                <strong>Confiança (%)</strong>: grau de robustez do palpite, derivado da probabilidade ajustada
                pela qualidade/contexto dos dados (amostra, variância, notícias, calendário, alinhamento de
                mercado), também em 0–100.
              </li>
            </ul>
          </section>

          <section className="space-y-4 mb-8">
            <h2 className="text-2xl font-bold">Fontes de Dados</h2>
            <ul className="list-disc pl-6 text-dark-900/80 dark:text-light-100/80">
              <li>Formas recentes (5–10 jogos), casa/fora e ritmo ofensivo/defensivo.</li>
              <li>Tendências de mercado (odds médias e implícitas) e linha escolhida.</li>
              <li>Histórico de confronto direto com janela limitada e relevância contextual.</li>
              <li>Calendário: viagens, sequência de jogos, janela de descanso e rotações.</li>
              <li>Contexto: suspensões/lesões relevantes, clima e importância do jogo.</li>
            </ul>
          </section>

          <section className="space-y-4 mb-8">
            <h2 className="text-2xl font-bold">Etapas de Cálculo</h2>
            <ol className="list-decimal pl-6 space-y-2 text-dark-900/80 dark:text-light-100/80">
              <li>
                <strong>Modelagem base</strong>: geramos uma estimativa preliminar de ocorrência do mercado
                usando média móvel de desempenho, ajuste casa/fora e tendência recente.
              </li>
              <li>
                <strong>Alinhamento com o mercado</strong>: comparamos a estimativa com a probabilidade implícita
                das odds (p = 1/odd ajustada por margem). Diferenças consistentes sugerem valor.
              </li>
              <li>
                <strong>Ajustes de qualidade</strong>: aplicamos penalizações/bonificações conforme amostra,
                variância e confiabilidade de dados (ex.: jogos recentes mais pesados, ligas com maior
                previsibilidade recebem peso extra).
              </li>
              <li>
                <strong>Risco contextual</strong>: reduzimos a estimativa diante de incertezas (lineups, viagens
                longas, clima severo, congestão de calendário) e elevamos quando o contexto favorece
                claramente o mercado.
              </li>
            </ol>
          </section>

          <section className="space-y-4 mb-8">
            <h2 className="text-2xl font-bold">Fórmula Simplificada</h2>
            <p className="text-dark-900/80 dark:text-light-100/80">
              Em termos práticos, usamos uma combinação ponderada:
            </p>
            <pre className="bg-light-100 dark:bg-dark-900 p-4 rounded-md overflow-x-auto text-sm">
{`Probabilidade = clamp(0, 100, (
  w_form * Prob(Forma) +
  w_homeAway * Ajuste(Casa/Fora) +
  w_market * Prob(Implícita da Odd) +
  w_h2h * Tendência(H2H) +
  w_league * Estabilidade(Liga)
))

Confiança = clamp(0, 100, (
  Probabilidade * k_alinhamentoMercado +
  k_amostra * QualidadeAmostra -
  k_risco * FatoresDeRisco +
  k_consistencia * BaixaVariância
))`}
            </pre>
            <p className="text-dark-900/70 dark:text-light-100/70">
              Pesos (<code>w_*</code>) e constantes (<code>k_*</code>) são calibrados por liga e mercado para
              melhorar estabilidade e reduzir overfitting. O objetivo é entregar números úteis e comparáveis
              entre diferentes competições e cenários.
            </p>
          </section>

          <section className="space-y-4 mb-8">
            <h2 className="text-2xl font-bold">Casos Especiais</h2>
            <ul className="list-disc pl-6 text-dark-900/80 dark:text-light-100/80">
              <li>
                <strong>Mercados de cartões/escanteios</strong>: maior dependência de ritmo e estilo; confiança
                é moderada em ligas de alta variância.
              </li>
              <li>
                <strong>Clássicos e jogos decisivos</strong>: elevamos peso de contexto e reduzimos confiança
                se a variância histórica for alta.
              </li>
              <li>
                <strong>Odds extremas</strong>: aplicamos filtros de margem e verificações para evitar distorções
                na probabilidade implícita.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Leitura nos Cards</h2>
            <ul className="list-disc pl-6 text-dark-900/80 dark:text-light-100/80">
              <li>
                <strong>Probabilidade</strong>: indica quão provável é a ocorrência do mercado.
              </li>
              <li>
                <strong>Confiança</strong>: reflete quão robusta é a estimativa, dado o contexto e a qualidade
                dos dados. Dois palpites podem ter probabilidades similares, mas confiança diferente.
              </li>
            </ul>

            <RelatedGuides
              guides={[
                {
                  title: 'Interpretando Probabilidades e Odds',
                  slug: 'interpretando-probabilidades-e-odds',
                  description: 'Como ler odds, converter para probabilidade e evitar armadilhas.',
                },
                {
                  title: 'Como Identificar Valor nas Odds',
                  slug: 'como-identificar-valor-nas-odds',
                  description: 'Métodos práticos para comparar odds com sua estimativa.',
                },
                {
                  title: 'Sistema de Staking e Progressão',
                  slug: 'sistema-staking-progressao',
                  description: 'Como ajustar stake ao nível de confiança e risco.',
                },
              ]}
            />
          </section>

          <section className="space-y-4 mt-8">
            <h2 className="text-2xl font-bold">Checklist Rápida</h2>
            <ul className="list-disc pl-6 text-dark-900/80 dark:text-light-100/80">
              <li>Confirmar fontes e janela de dados.</li>
              <li>Comparar estimativa com probabilidade implícita da odd.</li>
              <li>Aplicar ajustes de risco (calendário, clima, desfalques).</li>
              <li>Revisar pesos por liga e mercado regularmente.</li>
            </ul>
          </section>

          <section className="space-y-4 mt-8">
            <h2 className="text-2xl font-bold">Erros Comuns</h2>
            <ul className="list-disc pl-6 text-dark-900/80 dark:text-light-100/80">
              <li>Usar dados desatualizados ou amostra muito curta.</li>
              <li>Não ajustar por variância e qualidade de liga.</li>
              <li>Confiar exclusivamente em odds sem contextualizar.</li>
            </ul>
          </section>
        </article>
      </div>
    </div>
  );
}
