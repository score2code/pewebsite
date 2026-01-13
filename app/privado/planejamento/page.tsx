import * as path from 'path';
import * as fs from 'fs/promises';
import type { Metadata } from 'next';
import Breadcrumb from '@/app/components/ui/breadcrumb';
import BacklogClient from './BacklogClient';

type GameItem = {
  date: string;
  time?: string;
  league: string;
  homeTeam: string;
  awayTeam: string;
  market: { type: string; method: string }[];
};

export const metadata: Metadata = {
  title: 'Planejamento (Privado)',
  description: 'Ferramenta para filtrar jogos conforme o método de apostas',
  robots: { index: false, follow: false },
};

async function loadGames(): Promise<GameItem[]> {
  const dirCandidates = [
    path.join(process.cwd(), 'app', 'data', 'hidden', 'backlog'),
    path.join(process.cwd(), 'data', 'hidden', 'backlog'),
  ];

  const rows: GameItem[] = [];

  for (const baseDir of dirCandidates) {
    try {
      const years = await fs.readdir(baseDir).catch(() => []);
      for (const y of years) {
        const yearDir = path.join(baseDir, y);
        const months = await fs.readdir(yearDir).catch(() => []);
        for (const m of months) {
          const monthDir = path.join(yearDir, m);
          const files = await fs.readdir(monthDir).catch(() => []);
          for (const f of files) {
            if (f.endsWith('.json')) {
              const filePath = path.join(monthDir, f);
              try {
                const content = await fs.readFile(filePath, 'utf-8');
                const data = JSON.parse(content);
                if (Array.isArray(data)) rows.push(...data);
              } catch {}
            }
          }
        }
      }
    } catch {}
  }

  if (rows.length) return rows;

  const fileFallbacks = [
    path.join(process.cwd(), 'app', 'data', 'hidden', 'backlog.json'),
    path.join(process.cwd(), 'data', 'hidden', 'backlog.json'),
  ];
  for (const filePath of fileFallbacks) {
    try {
      const content = await fs.readFile(filePath, 'utf-8');
      const data = JSON.parse(content);
      if (Array.isArray(data)) return data;
    } catch {}
  }
  return [];
}

const methods = [
  {
    name: 'Trader',
    methods: [
      'Lay ao Empate (LTD)',
      'Under 2.5 gols',
      'Correct Score 3x1 - 1x3',
      'Correct Score Cruzado (2x1 e 1x2)',
      'Lay 0-1 (Contra a Zebra)',
      'Back ao Favorito "Delayed"',
    ],
  },
  {
    name: 'Punter',
    methods: [
      "Over 1.5 Live",
      "Over 0.5 Gols Final",
      "DH (Favorito) + Over 1.5",
      "Favorito Marcar no 2º Tempo",
      "Over 0.5 Gols HT",
      "Handicap Asiático +0.5 Zebra"
    ],
  },
  {
    name: 'Rollover',
    methods: [
      'Handicap Asiático +2.5',
      'Dupla Chance (1X)',
      'Over 0.5 Gols Live',
      'Under 4.5 Gols',
      'Handicap +2.0 Favorito Fora',
      'DNB (Empate Anula) Favorito'
    ],
  }
];

export default async function BacklogPrivadoPage() {
  const games = await loadGames();
  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 md:p-8 mb-6 md:mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <h1 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-light-100 mb-2">Planejamento</h1>
          <p className="text-base md:text-lg text-dark-900/70 dark:text-light-100/70">Página privada para filtrar jogos do método.</p>
        </header>

        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 md:p-8 mb-6 md:mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-light-100 mb-2">Métodos</h2>
          <ul className="list-disc pl-6 flex flex-row justify-normal">
            {methods.map((item: { name: string; methods: string[] }) => (
            <li className="text-base md:text-md text-dark-900/70 dark:text-light-100/70 md:w-1/2">
              <strong>{item.name}</strong>
              <ul className="list-disc pl-6">
                {item.methods.map((method) => (
                  <li className="text-base md:text-md text-dark-900/70 dark:text-light-100/70" key={method}>{method}</li>
                ))}
              </ul>
            </li>
            ))}
          </ul>
        </div>
        <BacklogClient games={games} />
      </div>
    </div>
  );
}
