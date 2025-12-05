import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/app/components/ui/breadcrumb';

export const metadata: Metadata = {
  title: 'Métodos de Apostas (Privado)',
  description: 'Listagem dos métodos: Rollover, Trader e Salary',
  robots: { index: false, follow: false },
};

export default function MetodoApostasIndexPage() {
  const methods = [
    { href: '/privado/metodo-apostas/rollover', title: 'Rollover', description: 'Plano semanal focado em volume.' },
    { href: '/privado/metodo-apostas/trader', title: 'Trader', description: 'Gestão ativa e operações por mercado.' },
    { href: '/privado/metodo-apostas/salary', title: 'Salary', description: 'Meta mensal baseada em salário.' },
  ];

  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 md:p-8 mb-6 md:mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <h1 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-light-100 mb-2">Métodos de Apostas</h1>
          <p className="text-base md:text-lg text-dark-900/70 dark:text-light-100/70">Escolha um método.</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {methods.map((m) => (
            <Link key={m.href} href={m.href} className="rounded-lg border border-light-300 dark:border-dark-600 bg-light-100/50 dark:bg-dark-800/50 p-4 hover:border-purple-400 dark:hover:border-purple-500 transition-colors">
              <div className="text-lg font-semibold text-dark-900 dark:text-light-100">{m.title}</div>
              <div className="text-sm text-dark-900/70 dark:text-light-100/70 mt-1">{m.description}</div>
              <div className="mt-3 inline-flex items-center text-sm text-purple-700 dark:text-purple-400">Acessar →</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
