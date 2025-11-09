
import * as fs from 'fs/promises';
import * as path from 'path';

type BasePick = {
  id: string;
  league: string;
  homeTeam: string;
  awayTeam: string;
  date: string;
  time: string;
  timezone?: string;
  prediction: string;
  hit?: boolean;
  confidence?: number;
  status?: string;
};

type DailyPicks = {
  date: string;
  picks: BasePick[];
};

async function readDailyFiles(baseDir: string): Promise<DailyPicks[]> {
  const all: DailyPicks[] = [];

  try {
    const years = await fs.readdir(baseDir).catch(() => []);
    for (const year of years) {
      const yearDir = path.join(baseDir, year);
      if (!(await fs.stat(yearDir)).isDirectory()) continue;

      const months = await fs.readdir(yearDir).catch(() => []);
      for (const month of months) {
        const monthDir = path.join(yearDir, month);
        if (!(await fs.stat(monthDir)).isDirectory()) continue;

        const files = await fs.readdir(monthDir).catch(() => []);
        for (const file of files) {
          if (file.endsWith('.json')) {
            const day = file.replace('.json', '');
            const date = `${year}-${month}-${day}`;
            const filePath = path.join(monthDir, file);
            const fileContent = await fs.readFile(filePath, 'utf-8');
            let parsed = JSON.parse(fileContent);
            const picks: BasePick[] = Array.isArray(parsed)
              ? parsed
              : Array.isArray(parsed?.data)
                ? (parsed.data as BasePick[])
                : [];
            if (Array.isArray(picks) && picks.length > 0) {
              all.push({ date, picks });
            }
          }
        }
      }
    }
  } catch (error) {
    console.error(`[statistics] Erro ao ler arquivos em ${baseDir}:`, error);
  }

  // Ordena por data, do mais antigo para o mais recente
  return all.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

export async function getDashboardStats() {
  // Lê tanto os bilhetes quanto os palpites gerais de futebol
  const ticketDir = path.join(process.cwd(), 'app', 'data', 'ticket');
  const soccerDir = path.join(process.cwd(), 'app', 'data', 'soccer');

  const [ticketDaily, soccerDaily] = await Promise.all([
    readDailyFiles(ticketDir),
    readDailyFiles(soccerDir)
  ]);
  // Também agrega futebol-americano
  const footballDir = path.join(process.cwd(), 'app', 'data', 'football');
  const footballDaily = await readDailyFiles(footballDir);

  // Unifica por data
  const byDate: Record<string, BasePick[]> = {};
  for (const day of [...ticketDaily, ...soccerDaily, ...footballDaily]) {
    if (!byDate[day.date]) byDate[day.date] = [];
    byDate[day.date].push(...day.picks);
  }
  const unifiedDaily: DailyPicks[] = Object.entries(byDate)
    .map(([date, picks]) => {
      const seen = new Set<string>();
      const unique = picks.filter(p => {
        if (!p.id) return true;
        if (seen.has(p.id)) return false;
        seen.add(p.id);
        return true;
      });
      return { date, picks: unique };
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const allPicks = unifiedDaily.flatMap(d => d.picks);

  const totalPicks = allPicks.length;
  const resolvedPicks = allPicks.filter(p => p.hit !== undefined);
  const totalHits = resolvedPicks.filter(p => p.hit === true).length;
  const hitRate = resolvedPicks.length > 0 ? (totalHits / resolvedPicks.length) * 100 : 0;
  const pendingCount = totalPicks - resolvedPicks.length;

  // Gera dados para o gráfico de desempenho (últimos 30 dias com atividade)
  const performanceSeries = unifiedDaily.slice(-30).map(day => {
    // Formatar label sem timezone para evitar dia desalinhado
    const [y, m, d] = day.date.split('-');
    const label = `${d}/${m}`;
    const dayResolved = day.picks.filter(p => p.hit !== undefined);
    const dayHits = dayResolved.filter(p => p.hit === true).length;
    const pct = dayResolved.length > 0 ? (dayHits / dayResolved.length) * 100 : 0;
    return {
      label,
      value: parseFloat(pct.toFixed(0)), // inteiro para o gráfico em %
    };
  });

  return {
    hitRate: parseFloat(hitRate.toFixed(1)),
    totalPicks,
    pendingCount,
    series: performanceSeries,
  };
}
