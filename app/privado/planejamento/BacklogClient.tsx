"use client";
import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { CalendarDays, Target, BadgeCheck, Info } from 'lucide-react';

type GameItem = {
  date: string;
  league: string;
  homeTeam: string;
  awayTeam: string;
  market: { type: string; method: string }[];
  recommended?: boolean;
  live?: boolean;
  time?: string;
  note?: string;
  id?: string;
};

function formatDateBR(dateStr: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateStr);
  if (m) {
    const [, y, mo, d] = m;
    return `${d}/${mo}/${y}`;
  }
  return new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', timeZone: 'America/Sao_Paulo' }).format(new Date(dateStr));
}

export default function BacklogClient({ games }: { games: GameItem[] }) {
  const searchParams = useSearchParams();
  const selectedDate = searchParams.get('date') || '';
  const recParam = searchParams.get('rec') || '';

  const filtered = useMemo(() => {
    let list = selectedDate ? games.filter(g => g.date === selectedDate) : games;
    if (recParam === 'true') {
      list = list.filter(g => Boolean(g.recommended));
    } else if (recParam === 'false') {
      list = list.filter(g => !Boolean(g.recommended));
    }
    return [...list].sort((a, b) => {
      if (a.date !== b.date) return a.date.localeCompare(b.date);
      return toMinutes(a.time) - toMinutes(b.time);
    });
  }, [games, selectedDate, recParam]);

  return (
    <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
      <div className="mb-4">
        <h2 className="text-xl md:text-2xl font-semibold text-dark-900 dark:text-light-100 mb-3">Planejamento</h2>
        <form method="GET" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          <div className="flex flex-col">
            <label htmlFor="date" className="text-sm flex items-center gap-1"><CalendarDays size={14} /> Data</label>
            <input id="date" name="date" type="date" defaultValue={selectedDate} className="text-sm bg-light-100 dark:bg-dark-800 border border-light-300 dark:border-dark-600 rounded px-2 py-1" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="rec" className="text-sm flex items-center gap-1"><Target size={14} /> Recomendadas do dia</label>
            <select id="rec" name="rec" defaultValue={recParam} className="text-sm bg-light-100 dark:bg-dark-800 border border-light-300 dark:border-dark-600 rounded px-2 py-1">
              <option value="">Todos</option>
              <option value="true">Sim</option>
              <option value="false">Não</option>
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
          const cardClass = isRecommended ? 'border-green-200 dark:border-green-700 bg-green-50/10 dark:bg-green-900/5' : 'border-light-300 dark:border-dark-600';
          return (
            <div key={`${g.date}-${g.league}-${g.homeTeam}-${g.awayTeam}-${i}`} className={`rounded-lg border ${cardClass} bg-light-100/50 dark:bg-dark-800/50 p-4 transition-all hover:shadow-md`}>
              <div className="flex items-baseline gap-2">
                <div className="text-sm text-dark-900/80 dark:text-light-100/80 font-medium whitespace-nowrap">{formatDateBR(g.date)}{g.time ? ` • ${g.time}` : ''}</div>
                <div className="text-xs text-dark-900/70 dark:text-light-100/70 flex-1 min-w-0 overflow-hidden text-right truncate">{g.league}</div>
              </div>

              <div className="mt-1 text-dark-900 dark:text-light-100 font-semibold text-lg">{g.homeTeam} × {g.awayTeam}</div>

              {/* Seção da Nota/Motivo */}
              {g.note && (
                <div className="mt-2 mb-3 flex gap-2 p-2 rounded bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100/50 dark:border-blue-800/50">
                  <Info size={16} className="text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-blue-800/90 dark:text-blue-300/90 italic leading-relaxed">
                    {g.note}
                  </p>
                </div>
              )}

              {/* Widget SofaScore dentro do card */}
              {!!g.id && (
              <div className="mt-3 mb-3 rounded-lg overflow-hidden border border-light-300 dark:border-dark-600">
                <div className="overflow-hidden h-[140px]">
                  <iframe
                    width="100%"
                    height="286"
                    src={`https://widgets.sofascore.com/pt-BR/embed/attackMomentum?id=${g.id}&widgetTheme=dark`}
                    frameBorder="0"
                    scrolling="no"
                    title={`Stats ${g.homeTeam} vs ${g.awayTeam}`}
                    className="mt-[-10px]"
                  />
                </div>
                <div className="text-[10px] px-2 py-1 bg-light-200/50 dark:bg-dark-700/50 text-center border-t border-light-300 dark:border-dark-600">
                  Momento de ataque: {g.homeTeam} x {g.awayTeam}
                </div>
              </div>
              )}

              <div className="mt-2 flex flex-col gap-1 text-sm">
                {[...g.market].map((item: { type: string; method: string }, index: number) => {
                  const isTrader = item.type === 'trader';
                  const isRollover = item.type === 'rollover';
                  const badgeClass = isTrader ? 'text-blue-700 dark:text-blue-400' : isRollover ? 'text-orange-700 dark:text-orange-400' : 'text-green-700 dark:text-green-400';

                  return (
                    <div key={index} className="flex items-center gap-2">
                      <BadgeCheck size={14} className={badgeClass} />
                      <span className="text-dark-900/90 dark:text-light-100/90">
                        <strong className="text-[10px] uppercase tracking-wider opacity-60">Plano {index + 1}:</strong> {item.method}
                      </span>
                    </div>
                  )
                })}
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

function toMinutes(t?: string): number {
  if (!t) return 0;
  const parts = t.split(':');
  const h = Number(parts[0]) || 0;
  const m = Number(parts[1]) || 0;
  return h * 60 + m;
}
