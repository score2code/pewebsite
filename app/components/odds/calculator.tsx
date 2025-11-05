"use client";
import { useMemo, useState } from 'react';
import {
  americanToDecimal,
  americanToImpliedProb,
  decimalToAmerican,
  decimalToFractional,
  decimalToImpliedProb,
  fractionalToDecimal,
  fractionalToImpliedProb,
  payoutFromDecimal,
  combineParlayDecimal,
} from '@/app/lib/odds';

type OddsInputMode = 'decimal' | 'american' | 'fractional';

export default function OddsCalculator() {
  const [mode, setMode] = useState<OddsInputMode>('decimal');
  const [decimal, setDecimal] = useState<number>(1.9);
  const [american, setAmerican] = useState<number>(-110);
  const [fractionalNum, setFractionalNum] = useState<number>(9);
  const [fractionalDen, setFractionalDen] = useState<number>(10);
  const [stake, setStake] = useState<number>(100);
  const [parlayInputs, setParlayInputs] = useState<string>('1.90, 2.10');

  const normalizedDecimal = useMemo(() => {
    if (mode === 'decimal') return decimal;
    if (mode === 'american') return americanToDecimal(american);
    return fractionalToDecimal(fractionalNum, fractionalDen);
  }, [mode, decimal, american, fractionalNum, fractionalDen]);

  const impliedProb = useMemo(() => {
    if (mode === 'decimal') return decimalToImpliedProb(decimal);
    if (mode === 'american') return americanToImpliedProb(american);
    return fractionalToImpliedProb(fractionalNum, fractionalDen);
  }, [mode, decimal, american, fractionalNum, fractionalDen]);

  const americanConv = useMemo(() => decimalToAmerican(normalizedDecimal), [normalizedDecimal]);
  const fractionalConv = useMemo(() => decimalToFractional(normalizedDecimal), [normalizedDecimal]);
  const payout = useMemo(() => payoutFromDecimal(stake, normalizedDecimal), [stake, normalizedDecimal]);

  const parlayDecimal = useMemo(() => {
    const odds = parlayInputs
      .split(',')
      .map(s => parseFloat(s.trim()))
      .filter(n => !isNaN(n) && n > 1);
    if (!odds.length) return 1;
    return combineParlayDecimal(odds);
  }, [parlayInputs]);

  return (
    <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 border border-light-300 dark:border-dark-600">
      <h2 className="text-2xl font-semibold mb-4">Calculadora de Odds</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm mb-1">Formato de entrada</label>
          <select
            value={mode}
            onChange={e => setMode(e.target.value as OddsInputMode)}
            className="w-full rounded-md border p-2 bg-white dark:bg-dark-700"
          >
            <option value="decimal">Decimal</option>
            <option value="american">American (US)</option>
            <option value="fractional">Fractional</option>
          </select>

          {mode === 'decimal' && (
            <div className="mt-3">
              <label className="block text-sm mb-1">Odd Decimal</label>
              <input type="number" step="0.01" min={1.01} value={decimal}
                     onChange={e => setDecimal(parseFloat(e.target.value))}
                     className="w-full rounded-md border p-2 bg-white dark:bg-dark-700" />
            </div>
          )}
          {mode === 'american' && (
            <div className="mt-3">
              <label className="block text-sm mb-1">Odd American (ex: -110, +150)</label>
              <input type="number" step="1" value={american}
                     onChange={e => setAmerican(parseFloat(e.target.value))}
                     className="w-full rounded-md border p-2 bg-white dark:bg-dark-700" />
            </div>
          )}
          {mode === 'fractional' && (
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div>
                <label className="block text-sm mb-1">Numerador</label>
                <input type="number" step="1" min={1} value={fractionalNum}
                       onChange={e => setFractionalNum(parseInt(e.target.value))}
                       className="w-full rounded-md border p-2 bg-white dark:bg-dark-700" />
              </div>
              <div>
                <label className="block text-sm mb-1">Denominador</label>
                <input type="number" step="1" min={1} value={fractionalDen}
                       onChange={e => setFractionalDen(parseInt(e.target.value))}
                       className="w-full rounded-md border p-2 bg-white dark:bg-dark-700" />
              </div>
            </div>
          )}

          <div className="mt-3">
            <label className="block text-sm mb-1">Stake (R$)</label>
            <input type="number" step="1" min={1} value={stake}
                   onChange={e => setStake(parseFloat(e.target.value))}
                   className="w-full rounded-md border p-2 bg-white dark:bg-dark-700" />
          </div>
        </div>

        <div>
          <div className="rounded-md p-3 bg-light-200 dark:bg-dark-700">
            <div className="flex justify-between">
              <span>Odd (decimal normalizada)</span>
              <strong>{normalizedDecimal.toFixed(2)}</strong>
            </div>
            <div className="flex justify-between mt-2">
              <span>Probabilidade implícita</span>
              <strong>{(impliedProb * 100).toFixed(2)}%</strong>
            </div>
            <div className="flex justify-between mt-2">
              <span>Conversão para American</span>
              <strong>{americanConv > 0 ? `+${americanConv}` : americanConv}</strong>
            </div>
            <div className="flex justify-between mt-2">
              <span>Conversão para Fractional</span>
              <strong>{fractionalConv[0]}/{fractionalConv[1]}</strong>
            </div>
            <div className="flex justify-between mt-2">
              <span>Retorno total</span>
              <strong>R$ {payout.totalReturn.toFixed(2)}</strong>
            </div>
            <div className="flex justify-between mt-2">
              <span>Lucro</span>
              <strong>R$ {payout.profit.toFixed(2)}</strong>
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm mb-1">Parlay (odds decimais separadas por vírgula)</label>
            <input
              type="text"
              value={parlayInputs}
              onChange={e => setParlayInputs(e.target.value)}
              className="w-full rounded-md border p-2 bg-white dark:bg-dark-700"
            />
            <div className="rounded-md p-3 bg-light-200 dark:bg-dark-700 mt-2">
              <div className="flex justify-between">
                <span>Odd combinada (parlay)</span>
                <strong>{parlayDecimal.toFixed(2)}</strong>
              </div>
              <div className="flex justify-between mt-2">
                <span>Retorno com stake atual</span>
                <strong>R$ {(parlayDecimal * stake).toFixed(2)}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 text-sm text-dark-900/70 dark:text-light-100/70">
        <p>
          Probabilidade implícita indica qual chance o mercado está atribuindo ao evento,
          com base na odd. Use isso para comparar com sua probabilidade estimada e
          identificar valor.
        </p>
      </div>
    </div>
  );
}