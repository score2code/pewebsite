import { getFormattedDate } from '@/app/lib/data-loader';
import { redirect } from 'next/navigation';
import * as fs from 'fs/promises';
import * as path from 'path';

async function listAvailableTicketDates(): Promise<string[]> {
  const dates: string[] = [];
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
            dates.push(`${y}-${m}-${day}`);
          }
        }
      }
    }
  } catch {}
  return dates.sort();
}

export default async function BilheteRedirect() {
  const today = getFormattedDate(new Date());
  const available = await listAvailableTicketDates();
  // Escolhe a data mais próxima no FUTURO; se não houver, cai para hoje (se existir) ou a última disponível (passado)
  const futureDates = available.filter((d) => d > today);
  const target = futureDates.length
    ? futureDates[0]
    : (available.includes(today)
      ? today
      : (available.length ? available[available.length - 1] : today));
  redirect(`/bilhete-do-dia/${target}`);
}