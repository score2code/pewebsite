"use client"
import { useEffect } from 'react';
import { Coins, Banknote, TrendingUp, Target, ListChecks, XCircle, CheckCircle, CircleDollarSign, BanknoteArrowUp } from 'lucide-react';

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
};

function formatCurrencyBRL(value: number): string {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
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

interface ItemsProps {
  category: string;
  bets: any[];
  tipster?: string;
  onCalculate?: (total: number) => void;
  totalBankroll?: number
}

export default async function Items({ category, bets, tipster, onCalculate, totalBankroll }: ItemsProps) {
  const transactions = bets.filter(b => b.type === 'transaction');
  const initialAdjust = transactions.filter(t => Boolean(t.affectsInitial)).reduce((s, t) => s + computeTransactionEffect(t), 0);
  const runtimeTrans = transactions.filter(t => !Boolean(t.affectsInitial)).reduce((s, t) => s + computeTransactionEffect(t), 0);
  const totalBets = (tipster?: string) => bets.filter(b => b.type !== 'transaction' && b.type !== 'audit' && (!tipster || b.tipster === tipster)).length;
  const totalReds = (tipster?: string) => bets.filter(b => b.status === 'red' && (!tipster || b.tipster === tipster)).length;
  const totalGreens = (tipster?: string) => bets.filter(b => b.type === 'bet' && b.status === 'green' && (!tipster || b.tipster === tipster)).length;
  const totalOthers = (tipster?: string) => bets.filter(b => b.type === 'bet' && b.status !== 'green' && b.status !== 'red' && b.status !== 'pending' && (!tipster || b.tipster === tipster)).length;
  const totalStake = (tipster?: string) => bets.filter(b => b.status !== 'pending' && b.type !== 'transaction' && (!tipster || b.tipster === tipster)).reduce((sum, b) => sum + (b.stake || 0), 0);
  const totalReturn = (tipster?: string) => bets.filter(b => b.status !== 'pending' && b.type !== 'transaction' && (!tipster || b.tipster === tipster)).reduce((sum, b) => sum + (b.return || 0), 0) - totalStake(tipster);
  const currentBankroll = initialAdjust + totalReturn(tipster) + runtimeTrans

  const returnClass = `${totalReturn(tipster) > 0 ? 'text-green-700 dark:text-green-400' : totalReturn(tipster) < 0 ? 'text-red-700 dark:text-red-400' : 'text-dark-900/70 dark:text-light-100/70'}`
  const bankrollClass = `${(initialAdjust + totalReturn(tipster)) > initialAdjust ? 'text-green-700 dark:text-green-400' : (initialAdjust + totalReturn(tipster)) < initialAdjust ? 'text-red-700 dark:text-red-400' : 'text-dark-900/70 dark:text-light-100/70'}`
  const finalClass = `${(currentBankroll + totalBankroll) > currentBankroll ? 'text-green-700 dark:text-green-400' : (currentBankroll + totalBankroll) < currentBankroll ? 'text-red-700 dark:text-red-400' : 'text-dark-900/70 dark:text-light-100/70'}`
  let personalStake = 0;
  let othersBankroll = 0;
  let initialBankroll = 0;

  if (category === 'rollover') {
    personalStake = bets.filter(b => b.type === 'transaction' && b.kind === 'withdrawal' && b.note?.startsWith('Pessoal:')).reduce((sum, b) => sum + (b.amount || 0), 0);
    othersBankroll = bets.filter(b => b.type === 'transaction' && b.kind === 'withdrawal' && b.note?.startsWith('Banca:')).reduce((sum, b) => sum + (b.amount || 0), 0);
    initialBankroll = initialAdjust  + totalReturn(tipster);
  }

  useEffect(() => {
    if(currentBankroll && onCalculate) {
      onCalculate(currentBankroll);
    }
  }, [currentBankroll, onCalculate]);

  return (
    <>
      <div className={`grid gap-3 mb-2 ${ tipster ? 'grid-cols-1 md:grid-cols-8' : 'grid-cols-1'}`}>
        {!!tipster && (
          <div className="hidden md:flex items-center justify-end gap-2 ml-4">
            <span className="text-indigo-400">└──</span>
          </div>
        )}
        <div className={`rounded-lg border border-indigo-100 dark:border-indigo-900 bg-indigo-50 dark:bg-indigo-900/20 p-3 flex items-center gap-2 ${ tipster ? 'md:col-span-7' : ''}`}>
          <Target size={16} className="text-blue-700 dark:text-blue-400" />
          <div className="flex-1">
            <div className="text-xs text-dark-900/70 dark:text-light-100/70">Segmento</div>
            <div className={`font-bold capitalize`}>{tipster ? tipster?.split('2')[0] : category}</div>
          </div>
        </div>
      </div>
      <div className={`grid grid-cols-2 md:grid-cols-8 gap-3 mb-2`}>
        {!!tipster && (
          <div className="hidden md:flex items-center justify-end">
            <span className="text-indigo-400">└──</span>
          </div>
        )}
        {!!tipster && (
          <div className="hidden md:flex items-center justify-end">
            <span className="text-indigo-400">──────────</span>
          </div>
        )}
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
            <div className={`font-bold ${bankrollClass}`}>{formatCurrencyBRL(initialAdjust + totalReturn(tipster) + runtimeTrans)}</div>
          </div>
        </div>
        )}
        <div className={`rounded-lg border border-light-300 dark:border-dark-600 bg-light-100/50 dark:bg-dark-800/50 p-3 flex items-center gap-2 ${ tipster ? 'md:col-start-3' : ''}`}>
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
            <div className="text-xs text-indigo-700 dark:text-indigo-400">Entradas</div>
            <div className="font-bold text-indigo-700 dark:text-indigo-400">{totalBets(tipster)}</div>
          </div>
        </div>
        <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-red-50 dark:bg-gray-900/20 p-3 flex items-center gap-2">
          <BanknoteArrowUp size={16} className="text-gray-700 dark:text-gray-400" />
          <div className="flex-1">
            <div className="text-xs text-gray-700 dark:text-gray-400">Cashout</div>
            <div className="font-bold text-gray-700 dark:text-gray-400">{totalOthers(tipster)}</div>
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
      {category === 'rollover' && (
        <>
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-yellow-900/20 p-4 hover:border-purple-400 dark:hover:border-purple-500 mb-2">
            <h3 className="text-xs font-bold text-dark-900 dark:text-light-100 text-center">Fluxo de caixa</h3>
          </div>
          <div className={`grid grid-cols-2 md:grid-cols-8 gap-3 mb-2`}>
            <div className="hidden md:flex items-center justify-end gap-2 ml-4">
              <span className="text-indigo-400">└──</span>
            </div>
            <div className="rounded-lg border border-light-300 dark:border-dark-600 bg-light-100/50 dark:bg-dark-800/50 p-3 flex items-center gap-2">
              <Banknote size={16} className="text-dark-900/70 dark:text-light-100/70" />
              <div className="flex-1">
                <div className="text-xs text-dark-900/70 dark:text-light-100/70">Banca inicial</div>
                <div className="font-bold text-orange-700 dark:text-orange-400">{formatCurrencyBRL(initialBankroll)}</div>
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center gap-2 ml-4">
              <span className="text-indigo-400 text-3xl">-</span>
            </div>
            <div className="rounded-lg border border-light-300 dark:border-dark-600 bg-light-100/50 dark:bg-dark-800/50 p-3 flex items-center gap-2">
              <Banknote size={16} className="text-dark-900/70 dark:text-light-100/70" />
              <div className="flex-1">
                <div className="text-xs text-dark-900/70 dark:text-light-100/70">Custos Pessoais</div>
                <div className="font-bold text-orange-700 dark:text-orange-400">{formatCurrencyBRL(personalStake)}</div>
              </div>
            </div>
            <div className="rounded-lg border border-light-300 dark:border-dark-600 bg-light-100/50 dark:bg-dark-800/50 p-3 flex items-center gap-2">
              <Banknote size={16} className="text-dark-900/70 dark:text-light-100/70" />
              <div className="flex-1">
                <div className="text-xs text-dark-900/70 dark:text-light-100/70">Outras Bancas</div>
                <div className="font-bold text-orange-700 dark:text-orange-400">{formatCurrencyBRL(othersBankroll)}</div>
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center gap-2 ml-4">
              <span className="text-indigo-400 text-3xl">=</span>
            </div>
            <div className="rounded-lg  border border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-500/20 p-3 flex items-center gap-2 md:col-span-2">
              <CircleDollarSign size={16} className="text-dark-900/70 dark:text-light-100/70" />
              <div className="flex-1">
                <div className="text-xs text-dark-900/70 dark:text-light-100/70">Total Atual</div>
                <div className={`font-bold ${finalClass}`}>{formatCurrencyBRL(currentBankroll + (totalBankroll || 0))}</div>
              </div>
            </div>
          </div>
        </>
        )
      }
    </>
  )
}
