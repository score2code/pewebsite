"use client";
import { useMemo, useState } from 'react';
import { BookOpen, StickyNote, Search, AlertCircle } from 'lucide-react';

type StrategyItem = {
  title: string;
  notes: string[];
};

export default function StrategiesClient({ strategies }: { strategies: StrategyItem[] }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = useMemo(() => {
    if (!searchTerm.trim()) return strategies;

    const term = searchTerm.toLowerCase();
    return strategies.filter(s =>
      s.title.toLowerCase().includes(term) ||
      s.notes.some(note => note.toLowerCase().includes(term))
    );
  }, [strategies, searchTerm]);

  return (
    <div className="space-y-6">
      {/* Barra de Busca */}
      <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-4 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <Search size={18} className="text-dark-900/60 dark:text-light-100/60" />
          <input
            type="text"
            placeholder="Buscar estratégias ou notas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-dark-900 dark:text-light-100 placeholder:text-dark-900/50 dark:placeholder:text-light-100/50"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="text-xs px-2 py-1 rounded bg-light-200 dark:bg-dark-700 hover:bg-light-300 dark:hover:bg-dark-600 transition-colors"
            >
              Limpar
            </button>
          )}
        </div>
      </div>

      {/* Lista de Estratégias */}
      <div className="grid grid-cols-1 gap-4">
        {filtered.map((strategy, index) => (
          <div
            key={index}
            className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-6 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm hover:shadow-lg transition-all"
          >
            {/* Título da Estratégia */}
            <div className="flex items-start gap-3 mb-4">
              <BookOpen size={20} className="text-blue-600 dark:text-blue-400 shrink-0 mt-1" />
              <h3 className="text-xl font-bold text-dark-900 dark:text-light-100">
                {strategy.title}
              </h3>
            </div>

            {/* Notas */}
            <div className="space-y-3 pl-8">
              {strategy.notes.length > 0 && strategy.notes.some(note => note.trim()) ? (
                strategy.notes.map((note, noteIndex) => {
                  if (!note.trim()) return null;

                  return (
                    <div
                      key={noteIndex}
                      className="flex gap-3 p-3 rounded-lg bg-amber-50/50 dark:bg-amber-900/10 border border-amber-200/50 dark:border-amber-800/50"
                    >
                      <StickyNote size={16} className="text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                      <p className="text-sm text-dark-900/90 dark:text-light-100/90 leading-relaxed">
                        {note}
                      </p>
                    </div>
                  );
                })
              ) : (
                <div className="flex gap-3 p-3 rounded-lg bg-light-200/50 dark:bg-dark-700/50 border border-light-300 dark:border-dark-600">
                  <AlertCircle size={16} className="text-dark-900/50 dark:text-light-100/50 shrink-0 mt-0.5" />
                  <p className="text-sm text-dark-900/60 dark:text-light-100/60 italic">
                    Nenhuma nota registrada para esta estratégia
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="text-center py-12 bg-light-100/50 dark:bg-dark-800/50 rounded-xl border border-light-300 dark:border-dark-600">
            <Search size={48} className="mx-auto mb-3 text-dark-900/30 dark:text-light-100/30" />
            <p className="text-dark-900/70 dark:text-light-100/70">
              Nenhuma estratégia encontrada para "{searchTerm}"
            </p>
          </div>
        )}
      </div>

      {/* Resumo */}
      {filtered.length > 0 && (
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-4 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <p className="text-sm text-dark-900/70 dark:text-light-100/70 text-center">
            Exibindo <strong>{filtered.length}</strong> de <strong>{strategies.length}</strong> estratégias
          </p>
        </div>
      )}
    </div>
  );
}
