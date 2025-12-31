import { promises as fs } from 'fs';
import path from 'path';
import type { AnalysisData } from '@/app/types';
import MatchHeader from '@/app/components/analysis/match-header';
import TrendSection from '@/app/components/analysis/trend-section';
import StatsCardSection from '@/app/components/analysis/stats-card-section';
import TacticalAnalysisSection from '@/app/components/analysis/tactical-analysis-section';
import ScoreProjectionSection from '@/app/components/analysis/score-projection-section';
import MatchInsightSection from '@/app/components/analysis/match-insight-section'

export const dynamicParams = true;

export async function generateStaticParams() {
  const gamesPath = path.join(process.cwd(), 'app', 'data', 'analise', 'games.json');
  try {
    const txt = await fs.readFile(gamesPath, 'utf-8');
    const games = JSON.parse(txt) as Array<{ date: string; homeTeam: string; awayTeam: string }>;
    const slug = (s: string) =>
      s
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
    return games.map(g => ({
      date: g.date,
      id: `${slug(g.homeTeam)}-x-${slug(g.awayTeam)}`,
    }));
  } catch {
    return [];
  }
}

export default async function AnaliseJogoPage({ params }: { params: { date: string; id: string } }) {
  const gamesPath = path.join(process.cwd(), 'app', 'data', 'analise', 'games.json');
  const slug = (s: string) =>
    s
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  let pick: AnalysisData | undefined = undefined;
  try {
    const txt = await fs.readFile(gamesPath, 'utf-8');
    const games = JSON.parse(txt) as Array<{
      league?: string;
      homeTeam: string;
      awayTeam: string;
      date: string;
      time?: string;
      timezone?: string;
    }>;
    const game = games.find(g => {
      const id = `${slug(g.homeTeam)}-x-${slug(g.awayTeam)}`;
      return g.date === params.date && id === params.id;
    });
    if (!game) throw new Error('not found');
    const homeSlug = slug(game.homeTeam);
    const awaySlug = slug(game.awayTeam);
    const homePath = path.join(process.cwd(), 'app', 'data', 'analise', 'teams', `${homeSlug}.json`);
    const awayPath = path.join(process.cwd(), 'app', 'data', 'analise', 'teams', `${awaySlug}.json`);
    const [homeTxt, awayTxt] = await Promise.all([
      fs.readFile(homePath, 'utf-8'),
      fs.readFile(awayPath, 'utf-8'),
    ]);
    const home = JSON.parse(homeTxt) as {
      trend?: { pointsPct?: number[]; xgScore?: number[]; xg?: number[]; teamsCV?: number[] };
      stats?: { g?: number[]; ga?: number[]; xg?: number[]; nv?: number[]; tacticalRaw?: any };
    };
    const away = JSON.parse(awayTxt) as {
      trend?: { pointsPct?: number[]; xgScore?: number[]; xg?: number[]; teamsCV?: number[] };
      stats?: { g?: number[]; ga?: number[]; xg?: number[]; nv?: number[]; tacticalRaw?: any };
    };
    pick = {
      id: `${homeSlug}-x-${awaySlug}`,
      league: game.league || '',
      homeTeam: game.homeTeam,
      awayTeam: game.awayTeam,
      date: game.date,
      time: game.time,
      timezone: game.timezone,
      trend: {
        pointsPct: { home: home.trend?.pointsPct, away: away.trend?.pointsPct },
        xgScore: { home: home.trend?.xgScore, away: away.trend?.xgScore },
        xg: { home: home.trend?.xg, away: away.trend?.xg },
        teamsCV: { home: home.trend?.teamsCV, away: away.trend?.teamsCV },
      },
      stats: {
        last20: {
          home: {
            g: home.stats?.g,
            ga: home.stats?.ga,
            xg: home.stats?.xg,
            nv: home.stats?.nv,
            tacticalRaw: home.stats?.tacticalRaw,
          },
          away: {
            g: away.stats?.g,
            ga: away.stats?.ga,
            xg: away.stats?.xg,
            nv: away.stats?.nv,
            tacticalRaw: away.stats?.tacticalRaw,
          },
        },
      },
    };
  } catch {
    pick = undefined;
  }

  if (!pick) {
    return (
      <div className="min-h-screen pt-8 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-yellow-100/60 dark:bg-yellow-900/30 border border-yellow-300 dark:border-yellow-700 rounded-xl p-6">
            <p className="text-dark-900/80 dark:text-light-100/80">Palpite não encontrado para {params.date}.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-light-100/60 dark:bg-dark-800/60 rounded-xl border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm overflow-hidden">
          <MatchHeader pick={pick} />
          <div className="p-6">
            <MatchInsightSection
              homeName={pick.homeTeam}
              awayName={pick.awayTeam}
              stats={pick.stats}
            />
            <TrendSection trend={pick.trend} />
            <StatsCardSection stats={pick.stats} homeTeam={pick.homeTeam} awayTeam={pick.awayTeam} />
            <TacticalAnalysisSection stats={pick.stats} homeTeam={pick.homeTeam} awayTeam={pick.awayTeam} />
            <ScoreProjectionSection stats={pick.stats} />
          </div>
          <div className="px-6 py-4 border-t border-light-300 dark:border-dark-600 flex items-center justify-between text-sm">
            <span className="text-dark-900/60 dark:text-light-100/60">ID: {pick.id}</span>
            <span className="text-dark-900/60 dark:text-light-100/60">{params.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
