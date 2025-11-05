"use client";
import { useEffect, useRef, useState } from 'react';
import { trackEvent, trackTiming } from '@/app/lib/analytics';

const GRID_SIZE = 9; // 3x3

export default function WhackAMole() {
  const [active, setActive] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [running, setRunning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startRef = useRef<number | null>(null);

  function start() {
    setScore(0);
    setRunning(true);
    startRef.current = Date.now();
    try { trackEvent('game_start', { game: 'whack-a-mole' }); } catch {}
  }
  function stop() {
    setRunning(false);
    setActive(null);
    if (timerRef.current) clearInterval(timerRef.current);
    try {
      trackEvent('game_stop', { game: 'whack-a-mole', score });
      if (startRef.current) {
        const elapsed = Date.now() - startRef.current;
        trackTiming('whack-a-mole_session', elapsed, { score });
      }
    } catch {}
  }

  useEffect(() => {
    if (running) {
      timerRef.current = setInterval(() => {
        const idx = Math.floor(Math.random() * GRID_SIZE);
        setActive(idx);
        setTimeout(() => setActive(null), 700);
      }, 900);
      return () => {
        if (timerRef.current) clearInterval(timerRef.current);
      };
    }
  }, [running]);

  function hit(index: number) {
    if (!running) return;
    if (active === index) {
      setScore((s) => s + 1);
      try { trackEvent('game_action', { game: 'whack-a-mole', action: 'hit', index }); } catch {}
      setActive(null);
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Whack-a-Mole</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-dark-900/70 dark:text-light-100/70">Pontos: {score}</span>
          {!running ? (
            <button onClick={start} className="px-3 py-1 rounded-md bg-purple-600 text-white">Iniciar</button>
          ) : (
            <button onClick={stop} className="px-3 py-1 rounded-md bg-red-600 text-white">Parar</button>
          )}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 max-w-sm mx-auto">
        {Array.from({ length: GRID_SIZE }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => hit(idx)}
            className={`aspect-square rounded-lg border border-light-300 dark:border-dark-600 flex items-center justify-center text-xl transition-colors ${
              active === idx ? 'bg-green-500 text-white' : 'bg-light-100/50 dark:bg-dark-800/50'
            }`}
          >
            {active === idx ? '🎯' : '⬤'}
          </button>
        ))}
      </div>
      {!running && (
        <p className="text-center text-dark-900/70 dark:text-light-100/70">Clique em Iniciar para jogar.</p>
      )}
    </div>
  );
}