import { getFormattedDate } from '@/app/lib/data-loader';
import * as path from 'path';
import * as fs from 'fs/promises';

type TicketPick = {
  id: string;
  league: string;
  homeTeam: string;
  awayTeam: string;
  date: string;
  time: string;
  timezone?: string;
  prediction: string;
};

async function getTicketPicks(date: string): Promise<TicketPick[]> {
  try {
    const year = date.substring(0, 4);
    const month = date.substring(5, 7);
    const day = date.substring(8, 10);
    const filePath = path.join(process.cwd(), 'app', 'data', 'ticket', year, month, `${day}.json`);
    const file = await fs.readFile(filePath, 'utf-8').catch(() => null);
    if (!file) return [];
    const raw = JSON.parse(file);
    return Array.isArray(raw) ? raw : [];
  } catch (error) {
    console.error(`[fs] Falha ao ler ticket para ${date}:`, error);
    return [];
  }
}

async function resolvePickHref(id: string, date: string): Promise<string | null> {
  const year = date.substring(0, 4);
  const month = date.substring(5, 7);
  const day = date.substring(8, 10);
  try {
    // Verifica Soccer
    const soccerPath = path.join(process.cwd(), 'app', 'data', 'soccer', year, month, `${day}.json`);
    const soccerFile = await fs.readFile(soccerPath, 'utf-8').catch(() => null);
    if (soccerFile) {
      const picks = JSON.parse(soccerFile);
      const found = (Array.isArray(picks) ? picks : Array.isArray(picks?.data) ? picks.data : []).find((p: any) => p.id === id);
      if (found) return `/futebol/${date}/${id}`;
    }
  } catch {}

  try {
    // Verifica Futebol Americano
    const fbPath = path.join(process.cwd(), 'app', 'data', 'football', year, month, `${day}.json`);
    const fbFile = await fs.readFile(fbPath, 'utf-8').catch(() => null);
    if (fbFile) {
      const picks = JSON.parse(fbFile);
      const found = (Array.isArray(picks) ? picks : Array.isArray(picks?.data) ? picks.data : []).find((p: any) => p.id === id);
      if (found) return `/futebol-americano/${date}/${id}`;
    }
  } catch {}
  return null;
}

export default async function TicketPage() {
  const today = getFormattedDate(new Date());
  let date = today;
  let picks = await getTicketPicks(date);
  // Fallback inicial para a data de exemplo se o de hoje não existir
  if (!picks.length) {
    date = '2025-11-05';
    picks = await getTicketPicks(date);
  }

  const picksWithHref = await Promise.all(
    picks.map(async (p) => ({ ...p, href: await resolvePickHref(p.id, date) }))
  );

  return (
    <div className="min-h-screen pt-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-8 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <h1 className="text-4xl font-bold text-dark-900 dark:text-light-100 mb-3">
            Bilhete do Dia
          </h1>
          <p className="text-lg text-dark-900/70 dark:text-light-100/70">
            Seleção curada de 2 a 3 palpites para {date}.
          </p>
        </div>

        {!picks.length && (
          <div className="bg-yellow-100/60 dark:bg-yellow-900/30 border border-yellow-300 dark:border-yellow-700 rounded-xl p-6 mb-8">
            <p className="text-dark-900/80 dark:text-light-100/80">
              Nenhum bilhete encontrado para hoje. Em breve disponibilizaremos o bilhete do dia.
            </p>
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-2">
          {picksWithHref.map((p) => (
              <div key={p.id} className="h-full bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-sm text-dark-900/60 dark:text-light-100/60">{p.league}</p>
                    <h3 className="text-xl font-bold text-dark-900 dark:text-light-100">{p.homeTeam} x {p.awayTeam}</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-dark-900/60 dark:text-light-100/60">{p.time} {p.timezone || ''}</p>
                    <p className="text-sm text-dark-900/60 dark:text-light-100/60">{p.date}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="inline-block bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-md text-sm font-semibold">
                    {p.prediction}
                  </span>
                </div>
                {p.href ? (
                  <a href={p.href} className="block bg-purple-600 dark:bg-purple-500 text-center py-3 font-bold text-white hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-md">
                    Ver análise do palpite
                  </a>
                ) : (
                  <div className="block bg-gray-300 dark:bg-gray-700 text-center py-3 font-bold text-gray-600 dark:text-gray-300 rounded-md">
                    Análise indisponível
                  </div>
                )}
              </div>
          ))}
        </div>
      </div>
    </div>
  );
}