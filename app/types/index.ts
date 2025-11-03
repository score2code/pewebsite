export interface Pick {
  id: string;
  league: string;
  dateTime: string;
  homeTeam: string;
  awayTeam: string;
  tip: string;
  odds: number;
  confidence: number;
  analysis: string;
  result: 'Win' | 'Loss' | 'Pending'; // Status do palpite
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
