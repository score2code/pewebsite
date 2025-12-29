"use client";
import { useMemo } from 'react';
import { Wallet } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

type BetRow = {
  date: string;
  value?: number;
  item?: string;
  status?: 'green' | 'pending';
};

function formatCurrencyBRL(value: number): string {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
}

function formatStatusLabel(status: BetRow['status']): string {
  if (status === 'green') return 'pago';
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

export default function RelatorioBudgetClient({ bets }: { bets: BetRow[]; }) {
  const searchParams = useSearchParams();
  const selectedDate = searchParams.get('date') || '';
  const selectedTipster = searchParams.get('tipster') || '';
  const selectedMarketing = searchParams.get('marketing') || '';
  const selectedType = searchParams.get('type') || '';

  const normalizedBets = useMemo(() => {
    return bets as BetRow[];
  }, [bets]);

  const tipsterOptions = useMemo(() => {
    return Array.from(new Set(bets.map(b => b.item).filter((t): t is string => Boolean(t)))).sort();
  }, [bets]);

  const filteredBets = useMemo(() => {
    let result = selectedDate ? normalizedBets.filter(b => b.date === selectedDate) : normalizedBets;
    result = selectedTipster ? result.filter(b => (b.item || '') === selectedTipster) : result;

    return result;
  }, [normalizedBets, selectedDate, selectedTipster, selectedMarketing, selectedType]);

  const sortedBets = useMemo(() => {
    return [...filteredBets].reverse();
  }, [filteredBets]);

  const total = sortedBets.reduce((sum, b) => sum + (Number(b.value) || 0), 0);

  return (
    <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
      <div className="mb-4">
        <h2 className="text-xl md:text-2xl font-semibold text-dark-900 dark:text-light-100 mb-3">Tabela de Orçamento</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
          <div className="rounded-lg border border-indigo-200 dark:border-indigo-700 bg-indigo-50 dark:bg-indigo-900/20 p-3 flex items-center gap-2">
            <Wallet size={16} className="text-indigo-700 dark:text-indigo-400" />
            <div className="flex-1">
              <div className="text-xs text-indigo-700 dark:text-indigo-400">Total</div>
              <div className={`font-bold text-indigo-700 dark:text-indigo-400`}>{formatCurrencyBRL(total)}</div>
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
              <label htmlFor="tipster" className="text-sm">Item</label>
              <select id="tipster" name="tipster" defaultValue={selectedTipster} className="text-sm bg-light-100 dark:bg-dark-800 border border-light-300 dark:border-dark-600 rounded px-2 py-1 w-full">
                <option value="">Todos</option>
                {tipsterOptions.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
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
            const statusClass =
              b.status === 'green'
                ? 'text-green-700 dark:text-green-400'
                : 'text-dark-900/70 dark:text-light-100/70';
            return (
              <div key={i} className="rounded-lg border border-light-300 dark:border-dark-600 bg-light-100/50 dark:bg-dark-800/50 p-4">
                <div className="flex items-baseline gap-2">
                  <div className="text-sm text-dark-900/80 dark:text-light-100/80 font-medium whitespace-nowrap">{formatDateBR(b.date)}</div>
                </div>
                <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                  <div className="text-dark-900/70 dark:text-light-100/70">Valor: {formatCurrencyBRL(Number(b.value) || 0)}</div>
                  <div className="text-dark-900/70 dark:text-light-100/70 col-span-2 truncate">Tipster: {b.item || '—'}</div>
                </div>
                <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                  <div className={`${statusClass}`}>Resultado: {formatStatusLabel(b.status!)}</div>
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
                <th className="px-3 py-2 text-left text-sm font-semibold text-dark-900 dark:text-light-100">Item</th>
                <th className="px-3 py-2 text-left text-sm font-semibold text-dark-900 dark:text-light-100">Valor</th>
                <th className="px-3 py-2 text-left text-sm font-semibold text-dark-900 dark:text-light-100">Status</th>
              </tr>
            </thead>
            <tbody>
            {sortedBets.map((b, i) => {
              const statusClass =
                b.status === 'green'
                  ? 'text-green-700 dark:text-green-400'
                  : 'text-dark-900/70 dark:text-light-100/70';
              return (
                <tr key={i} className="border-t border-light-300 dark:border-dark-600">
                  <td className="px-3 py-2 text-sm text-dark-900/80 dark:text-light-100/80">{formatDateBR(b.date)}</td>
                  <td className="px-3 py-2 text-sm text-dark-900/80 dark:text-light-100/80">{b.item || '—'}</td>
                  <td className="px-3 py-2 text-sm text-dark-900/80 dark:text-light-100/80">{formatCurrencyBRL(Number(b.value) || 0)}</td>
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
      </div>
    </div>
  );
}
