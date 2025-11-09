import { redirect } from 'next/navigation';
import * as fs from 'fs/promises';
import * as path from 'path';
import { getFormattedDate } from '@/app/lib/data-loader';

async function listAvailableSoccerDates(): Promise<string[]> {
  const dates: string[] = [];
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
            dates.push(`${y}-${m}-${day}`);
          }
        }
      }
    }
  } catch {}
  return dates.sort();
}

export default async function SoccerRedirect() {
  const today = getFormattedDate(new Date());
  const available = await listAvailableSoccerDates();
  // Prioriza HOJE; se não houver, escolhe a última data ANTERIOR a hoje.
  // Se não existir nenhuma anterior, cai para a primeira disponível.
  const pastOrToday = available.filter((d) => d <= today);
  const target = available.includes(today)
    ? today
    : (pastOrToday.length
      ? pastOrToday[pastOrToday.length - 1]
      : (available.length ? available[0] : today));
  redirect(`/futebol/${target}`);
}
