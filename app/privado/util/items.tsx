import * as path from 'path';
import * as fs from 'fs/promises';
import { Coins, Banknote, TrendingUp, Target, ListChecks, XCircle, CheckCircle } from 'lucide-react';

type BetRow = {
  date: string;
  stake?: number;
  odd?: number;
  return?: number;
  tipster?: string;
  status?: 'green' | 'red' | 'void' | 'pending' | 'postponed' | 'cashout';
  type?: 'bet' | 'transaction';
  kind?: 'deposit' | 'withdraw' | 'withdrawal';
  amount?: number;
  affectsInitial?: boolean;
  note?: string;
};

function formatCurrencyBRL(value: number): string {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
}

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

function isWithdrawalKind(kind?: string): boolean {
  if (!kind) return false;
  const k = String(kind).toLowerCase();
  return k === 'withdraw' || k === 'withdrawal';
}

function computeTransactionEffect(b: BetRow): number {
  if (b.type !== 'transaction') return 0;
  const amt = Number(b.amount) || 0;
  return isWithdrawalKind(b.kind) ? -amt : amt;
}

export default async function Items({ category, tipster }: { category: string, tipster?: string }) {
  const bets = await loadBets(category);
  const transactions = bets.filter(b => b.type === 'transaction');
  const initialAdjust = transactions.filter(t => Boolean(t.affectsInitial)).reduce((s, t) => s + computeTransactionEffect(t), 0);
  const totalBets = (tipster?: string) => bets.filter(b => b.type === 'bet' && (!tipster || b.tipster === tipster)).length;
  const totalReds = (tipster?: string) => bets.filter(b => b.status === 'red' && (!tipster || b.tipster === tipster)).length;
  const totalGreens = (tipster?: string) => bets.filter(b => b.status === 'green' && (!tipster || b.tipster === tipster)).length;
  const totalStake = (tipster?: string) => bets.filter(b => b.status !== 'pending' && b.type === 'bet' && (!tipster || b.tipster === tipster)).reduce((sum, b) => sum + (b.stake || 0), 0);
  const totalReturn = (tipster?: string) => bets.filter(b => b.status !== 'pending' && b.type === 'bet' && (!tipster || b.tipster === tipster)).reduce((sum, b) => sum + (b.return || 0), 0) - totalStake(tipster);

  const returnClass = `${totalReturn(tipster) > 0 ? 'text-green-700 dark:text-green-400' : totalReturn(tipster) < 0 ? 'text-red-700 dark:text-red-400' : 'text-dark-900/70 dark:text-light-100/70'}`
  const bankrollClass = `${(initialAdjust + totalReturn(tipster)) > initialAdjust ? 'text-green-700 dark:text-green-400' : (initialAdjust + totalReturn(tipster)) < initialAdjust ? 'text-red-700 dark:text-red-400' : 'text-dark-900/70 dark:text-light-100/70'}`

  return (
    <div className={`grid grid-cols-2 md:grid-cols-8 gap-3 mb-2`}>
      <div className={`rounded-lg border border-light-300 dark:border-dark-600 bg-light-100/50 dark:bg-dark-800/50 p-3 flex items-center gap-2 ${ tipster ? 'md:col-start-3' : ''}`}>
        <Target size={16} className="text-blue-700 dark:text-blue-400" />
        <div className="flex-1">
          <div className="text-xs text-dark-900/70 dark:text-light-100/70">Segmento</div>
          <div className={`font-bold capitalize`}>{tipster ? tipster?.split('2')[0] : category}</div>
        </div>
      </div>
      {!tipster && (
      <div className="rounded-lg border border-light-300 dark:border-dark-600 bg-light-100/50 dark:bg-dark-800/50 p-3 flex items-center gap-2">
        <Banknote size={16} className="text-dark-900/70 dark:text-light-100/70" />
        <div className="flex-1">
          <div className="text-xs text-dark-900/70 dark:text-light-100/70">Banca</div>
          <div className="font-bold text-dark-900 dark:text-light-100">{formatCurrencyBRL(initialAdjust)}</div>
        </div>
      </div>
      )}
      {!tipster && (
      <div className="rounded-lg border border-light-300 dark:border-dark-600 bg-light-100/50 dark:bg-dark-800/50 p-3 flex items-center gap-2">
        <Banknote size={16} className="text-dark-900/70 dark:text-light-100/70" />
        <div className="flex-1">
          <div className="text-xs text-dark-900/70 dark:text-light-100/70">Banca Atual</div>
          <div className={`font-bold ${bankrollClass}`}>{formatCurrencyBRL(initialAdjust + totalReturn(tipster))}</div>
        </div>
      </div>
      )}
      <div className="rounded-lg border border-light-300 dark:border-dark-600 bg-light-100/50 dark:bg-dark-800/50 p-3 flex items-center gap-2">
        <TrendingUp size={16} className={returnClass} />
        <div className="flex-1">
          <div className="text-xs text-dark-900/70 dark:text-light-100/70">Lucro/Prejuízo</div>
          <div className={`font-bold ${returnClass}`}>{formatCurrencyBRL(totalReturn(tipster))}</div>
        </div>
      </div>
      <div className="rounded-lg border border-orange-200 dark:border-orange-700 bg-orange-50 dark:bg-orange-900/20 p-3 flex items-center gap-2">
        <Coins size={16} className="text-orange-700 dark:text-orange-400" />
        <div className="flex-1">
          <div className="text-xs text-orange-700 dark:text-orange-400">Volume</div>
          <div className="font-bold text-orange-700 dark:text-orange-400">{formatCurrencyBRL(totalStake(tipster))}</div>
        </div>
      </div>
      <div className="rounded-lg border border-indigo-200 dark:border-indigo-700 bg-indigo-50 dark:bg-indigo-900/20 p-3 flex items-center gap-2">
        <ListChecks size={16} className="text-indigo-700 dark:text-indigo-400" />
        <div className="flex-1">
          <div className="text-xs text-indigo-700 dark:text-indigo-400">Apostas</div>
          <div className="font-bold text-indigo-700 dark:text-indigo-400">{totalBets(tipster)}</div>
        </div>
      </div>
      <div className="rounded-lg border border-red-200 dark:border-red-700 bg-red-50 dark:bg-red-900/20 p-3 flex items-center gap-2">
        <XCircle size={16} className="text-red-700 dark:text-red-400" />
        <div className="flex-1">
          <div className="text-xs text-red-700 dark:text-red-400">Reds</div>
          <div className="font-bold text-red-700 dark:text-red-400">{totalReds(tipster)}</div>
        </div>
      </div>
      <div className="rounded-lg border border-green-200 dark:border-green-700 bg-green-50 dark:bg-green-900/20 p-3 flex items-center gap-2">
        <CheckCircle size={16} className="text-green-700 dark:text-green-400" />
        <div className="flex-1">
          <div className="text-xs text-green-700 dark:text-green-400">Greens</div>
          <div className="font-bold text-green-700 dark:text-green-400">{totalGreens(tipster)}</div>
        </div>
      </div>
    </div>
  )
}
