import { Pick } from '@/app/types';
import { validatePickArray } from './validation';

export type SportType = 'soccer' | 'football';

/**
 * Helper function to get formatted date in YYYY-MM-DD format
 */
export const getFormattedDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
};

/**
 * Format date for display in Portuguese
 */
export const formatDateDisplay = (dateString: string): string => {
  const date = new Date(dateString + 'T03:00:00');
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });
};

/**
 * Change date by adding/subtracting days
 */
export const changeDate = (currentDate: string, days: number): string => {
  const date = new Date(currentDate + 'T00:00:00');
  date.setDate(date.getDate() + days);
  return date.toISOString().split('T')[0];
};

/**
 * Load picks data from static JSON files
 */
export const loadPicksData = async (date: string, sport: SportType): Promise<Pick[]> => {
  // No servidor, leia diretamente de app/data
  if (typeof window === 'undefined') {
    try {
      const year = date.substring(0, 4);
      const month = date.substring(5, 7);
      const day = date.substring(8, 10);
      const pathMod = await import('path');
      const { readFile } = await import('fs/promises');
      const filePath = pathMod.join(process.cwd(), 'app', 'data', sport, year, month, `${day}.json`);
      const file = await readFile(filePath, 'utf-8').catch(() => null);
      if (!file) return [];
      const raw = JSON.parse(file);
      const picks = Array.isArray(raw) ? raw : Array.isArray(raw?.data) ? raw.data : [];
      const validated = validatePickArray(picks);
      return validated.map(p => ({ ...p, date: p.date && p.date.length === 10 ? p.date : date }));
    } catch (error) {
      console.error(`[fs] Failed to read ${sport} picks for ${date}:`, error);
      return [];
    }
  }

  // No cliente, não há acesso ao filesystem e removemos a API.
  // Esta função deve ser chamada apenas em Server Components.
  console.warn(`[client] loadPicksData(${sport}, ${date}) chamado no cliente; retornando [] para site 100% estático.`);
  return [];
};

/**
 * Load picks data with fallback to API (for compatibility with existing code)
 */
export const loadPicksDataWithFallback = async (date: string, sport: SportType): Promise<Pick[]> => {
  return loadPicksData(date, sport);
};