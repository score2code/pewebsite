"use client"

import { useState, useCallback, useMemo } from 'react'
import Items from './util/items';

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

type Line = {
  rollover: BetRow[]
  punter: BetRow[],
  trader: BetRow[],
  tipster: BetRow[],
  analysis: BetRow[],
}

type Params = {
  currentBankroll: number;
  entries: number;
  rollover: number
}

export default function Dashboard({ totals }: { totals: Line }) {
  const [amounts, setAmounts] = useState<Record<string, Params>>({});

  // Callback que cada Item chamará ao calcular seu próprio total
  const handleUpdateAmount = useCallback((id: string, params: Params) => {
    setAmounts((prev) => {
      // Evita re-renderizações infinitas se o valor for o mesmo
      if (JSON.stringify(prev[id]) === JSON.stringify(params)) return prev;
      return { ...prev, [id]: params };
    });
  }, []);

  // Soma total de todos os valores reportados
  const totalBankroll = useMemo(() => {
    return Object.values(amounts).reduce((acc, curr) => acc + curr.currentBankroll, 0);
  }, [amounts]);

  const totalRollover = useMemo(() => {
    return Object.values(amounts).reduce((acc, curr) => acc + curr.rollover, 0);
  }, [amounts]);

  const totalEntries = useMemo(() => {
    return Object.values(amounts).reduce((acc, curr) => acc + curr.entries, 0);
  }, [amounts]);

  return (
    <div>
      <Items category="rollover" bets={totals.rollover} totalBankroll={totalBankroll} totalRollover={totalRollover} totalEntries={totalEntries} />
      <div className="rounded-lg border border-light-300 dark:border-dark-600 bg-light-100/50 dark:bg-dark-800/50 p-4 hover:border-purple-400 dark:hover:border-purple-500 mb-2">
        <h3 className="text-md font-bold text-dark-900 dark:text-light-100 text-center">Bancas</h3>
      </div>
      <Items category="punter" bets={totals.punter} onCalculate={(val: Params) => handleUpdateAmount('punter', val)} />
      <Items category="trader" bets={totals.trader} onCalculate={(val) => handleUpdateAmount('trader', val)} />
      <Items category="tipster" bets={totals.tipster} onCalculate={(val) => handleUpdateAmount('tipster', val)} />
      <Items category="tipster" tipster="Yuri" bets={totals.tipster} />
      {/* <Items category="tipster" tipster="Rafaela" bets={totals.tipster} />
      <Items category="tipster" tipster="Boleiros" bets={totals.tipster} />
      <Items category="tipster" tipster="Mundo Bet" bets={totals.tipster} />
      <Items category="tipster" tipster="Tylty" bets={totals.tipster} /> */}
      <Items category="tipster" tipster="Hemerson" bets={totals.tipster} />
      <div className="rounded-lg border border-light-300 dark:border-dark-600 bg-light-100/50 dark:bg-dark-800/50 p-4 hover:border-purple-400 dark:hover:border-purple-500 mb-2">
        <h3 className="text-md font-bold text-dark-900 dark:text-light-100 text-center">O RED é normal, bingos com apostas grátis</h3>
      </div>
      <Items category="analysis" bets={totals.analysis} onCalculate={(val) => handleUpdateAmount('analysis', val)} />
    </div>
  );
}
