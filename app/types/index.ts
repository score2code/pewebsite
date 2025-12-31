export interface Pick {
  id: string;
  league: string;
  homeTeam: string;
  awayTeam: string;
  prediction: string;
  confidence: number;
  analysis?: string;
  status: 'pending' | 'green' | 'red' | 'void' | 'postponed';
  reason?: string;
  country?: string;
  date?: string;
  time?: string; // HH:mm
  timezone?: string; // e.g., BRT
  probability?: number;
  odds?: number;
  result?: string;
  stake?: number;
  roi?: number;

  // Campos legados (mantidos para compatibilidade)
  dateTime?: string;
  tip?: string;
}

export interface Review {
  id: string;
  name: string;
  logoUrl: string;
  rating: number;
  pros: string[];
  cons: string[];
  bonus: string;
  affiliateLink: string;
}

export interface BookmakerOdds {
  name: string;
  logoUrl: string;
  affiliateLink: string;
  odds: {
    home: number;
    draw: number;
    away: number;
  };
}

export interface OddsComparison {
  matchId: string;
  league: string;
  homeTeam: string;
  awayTeam: string;
  dateTime: string;
  bookmakers: BookmakerOdds[];
}

export interface TeamStanding {
  rank: number;
  team: {
    name: string;
    logoUrl: string;
  };
  points: number;
  played: number;
  wins: number;
  draws: number;
  losses: number;
  goalDifference: number;
}

export interface LeagueStanding {
  leagueName: string;
  country: string;
  standings: TeamStanding[];
}

export interface ChampionshipStats {
  totalMatches: number;
  matchesPlayed: number;
  goalsScored: number;
  averageGoalsPerMatch: number;
  cardsByType: {
    yellow: number;
    red: number;
  };
  winPercentages: {
    home: number;
    draw: number;
    away: number;
  };
  topScorers: Array<{
    name: string;
    goals: number;
    team: string;
  }>;
}

export interface Championship {
  name: string;
  slug: string;
  country: string;
  type: 'national' | 'international';
  region: 'brazil' | 'europe' | 'south-america';
  logoUrl?: string;
  description?: string;
  season?: string;
  startDate?: string;
  endDate?: string;
  status: 'active' | 'upcoming' | 'finished';
}

export interface ChampionshipData {
  championship: Championship;
  standing?: LeagueStanding;
  picks: Pick[];
  stats?: ChampionshipStats; // agregado (fallback)
  seasonStats?: Array<{
    season: string;
    stats: ChampionshipStats;
  }>;
}

export interface AnalysisTrend {
  pointsPct?: {
    home?: number[];
    away?: number[];
  };
  xgScore?: {
    home?: number[];
    away?: number[];
  };
  xg?: {
    home?: number[];
    away?: number[];
  };
  teamsCV?: {
    home?: number[];
    away?: number[];
  };
}

export interface AnalysisStatsSeries {
  g?: number[];
  ga?: number[];
  xg?: number[];
  nv?: number[];
}

/**
 * Interface para dados brutos de volume de jogo (Match Raw Data)
 */
export interface AnalysisMatchRaw {
  shots?: number[];
  shotsOnTarget?: number[];
  corners?: number[];
  fouls?: number[];
  accuratePasses?: number[];
  saves?: number[];
  tackles?: number[];
  dangerousAttacks?: number[];
}

export interface AnalysisTacticalRaw {
  possessionPct?: number[];
  fieldTiltPct?: number[];
  ppda?: number[];
  pressuresFinalThird?: number[];
  defensiveActions?: number[];
  penaltyAreaEntries?: number[];
  shotsBoxPct?: number[];
  nvRaw?: number[];
}

export interface AnalysisStatsTeam extends AnalysisStatsSeries {
  tacticalRaw?: AnalysisTacticalRaw;
  matchRaw?: AnalysisMatchRaw; // Extensão com os novos dados brutos
}

export interface AnalysisStats {
  last20?: {
    home?: AnalysisStatsTeam;
    away?: AnalysisStatsTeam;
  };
}

export interface AnalysisTacticalMetrics {
  mppt: number;
  dfpt: number;
  nv: number;
  nvpf: number;
}

export interface AnalysisTactical {
  home?: AnalysisTacticalMetrics;
  away?: AnalysisTacticalMetrics;
}

export interface AnalysisData {
  id: string;
  league: string;
  homeTeam: string;
  awayTeam: string;
  date: string;
  time?: string;
  timezone?: string;
  trend?: AnalysisTrend;
  stats?: AnalysisStats;
  tactical?: AnalysisTactical;
}

// Exportação adicional para garantir compatibilidade com importações diretas de TeamStats
export type TeamStats = AnalysisStats;
