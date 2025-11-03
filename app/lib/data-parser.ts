import { Pick } from '@/app/types';

export function parsePicks(data: any[]): Pick[] {
  return data.map(item => {
    // Basic validation and type assertion
    if (!('id' in item && 'league' in item && 'dateTime' in item && 'homeTeam' in item && 'awayTeam' in item && 'tip' in item && 'odds' in item && 'confidence' in item && 'analysis' in item && 'result' in item)) {
      throw new Error("Invalid pick data structure");
    }
    if (!['Win', 'Loss', 'Pending'].includes(item.result)) {
      throw new Error(`Invalid result value: ${item.result}`);
    }
    return item as Pick;
  });
}
