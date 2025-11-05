"use client";
import { useState } from 'react';
import { trackEvent } from '@/app/lib/analytics';

type Cell = 'X' | 'O' | '';

const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function calculateWinner(board: Cell[]): Cell | null {
  for (const [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

export default function TicTacToe() {
  const [board, setBoard] = useState<Cell[]>(Array(9).fill(''));
  const [player, setPlayer] = useState<Cell>('X');
  const winner = calculateWinner(board);
  const isDraw = !winner && board.every((c) => c !== '');

  function handleClick(index: number) {
    if (winner || board[index]) return;
    const next = [...board];
    next[index] = player;
    setBoard(next);
    setPlayer(player === 'X' ? 'O' : 'X');
    try { trackEvent('game_action', { game: 'tic-tac-toe', action: 'move', index }); } catch {}
    const w = calculateWinner(next);
    if (w) {
      try { trackEvent('game_end', { game: 'tic-tac-toe', result: 'win', winner: w }); } catch {}
    } else if (next.every((c) => c !== '')) {
      try { trackEvent('game_end', { game: 'tic-tac-toe', result: 'draw' }); } catch {}
    }
  }

  function reset() {
    setBoard(Array(9).fill(''));
    setPlayer('X');
    try { trackEvent('game_reset', { game: 'tic-tac-toe' }); } catch {}
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Tic-Tac-Toe</h2>
        <button onClick={reset} className="px-3 py-1 rounded-md bg-purple-600 text-white">Reiniciar</button>
      </div>
      <div className="grid grid-cols-3 gap-2 max-w-xs sm:max-w-sm mx-auto">
        {board.map((cell, idx) => (
          <button
            key={idx}
            onClick={() => handleClick(idx)}
            className="aspect-square flex items-center justify-center text-2xl font-bold rounded-lg border border-light-300 dark:border-dark-600 bg-light-100/50 dark:bg-dark-800/50"
          >
            {cell}
          </button>
        ))}
      </div>
      <div className="text-center">
        {winner ? (
          <p className="font-semibold">Vencedor: {winner}</p>
        ) : isDraw ? (
          <p className="font-semibold">Empate!</p>
        ) : (
          <p className="text-dark-900/70 dark:text-light-100/70">Vez de: {player}</p>
        )}
      </div>
    </div>
  );
}