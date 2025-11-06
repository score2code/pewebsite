import * as path from 'path';
import * as fs from 'fs/promises';
import MemoizedPickCard from '@/app/components/pick/memoized-card';
import { formatDateDisplay, changeDate, loadPicksData } from '@/app/lib/data-loader';
import Breadcrumb from '@/app/components/ui/breadcrumb';

export const dynamicParams = true;

export const generateStaticParams = async () => {
  const params: { date: string }[] = [];
  try {
    const baseDir = path.join(process.cwd(), 'app', 'data', 'soccer');
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

  const today = new Date();
  const yyyy = String(today.getFullYear());
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  const rangeDays = 7;
  for (let offset = -rangeDays; offset <= rangeDays; offset++) {
    const base = new Date(`${yyyy}-${mm}-${dd}T00:00:00`);
    base.setDate(base.getDate() + offset);
    const y = String(base.getFullYear());
    const m = String(base.getMonth() + 1).padStart(2, '0');
    const d = String(base.getDate()).padStart(2, '0');
    const dateStr = `${y}-${m}-${d}`;
    if (!params.find(p => p.date === dateStr)) {
      params.push({ date: dateStr });
    }
  }

  if (!params.find(p => p.date === '2025-11-05')) {
    params.push({ date: '2025-11-05' });
  }
  return params;
};

export default async function SoccerByDatePage({ params }: { params: { date: string } }) {
  const date = params.date;
  const picks = await loadPicksData(date, 'soccer');
  const prevDate = changeDate(date, -1);
  const nextDate = changeDate(date, 1);

  return (
    <div className="min-h-screen pt-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Breadcrumb className="mb-4" />
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 mb-8 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm flex items-center justify-between">
          <a href={`/futebol/${prevDate}`} aria-label="Dia Anterior" className="p-2 rounded-lg text-dark-900/70 dark:text-light-100/70 hover:bg-light-200 dark:hover:bg-dark-700 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500">◀</a>
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-dark-900 dark:text-light-100">Palpites de Futebol</h1>
            <p className="text-dark-900/70 dark:text-light-100/70">{formatDateDisplay(date)}</p>
          </div>
          <a href={`/futebol/${nextDate}`} aria-label="Próximo Dia" className="p-2 rounded-lg text-dark-900/70 dark:text-light-100/70 hover:bg-light-200 dark:hover:bg-dark-700 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500">▶</a>
        </div>

        {!picks.length && (
          <div className="bg-yellow-100/60 dark:bg-yellow-900/30 border border-yellow-300 dark:border-yellow-700 rounded-xl p-6 mb-8">
            <p className="text-dark-900/80 dark:text-light-100/80">Nenhum palpite encontrado para esta data.</p>
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-2">
          {picks.map((pick) => (
            <MemoizedPickCard
              key={pick.id}
              pick={pick}
              showStatus={true}
              compact={false}
              date={date}
              sportSegment="futebol"
            />
          ))}
        </div>
      </div>
    </div>
  );
}