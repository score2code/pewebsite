import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/app/components/ui/breadcrumb';

export const metadata: Metadata = {
  title: 'Relatórios (Privado)',
  description: 'Escolha entre Casa de Apostas e Exchange',
  robots: { index: false, follow: false },
};

export default function RelatoriosIndexPrivadoPage() {
  const reports = [
    { href: '/privado/relatorio-apostas/casa', title: 'Casa de Apostas', description: 'Relatório com dados de bets/**' },
    { href: '/privado/relatorio-apostas/exchange', title: 'Exchange', description: 'Relatório com dados de live/**' },
  ];

  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 md:p-8 mb-6 md:mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <h1 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-light-100 mb-2">Relatórios</h1>
          <p className="text-base md:text-lg text-dark-900/70 dark:text-light-100/70">Selecione o tipo de relatório abaixo.</p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {reports.map((r) => (
            <Link key={r.href} href={r.href} className="rounded-lg border border-light-300 dark:border-dark-600 bg-light-100/50 dark:bg-dark-800/50 p-4 hover:border-purple-400 dark:hover:border-purple-500 transition-colors">
              <div className="text-lg font-semibold text-dark-900 dark:text-light-100">{r.title}</div>
              <div className="text-sm text-dark-900/70 dark:text-light-100/70 mt-1">{r.description}</div>
              <div className="mt-3 inline-flex items-center text-sm text-purple-700 dark:text-purple-400">Acessar →</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
