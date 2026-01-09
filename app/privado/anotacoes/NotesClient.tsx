"use client";
import { useMemo, useState } from 'react';
import { BookOpen, StickyNote, Search, AlertCircle, XCircle, Shield } from 'lucide-react';

type NoteItem = {
  game: string;
  items: string[];
};

type StrategyItem = {
  title: string;
  notes: NoteItem[];
};

type ExcludedItem = {
  name: string;
  type: 'liga' | 'time';
  reason?: string;
};

export default function StrategiesClient({
  strategies,
  excludedList = []
}: {
  strategies: StrategyItem[];
  excludedList?: ExcludedItem[];
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [showExcluded, setShowExcluded] = useState(true);
  const [expandedStrategies, setExpandedStrategies] = useState<Set<number>>(new Set());

  const toggleStrategy = (index: number) => {
    const newExpanded = new Set(expandedStrategies);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedStrategies(newExpanded);
  };

  const expandAll = () => {
    setExpandedStrategies(new Set(filtered.map((_, i) => i)));
  };

  const collapseAll = () => {
    setExpandedStrategies(new Set());
  };

  // Estatísticas gerais
  const stats = useMemo(() => {
    const totalGames = strategies.reduce((acc, s) => acc + s.notes.length, 0);
    const totalNotes = strategies.reduce((acc, s) =>
      acc + s.notes.reduce((noteAcc, n) => noteAcc + (n.items?.length || 0), 0), 0
    );
    return { totalStrategies: strategies.length, totalGames, totalNotes };
  }, [strategies]);

  const filtered = useMemo(() => {
    if (!searchTerm.trim()) return strategies;

    const term = searchTerm.toLowerCase();
    return strategies.filter(s =>
      s.title.toLowerCase().includes(term) ||
      s.notes.some(note =>
        note.game.toLowerCase().includes(term) ||
        note.items?.some(item => item.toLowerCase().includes(term))
      )
    );
  }, [strategies, searchTerm]);

  // Extrair informações úteis do texto
  const parseNote = (text: string) => {
    const timeMatch = text.match(/(\d+)\s*min/i);
    const scoreMatch = text.match(/(\d+)x(\d+)/);
    const oddMatch = text.match(/odd\s*([\d.]+)/i);
    const percentMatch = text.match(/(\d+)%/);

    return {
      time: timeMatch ? timeMatch[1] : null,
      score: scoreMatch ? `${scoreMatch[1]}x${scoreMatch[2]}` : null,
      odd: oddMatch ? oddMatch[1] : null,
      percent: percentMatch ? percentMatch[1] : null,
      hasProfit: text.toLowerCase().includes('lucro'),
      hasLoss: text.toLowerCase().includes('prejuizo') || text.toLowerCase().includes('perda'),
    };
  };

  const ligas = excludedList.filter(item => item.type === 'liga');
  const times = excludedList.filter(item => item.type === 'time');

  return (
    <div className="space-y-6">
      {/* Lista de Exclusão - Ligas e Times para Evitar */}
      {excludedList.length > 0 && (
        <div className="bg-gradient-to-br from-orange-50/50 to-amber-50/50 dark:from-orange-950/20 dark:to-amber-950/20 rounded-xl border border-orange-200 dark:border-orange-800/50 overflow-hidden shadow-sm">
          {/* Header */}
          <div
            className="flex items-center justify-between p-4 cursor-pointer hover:bg-orange-100/30 dark:hover:bg-orange-900/20 transition-colors"
            onClick={() => setShowExcluded(!showExcluded)}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-900/40 dark:to-amber-900/40 flex items-center justify-center">
                <Shield size={20} className="text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-dark-900 dark:text-light-100 flex items-center gap-2">
                  Lista de Exclusão
                  <span className="text-base">⚠️</span>
                </h3>
                <p className="text-sm text-dark-900/60 dark:text-light-100/50">
                  Ligas e times que apresentaram decepções nos estudos
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs px-3 py-1.5 rounded-full bg-orange-200 dark:bg-orange-900/50 text-orange-800 dark:text-orange-200 font-bold">
                {excludedList.length} {excludedList.length === 1 ? 'item' : 'itens'}
              </span>
              <button className="text-orange-600 dark:text-orange-400 text-lg font-bold">
                {showExcluded ? '▼' : '▶'}
              </button>
            </div>
          </div>

          {/* Conteúdo da Lista de Exclusão */}
          {showExcluded && (
            <div className="p-4 pt-0 space-y-4">
              {/* Ligas */}
              {ligas.length > 0 && (
                <div>
                  <h4 className="text-sm font-bold text-dark-900 dark:text-light-100 mb-3 flex items-center gap-2 px-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                    Ligas ({ligas.length})
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {ligas.map((item, index) => (
                      <div
                        key={index}
                        className="group relative flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-orange-50/80 to-yellow-50/80 dark:from-orange-950/20 dark:to-yellow-950/20 border border-orange-200/60 dark:border-orange-800/40 hover:border-orange-300 dark:hover:border-orange-700 transition-all hover:shadow-md"
                      >
                        <div className="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center shrink-0">
                          <XCircle size={18} className="text-orange-600 dark:text-orange-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-dark-900 dark:text-light-100 text-sm mb-1">
                            {item.name}
                          </p>
                          {item.reason && (
                            <p className="text-xs text-dark-900/70 dark:text-light-100/60 leading-relaxed">
                              {item.reason}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Times */}
              {times.length > 0 && (
                <div>
                  <h4 className="text-sm font-bold text-dark-900 dark:text-light-100 mb-3 flex items-center gap-2 px-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                    Times ({times.length})
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {times.map((item, index) => (
                      <div
                        key={index}
                        className="group relative flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-amber-50/80 to-orange-50/80 dark:from-amber-950/20 dark:to-orange-950/20 border border-amber-200/60 dark:border-amber-800/40 hover:border-amber-300 dark:hover:border-amber-700 transition-all hover:shadow-md"
                      >
                        <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center shrink-0">
                          <XCircle size={18} className="text-amber-600 dark:text-amber-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-dark-900 dark:text-light-100 text-sm mb-1">
                            {item.name}
                          </p>
                          {item.reason && (
                            <p className="text-xs text-dark-900/70 dark:text-light-100/60 leading-relaxed">
                              {item.reason}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Estatísticas Gerais */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stats.totalStrategies}</div>
          <div className="text-sm text-blue-700/70 dark:text-blue-300/70">Estratégias</div>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl p-4 border border-green-200 dark:border-green-800">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">{stats.totalGames}</div>
          <div className="text-sm text-green-700/70 dark:text-green-300/70">Jogos Analisados</div>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl p-4 border border-purple-200 dark:border-purple-800">
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{stats.totalNotes}</div>
          <div className="text-sm text-purple-700/70 dark:text-purple-300/70">Notas Totais</div>
        </div>
      </div>

      {/* Barra de Busca e Controles */}
      <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-4 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Busca */}
          <div className="flex-1 flex items-center gap-2">
            <Search size={18} className="text-dark-900/60 dark:text-light-100/60" />
            <input
              type="text"
              placeholder="Buscar estratégias, jogos ou notas..."
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

          {/* Botões Expandir/Colapsar */}
          <div className="flex gap-2">
            <button
              onClick={expandAll}
              className="text-xs px-3 py-1.5 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors font-medium"
            >
              Expandir Todas
            </button>
            <button
              onClick={collapseAll}
              className="text-xs px-3 py-1.5 rounded bg-light-200 dark:bg-dark-700 text-dark-900 dark:text-light-100 hover:bg-light-300 dark:hover:bg-dark-600 transition-colors font-medium"
            >
              Colapsar Todas
            </button>
          </div>
        </div>
      </div>

      {/* Lista de Estratégias */}
      <div className="grid grid-cols-1 gap-3">
        {filtered.map((strategy, index) => {
          const isExpanded = expandedStrategies.has(index);
          const totalNotesInStrategy = strategy.notes.reduce((acc, n) => acc + (n.items?.length || 0), 0);

          return (
            <div
              key={index}
              className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm overflow-hidden transition-all"
            >
              {/* Header da Estratégia - Clicável */}
              <div
                onClick={() => toggleStrategy(index)}
                className="flex items-center justify-between p-4 cursor-pointer hover:bg-light-200/50 dark:hover:bg-dark-700/50 transition-colors"
              >
                <div className="flex items-center gap-3 flex-1">
                  <BookOpen size={20} className="text-blue-600 dark:text-blue-400 shrink-0" />
                  <h3 className="text-lg font-bold text-dark-900 dark:text-light-100">
                    {strategy.title}
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  {/* Badges de Resumo */}
                  <div className="flex gap-2">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium">
                      {strategy.notes.length} {strategy.notes.length === 1 ? 'jogo' : 'jogos'}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 font-medium">
                      {totalNotesInStrategy} {totalNotesInStrategy === 1 ? 'nota' : 'notas'}
                    </span>
                  </div>

                  {/* Ícone de Expandir/Colapsar */}
                  <button className="text-blue-600 dark:text-blue-400 font-bold text-lg">
                    {isExpanded ? '▼' : '▶'}
                  </button>
                </div>
              </div>

              {/* Conteúdo da Estratégia - Colapsável */}
              {isExpanded && (
                <div className="px-4 pb-4 space-y-4 border-t border-light-300 dark:border-dark-600 pt-4">
                  {strategy.notes.length > 0 ? (
                    strategy.notes?.map((note, noteIndex) => (
                      <div key={noteIndex} className="border-l-2 border-blue-600 dark:border-blue-400 pl-4 space-y-3">
                        {/* Nome do Jogo */}
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-base text-dark-900 dark:text-light-100">
                            {note.game}
                          </h4>
                          <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                            {note.items?.length || 0} {note.items?.length === 1 ? 'nota' : 'notas'}
                          </span>
                        </div>

                        {/* Itens do Jogo */}
                        <div className="space-y-2">
                          {note?.items?.map((item, itemIndex) => {
                            const parsed = parseNote(item);
                            return (
                              <div
                                key={itemIndex}
                                className={`p-3 rounded-lg border transition-all hover:shadow-md ${
                                  parsed.hasProfit
                                    ? 'bg-green-50/50 dark:bg-green-900/10 border-green-200/50 dark:border-green-800/50'
                                    : parsed.hasLoss
                                    ? 'bg-red-50/50 dark:bg-red-900/10 border-red-200/50 dark:border-red-800/50'
                                    : 'bg-amber-50/50 dark:bg-amber-900/10 border-amber-200/50 dark:border-amber-800/50'
                                }`}
                              >
                                {/* Badges de Informações */}
                                <div className="flex flex-wrap gap-2 mb-2">
                                  {parsed.time && (
                                    <span className="text-xs px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 font-medium">
                                      ⏱️ {parsed.time} min
                                    </span>
                                  )}
                                  {parsed.score && (
                                    <span className="text-xs px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-bold">
                                      {parsed.score}
                                    </span>
                                  )}
                                  {parsed.odd && (
                                    <span className="text-xs px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 font-medium">
                                      @ {parsed.odd}
                                    </span>
                                  )}
                                  {parsed.percent && (
                                    <span className={`text-xs px-2 py-0.5 rounded font-medium ${
                                      parsed.hasProfit
                                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                                        : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                                    }`}>
                                      {parsed.hasProfit ? '📈' : '📉'} {parsed.percent}%
                                    </span>
                                  )}
                                </div>

                                {/* Texto da Nota */}
                                <div className="flex gap-2">
                                  <StickyNote size={14} className={`shrink-0 mt-0.5 ${
                                    parsed.hasProfit
                                      ? 'text-green-600 dark:text-green-400'
                                      : parsed.hasLoss
                                      ? 'text-red-600 dark:text-red-400'
                                      : 'text-amber-600 dark:text-amber-400'
                                  }`} />
                                  <p className="text-sm text-dark-900/90 dark:text-light-100/90 leading-relaxed">
                                    {item}
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="flex gap-3 p-4 rounded-lg bg-light-200/50 dark:bg-dark-700/50 border border-light-300 dark:border-dark-600">
                      <AlertCircle size={16} className="text-dark-900/50 dark:text-light-100/50 shrink-0 mt-0.5" />
                      <p className="text-sm text-dark-900/60 dark:text-light-100/60 italic">
                        Nenhuma nota registrada para esta estratégia
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}

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
