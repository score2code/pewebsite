import { redirect } from 'next/navigation';
import * as fs from 'fs/promises';
import * as path from 'path';
import { getFormattedDate } from '@/app/lib/data-loader';

async function listAvailableFootballDates(): Promise<string[]> {
  const dates: string[] = [];
  try {
    const baseDir = path.join(process.cwd(), 'app', 'data', 'football');
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

export default async function AmericanFootballRedirect() {
  const today = getFormattedDate(new Date());
  const available = await listAvailableFootballDates();
  const target = available.includes(today)
    ? today
    : (available.length ? available[available.length - 1] : '2025-11-05');
  redirect(`/futebol-americano/${target}`);
}