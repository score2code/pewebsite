import * as path from 'path';
import * as fs from 'fs/promises';
import type { Metadata } from 'next';
import Breadcrumb from '@/app/components/ui/breadcrumb';

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
  status: 'green' | 'red' | 'void' | 'pending' | 'postponed';
};

export const metadata: Metadata = {
  title: 'Relatório de Apostas (Privado)',
  description: 'Página privada com tabela de apostas e volume total.',
  robots: { index: false, follow: false },
};

async function loadBets(): Promise<BetRow[]> {
  const candidates = [
    path.join(process.cwd(), 'app', 'data', 'hidden', 'bets.json'),
    path.join(process.cwd(), 'data', 'hidden', 'bets.json'),
  ];
  for (const filePath of candidates) {
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
  const d = new Date(dateStr);
  return new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(d);
}

function computeNetReturn(stake: number, odd: number, status: BetRow['status']): number {
  if (status === 'green') return stake * odd - stake;
  if (status === 'red') return -stake;
  if (status === 'void') return 0;
  return 0;
}

function formatPredictions(pred?: string | string[]): string {
  if (!pred) return '';
  return Array.isArray(pred) ? pred.join(', ') : pred;
}

export default async function RelatorioApostasPrivadoPage() {
  const bets = await loadBets();
  const totalVolume = bets.reduce((sum, b) => sum + (Number(b.stake) || 0), 0);
  const totalReturn = bets.reduce((sum, b) => {
    const net = typeof (b as any).return === 'number' ? Number((b as any).return) : computeNetReturn(Number(b.stake) || 0, Number(b.odd) || 0, b.status);
    return sum + net;
  }, 0);
  const initialBankroll = 325.74;

  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <Breadcrumb className="mb-4" />

        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 md:p-8 mb-6 md:mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <h1 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-light-100 mb-2">Relatório de Apostas</h1>
          <p className="text-base md:text-lg text-dark-900/70 dark:text-light-100/70">Página privada, fora do menu e não indexável por buscadores.</p>
        </header>

        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <div className="mb-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <h2 className="text-xl md:text-2xl font-semibold text-dark-900 dark:text-light-100">Tabela de Apostas</h2>
              <div className="flex flex-wrap gap-3 text-dark-900 dark:text-light-100">
                <div className="inline-flex flex-col sm:flex-row sm:items-center gap-1">
                  <span className="text-sm">Banca inicial:</span>
                  <span className="font-bold">{formatCurrencyBRL(initialBankroll)}</span>
                </div>
                <div className="inline-flex flex-col sm:flex-row sm:items-center gap-1">
                  <span className="text-sm">Volume total:</span>
                  <span className="font-bold">{formatCurrencyBRL(totalVolume)}</span>
                </div>
                <div className="inline-flex flex-col sm:flex-row sm:items-center gap-1">
                  <span className="text-sm">Total de retorno:</span>
                  <span className="font-bold">{formatCurrencyBRL(totalReturn)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:hidden space-y-3">
            {bets.map((b, i) => {
              const netReturn = typeof b.return === 'number' ? b.return : computeNetReturn(Number(b.stake) || 0, Number(b.odd) || 0, b.status);
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
                    <div className="text-dark-900/70 dark:text-light-100/70">Bingo: {b.bingo ? 'Sim' : 'Não'}</div>
                    <div className="text-dark-900/70 dark:text-light-100/70">ODD: {Number(b.odd).toFixed(2)}</div>
                    <div className="text-dark-900/70 dark:text-light-100/70">Valor: {formatCurrencyBRL(Number(b.stake) || 0)}</div>
                    <div className="text-dark-900/70 dark:text-light-100/70 col-span-2 truncate">Palpites: {formatPredictions(b.prediction)}</div>
                  </div>
                  <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                    <div className={`${returnClass}`}>Retorno: {formatCurrencyBRL(netReturn)}</div>
                    <div className={`${statusClass}`}>Resultado: {formatStatusLabel(b.status)}</div>
                  </div>
                </div>
              );
            })}
            {bets.length === 0 && (
              <div className="text-center text-sm text-dark-900/70 dark:text-light-100/70 py-4">Nenhuma aposta registrada.</div>
            )}
          </div>

          <div className="overflow-x-auto hidden md:block">
            <table className="min-w-full border border-light-300 dark:border-dark-600 rounded-lg">
              <thead className="bg-light-200 dark:bg-dark-700">
                <tr>
                  <th className="px-3 py-2 text-left text-sm font-semibold text-dark-900 dark:text-light-100">Data</th>
                  <th className="px-3 py-2 text-left text-sm font-semibold text-dark-900 dark:text-light-100">Bingo</th>
                  <th className="px-3 py-2 text-left text-sm font-semibold text-dark-900 dark:text-light-100">Campeonato</th>
                  <th className="px-3 py-2 text-left text-sm font-semibold text-dark-900 dark:text-light-100">Time da Casa</th>
                  <th className="px-3 py-2 text-left text-sm font-semibold text-dark-900 dark:text-light-100">Time Visitante</th>
                  <th className="px-3 py-2 text-left text-sm font-semibold text-dark-900 dark:text-light-100">Valor apostado</th>
                  <th className="px-3 py-2 text-left text-sm font-semibold text-dark-900 dark:text-light-100">ODD</th>
                  <th className="px-3 py-2 text-left text-sm font-semibold text-dark-900 dark:text-light-100">Palpites</th>
                  <th className="px-3 py-2 text-left text-sm font-semibold text-dark-900 dark:text-light-100">Retorno</th>
                  <th className="px-3 py-2 text-left text-sm font-semibold text-dark-900 dark:text-light-100">Resultado</th>
                </tr>
              </thead>
              <tbody>
                {bets.map((b, i) => {
                  const netReturn = typeof b.return === 'number' ? b.return : computeNetReturn(Number(b.stake) || 0, Number(b.odd) || 0, b.status);
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
                      <td className="px-3 py-2 text-sm text-dark-900/80 dark:text-light-100/80">{b.bingo ? 'Sim' : 'Não'}</td>
                      <td className="px-3 py-2 text-sm text-dark-900/80 dark:text-light-100/80">{b.league}</td>
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
                {bets.length === 0 && (
                  <tr>
                    <td className="px-3 py-4 text-center text-sm text-dark-900/70 dark:text-light-100/70" colSpan={10}>
                      Nenhuma aposta registrada.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
