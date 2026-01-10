import * as path from 'path';
import * as fs from 'fs/promises';
import type { Metadata } from 'next';
import Breadcrumb from '@/app/components/ui/breadcrumb';
import DebtManagerClient from './DebtClient';
import PrivadoGate from '@/app/privado/PrivadoGate';

type DebtEntry = {
  type: 'debt' | 'payment';
  creditor: string;
  amount: number;
  date: string;
  note?: string;
};

export const metadata: Metadata = {
  title: 'Controle de Dívidas (Privado)',
  description: 'Gerenciamento de dívidas e pagamentos',
  robots: { index: false, follow: false },
};

async function loadDebtEntries(): Promise<DebtEntry[]> {
  const files = [
    path.join(process.cwd(), 'app', 'data', 'hidden', 'debts', 'default.json'),
    path.join(process.cwd(), 'data', 'hidden', 'debts', 'default.json'),
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

export default async function DebtManagerPage() {
  const entries = await loadDebtEntries();

  return (
    <PrivadoGate>
      <div className="min-h-screen pt-8 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Breadcrumb className="mb-4" />
          <header className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 md:p-8 mb-6 md:mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
            <h1 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-light-100 mb-2">
              Controle de Dívidas
            </h1>
            <p className="text-base md:text-lg text-dark-900/70 dark:text-light-100/70">
              Gerenciamento completo de dívidas e pagamentos organizados por credor.
            </p>
          </header>
          <DebtManagerClient entries={entries} />
        </div>
      </div>
    </PrivadoGate>
  );
}
