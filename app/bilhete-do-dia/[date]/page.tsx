import * as path from 'path';
import * as fs from 'fs/promises';
import { formatDateDisplay, changeDate } from '@/app/lib/data-loader';
import Breadcrumb from '@/app/components/ui/breadcrumb';

type TicketPick = {
  id: string;
  league: string;
  homeTeam: string;
  awayTeam: string;
  date: string;
  time: string;
  timezone?: string;
  prediction: string;
  hit?: boolean; // indica se o palpite foi certo
  reason?: string; // motivo do resultado (acerto/erro)
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
    const soccerPath = path.join(process.cwd(), 'app', 'data', 'soccer', year, month, `${day}.json`);
    const soccerFile = await fs.readFile(soccerPath, 'utf-8').catch(() => null);
    if (soccerFile) {
      const picks = JSON.parse(soccerFile);
      const found = (Array.isArray(picks) ? picks : Array.isArray((picks as any)?.data) ? (picks as any).data : []).find((p: any) => p.id === id);
      if (found) return `/futebol/${date}/${id}`;
    }
  } catch {}

  try {
    const fbPath = path.join(process.cwd(), 'app', 'data', 'football', year, month, `${day}.json`);
    const fbFile = await fs.readFile(fbPath, 'utf-8').catch(() => null);
    if (fbFile) {
      const picks = JSON.parse(fbFile);
      const found = (Array.isArray(picks) ? picks : Array.isArray((picks as any)?.data) ? (picks as any).data : []).find((p: any) => p.id === id);
      if (found) return `/futebol-americano/${date}/${id}`;
    }
  } catch {}
  return null;
}

// Permitir parâmetros dinâmicos; serão restritos pelos valores gerados em build
export const dynamicParams = true;

export const generateStaticParams = async () => {
  const params: { date: string }[] = [];
  try {
    const baseDir = path.join(process.cwd(), 'app', 'data', 'ticket');
    const years = await fs.readdir(baseDir).catch(() => []);
    for (const y of years) {
      const yearDir = path.join(baseDir, y);
      const months = await fs.readdir(yearDir).catch(() => []);
      for (const m of months) {
        const monthDir = path.join(yearDir, m);
        const files = await fs.readdir(monthDir).catch(() => []);
        for (const f of files) {
          if (f.endsWith('.json')) {
            const day = f.replace('.json', '');
            params.push({ date: `${y}-${m}-${day}` });
          }
        }
      }
    }
  } catch {}
  // Garante pelo menos algumas datas para não quebrar em produção estática
  const today = new Date();
  const yyyy = String(today.getFullYear());
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  const todayStr = `${yyyy}-${mm}-${dd}`;

  // Inclui uma janela de datas em torno de hoje (±7 dias)
  const rangeDays = 7;
  for (let offset = -rangeDays; offset <= rangeDays; offset++) {
    const base = new Date(yyyy + '-' + mm + '-' + dd + 'T00:00:00');
    base.setDate(base.getDate() + offset);
    const y = String(base.getFullYear());
    const m = String(base.getMonth() + 1).padStart(2, '0');
    const d = String(base.getDate()).padStart(2, '0');
    const dateStr = `${y}-${m}-${d}`;
    if (!params.find(p => p.date === dateStr)) {
      params.push({ date: dateStr });
    }
  }

  // Inclui uma data de exemplo se ainda não estiver
  if (!params.find(p => p.date === '2025-11-05')) {
    params.push({ date: '2025-11-05' });
  }
  return params;
}

export default async function TicketByDatePage({ params }: { params: { date: string } }) {
  const date = params.date;
  const picks = await getTicketPicks(date);
  const prevDate = changeDate(date, -1);
  const nextDate = changeDate(date, 1);

  const allHit = picks.length > 0 && picks.every(p => p.hit === true);

  const picksWithHref = await Promise.all(
    picks.map(async (p) => ({ ...p, href: await resolvePickHref(p.id, date) }))
  );

  return (
    <div className="min-h-screen pt-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm flex items-center justify-between">
          <a href={`/bilhete-do-dia/${prevDate}`} aria-label="Dia Anterior" className="p-2 rounded-lg text-dark-900/70 dark:text-light-100/70 hover:bg-light-200 dark:hover:bg-dark-700 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500">◀</a>
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-dark-900 dark:text-light-100">Bilhete do Dia</h1>
            <p className="text-dark-900/70 dark:text-light-100/70">{formatDateDisplay(date)}</p>
          </div>
          <a href={`/bilhete-do-dia/${nextDate}`} aria-label="Próximo Dia" className="p-2 rounded-lg text-dark-900/70 dark:text-light-100/70 hover:bg-light-200 dark:hover:bg-dark-700 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500">▶</a>
        </div>

        {!picks.length && (
          <div className="bg-yellow-100/60 dark:bg-yellow-900/30 border border-yellow-300 dark:border-yellow-700 rounded-xl p-6 mb-8">
            <p className="text-dark-900/80 dark:text-light-100/80">
              Nenhum bilhete encontrado para esta data.
            </p>
          </div>
        )}

        {picks.length > 0 && allHit && (
          <div className="bg-green-100/70 dark:bg-green-900/40 border border-green-400 dark:border-green-700 rounded-xl p-6 mb-8 shadow-custom dark:shadow-custom-dark">
            <p className="text-dark-900/90 dark:text-light-100/90 font-extrabold">
              🎉 Bilhete vencedor! Todos os palpites deste bilhete foram vencedores.
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
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="inline-block bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-md text-sm font-semibold break-words">
                  {p.prediction}
                </span>
                {p.hit === true && (
                  <span className="inline-flex bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 px-2 py-1 rounded-md text-xs font-semibold flex-shrink-0">
                    Ganhou
                  </span>
                )}
                {p.hit === false && (
                  <span className="inline-flex bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 px-2 py-1 rounded-md text-xs font-semibold flex-shrink-0">
                    Perdeu
                  </span>
                )}
                {p.hit === undefined && (
                  <span className="inline-flex bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md text-xs font-semibold flex-shrink-0">
                    Pendente
                  </span>
                )}
              </div>
              {p.reason && (
                <p className="mt-1 pb-1 text-xs text-dark-900/70 dark:text-light-100/70">
                  Resultado: {p.reason}
                </p>
              )}
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
