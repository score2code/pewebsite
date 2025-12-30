"use client";
import { useMemo } from 'react';
import { Banknote, Wallet, Coins, TrendingUp, Target, ListChecks, XCircle, CheckCircle } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

type BetRow = {
  date: string;
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

function formatCurrencyBRL(value: number): string {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
}

function formatStatusLabel(status: BetRow['status']): string {
  if (status === 'green') return 'green';
  if (status === 'red') return 'red';
  if (status === 'void') return 'void';
  if (status === 'postponed') return 'adiado';
  if (status === 'cashout') return 'cashout';
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

function computeNetReturnFromBet(b: BetRow): number {
  const stake = Number(b.stake) || 0;
  if (typeof b.return === 'number') {
    if (b.status === 'green') return Number(b.return) - stake;
    if (b.status === 'red') return -stake;
    if (b.status === 'void') return 0;
    if (b.status === 'cashout') return Number(b.return) - stake;
    return 0;
  }
  const odd = Number(b.odd) || 0;
  if (b.status === 'green') return stake * odd - stake;
  if (b.status === 'red') return -stake;
  if (b.status === 'void') return 0;
  return 0;
}

function computeTransactionEffect(b: BetRow): number {
  if (b.type !== 'transaction') return 0;
  const amt = Number(b.amount) || 0;
  return isWithdrawalKind(b.kind) ? -amt : amt;
}

function formatPredictions(pred?: string | string[]): string {
  if (!pred) return '';
  return Array.isArray(pred) ? pred.join(', ') : pred;
}

export default function RelatorioRolloverClient({ bets, initialBankroll }: { bets: BetRow[]; initialBankroll: number }) {
  const searchParams = useSearchParams();
  const selectedDate = searchParams.get('date') || '';
  const selectedType = searchParams.get('type') || '';

  const normalizedBets = useMemo(() => {
    return bets as BetRow[];
  }, [bets]);

  const filteredBets = useMemo(() => {
    let result = selectedDate ? normalizedBets.filter(b => b.date === selectedDate) : normalizedBets;
    if (selectedType === 'transaction') {
      result = result.filter(b => b.type === 'transaction');
    }
    return result;
  }, [normalizedBets, selectedDate, selectedType]);

  const sortedBets = useMemo(() => {
    return [...filteredBets].reverse();
  }, [filteredBets]);

  const betsOnly = normalizedBets.filter(b => (b.type || 'bet') === 'bet');
  const transactions = normalizedBets.filter(b => b.type === 'transaction');
  const totalVolume = betsOnly.reduce((sum, b) => sum + (Number(b.stake) || 0), 0);
  const totalReturn = betsOnly.reduce((sum, b) => sum + computeNetReturnFromBet(b), 0);
  const initialAdjust = transactions.filter(t => Boolean(t.affectsInitial)).reduce((s, t) => s + computeTransactionEffect(t), 0);
  const runtimeTrans = transactions.filter(t => !Boolean(t.affectsInitial)).reduce((s, t) => s + computeTransactionEffect(t), 0);
  const initialBankrollAdjusted = initialBankroll + initialAdjust;
  const currentBankroll = initialBankrollAdjusted + totalReturn + runtimeTrans;
  const totalReturnClass = totalReturn > 0
    ? 'text-green-700 dark:text-green-400'
    : totalReturn < 0
    ? 'text-red-700 dark:text-red-400'
    : 'text-dark-900/70 dark:text-light-100/70';
  const goal = initialBankrollAdjusted + (initialBankrollAdjusted * (10 / 100));
  const currentClass = currentBankroll > initialBankroll
    ? 'text-green-700 dark:text-green-400'
    : currentBankroll < initialBankroll
    ? 'text-red-700 dark:text-red-400'
    : 'text-dark-900/70 dark:text-light-100/70';
  const goalClass = goal > 0
    ? 'text-blue-700 dark:text-blue-400'
    : 'text-green-700 dark:text-green-400';
  const totalBets = betsOnly.length;
  const totalReds = betsOnly.filter(b => b.status === 'red').length;
  const totalGreens = betsOnly.filter(b => b.status === 'green').length;

  return (
    <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
      <div className="mb-4">
        <h2 className="text-xl md:text-2xl font-semibold text-dark-900 dark:text-light-100 mb-3">Tabela de Apostas</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
          <div className="rounded-lg border border-light-300 dark:border-dark-600 bg-light-100/50 dark:bg-dark-800/50 p-3 flex items-center gap-2">
            <Banknote size={16} className="text-dark-900/70 dark:text-light-100/70" />
            <div className="flex-1">
              <div className="text-xs text-dark-900/70 dark:text-light-100/70">Banca inicial</div>
              <div className="font-bold text-dark-900 dark:text-light-100">{formatCurrencyBRL(initialBankrollAdjusted)}</div>
            </div>
          </div>
          <div className="rounded-lg border border-light-300 dark:border-dark-600 bg-light-100/50 dark:bg-dark-800/50 p-3 flex items-center gap-2">
            <Wallet size={16} className="text-dark-900/70 dark:text-light-100/70" />
            <div className="flex-1">
              <div className="text-xs text-dark-900/70 dark:text-light-100/70">Banca atual</div>
              <div className={`font-bold ${currentClass}`}>{formatCurrencyBRL(currentBankroll)}</div>
            </div>
          </div>
          <div className="rounded-lg border border-orange-200 dark:border-orange-700 bg-orange-50 dark:bg-orange-900/20 p-3 flex items-center gap-2">
            <Coins size={16} className="text-orange-700 dark:text-orange-400" />
            <div className="flex-1">
              <div className="text-xs text-orange-700 dark:text-orange-400">Volume total</div>
              <div className="font-bold text-orange-700 dark:text-orange-400">{formatCurrencyBRL(totalVolume)}</div>
            </div>
          </div>
          <div className="rounded-lg border border-light-300 dark:border-dark-600 bg-light-100/50 dark:bg-dark-800/50 p-3 flex items-center gap-2">
            <TrendingUp size={16} className={`${totalReturn > 0 ? 'text-green-700 dark:text-green-400' : totalReturn < 0 ? 'text-red-700 dark:text-red-400' : 'text-dark-900/70 dark:text-light-100/70'}`} />
            <div className="flex-1">
              <div className="text-xs text-dark-900/70 dark:text-light-100/70">Lucro Total</div>
              <div className={`font-bold ${totalReturnClass}`}>{formatCurrencyBRL(totalReturn)}</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
          <div className="rounded-lg border border-light-300 dark:border-dark-600 bg-light-100/50 dark:bg-dark-800/50 p-3 flex items-center gap-2">
            <Target size={16} className={`${goal > 0 ? 'text-blue-700 dark:text-blue-400' : 'text-green-700 dark:text-green-400'}`} />
            <div className="flex-1">
              <div className="text-xs text-dark-900/70 dark:text-light-100/70">Meta (R$)</div>
              <div className={`font-bold ${goalClass}`}>{formatCurrencyBRL(goal)}</div>
            </div>
          </div>
          <div className="rounded-lg border border-indigo-200 dark:border-indigo-700 bg-indigo-50 dark:bg-indigo-900/20 p-3 flex items-center gap-2">
            <ListChecks size={16} className="text-indigo-700 dark:text-indigo-400" />
            <div className="flex-1">
              <div className="text-xs text-indigo-700 dark:text-indigo-400">Entradas</div>
              <div className="font-bold text-indigo-700 dark:text-indigo-400">{totalBets}</div>
            </div>
          </div>
          <div className="rounded-lg border border-red-200 dark:border-red-700 bg-red-50 dark:bg-red-900/20 p-3 flex items-center gap-2">
            <XCircle size={16} className="text-red-700 dark:text-red-400" />
            <div className="flex-1">
              <div className="text-xs text-red-700 dark:text-red-400">Reds</div>
              <div className="font-bold text-red-700 dark:text-red-400">{totalReds}</div>
            </div>
          </div>
          <div className="rounded-lg border border-green-200 dark:border-green-700 bg-green-50 dark:bg-green-900/20 p-3 flex items-center gap-2">
            <CheckCircle size={16} className="text-green-700 dark:text-green-400" />
            <div className="flex-1">
              <div className="text-xs text-green-700 dark:text-green-400">Greens</div>
              <div className="font-bold text-green-700 dark:text-green-400">{totalGreens}</div>
            </div>
          </div>
        </div>
        <div className="text-dark-900 dark:text-light-100">
            <form method="GET" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2 w-full">
              <div className="flex flex-col">
                <label htmlFor="date" className="text-sm">Data</label>
                <input id="date" name="date" type="date" defaultValue={selectedDate} className="text-sm bg-light-100 dark:bg-dark-800 border border-light-300 dark:border-dark-600 rounded px-2 py-1 w-full" />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="type" className="text-sm">Tipo</label>
                <select id="type" name="type" defaultValue={selectedType} className="text-sm bg-light-100 dark:bg-dark-800 border border-light-300 dark:border-dark-600 rounded px-2 py-1 w-full">
                  <option value="bet">Apostas</option>
                  <option value="transaction">Transações</option>
                </select>
              </div>
              <div className="flex items-center md:justify-end sm:col-span-2 md:col-span-1">
                <button type="submit" className="text-sm px-3 py-2 rounded border border-light-300 dark:border-dark-600 bg-light-200 dark:bg-dark-700 w-full md:w-auto">Filtrar</button>
              </div>
            </form>
        </div>
      </div>

      <div className="md:hidden space-y-3">
        {sortedBets.map((b, i) => {
          if ((b.type || 'bet') === 'bet') {
            const netReturn = computeNetReturnFromBet(b);
            const statusClass =
              b.status === 'green'
                ? 'text-green-700 dark:text-green-400'
                : b.status === 'red'
                ? 'text-red-700 dark:text-red-400'
                : b.status === 'void'
                ? 'text-orange-700 dark:text-orange-400'
                : 'text-dark-900/70 dark:text-light-100/70';
            const returnClass = netReturn > 0
              ? 'text-green-700 dark:text-green-400'
              : netReturn < 0
              ? 'text-red-700 dark:text-red-400'
              : 'text-dark-900/70 dark:text-light-100/70';
            return (
              <div key={i} className="rounded-lg border border-light-300 dark:border-dark-600 bg-light-100/50 dark:bg-dark-800/50 p-4">
                <div className="flex items-baseline gap-2">
                  <div className="text-sm text-dark-900/80 dark:text-light-100/80 font-medium whitespace-nowrap">{formatDateBR(b.date)}</div>
                  <div className="text-xs text-dark-900/70 dark:text-light-100/70 flex-1 min-w-0 overflow-hidden text-right truncate">{b.league}</div>
                </div>
                <div className="mt-1 text-dark-900 dark:text-light-100 font-semibold">{b.homeTeam} × {b.awayTeam}</div>
                <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                  <div className="text-dark-900/70 dark:text-light-100/70">ODD: {Number(b.odd).toFixed(2)}</div>
                  <div className="text-dark-900/70 dark:text-light-100/70">Valor: {formatCurrencyBRL(Number(b.stake) || 0)}</div>
                  <div className="text-dark-900/70 dark:text-light-100/70 col-span-2 truncate">Palpites: {formatPredictions(b.prediction)}</div>
                </div>
                <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                  <div className={`${returnClass}`}>Retorno: {formatCurrencyBRL(netReturn)}</div>
                  <div className={`${statusClass}`}>Resultado: {formatStatusLabel(b.status!)}</div>
                </div>
              </div>
            );
          } else {
            const effect = computeTransactionEffect(b);
            return (
              <div key={i} className="rounded-lg border border-light-300 dark:border-dark-600 bg-light-100/50 dark:bg-dark-800/50 p-4">
                <div className="flex items-baseline gap-2">
                  <div className="text-sm text-dark-900/80 dark:text-light-100/80 font-medium whitespace-nowrap">{formatDateBR(b.date)}</div>
                  <div className="text-xs text-dark-900/70 dark:text-light-100/70 flex-1 min-w-0 overflow-hidden text-right truncate">Transação</div>
                </div>
                <div className="mt-1 text-dark-900 dark:text-light-100 font-semibold">{isWithdrawalKind(b.kind) ? 'Saque' : 'Depósito'}</div>
                <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                  <div className="text-dark-900/70 dark:text-light-100/70">Valor: {formatCurrencyBRL(Number(b.amount) || 0)}</div>
                  <div className="text-dark-900/70 dark:text-light-100/70">Afeta banca inicial: {b.affectsInitial ? 'Sim' : 'Não'}</div>
                  {b.note && <div className="text-dark-900/70 dark:text-light-100/70 col-span-2 truncate">Obs: {b.note}</div>}
                </div>
                <div className={`${effect >= 0 ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'} mt-2 text-sm font-medium`}>Efeito: {formatCurrencyBRL(effect)}</div>
              </div>
            );
          }
        })}
        {sortedBets.length === 0 && (
          <div className="text-center text-sm text-dark-900/70 dark:text-light-100/70 py-4">Nenhuma aposta registrada.</div>
        )}
      </div>

      <div className="overflow-x-auto hidden md:block">
        {selectedType === 'transaction' ? (
          <table className="min-w-full border border-light-300 dark:border-dark-600 rounded-lg">
            <thead className="bg-light-200 dark:bg-dark-700">
              <tr>
                <th className="px-3 py-2 text-left text-sm font-semibold text-dark-900 dark:text-light-100">Data</th>
                <th className="px-3 py-2 text-left text-sm font-semibold text-dark-900 dark:text-light-100">Tipo</th>
                <th className="px-3 py-2 text-left text-sm font-semibold text-dark-900 dark:text-light-100">Valor</th>
                <th className="px-3 py-2 text-left text-sm font-semibold text-dark-900 dark:text-light-100">Afeta banca inicial</th>
                <th className="px-3 py-2 text-left text-sm font-semibold text-dark-900 dark:text-light-100">Observação</th>
              </tr>
            </thead>
            <tbody>
              {sortedBets.map((b, i) => (
                <tr key={i} className="border-t border-light-300 dark:border-dark-600">
                  <td className="px-3 py-2 text-sm text-dark-900/80 dark:text-light-100/80">{formatDateBR(b.date)}</td>
                <td className="px-3 py-2 text-sm text-dark-900/80 dark:text-light-100/80">{isWithdrawalKind(b.kind) ? 'Saque' : 'Depósito'}</td>
                  <td className="px-3 py-2 text-sm text-dark-900/80 dark:text-light-100/80">{formatCurrencyBRL(Number(b.amount) || 0)}</td>
                  <td className="px-3 py-2 text-sm text-dark-900/80 dark:text-light-100/80">{b.affectsInitial ? 'Sim' : 'Não'}</td>
                  <td className="px-3 py-2 text-sm text-dark-900/80 dark:text-light-100/80">{b.note || '—'}</td>
                </tr>
              ))}
              {sortedBets.length === 0 && (
                <tr>
                  <td className="px-3 py-4 text-center text-sm text-dark-900/70 dark:text-light-100/70" colSpan={5}>
                    Nenhuma transação registrada.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        ) : (
          <table className="min-w-full border border-light-300 dark:border-dark-600 rounded-lg">
            <thead className="bg-light-200 dark:bg-dark-700">
              <tr>
                <th className="px-3 py-2 text-left text-sm font-semibold text-dark-900 dark:text-light-100">Data</th>
                <th className="px-3 py-2 text-left text-sm font-semibold text-dark-900 dark:text-light-100">Campeonato</th>
                <th className="px-3 py-2 text-left text-sm font-semibold text-dark-900 dark:text-light-100">Casa</th>
                <th className="px-3 py-2 text-left text-sm font-semibold text-dark-900 dark:text-light-100">Visitante</th>
                <th className="px-3 py-2 text-left text-sm font-semibold text-dark-900 dark:text-light-100">Valor</th>
                <th className="px-3 py-2 text-left text-sm font-semibold text-dark-900 dark:text-light-100">ODD</th>
                <th className="px-3 py-2 text-left text-sm font-semibold text-dark-900 dark:text-light-100">Método</th>
                <th className="px-3 py-2 text-left text-sm font-semibold text-dark-900 dark:text-light-100">Lucro(R$)</th>
                <th className="px-3 py-2 text-left text-sm font-semibold text-dark-900 dark:text-light-100">Resultado</th>
              </tr>
            </thead>
          <tbody>
            {sortedBets.map((b, i) => {
              if (b.type === 'transaction') {
                const effect = computeTransactionEffect(b);
                const rowTint = effect >= 0 ? 'bg-green-50 dark:bg-green-900/10' : 'bg-red-50 dark:bg-red-900/10';
                return (
                  <tr key={i} className={`border-t border-light-300 dark:border-dark-600 ${rowTint}`}>
                    <td className="px-3 py-2 text-sm text-dark-900/80 dark:text-light-100/80">{formatDateBR(b.date)}</td>
                    <td className="px-3 py-2 text-sm text-dark-900/80 dark:text-light-100/80">—</td>
                    <td className="px-3 py-2 text-sm text-dark-900/80 dark:text-light-100/80">—</td>
                    <td className="px-3 py-2 text-sm text-dark-900/80 dark:text-light-100/80">—</td>
                    <td className="px-3 py-2 text-sm text-dark-900/80 dark:text-light-100/80">—</td>
                    <td className="px-3 py-2 text-sm text-dark-900/80 dark:text-light-100/80">—</td>
                    <td className="px-3 py-2 text-sm text-dark-900/80 dark:text-light-100/80">{`${isWithdrawalKind(b.kind) ? 'Saque' : 'Depósito'}${b.note ? ' - ' + b.note : ''}`}</td>
                    <td className={`px-3 py-2 text-sm font-medium ${effect >= 0 ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'}`}>{formatCurrencyBRL(effect)}</td>
                    <td className="px-3 py-2 text-sm text-dark-900/80 dark:text-light-100/80">—</td>
                  </tr>
                );
              }
              const netReturn = computeNetReturnFromBet(b);
              const statusClass =
                b.status === 'green'
                  ? 'text-green-700 dark:text-green-400'
                  : b.status === 'red'
                  ? 'text-red-700 dark:text-red-400'
                  : b.status === 'void'
                  ? 'text-orange-700 dark:text-orange-400'
                  : 'text-dark-900/70 dark:text-light-100/70';
              const returnClass = netReturn > 0
                ? 'text-green-700 dark:text-green-400'
                : netReturn < 0
                ? 'text-red-700 dark:text-red-400'
                : 'text-dark-900/70 dark:text-light-100/70';

              return (
                <tr key={i} className={`border-t border-light-300 dark:border-dark-600`}>
                  <td className="px-3 py-2 text-sm text-dark-900/80 dark:text-light-100/80">{formatDateBR(b.date)}</td>
                  <td className="px-3 py-2 text-sm text-dark-900/80 dark:text-light-100/80">{b.league}</td>
                  <td className="px-3 py-2 text-sm text-dark-900/80 dark:text-light-100/80">{b.homeTeam}</td>
                  <td className="px-3 py-2 text-sm text-dark-900/80 dark:text-light-100/80">{b.awayTeam}</td>
                  <td className="px-3 py-2 text-sm text-dark-900/80 dark:text-light-100/80">{formatCurrencyBRL(Number(b.stake) || 0)}</td>
                  <td className="px-3 py-2 text-sm text-dark-900/80 dark:text-light-100/80">{Number(b.odd).toFixed(2)}</td>
                  <td className="px-3 py-2 text-sm text-dark-900/80 dark:text-light-100/80">{formatPredictions(b.prediction)}</td>
                  <td className={`px-3 py-2 text-sm font-medium ${returnClass}`}>{formatCurrencyBRL(netReturn)}</td>
                  <td className={`px-3 py-2 text-sm font-medium ${statusClass}`}>{formatStatusLabel(b.status!)}</td>
                </tr>
              );
            })}
              {sortedBets.length === 0 && (
                <tr>
                  <td className="px-3 py-4 text-center text-sm text-dark-900/70 dark:text-light-100/70" colSpan={11}>
                    Nenhuma aposta registrada.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
function isWithdrawalKind(kind?: string): boolean {
  if (!kind) return false;
  const k = String(kind).toLowerCase();
  return k === 'withdraw' || k === 'withdrawal';
}
