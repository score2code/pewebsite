'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';

export function ThemeSwitcher() {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();
  const [palette, setPalette] = React.useState<string>('');

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Carregar paleta do storage e aplicar classe ao html
  React.useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('palette') || '' : '';
    if (saved) {
      setPalette(saved);
      applyPaletteClass(saved);
    }
  }, []);

  const applyPaletteClass = (value: string) => {
    const root = document.documentElement;
    const classes = Array.from(root.classList);
    const currentPalettes = classes.filter((c) => c.startsWith('theme-'));
    currentPalettes.forEach((c) => root.classList.remove(c));
    if (value) root.classList.add(value);
  };

  const palettes = [
    { label: 'Padrão', value: '' },
    { label: 'Vermelho/Preto', value: 'theme-red-black' },
    { label: 'Preto/Branco', value: 'theme-black-white' },
    { label: 'Azul/Amarelo', value: 'theme-blue-yellow' },
    { label: 'Amarelo/Verde', value: 'theme-yellow-green' },
    { label: 'Azul/Branco', value: 'theme-blue-white' },
    { label: 'Verde/Branco', value: 'theme-green-white' },
    { label: 'Branco/Dourado', value: 'theme-white-gold' },
  ];

  if (!mounted) return null;

  return (
    <div className="flex items-center gap-2">
      {/* Modo: Claro/Escuro por ícone */}
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="p-2 rounded-lg bg-light-200 dark:bg-dark-700 hover:bg-light-300 dark:hover:bg-dark-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 transform hover:scale-105"
        aria-label="Alternar modo"
      >
        {theme === 'dark' ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 accent-text"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h1M3 12H2m15.325-4.275l.707-.707M6.707 6.707l-.707-.707m10.586 10.586l.707.707M6.707 17.293l-.707.707M18 12a6 6 0 11-12 0 6 6 0 0112 0z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 accent-text"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        )}
      </button>

      {/* Paleta: Times/Cores */}
      <select
        aria-label="Selecionar paleta"
        className="px-2 py-2 rounded-lg bg-light-200 dark:bg-dark-700 text-dark-900 dark:text-light-100 border border-light-300 dark:border-dark-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
        value={palette}
        onChange={(e) => {
          const value = e.target.value;
          setPalette(value);
          if (typeof window !== 'undefined') localStorage.setItem('palette', value);
          applyPaletteClass(value);
        }}
      >
        {palettes.map((p) => (
          <option key={p.value || 'default'} value={p.value}>{p.label}</option>
        ))}
      </select>
    </div>
  );
}