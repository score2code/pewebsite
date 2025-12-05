import * as path from 'path';
import * as fs from 'fs/promises';
import type { Metadata } from 'next';
import Breadcrumb from '@/app/components/ui/breadcrumb';
import RelatorioPrivadoClient from './RelatorioPrivadoClient';

type BetRow = {
  date: string;
  bingo: boolean;
  league: string;
  homeTeam: string;
  awayTeam: string;
  stake: number;
  odd: number;
  prediction?: string | string[];
  return?: number;
  tipster?: string;
  marketing?: boolean;
  status: 'green' | 'red' | 'void' | 'pending' | 'postponed';
  type?: 'bet' | 'transaction';
};

export const metadata: Metadata = {
  title: 'Relatório de Apostas (Privado)',
  description: 'Página privada com tabela de apostas e volume total.',
  robots: { index: false, follow: false },
};


async function loadBets(): Promise<BetRow[]> {
  const dirCandidates = [
    path.join(process.cwd(), 'app', 'data', 'hidden', 'bets'),
    path.join(process.cwd(), 'data', 'hidden', 'bets'),
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
    path.join(process.cwd(), 'app', 'data', 'hidden', 'bets.json'),
    path.join(process.cwd(), 'data', 'hidden', 'bets.json'),
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


function formatCurrencyBRL(value: number): string {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
}

function formatStatusLabel(status: BetRow['status']): string {
  if (status === 'green') return 'green';
  if (status === 'red') return 'red';
  if (status === 'void') return 'void';
  if (status === 'postponed') return 'adiado';
  return 'pendente';
}

function formatDateBR(dateStr: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateStr);
  if (m) {
    const [, y, mo, d] = m;
    return `${d}/${mo}/${y}`;
  }
  return new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', timeZone: 'America/Sao_Paulo' }).format(new Date(dateStr));
}

function computeNetReturn(stake: number, odd: number, status: BetRow['status']): number {
  if (status === 'green') return stake * odd - stake;
  if (status === 'red') return -stake;
  if (status === 'void') return 0;
  return 0;
}

function computeNetReturnFromBet(b: BetRow): number {
  const stake = Number(b.stake) || 0;
  const odd = Number(b.odd) || 0;
  if (typeof b.return === 'number') {
    if (b.status === 'green') return Number(b.return) - stake;
    if (b.status === 'red') return -stake;
    if (b.status === 'void') return 0;
    return 0;
  }
  return computeNetReturn(stake, odd, b.status);
}

function formatPredictions(pred?: string | string[]): string {
  if (!pred) return '';
  return Array.isArray(pred) ? pred.join(', ') : pred;
}

export default async function RelatorioApostasPrivadoPage() {
  const bets = await loadBets();
  const initialBankroll = 325.74;

  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <Breadcrumb className="mb-4" />

        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 md:p-8 mb-6 md:mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <h1 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-light-100 mb-2">Relatório de Apostas</h1>
          <p className="text-base md:text-lg text-dark-900/70 dark:text-light-100/70">Página privada, fora do menu e não indexável por buscadores.</p>
        </header>

        <RelatorioPrivadoClient bets={bets} initialBankroll={initialBankroll} />
      </div>
    </div>
  );
}
