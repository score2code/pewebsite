export type OddsFormat = 'decimal' | 'american' | 'fractional';

export function decimalToImpliedProb(decimal: number): number {
  if (decimal <= 1) return 0;
  return 1 / decimal;
}

export function americanToImpliedProb(american: number): number {
  if (american === 0) return 0;
  if (american > 0) {
    return 100 / (american + 100);
  }
  return -american / (-american + 100);
}

export function fractionalToImpliedProb(numerator: number, denominator: number): number {
  if (denominator <= 0) return 0;
  const decimal = 1 + numerator / denominator;
  return decimalToImpliedProb(decimal);
}

export function decimalToAmerican(decimal: number): number {
  if (decimal <= 1) return 0;
  if (decimal >= 2) {
    return Math.round((decimal - 1) * 100);
  }
  return Math.round(-100 / (decimal - 1));
}

export function americanToDecimal(american: number): number {
  if (american === 0) return 1;
  if (american > 0) {
    return 1 + american / 100;
  }
  return 1 + 100 / -american;
}

export function fractionalToDecimal(numerator: number, denominator: number): number {
  if (denominator <= 0) return 1;
  return 1 + numerator / denominator;
}

export function decimalToFractional(decimal: number): [number, number] {
  if (decimal <= 1) return [0, 1];
  const value = decimal - 1;
  // aproximação simples para fração
  const denominator = 100;
  const numerator = Math.round(value * denominator);
  const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : a);
  const d = gcd(numerator, denominator);
  return [numerator / d, denominator / d];
}

export function payoutFromDecimal(stake: number, decimal: number): { profit: number; totalReturn: number } {
  const totalReturn = stake * decimal;
  const profit = totalReturn - stake;
  return { profit, totalReturn };
}

export function combineParlayDecimal(odds: number[]): number {
  return odds.reduce((acc, o) => acc * o, 1);
}