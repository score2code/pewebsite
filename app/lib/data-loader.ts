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
  try {
    const url = `/data/${sport}/${date.substring(0, 4)}/${date.substring(5, 7)}/${date.substring(8, 10)}.json`;
    console.log(`Fetching from URL: ${url}`);
    
    const response = await fetch(url);
    console.log(`Response status: ${response.status}`);
    
    if (!response.ok) {
      console.error(`Failed to fetch picks, response not OK: ${response.status} ${response.statusText}`);
      return [];
    }
    const contentType = response.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      console.error(`Unexpected content-type for picks: ${contentType}`);
      return [];
    }
    
    const result = await response.json();
    console.log(`Fetched data:`, result);
    
    const picks = Array.isArray(result) ? result : [];
    return validatePickArray(picks);
  } catch (error) {
    console.error(`Failed to fetch ${sport} picks for date ${date}:`, error);
    return [];
  }
};

/**
 * Load picks data with fallback to API (for compatibility with existing code)
 */
export const loadPicksDataWithFallback = async (date: string, sport: SportType): Promise<Pick[]> => {
  // First try to load from static files
  const staticData = await loadPicksData(date, sport);
  
  if (staticData.length > 0) {
    return staticData;
  }
  
  // Fallback: try API endpoint (for backward compatibility)
  try {
    const API_BASE_URL = '/api/picks';
    const fileName = `${sport}-${date}.json`;
    const response = await fetch(`${API_BASE_URL}/${fileName}`);
    
    if (response.ok) {
      const data = await response.json();
      const picks = data.data && Array.isArray(data.data) ? data.data : [];
      return validatePickArray(picks);
    }
  } catch (error) {
    console.warn(`API fallback failed for ${sport} picks on ${date}:`, error);
  }
  
  return [];
};