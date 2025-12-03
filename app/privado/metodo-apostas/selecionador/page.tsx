import * as path from 'path';
import * as fs from 'fs/promises';
import type { Metadata } from 'next';
import Breadcrumb from '@/app/components/ui/breadcrumb';
import SelecionadorClient from './SelecionadorClient';

type GameItem = {
  date: string;
  time?: string;
  league: string;
  homeTeam: string;
  awayTeam: string;
  market: string;
  odds: number;
};

export const metadata: Metadata = {
  title: 'Selecionador de Jogos (Privado)',
  description: 'Ferramenta para filtrar jogos conforme o método de apostas',
  robots: { index: false, follow: false },
};

async function loadGames(): Promise<GameItem[]> {
  const candidates = [
    path.join(process.cwd(), 'app', 'data', 'hidden', 'method-games.json'),
    path.join(process.cwd(), 'data', 'hidden', 'method-games.json'),
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

export default async function MetodoSelecionadorPrivadoPage() {
  const games = await loadGames();
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 md:p-8 mb-6 md:mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <h1 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-light-100 mb-2">Selecionador de Jogos</h1>
          <p className="text-base md:text-lg text-dark-900/70 dark:text-light-100/70">Página privada para filtrar jogos do método. Carrega de method-games.json.</p>
        </header>
        <SelecionadorClient games={games} />
      </div>
    </div>
  );
}
