import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/app/components/ui/breadcrumb';
import PrivadoGate from './PrivadoGate';
import Items from './util/items';

export const metadata: Metadata = {
  title: 'Área Privada',
  description: 'Índice das páginas privadas do site.',
  robots: { index: false, follow: false },
};

export default function PrivadoIndexPage() {
  const pages = [
    {
      href: '/privado/metodos',
      title: 'Métodos',
      description: 'Rollover, Trader e Punther.'
    },
    {
      href: '/privado/planejamento',
      title: 'Planejamento',
      description: 'Lista para seleção de jogos por data e recomendações.'
    },
    {
      href: '/privado/relatorios',
      title: 'Relatórios',
      description: 'Tabela com volume, lucro e filtros.'
    },
  ];

  return (
    <PrivadoGate>
      <div className="min-h-screen pt-8 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Breadcrumb className="mb-4" />
          <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 md:p-8 mb-6 md:mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
            <h1 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-light-100">Dashboard</h1>
          </header>

          <Items category="rollover" />
          <div className="rounded-lg border border-light-300 dark:border-dark-600 bg-light-100/50 dark:bg-dark-800/50 p-4 hover:border-purple-400 dark:hover:border-purple-500 mb-2">
            <h3 className="text-lg font-bold text-dark-900 dark:text-light-100 text-center">Bancas com Dinheiro Real</h3>
          </div>
          <Items category="punther" />
          <Items category="trader" />
          <Items category="tipster" />
          <Items category="tipster" tipster="Yuri" />
          <Items category="tipster" tipster="Rafaela" />
          <Items category="tipster" tipster="Tylty" />
          <Items category="tipster" tipster="Edge2Green" />
          <div className="rounded-lg border border-light-300 dark:border-dark-600 bg-light-100/50 dark:bg-dark-800/50 p-4 hover:border-purple-400 dark:hover:border-purple-500 mb-2">
            <h3 className="text-lg font-bold text-dark-900 dark:text-light-100 text-center">O RED é normal, bingos com apostas grátis</h3>
          </div>
          <Items category="analysis" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            {pages.map((p) => (
              <Link key={p.href} href={p.href} className="rounded-lg border border-light-300 dark:border-dark-600 bg-light-100/50 dark:bg-dark-800/50 p-4 hover:border-purple-400 dark:hover:border-purple-500 transition-colors">
                <div className="text-lg font-semibold text-dark-900 dark:text-light-100">{p.title}</div>
                <div className="text-sm text-dark-900/70 dark:text-light-100/70 mt-1">{p.description}</div>
                <div className="mt-3 inline-flex items-center text-sm text-purple-700 dark:text-purple-400">Acessar →</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </PrivadoGate>
  );
}
