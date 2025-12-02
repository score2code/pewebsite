"use client";
import { useMemo } from 'react';
import { Banknote, Wallet, Coins, TrendingUp, Target } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

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
};

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

function computeNetReturnFromBet(b: BetRow): number {
  const stake = Number(b.stake) || 0;
  if (typeof b.return === 'number') {
    if (b.status === 'green') return Number(b.return) - stake;
    if (b.status === 'red') return -stake;
    if (b.status === 'void') return 0;
    return 0;
  }
  const odd = Number(b.odd) || 0;
  if (b.status === 'green') return stake * odd - stake;
  if (b.status === 'red') return -stake;
  if (b.status === 'void') return 0;
  return 0;
}

function formatPredictions(pred?: string | string[]): string {
  if (!pred) return '';
  return Array.isArray(pred) ? pred.join(', ') : pred;
}

export default function RelatorioPrivadoClient({ bets, initialBankroll }: { bets: BetRow[]; initialBankroll: number }) {
  const searchParams = useSearchParams();
  const selectedTipster = searchParams.get('tipster') || '';
  const selectedMarketing = searchParams.get('marketing') || '';

  const tipsterOptions = useMemo(() => {
    return Array.from(new Set(bets.map(b => b.tipster).filter((t): t is string => Boolean(t)))).sort();
  }, [bets]);

  const filteredBets = useMemo(() => {
    let result = selectedTipster ? bets.filter(b => (b.tipster || '') === selectedTipster) : bets;
    if (selectedMarketing === 'true') {
      result = result.filter(b => Boolean(b.marketing));
    } else if (selectedMarketing === 'false') {
      result = result.filter(b => !Boolean(b.marketing));
    }
    return result;
  }, [bets, selectedTipster, selectedMarketing]);

  const sortedBets = useMemo(() => {
    return [...filteredBets].reverse();
  }, [filteredBets]);

  const totalVolume = filteredBets.reduce((sum, b) => sum + (Number(b.stake) || 0), 0);
  const totalReturn = filteredBets.reduce((sum, b) => sum + computeNetReturnFromBet(b), 0);
  const currentBankroll = initialBankroll + totalReturn;
  const totalReturnClass = totalReturn > 0
    ? 'text-green-700 dark:text-green-400'
    : totalReturn < 0
    ? 'text-red-700 dark:text-red-400'
    : 'text-dark-900/70 dark:text-light-100/70';
  const goal = initialBankroll * 12 - totalVolume;
  const currentClass = currentBankroll > initialBankroll
    ? 'text-green-700 dark:text-green-400'
    : currentBankroll < initialBankroll
    ? 'text-red-700 dark:text-red-400'
    : 'text-dark-900/70 dark:text-light-100/70';
  const goalClass = goal > 0
    ? 'text-blue-700 dark:text-blue-400'
    : 'text-green-700 dark:text-green-400';

  return (
    <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
      <div className="mb-4">
        <h2 className="text-xl md:text-2xl font-semibold text-dark-900 dark:text-light-100 mb-3">Tabela de Apostas</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
          <div className="rounded-lg border border-light-300 dark:border-dark-600 bg-light-100/50 dark:bg-dark-800/50 p-3 flex items-center gap-2">
            <Banknote size={16} className="text-dark-900/70 dark:text-light-100/70" />
            <div className="flex-1">
              <div className="text-xs text-dark-900/70 dark:text-light-100/70">Banca inicial</div>
              <div className="font-bold text-dark-900 dark:text-light-100">{formatCurrencyBRL(initialBankroll)}</div>
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
        <div className="mb-3">
          <div className="rounded-lg border border-light-300 dark:border-dark-600 bg-light-100/50 dark:bg-dark-800/50 p-3 flex items-center gap-2">
            <Target size={16} className={`${goal > 0 ? 'text-blue-700 dark:text-blue-400' : 'text-green-700 dark:text-green-400'}`} />
            <div className="flex-1">
              <div className="text-xs text-dark-900/70 dark:text-light-100/70">Meta restante</div>
              <div className={`font-bold ${goalClass}`}>{formatCurrencyBRL(goal)}</div>
            </div>
          </div>
        </div>
        <div className="text-dark-900 dark:text-light-100">
            <form method="GET" className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-2 w-full">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1">
                <label htmlFor="tipster" className="text-sm">Tipster</label>
                <select id="tipster" name="tipster" defaultValue={selectedTipster} className="text-sm bg-light-100 dark:bg-dark-800 border border-light-300 dark:border-dark-600 rounded px-2 py-1 w-full sm:w-auto">
                  <option value="">Todos</option>
                  {tipsterOptions.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1">
                <label htmlFor="marketing" className="text-sm">Marketing</label>
                <select id="marketing" name="marketing" defaultValue={selectedMarketing} className="text-sm bg-light-100 dark:bg-dark-800 border border-light-300 dark:border-dark-600 rounded px-2 py-1 w-full sm:w-auto">
                  <option value="">Todos</option>
                  <option value="true">Sim</option>
                  <option value="false">Não</option>
                </select>
              </div>
              <div className="flex items-center">
                <button type="submit" className="text-sm px-3 py-2 rounded border border-light-300 dark:border-dark-600 bg-light-200 dark:bg-dark-700 w-full sm:w-auto">Filtrar</button>
              </div>
            </form>
        </div>
      </div>

      <div className="md:hidden space-y-3">
        {sortedBets.map((b, i) => {
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
                <div className="text-dark-900/70 dark:text-light-100/70 col-span-2 truncate">Tipster: {b.tipster || '—'}</div>
                <div className="text-dark-900/70 dark:text-light-100/70 col-span-2 truncate">Palpites: {formatPredictions(b.prediction)}</div>
              </div>
              <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                <div className={`${returnClass}`}>Retorno: {formatCurrencyBRL(netReturn)}</div>
                <div className={`${statusClass}`}>Resultado: {formatStatusLabel(b.status)}</div>
              </div>
            </div>
          );
        })}
            {sortedBets.length === 0 && (
              <div className="text-center text-sm text-dark-900/70 dark:text-light-100/70 py-4">Nenhuma aposta registrada.</div>
            )}
      </div>

      <div className="overflow-x-auto hidden md:block">
        <table className="min-w-full border border-light-300 dark:border-dark-600 rounded-lg">
          <thead className="bg-light-200 dark:bg-dark-700">
            <tr>
              <th className="px-3 py-2 text-left text-sm font-semibold text-dark-900 dark:text-light-100">Data</th>
              <th className="px-3 py-2 text-left text-sm font-semibold text-dark-900 dark:text-light-100">Campeonato</th>
              <th className="px-3 py-2 text-left text-sm font-semibold text-dark-900 dark:text-light-100">Tipster</th>
              <th className="px-3 py-2 text-left text-sm font-semibold text-dark-900 dark:text-light-100">Casa</th>
              <th className="px-3 py-2 text-left text-sm font-semibold text-dark-900 dark:text-light-100">Visitante</th>
              <th className="px-3 py-2 text-left text-sm font-semibold text-dark-900 dark:text-light-100">Valor apostado</th>
              <th className="px-3 py-2 text-left text-sm font-semibold text-dark-900 dark:text-light-100">ODD</th>
              <th className="px-3 py-2 text-left text-sm font-semibold text-dark-900 dark:text-light-100">Palpites</th>
              <th className="px-3 py-2 text-left text-sm font-semibold text-dark-900 dark:text-light-100">Lucro(R$)</th>
              <th className="px-3 py-2 text-left text-sm font-semibold text-dark-900 dark:text-light-100">Resultado</th>
            </tr>
          </thead>
          <tbody>
            {sortedBets.map((b, i) => {
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
                <tr key={i} className="border-t border-light-300 dark:border-dark-600">
                  <td className="px-3 py-2 text-sm text-dark-900/80 dark:text-light-100/80">{formatDateBR(b.date)}</td>
                  <td className="px-3 py-2 text-sm text-dark-900/80 dark:text-light-100/80">{b.league}</td>
                  <td className="px-3 py-2 text-sm text-dark-900/80 dark:text-light-100/80">{b.tipster || '—'}</td>
                  <td className="px-3 py-2 text-sm text-dark-900/80 dark:text-light-100/80">{b.homeTeam}</td>
                  <td className="px-3 py-2 text-sm text-dark-900/80 dark:text-light-100/80">{b.awayTeam}</td>
                  <td className="px-3 py-2 text-sm text-dark-900/80 dark:text-light-100/80">{formatCurrencyBRL(Number(b.stake) || 0)}</td>
                  <td className="px-3 py-2 text-sm text-dark-900/80 dark:text-light-100/80">{Number(b.odd).toFixed(2)}</td>
                  <td className="px-3 py-2 text-sm text-dark-900/80 dark:text-light-100/80">{formatPredictions(b.prediction)}</td>
                  <td className={`px-3 py-2 text-sm font-medium ${returnClass}`}>{formatCurrencyBRL(netReturn)}</td>
                  <td className={`px-3 py-2 text-sm font-medium ${statusClass}`}>{formatStatusLabel(b.status)}</td>
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
      </div>
    </div>
  );
}
