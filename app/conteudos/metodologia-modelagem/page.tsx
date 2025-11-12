import Link from 'next/link';
import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';

export const metadata = generateContentMetadata({
  title: 'Metodologia e Modelagem',
  description: 'Como modelos são construídos, calibrados, validados e ajustados por competição.',
  path: 'metodologia-modelagem',
});

const methods = [
  { title: 'Calibração de probabilidade vs. odds', slug: 'calibracao-probabilidade-vs-odds', description: 'Alinhando estimativas com o mercado.' },
  { title: 'Validação histórica de um modelo simples', slug: 'validacao-historica-modelo-simples', description: 'Testes e métricas básicas de performance.' },
  { title: 'Pesos e variáveis para escanteios', slug: 'pesos-variaveis-escanteios', description: 'Quais features ajudam a prever cantos.' },
  { title: 'Tratamento de outliers', slug: 'tratamento-outliers', description: 'Reduzindo impacto de eventos extremos.' },
  { title: 'Ajuste por competição', slug: 'ajuste-por-competicao', description: 'Personalizando parâmetros por liga.' },
  { title: 'Limpeza de dados de eventos', slug: 'limpeza-dados-eventos', description: 'Deduplicação, padronização e validação cruzada de eventos.' },
  { title: 'Modelo simples de xG para cantos', slug: 'modelo-simples-xg-cantos', description: 'Pipeline básico: features, treino e avaliação.' },
  { title: 'Validação com tempo efetivo', slug: 'validacao-tempo-efetivo', description: 'Impacto do tempo de bola rolando nas métricas.' },
  { title: 'Avaliação de vieses do modelo', slug: 'avaliacao-vieses-modelo', description: 'Diagnóstico de erros sistemáticos e correções.' },
];

export default function MetodologiaModelagemPage() {
  return (
    <div className="min-h-screen pt-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Metodologia e Modelagem</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Bastidores dos modelos: dados, limpeza, calibração, validação e ajustes por competição.</p>
        </header>
        <section className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h2 className="text-xl font-bold mb-3">Pilares da metodologia</h2>
          <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
            <li>Qualidade de dados: coleta, limpeza, deduplicação e consistência temporal.</li>
            <li>Modelagem transparente: features interpretáveis e pesos ajustados ao contexto.</li>
            <li>Calibração com o mercado: confiabilidade, Brier, log loss e ECE.</li>
            <li>Validação histórica: testes walk-forward por temporada, liga e cenário.</li>
            <li>Robustez e generalização: evitar overfitting e corrigir vieses sistemáticos.</li>
          </ul>
        </section>
        <div className="grid gap-6 md:grid-cols-2">
          {methods.map((a) => (
            <Link key={a.slug} href={`/conteudos/metodologia-modelagem/${a.slug}`} className="group">
              <div className="h-full bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
                <h2 className="text-xl font-bold mb-2">{a.title}</h2>
                <p className="text-dark-900/70 dark:text-light-100/70">{a.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
