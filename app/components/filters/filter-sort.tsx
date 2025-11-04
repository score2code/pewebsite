import React from 'react';
import { Filter, SortAsc, Calendar, Trophy, Target } from 'lucide-react';

interface FilterOption {
  value: string;
  label: string;
  count?: number;
}

interface FilterSortProps {
  selectedLeague?: string;
  onLeagueChange: (league: string) => void;
  selectedConfidence?: string;
  onConfidenceChange: (confidence: string) => void;
  selectedDate?: string;
  onDateChange: (date: string) => void;
  sortBy?: string;
  onSortChange: (sort: string) => void;
  leagues: FilterOption[];
  showDateFilter?: boolean;
  showConfidenceFilter?: boolean;
  showSort?: boolean;
}

const FilterSort: React.FC<FilterSortProps> = ({
  selectedLeague = '',
  onLeagueChange,
  selectedConfidence = '',
  onConfidenceChange,
  selectedDate = '',
  onDateChange,
  sortBy = 'date',
  onSortChange,
  leagues = [],
  showDateFilter = true,
  showConfidenceFilter = true,
  showSort = true
}) => {
  const confidenceOptions: FilterOption[] = [
    { value: '', label: 'Todas Confianças' },
    { value: 'high', label: 'Alta (80%+)' },
    { value: 'medium', label: 'Média (60-79%)' },
    { value: 'low', label: 'Baixa (<60%)' }
  ];

  const sortOptions: FilterOption[] = [
    { value: 'date', label: 'Data' },
    { value: 'confidence', label: 'Confiança' },
    { value: 'league', label: 'Liga' },
    { value: 'probability', label: 'Probabilidade' }
  ];

  return (
    <div className="bg-light-100/50 dark:bg-dark-800/50 p-4 rounded-xl border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="w-5 h-5 text-purple-600 dark:text-purple-400" />
        <h3 className="text-lg font-semibold text-dark-900 dark:text-light-100">
          Filtros e Ordenação
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* League Filter */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-dark-900/70 dark:text-light-100/70 mb-2">
            <Trophy className="w-4 h-4" />
            Liga
          </label>
          <select
            value={selectedLeague}
            onChange={(e) => onLeagueChange(e.target.value)}
            className="w-full p-2 rounded-lg border border-light-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-900 dark:text-light-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="">Todas as Ligas</option>
            {leagues.map((league) => (
              <option key={league.value} value={league.value}>
                {league.label} {league.count ? `(${league.count})` : ''}
              </option>
            ))}
          </select>
        </div>

        {/* Confidence Filter */}
        {showConfidenceFilter && (
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-dark-900/70 dark:text-light-100/70 mb-2">
              <Target className="w-4 h-4" />
              Confiança
            </label>
            <select
              value={selectedConfidence}
              onChange={(e) => onConfidenceChange(e.target.value)}
              className="w-full p-2 rounded-lg border border-light-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-900 dark:text-light-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              {confidenceOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Date Filter */}
        {showDateFilter && (
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-dark-900/70 dark:text-light-100/70 mb-2">
              <Calendar className="w-4 h-4" />
              Data
            </label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => onDateChange(e.target.value)}
              className="w-full p-2 rounded-lg border border-light-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-900 dark:text-light-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        )}

        {/* Sort */}
        {showSort && (
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-dark-900/70 dark:text-light-100/70 mb-2">
              <SortAsc className="w-4 h-4" />
              Ordenar por
            </label>
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="w-full p-2 rounded-lg border border-light-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-900 dark:text-light-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Active Filters Display */}
      <div className="mt-4 pt-4 border-t border-light-300 dark:border-dark-600">
        <div className="flex flex-wrap gap-2">
          {(selectedLeague || selectedConfidence || selectedDate) && (
            <span className="text-sm text-dark-900/70 dark:text-light-100/70">
              Filtros ativos:
            </span>
          )}
          {selectedLeague && (
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full text-xs">
              {selectedLeague}
              <button
                onClick={() => onLeagueChange('')}
                className="ml-1 text-purple-500 hover:text-purple-700"
              >
                ×
              </button>
            </span>
          )}
          {selectedConfidence && (
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-xs">
              {confidenceOptions.find(o => o.value === selectedConfidence)?.label}
              <button
                onClick={() => onConfidenceChange('')}
                className="ml-1 text-blue-500 hover:text-blue-700"
              >
                ×
              </button>
            </span>
          )}
          {selectedDate && (
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs">
              {new Date(selectedDate + 'T03:00:00').toLocaleDateString('pt-BR')}
              <button
                onClick={() => onDateChange('')}
                className="ml-1 text-green-500 hover:text-green-700"
              >
                ×
              </button>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterSort;