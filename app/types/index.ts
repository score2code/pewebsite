export interface Pick {
  id: string;
  league: string;
  homeTeam: string;
  awayTeam: string;
  prediction: string;
  confidence: number;
  analysis?: string;
  status: 'pending' | 'won' | 'lost' | 'void';
  hit?: boolean;
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
