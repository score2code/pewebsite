import * as path from 'path';
import * as fs from 'fs/promises';
import type { Metadata } from 'next';
import Breadcrumb from '@/app/components/ui/breadcrumb';
import RelatorioPuntherClient from './RelatorioPuntherClient';

type BetRow = {
  date: string;
  model?: 'punther' | 'volume' | 'leverage';
  league?: string;
  homeTeam?: string;
  awayTeam?: string;
  stake?: number;
  odd?: number;
  prediction?: string | string[];
  return?: number;
  status?: 'green' | 'red' | 'void' | 'pending' | 'postponed' | 'cashout';
  type?: 'bet' | 'transaction';
  kind?: 'deposit' | 'withdraw' | 'withdrawal';
  amount?: number;
  affectsInitial?: boolean;
  note?: string;
};

export const metadata: Metadata = {
  title: 'Relatório Casa de Apostas (Privado)',
  description: 'Relatório baseado em registros de casas de apostas (bets).',
  robots: { index: false, follow: false },
};

async function loadBets(): Promise<BetRow[]> {
  const dirCandidates = [
    path.join(process.cwd(), 'app', 'data', 'hidden', 'punther'),
    path.join(process.cwd(), 'data', 'hidden', 'punther'),
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

  const fileFallbacks = [
    path.join(process.cwd(), 'app', 'data', 'hidden', 'punther.json'),
    path.join(process.cwd(), 'data', 'hidden', 'punther.json'),
  ];
  for (const filePath of fileFallbacks) {
    try {
      const content = await fs.readFile(filePath, 'utf-8');
      const data = JSON.parse(content);
      if (Array.isArray(data)) return data;
    } catch {}
  }
  return [];
}

export default async function RelatorioCasaPrivadoPage() {
  const bets = await loadBets();
  const initialBankroll = 0;

  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <Breadcrumb className="mb-4" />

        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 md:p-8 mb-6 md:mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <h1 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-light-100 mb-2">Relatório – Punther</h1>
          <p className="text-base md:text-lg text-dark-900/70 dark:text-light-100/70">Baseado em dados de punther.</p>
        </header>

        <RelatorioPuntherClient bets={bets} initialBankroll={initialBankroll} />
      </div>
    </div>
  );
}
