import Link from 'next/link';
import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';

export const metadata = generateContentMetadata({
  title: 'Metodologia e Modelagem',
  description: 'Como modelos são calibrados, validados e ajustados por competição.',
  path: 'metodologia-modelagem',
});

const methods = [
  { title: 'Calibração de probabilidade vs. odds', slug: 'calibracao-probabilidade-vs-odds', description: 'Alinhando estimativas com o mercado.' },
  { title: 'Validação histórica de um modelo simples', slug: 'validacao-historica-modelo-simples', description: 'Testes e métricas básicas de performance.' },
  { title: 'Pesos e variáveis para cantos', slug: 'pesos-variaveis-escanteios', description: 'Quais features ajudam a prever cantos.' },
  { title: 'Tratamento de outliers', slug: 'tratamento-outliers', description: 'Reduzindo impacto de eventos extremos.' },
  { title: 'Ajuste por competição', slug: 'ajuste-por-competicao', description: 'Personalizando parâmetros por liga.' },
];

export default function MetodologiaModelagemPage() {
  return (
    <div className="min-h-screen pt-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Metodologia e Modelagem</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Bastidores dos modelos e validações.</p>
        </header>
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

