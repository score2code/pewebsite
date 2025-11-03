export interface PickData {
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
