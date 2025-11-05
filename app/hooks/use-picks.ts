import { useMemo, useCallback } from 'react';
import { Pick } from '@/app/types';

// Hook para memoizar cálculos de estatísticas
export const usePickStats = (picks: Pick[]) => {
  return useMemo(() => {
    if (!picks.length) return null;

    const total = picks.length;
    const won = picks.filter(p => p.status === 'won').length;
    const lost = picks.filter(p => p.status === 'lost').length;
    const pending = picks.filter(p => p.status === 'pending').length;
    
    const hitRate = total > 0 ? Math.round((won / (won + lost)) * 100) : 0;
    const averageOdds = total > 0
      ? picks.reduce((sum, p) => sum + (p.odds ?? 0), 0) / total
      : 0;
    const totalProfit = picks.reduce((sum, p) => {
      if (p.status === 'won') return sum + ((p.odds ?? 2) - 1) * (p.stake ?? 1);
      if (p.status === 'lost') return sum - (p.stake ?? 1);
      return sum;
    }, 0);
    
    const roi = total > 0 ? (totalProfit / (total * (picks[0]?.stake ?? 1))) * 100 : 0;

    return {
      total,
      won,
      lost,
      pending,
      hitRate,
      averageOdds: Math.round(averageOdds * 100) / 100,
      totalProfit: Math.round(totalProfit * 100) / 100,
      roi: Math.round(roi * 100) / 100
    };
  }, [picks]);
};

// Hook para memoizar filtros de palpites
export const useFilteredPicks = (
  picks: Pick[],
  filters: {
    league?: string;
    confidence?: string;
    status?: string;
    dateFrom?: string;
    dateTo?: string;
  }
) => {
  return useMemo(() => {
    if (!picks.length) return [];

    return picks.filter(pick => {
      if (filters.league && pick.league !== filters.league) return false;
      if (filters.status && pick.status !== filters.status) return false;
      
      if (filters.confidence) {
        const confidenceNum = parseInt(filters.confidence);
        if (pick.confidence < confidenceNum) return false;
      }

      const pickTime = pick.date ? new Date(pick.date).getTime() : 0;
      if (filters.dateFrom) {
        const fromTime = new Date(filters.dateFrom).getTime();
        if (pickTime < fromTime) return false;
      }
      if (filters.dateTo) {
        const toTime = new Date(filters.dateTo).getTime();
        if (pickTime > toTime) return false;
      }

      return true;
    });
  }, [picks, filters]);
};

// Hook para memoizar ordenação de palpites
export const useSortedPicks = (picks: Pick[], sortBy: string, sortOrder: 'asc' | 'desc' = 'desc') => {
  return useMemo(() => {
    if (!picks.length) return [];

    const sorted = [...picks].sort((a, b) => {
      let comparison = 0;
      
      switch (sortBy) {
        case 'date':
          comparison = (a.date ? new Date(a.date).getTime() : 0) - (b.date ? new Date(b.date).getTime() : 0);
          break;
        case 'confidence':
          comparison = a.confidence - b.confidence;
          break;
        case 'probability':
          comparison = (a.probability ?? 0) - (b.probability ?? 0);
          break;
        case 'league':
          comparison = a.league.localeCompare(b.league);
          break;
        case 'status':
          comparison = a.status.localeCompare(b.status);
          break;
        default:
          return 0;
      }

      return sortOrder === 'asc' ? comparison : -comparison;
    });

    return sorted;
  }, [picks, sortBy, sortOrder]);
};

// Hook para memoizar estatísticas por liga
export const useLeagueStats = (picks: Pick[]) => {
  return useMemo(() => {
    if (!picks.length) return {};

    const stats: Record<string, {
      total: number;
      won: number;
      lost: number;
      hitRate: number;
      profit: number;
    }> = {};

    picks.forEach(pick => {
      if (!stats[pick.league]) {
        stats[pick.league] = { total: 0, won: 0, lost: 0, hitRate: 0, profit: 0 };
      }

      stats[pick.league].total++;
      if (pick.status === 'won') stats[pick.league].won++;
      if (pick.status === 'lost') stats[pick.league].lost++;
      // Removido: cálculo de lucro baseado em odds
      // Mantemos profit neutro enquanto o campo odds não existe mais
    });

    // Calcular taxas de acerto
    Object.keys(stats).forEach(league => {
      const leagueStats = stats[league];
      const completed = leagueStats.won + leagueStats.lost;
      leagueStats.hitRate = completed > 0 ? Math.round((leagueStats.won / completed) * 100) : 0;
      leagueStats.profit = Math.round(leagueStats.profit * 100) / 100;
    });

    return stats;
  }, [picks]);
};

// Função memoizada para formatar data
export const useFormattedDate = (dateString: string) => {
  return useMemo(() => {
    // Aceita tanto 'YYYY-MM-DD' quanto ISO completo 'YYYY-MM-DDTHH:mm:ssZ'
    const raw = dateString || '';
    const datePart = raw.includes('T') ? raw.split('T')[0] : raw;
    const date = new Date(datePart + 'T03:00:00');
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  }, [dateString]);
};

// Função memoizada para formatar hora
export const useFormattedTime = (dateString: string) => {
  return useMemo(() => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit'
    });
  }, [dateString]);
};

// Callback memoizado para mudança de data
export const useDateChange = () => {
  return useCallback((currentDate: string, days: number): string => {
    const date = new Date(currentDate + 'T00:00:00');
    date.setDate(date.getDate() + days);
    return date.toISOString().split('T')[0];
  }, []);
};

// Hook para debounce de busca
export const useDebounce = <T extends any[]>(
  callback: (...args: T) => void,
  delay: number
) => {
  return useCallback(
    (...args: T) => {
      const timeoutId = setTimeout(() => {
        callback(...args);
      }, delay);
      
      return () => clearTimeout(timeoutId);
    },
    [callback, delay]
  );
};

// Hook para memoizar cálculos de ROI
export const useROI = (picks: Pick[]) => {
  return useMemo(() => {
    if (!picks.length) return { total: 0, percentage: 0 };

    const totalStake = picks.reduce((sum, pick) => sum + (pick.stake || 1), 0);
    // Removido: cálculo de lucro e ROI baseado em odds
    const totalProfit = 0;

    const percentage = totalStake > 0 ? (totalProfit / totalStake) * 100 : 0;

    return {
      total: Math.round(totalProfit * 100) / 100,
      percentage: Math.round(percentage * 100) / 100
    };
  }, [picks]);
};

export default {
  usePickStats,
  useFilteredPicks,
  useSortedPicks,
  useLeagueStats,
  useFormattedDate,
  useFormattedTime,
  useDateChange,
  useDebounce,
  useROI
};