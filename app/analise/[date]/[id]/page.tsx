import { promises as fs } from 'fs';
import path from 'path';
import type { AnalysisData } from '@/app/types';
import MatchHeader from '@/app/components/analysis/match-header';
import TrendSection from '@/app/components/analysis/trend-section';
import StatsCardSection from '@/app/components/analysis/stats-card-section';
import TacticalAnalysisSection from '@/app/components/analysis/tactical-analysis-section';
import ScoreProjectionSection from '@/app/components/analysis/score-projection-section';

export const dynamicParams = true;

export async function generateStaticParams() {
  return [{ date: '2025-12-27', id: 'nottingham-forest-x-manchester-city' }];
}

export default async function AnaliseJogoPage({ params }: { params: { date: string; id: string } }) {
  const filePath = path.join(process.cwd(), 'app', 'data', 'analise', params.date, `${params.id}.json`);
  let pick: AnalysisData | undefined = undefined;
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    const raw = JSON.parse(content);
    if (Array.isArray(raw)) {
      pick = raw.find((p: any) => p?.id === params.id);
    } else if (raw && typeof raw === 'object') {
      pick = raw as AnalysisData;
    }
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
            <TrendSection trend={pick.trend} />
            <StatsCardSection stats={pick.stats} homeTeam={pick.homeTeam} awayTeam={pick.awayTeam} />
            <TacticalAnalysisSection tactical={pick.tactical} homeTeam={pick.homeTeam} awayTeam={pick.awayTeam} />
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
