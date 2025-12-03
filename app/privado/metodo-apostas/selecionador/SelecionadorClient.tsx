"use client";
import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { CalendarDays, Target, BadgeCheck } from 'lucide-react';

type GameItem = {
  date: string; // YYYY-MM-DD
  league: string;
  homeTeam: string;
  awayTeam: string;
  market: string; // e.g. "DC 1X", "DC X2", "DC 12", "HA +2.5", "HA +3.0"
  odds: number;
  recommended?: boolean;
};

function formatDateBR(dateStr: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateStr);
  if (m) {
    const [, y, mo, d] = m;
    return `${d}/${mo}/${y}`;
  }
  return new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', timeZone: 'America/Sao_Paulo' }).format(new Date(dateStr));
}

// recomendações agora são controladas via propriedade boolean 'recommended' no JSON

export default function SelecionadorClient({ games }: { games: GameItem[] }) {
  const searchParams = useSearchParams();
  const selectedDate = searchParams.get('date') || '';
  const onlyRecommended = (searchParams.get('rec') || '') === 'true';

  const filtered = useMemo(() => {
    let list = selectedDate ? games.filter(g => g.date === selectedDate) : games;
    if (onlyRecommended) list = list.filter(g => Boolean(g.recommended));
    return [...list].sort((a, b) => a.odds - b.odds);
  }, [games, selectedDate, onlyRecommended]);

  return (
    <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
      <div className="mb-4">
        <h2 className="text-xl md:text-2xl font-semibold text-dark-900 dark:text-light-100 mb-3">Selecionador de Jogos (Rollover)</h2>
        <form method="GET" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          <div className="flex flex-col">
            <label htmlFor="date" className="text-sm flex items-center gap-1"><CalendarDays size={14} /> Data</label>
            <input id="date" name="date" type="date" defaultValue={selectedDate} className="text-sm bg-light-100 dark:bg-dark-800 border border-light-300 dark:border-dark-600 rounded px-2 py-1" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="rec" className="text-sm flex items-center gap-1"><Target size={14} /> Recomendadas do dia</label>
            <select id="rec" name="rec" defaultValue={onlyRecommended ? 'true' : ''} className="text-sm bg-light-100 dark:bg-dark-800 border border-light-300 dark:border-dark-600 rounded px-2 py-1">
              <option value="">Não</option>
              <option value="true">Sim</option>
            </select>
          </div>
          <div className="sm:col-span-2 md:col-span-3 flex justify-end">
            <button type="submit" className="text-sm px-3 py-2 rounded border border-light-300 dark:border-dark-600 bg-light-200 dark:bg-dark-700">Filtrar</button>
          </div>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {filtered.map((g, i) => {
          const isRecommended = Boolean(g.recommended);
          const badgeClass = isRecommended ? 'text-green-700 dark:text-green-400' : 'text-dark-900/70 dark:text-light-100/70';
          const cardClass = isRecommended ? 'border-green-200 dark:border-green-700' : 'border-light-300 dark:border-dark-600';
          return (
            <div key={`${g.date}-${g.league}-${g.homeTeam}-${g.awayTeam}-${i}`} className={`rounded-lg border ${cardClass} bg-light-100/50 dark:bg-dark-800/50 p-4`}>
              <div className="flex items-baseline gap-2">
                <div className="text-sm text-dark-900/80 dark:text-light-100/80 font-medium whitespace-nowrap">{formatDateBR(g.date)}</div>
                <div className="text-xs text-dark-900/70 dark:text-light-100/70 flex-1 min-w-0 overflow-hidden text-right truncate">{g.league}</div>
              </div>
              <div className="mt-1 text-dark-900 dark:text-light-100 font-semibold">{g.homeTeam} × {g.awayTeam}</div>
              <div className="mt-2 flex items-center justify-between text-sm">
                <div className="inline-flex items-center gap-1">
                  <BadgeCheck size={14} className={badgeClass} />
                  <span className={badgeClass}>{g.market}</span>
                </div>
                <div className="font-bold">{g.odds.toFixed(2)}</div>
              </div>
            </div>
          );
        })}
        {filtered.length === 0 && (
          <div className="text-center text-sm text-dark-900/70 dark:text-light-100/70 py-4">Nenhum jogo encontrado para os filtros.</div>
        )}
      </div>
    </div>
  );
}
