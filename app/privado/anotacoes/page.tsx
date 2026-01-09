import * as path from 'path';
import * as fs from 'fs/promises';
import type { Metadata } from 'next';
import Breadcrumb from '@/app/components/ui/breadcrumb';
import StrategiesClient from './NotesClient';

type NoteItem = {
  game: string;
  items: string[];
};

type StrategyItem = {
  title: string;
  notes: NoteItem[];
};

type ExcludedItem = {
  name: string;
  type: 'liga' | 'time';
  reason?: string;
};

export const metadata: Metadata = {
  title: 'Notas de Estratégias (Privado)',
  description: 'Anotações e observações sobre estratégias de apostas',
  robots: { index: false, follow: false },
};

async function loadStrategies(): Promise<StrategyItem[]> {
  const files = [
    path.join(process.cwd(), 'app', 'data', 'hidden', 'notes', 'default.json'),
    path.join(process.cwd(), 'data', 'hidden', 'notes', 'default.json'),
  ];
  for (const filePath of files) {
    try {
      const content = await fs.readFile(filePath, 'utf-8');
      const data = JSON.parse(content);
      if (Array.isArray(data)) return data;
    } catch {}
  }
  return [];
}

async function loadExcluded(): Promise<ExcludedItem[]> {
  const files = [
    path.join(process.cwd(), 'app', 'data', 'hidden', 'notes', 'excluded.json'),
    path.join(process.cwd(), 'data', 'hidden', 'notes', 'excluded.json'),
  ];
  for (const filePath of files) {
    try {
      const content = await fs.readFile(filePath, 'utf-8');
      const data = JSON.parse(content);
      if (Array.isArray(data)) return data;
    } catch {}
  }
  return [];
}

export default async function StrategiesPage() {
  const strategies = await loadStrategies();
  const excludedList = await loadExcluded();

  return (
    <div className="min-h-screen pt-8 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <Breadcrumb className="mb-4" />
        <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 md:p-8 mb-6 md:mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <h1 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-light-100 mb-2">
            Notas de Estratégias
          </h1>
          <p className="text-base md:text-lg text-dark-900/70 dark:text-light-100/70">
            Anotações e observações importantes sobre cada estratégia.
          </p>
        </header>
        <StrategiesClient strategies={strategies} excludedList={excludedList} />
      </div>
    </div>
  );
}
