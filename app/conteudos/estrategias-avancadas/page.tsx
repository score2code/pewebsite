import Link from 'next/link';
import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';

export const metadata = generateContentMetadata({
  title: 'Estratégias Avançadas',
  description: 'Táticas, gestão e execuções refinadas para mercados ao vivo e pré-jogo.',
  path: 'estrategias-avancadas',
});

const strategies = [
  { title: 'Escalonando entradas em momentos de pressão', slug: 'escalonar-entradas-pressao', description: 'Como fracionar entradas com critério.' },
  { title: 'Gestão de stake por confiança', slug: 'gestao-stake-por-confianca', description: 'Ajustando exposição ao nível de convicção.' },
  { title: 'Hedge parcial em ao vivo', slug: 'hedge-parcial-ao-vivo', description: 'Proteções sem anular o edge.' },
  { title: 'Entrada por janelas de tempo', slug: 'entrada-por-janelas-tempo', description: 'Timing objetivo e disciplina operacional.' },
  { title: 'Ajuste de estratégia por cenário', slug: 'ajuste-estrategia-cenario', description: 'Adaptando o plano ao jogo real.' },
  { title: 'Hedge inteligente em cantos', slug: 'hedge-inteligente-cantos', description: 'Proteção e reentrada com risco controlado.' },
  { title: 'Gestão de banca progressiva', slug: 'gestao-de-banca-progressiva', description: 'Alocação variável baseada em confiança e variância.' },
  { title: 'Estratégia H2H adaptativa', slug: 'estrategia-h2h-adaptativa', description: 'Contextualize histórico de confrontos com elenco e técnico.' },
  { title: 'Entradas por janelas temporais', slug: 'entrada-por-janelas-temporais', description: 'Exploração de períodos com maior probabilidade de evento.' },
];

export default function EstrategiasAvancadasPage() {
  return (
    <div className="min-h-screen pt-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Estratégias Avançadas</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Táticas e gestão para execução disciplinada em mercados ao vivo e pré-jogo.</p>
        </header>
        <section className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h2 className="text-xl font-bold mb-3">Princípios de execução</h2>
          <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
            <li>Objetivos e gatilhos claros antes do jogo começar.</li>
            <li>Gestão de risco integrada ao nível de confiança.</li>
            <li>Disciplina operacional: sem improvisos fora do plano.</li>
          </ul>
        </section>
        <div className="grid gap-6 md:grid-cols-2">
          {strategies.map((a) => (
            <Link key={a.slug} href={`/conteudos/estrategias-avancadas/${a.slug}`} className="group">
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
