"use client";
import { useEffect, useMemo, useRef, useState } from 'react';
import { trackEvent, trackTiming } from '@/app/lib/analytics';

type Card = {
  id: number;
  value: string;
  flipped: boolean;
  matched: boolean;
};

const baseValues = ['🐶','🐱','🦊','🐼','🐸','🐵','🐧','🦄'];

function createDeck(): Card[] {
  const values = [...baseValues, ...baseValues];
  const shuffled = values
    .map((v) => ({ v, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((obj, idx) => ({ id: idx, value: obj.v }));
  return shuffled.map((c) => ({ ...c, flipped: false, matched: false }));
}

export default function MemoryMatch() {
  const [deck, setDeck] = useState<Card[]>(createDeck());
  const [selected, setSelected] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const startRef = useRef<number>(Date.now());
  const matchedCount = useMemo(() => deck.filter((d) => d.matched).length, [deck]);

  function reset() {
    setDeck(createDeck());
    setSelected([]);
    setMoves(0);
    startRef.current = Date.now();
    try { trackEvent('game_reset', { game: 'memory-match' }); } catch {}
  }

  function flipCard(index: number) {
    const card = deck[index];
    if (card.flipped || card.matched || selected.length === 2) return;
    const next = deck.map((c, i) => (i === index ? { ...c, flipped: true } : c));
    setDeck(next);
    const nextSelected = [...selected, index];
    setSelected(nextSelected);
    if (nextSelected.length === 2) {
      setMoves((m) => m + 1);
      try { trackEvent('game_action', { game: 'memory-match', action: 'move' }); } catch {}
    }
  }

  useEffect(() => {
    if (selected.length === 2) {
      const [i, j] = selected;
      const a = deck[i];
      const b = deck[j];
      if (a.value === b.value) {
        setDeck((prev) => prev.map((c, idx) => (idx === i || idx === j ? { ...c, matched: true } : c)));
        setSelected([]);
        try { trackEvent('game_action', { game: 'memory-match', action: 'match' }); } catch {}
      } else {
        const timer = setTimeout(() => {
          setDeck((prev) => prev.map((c, idx) => (idx === i || idx === j ? { ...c, flipped: false } : c)));
          setSelected([]);
        }, 800);
        return () => clearTimeout(timer);
      }
    }
  }, [selected, deck]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Memory Match</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-dark-900/70 dark:text-light-100/70">Movimentos: {moves}</span>
          <button onClick={reset} className="px-3 py-1 rounded-md bg-purple-600 text-white">Reiniciar</button>
        </div>
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-4 gap-2 max-w-md mx-auto">
        {deck.map((card, idx) => (
          <button
            key={card.id}
            onClick={() => flipCard(idx)}
            className={`aspect-square rounded-lg border border-light-300 dark:border-dark-600 flex items-center justify-center text-2xl transition-transform ${
              card.flipped || card.matched ? 'bg-purple-600 text-white' : 'bg-light-100/50 dark:bg-dark-800/50'
            } ${card.matched ? 'opacity-80' : ''}`}
          >
            {(card.flipped || card.matched) ? card.value : '❓'}
          </button>
        ))}
      </div>
      {matchedCount === deck.length && (
        <p className="text-center font-semibold">Parabéns! Você concluiu em {moves} movimentos.</p>
      )}
    </div>
  );
}