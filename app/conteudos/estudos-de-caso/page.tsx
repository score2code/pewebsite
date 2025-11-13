import Link from 'next/link';
import Breadcrumb from '@/app/components/ui/breadcrumb';
import { generateContentMetadata } from '@/app/utils/metadata';

export const metadata = generateContentMetadata({
  title: 'Estudos de Caso',
  description: 'Deep dives em tickets e jogos com método e lições práticas.',
  path: 'estudos-de-caso',
});

const cases = [
  { title: 'Bilhete do Dia: acertos e erros', slug: 'bilhete-dia-acertos-erros', description: 'Revisão estruturada e ajustes futuros.' },
  { title: 'Por que esse Under falhou?', slug: 'under-que-falhou', description: 'Diagnóstico de entradas e contexto.' },
  { title: 'Cantos 37HT: caso prático', slug: 'canto-37ht-caso-pratico', description: 'Janela, execução e saída.' },
  { title: 'Leitura de Pressão HT: estudo', slug: 'leitura-pressao-ht-estudo', description: 'Sinais ao vivo e timing de entradas.' },
  { title: 'Apostas em odds distorcidas', slug: 'aposta-em-odds-distorcidas', description: 'Como identificar e explorar com cautela.' },
];

export default function EstudosDeCasoPage() {
  return (
    <div className="min-h-screen pt-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h1 className="text-3xl font-bold">Estudos de Caso</h1>
          <p className="text-dark-900/70 dark:text-light-100/70">Análises pós-jogo e revisão de decisões para melhorar replicabilidade.</p>
        </header>
        <section className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark">
          <h2 className="text-2xl font-bold mb-3">Como usar</h2>
          <ul className="list-disc list-inside space-y-2 text-dark-900/70 dark:text-light-100/70 ml-4">
            <li>Estruture cada caso com objetivos, dados, método e resultados.</li>
            <li>Extraia lições e ajuste critérios para próximas entradas.</li>
            <li>Priorize evidências e registre decisões para revisão posterior.</li>
          </ul>
        </section>
        <div className="grid gap-6 md:grid-cols-2">
          {cases.map((a) => (
            <Link key={a.slug} href={`/conteudos/estudos-de-caso/${a.slug}`} className="group">
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
