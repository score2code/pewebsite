import { promises as fs } from 'fs';
import path from 'path';
import type { AnalysisData } from '@/app/types';

// Importes em kebab-case
import MatchHeader from '@/app/components/analysis/match-header';
import MatchInsightSection from '@/app/components/analysis/match-insight-section';
import TacticalDominanceSection from '@/app/components/analysis/tactical-dominance-section';
import TacticalAnalysisSection from '@/app/components/analysis/tactical-analysis-section';
import TrendSection from '@/app/components/analysis/trend-section';
import StatsCardSection from '@/app/components/analysis/stats-card-section';
import PerformanceActivitySection from '@/app/components/analysis/performance-activity-section';
import ScoreProjectionSection from '@/app/components/analysis/score-projection-section';

export const dynamicParams = true;

const slug = (s: string) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

export async function generateStaticParams() {
  const gamesPath = path.join(process.cwd(), 'app', 'data', 'analise', 'games.json');
  try {
    const txt = await fs.readFile(gamesPath, 'utf-8');
    const games = JSON.parse(txt) as Array<{ date: string; homeTeam: string; awayTeam: string }>;
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

    // Localiza o jogo específico na lista global usando a data e o ID da URL
    const game = games.find(g => {
      const generatedId = `${slug(g.homeTeam)}-x-${slug(g.awayTeam)}`;
      return g.date === params.date && generatedId === params.id;
    });

    if (!game) throw new Error('Partida não encontrada no games.json');

    const homeSlug = slug(game.homeTeam);
    const awaySlug = slug(game.awayTeam);

    // Caminhos para os arquivos individuais de estatísticas de cada time
    const homePath = path.join(process.cwd(), 'app', 'data', 'analise', 'teams', `${homeSlug}.json`);
    const awayPath = path.join(process.cwd(), 'app', 'data', 'analise', 'teams', `${awaySlug}.json`);

    const [homeTxt, awayTxt] = await Promise.all([
      fs.readFile(homePath, 'utf-8'),
      fs.readFile(awayPath, 'utf-8'),
    ]);

    const homeData = JSON.parse(homeTxt);
    const awayData = JSON.parse(awayTxt);

    // Montagem do objeto Pick com a estrutura necessária para os componentes
    pick = {
      id: `${homeSlug}-x-${awaySlug}`,
      league: game.league || 'Liga Desconhecida',
      homeTeam: game.homeTeam,
      awayTeam: game.awayTeam,
      date: game.date,
      time: game.time,
      timezone: game.timezone,
      trend: {
        pointsPct: { home: homeData.trend?.pointsPct, away: awayData.trend?.pointsPct },
        xgScore: { home: homeData.trend?.xgScore, away: awayData.trend?.xgScore },
        xg: { home: homeData.trend?.xg, away: awayData.trend?.xg },
        teamsCV: { home: homeData.trend?.teamsCV, away: awayData.trend?.teamsCV },
      },
      stats: {
        last20: {
          home: {
            g: homeData.stats?.g,
            ga: homeData.stats?.ga,
            xg: homeData.stats?.xg,
            nv: homeData.stats?.nv,
            matchRaw: homeData.stats?.matchRaw,
            tacticalRaw: homeData.stats?.tacticalRaw,
          },
          away: {
            g: awayData.stats?.g,
            ga: awayData.stats?.ga,
            xg: awayData.stats?.xg,
            nv: awayData.stats?.nv,
            matchRaw: awayData.stats?.matchRaw,
            tacticalRaw: awayData.stats?.tacticalRaw,
          },
        },
      },
    };
  } catch (error) {
    console.error(`Erro ao processar pick ${params.id} na data ${params.date}:`, error);
  }

  if (!pick) {
    return (
      <div className="min-h-screen pt-12 px-4 flex justify-center bg-light-50 dark:bg-dark-950">
        <div className="max-w-md w-full bg-red-50 dark:bg-red-900/10 text-red-700 dark:text-red-400 p-6 rounded-2xl border border-red-200 dark:border-red-800/30 text-center">
          <h2 className="font-bold mb-2 text-lg">Análise Indisponível</h2>
          <p className="text-sm opacity-80">Não foi possível localizar os arquivos de dados para este confronto nesta data.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-8 pb-16 px-4 bg-light-50 dark:bg-dark-950">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="bg-white/90 dark:bg-dark-800/90 rounded-3xl border border-light-300 dark:border-dark-600 shadow-2xl backdrop-blur-xl overflow-hidden">

          <MatchHeader pick={pick} />

          <div className="p-6 md:p-8 space-y-12">

            <MatchInsightSection
              homeName={pick.homeTeam}
              awayName={pick.awayTeam}
              stats={pick.stats}
            />

            <TacticalDominanceSection
              stats={pick.stats}
              homeTeam={pick.homeTeam}
              awayTeam={pick.awayTeam}
            />

            <TrendSection trend={pick.trend} />

            <TacticalAnalysisSection
              stats={pick.stats}
              homeTeam={pick.homeTeam}
              awayTeam={pick.awayTeam}
            />

            <StatsCardSection
              stats={pick.stats}
              homeTeam={pick.homeTeam}
              awayTeam={pick.awayTeam}
            />

            <PerformanceActivitySection stats={pick.stats} />

            <ScoreProjectionSection stats={pick.stats} />
          </div>

          <div className="px-8 py-5 bg-light-100/50 dark:bg-dark-900/50 border-t border-light-300 dark:border-dark-600 flex items-center justify-between text-[10px] font-black uppercase tracking-[0.2em] opacity-40">
            <span>Match ID: {pick.id}</span>
            <span>Data: {pick.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
