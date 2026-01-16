import * as path from 'path';
import * as fs from 'fs/promises';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/app/components/ui/breadcrumb';
import PrivadoGate from './PrivadoGate';
import Dashboard from './Dashboard';

type BetRow = {
  date: string;
  stake?: number;
  odd?: number;
  return?: number;
  tipster?: string;
  status?: 'green' | 'red' | 'void' | 'pending' | 'postponed' | 'cashout';
  type?: 'bet' | 'transaction' | 'audit';
  kind?: 'deposit' | 'withdraw' | 'withdrawal';
  amount?: number;
  affectsInitial?: boolean;
  note?: string;
  isDepositFree?: boolean;
};

export const metadata: Metadata = {
  title: 'Área Privada',
  description: 'Índice das páginas privadas do site.',
  robots: { index: false, follow: false },
};

async function loadBets(category: string): Promise<BetRow[]> {
  const dirCandidates = [
    path.join(process.cwd(), 'app', 'data', 'hidden', category),
    path.join(process.cwd(), 'data', 'hidden', category),
  ];

  const rows: BetRow[] = [];

  for (const baseDir of dirCandidates) {
    try {
      const years = await fs.readdir(baseDir).catch(() => []);
      for (const y of years) {
        const yearDir = path.join(baseDir, y);
        const months = await fs.readdir(yearDir).catch(() => []);
        for (const m of months) {
          const monthDir = path.join(yearDir, m);
          const files = await fs.readdir(monthDir).catch(() => []);
          for (const f of files) {
            if (f.endsWith('.json')) {
              const filePath = path.join(monthDir, f);
              try {
                const content = await fs.readFile(filePath, 'utf-8');
                const data = JSON.parse(content);
                if (Array.isArray(data)) rows.push(...data);
              } catch {}
            }
          }
        }
      }
    } catch {}
  }

  if (rows.length) return rows;
  return [];
}

export default async function PrivadoIndexPage() {
  const totals = {
    rollover: await loadBets('rollover'),
    punter: await loadBets('punter'),
    trader: await loadBets('trader'),
    tipster: await loadBets('tipster'),
    analysis: await loadBets('analysis'),
  };
  const pages = [
    {
      href: '/privado/metodos',
      title: 'Métodos',
      description: 'Rollover, Trader e Punter.'
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
    },,
    {
      href: '/privado/anotacoes',
      title: 'Anotações',
      description: 'Anotações e observações sobre as estratégias'
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

          <Dashboard totals={totals} />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {pages.map((p: { href: string; title: string; description: string } = { href: '', title: '', description: '' }) => (
              <Link key={p?.href} href={p?.href || ''} className="rounded-lg border border-light-300 dark:border-dark-600 bg-light-100/50 dark:bg-dark-800/50 p-4 hover:border-purple-400 dark:hover:border-purple-500 transition-colors">
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
