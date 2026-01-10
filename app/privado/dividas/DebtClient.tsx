"use client";
import { useMemo, useState } from 'react';
import { Wallet, TrendingDown, TrendingUp, DollarSign, Calendar, FileText, User, Search, AlertCircle } from 'lucide-react';

type DebtEntry = {
  type: 'debt' | 'payment';
  creditor: string;
  amount: number;
  date: string;
  note?: string;
};

type CreditorSummary = {
  creditor: string;
  totalDebt: number;
  totalPaid: number;
  balance: number;
  entries: DebtEntry[];
};

export default function DebtManagerClient({ entries }: { entries: DebtEntry[] }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCreditors, setExpandedCreditors] = useState<Set<string>>(new Set());
  const [sortBy, setSortBy] = useState<'name' | 'balance' | 'date'>('balance');

  const toggleCreditor = (creditor: string) => {
    const newExpanded = new Set(expandedCreditors);
    if (newExpanded.has(creditor)) {
      newExpanded.delete(creditor);
    } else {
      newExpanded.add(creditor);
    }
    setExpandedCreditors(newExpanded);
  };

  const expandAll = () => {
    setExpandedCreditors(new Set(creditorsSummary.map(c => c.creditor)));
  };

  const collapseAll = () => {
    setExpandedCreditors(new Set());
  };

  // Agrupar por credor
  const creditorsSummary = useMemo(() => {
    const grouped = new Map<string, CreditorSummary>();

    entries.forEach(entry => {
      if (!grouped.has(entry.creditor)) {
        grouped.set(entry.creditor, {
          creditor: entry.creditor,
          totalDebt: 0,
          totalPaid: 0,
          balance: 0,
          entries: []
        });
      }

      const summary = grouped.get(entry.creditor)!;

      if (entry.type === 'debt') {
        summary.totalDebt += entry.amount;
      } else {
        summary.totalPaid += entry.amount;
      }

      summary.entries.push(entry);
    });

    // Calcular saldo e ordenar entradas por data
    const result = Array.from(grouped.values()).map(summary => ({
      ...summary,
      balance: summary.totalDebt - summary.totalPaid,
      entries: summary.entries.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    }));

    // Ordenar conforme seleção
    return result.sort((a, b) => {
      if (sortBy === 'name') return a.creditor.localeCompare(b.creditor);
      if (sortBy === 'balance') return b.balance - a.balance;
      if (sortBy === 'date') {
        const aDate = Math.max(...a.entries.map(e => new Date(e.date).getTime()));
        const bDate = Math.max(...b.entries.map(e => new Date(e.date).getTime()));
        return bDate - aDate;
      }
      return 0;
    });
  }, [entries, sortBy]);

  // Estatísticas gerais
  const stats = useMemo(() => {
    const totalDebt = entries
      .filter(e => e.type === 'debt')
      .reduce((sum, e) => sum + e.amount, 0);

    const totalPaid = entries
      .filter(e => e.type === 'payment')
      .reduce((sum, e) => sum + e.amount, 0);

    const balance = totalDebt - totalPaid;
    const creditorCount = creditorsSummary.length;

    return { totalDebt, totalPaid, balance, creditorCount };
  }, [entries, creditorsSummary]);

  // Filtrar por busca
  const filtered = useMemo(() => {
    if (!searchTerm.trim()) return creditorsSummary;

    const term = searchTerm.toLowerCase();
    return creditorsSummary.filter(c =>
      c.creditor.toLowerCase().includes(term) ||
      c.entries.some(e => e.note?.toLowerCase().includes(term))
    );
  }, [creditorsSummary, searchTerm]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  return (
    <div className="space-y-6">
      {/* Estatísticas Gerais */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-xl p-4 border border-red-200 dark:border-red-800">
          <div className="flex items-center gap-2 mb-1">
            <TrendingDown size={18} className="text-red-600 dark:text-red-400" />
            <div className="text-xs text-red-700/70 dark:text-red-300/70 font-medium">Total em Dívidas</div>
          </div>
          <div className="text-2xl font-bold text-red-600 dark:text-red-400">
            {formatCurrency(stats.totalDebt)}
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl p-4 border border-green-200 dark:border-green-800">
          <div className="flex items-center gap-2 mb-1">
            <TrendingUp size={18} className="text-green-600 dark:text-green-400" />
            <div className="text-xs text-green-700/70 dark:text-green-300/70 font-medium">Total Pago</div>
          </div>
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">
            {formatCurrency(stats.totalPaid)}
          </div>
        </div>

        <div className={`bg-gradient-to-br rounded-xl p-4 border ${
          stats.balance > 0
            ? 'from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-orange-200 dark:border-orange-800'
            : 'from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800'
        }`}>
          <div className="flex items-center gap-2 mb-1">
            <Wallet size={18} className={stats.balance > 0 ? 'text-orange-600 dark:text-orange-400' : 'text-blue-600 dark:text-blue-400'} />
            <div className={`text-xs font-medium ${
              stats.balance > 0
                ? 'text-orange-700/70 dark:text-orange-300/70'
                : 'text-blue-700/70 dark:text-blue-300/70'
            }`}>
              Saldo Devedor
            </div>
          </div>
          <div className={`text-2xl font-bold ${
            stats.balance > 0
              ? 'text-orange-600 dark:text-orange-400'
              : 'text-blue-600 dark:text-blue-400'
          }`}>
            {formatCurrency(stats.balance)}
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl p-4 border border-purple-200 dark:border-purple-800">
          <div className="flex items-center gap-2 mb-1">
            <User size={18} className="text-purple-600 dark:text-purple-400" />
            <div className="text-xs text-purple-700/70 dark:text-purple-300/70 font-medium">Credores</div>
          </div>
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
            {stats.creditorCount}
          </div>
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
              placeholder="Buscar por credor ou nota..."
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

          {/* Ordenação */}
          <div className="flex gap-2">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="text-xs px-3 py-1.5 rounded bg-light-200 dark:bg-dark-700 text-dark-900 dark:text-light-100 border border-light-300 dark:border-dark-600 outline-none"
            >
              <option value="balance">Ordenar por Saldo</option>
              <option value="name">Ordenar por Nome</option>
              <option value="date">Ordenar por Data</option>
            </select>
            <button
              onClick={expandAll}
              className="text-xs px-3 py-1.5 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors font-medium"
            >
              Expandir Todos
            </button>
            <button
              onClick={collapseAll}
              className="text-xs px-3 py-1.5 rounded bg-light-200 dark:bg-dark-700 text-dark-900 dark:text-light-100 hover:bg-light-300 dark:hover:bg-dark-600 transition-colors font-medium"
            >
              Colapsar Todos
            </button>
          </div>
        </div>
      </div>

      {/* Lista de Credores */}
      <div className="grid grid-cols-1 gap-3">
        {filtered.map((creditor) => {
          const isExpanded = expandedCreditors.has(creditor.creditor);
          const isPaid = creditor.balance <= 0;

          return (
            <div
              key={creditor.creditor}
              className={`rounded-xl border shadow-custom dark:shadow-custom-dark backdrop-blur-sm overflow-hidden transition-all ${
                isPaid
                  ? 'bg-green-50/30 dark:bg-green-900/10 border-green-200 dark:border-green-800/50'
                  : 'bg-light-100/50 dark:bg-dark-800/50 border-light-300 dark:border-dark-600'
              }`}
            >
              {/* Header do Credor */}
              <div
                onClick={() => toggleCreditor(creditor.creditor)}
                className={`flex items-center justify-between p-4 cursor-pointer transition-colors ${
                  isPaid
                    ? 'hover:bg-green-100/50 dark:hover:bg-green-900/20'
                    : 'hover:bg-light-200/50 dark:hover:bg-dark-700/50'
                }`}
              >
                <div className="flex items-center gap-3 flex-1">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isPaid
                      ? 'bg-green-100 dark:bg-green-900/30'
                      : creditor.balance > 1000
                      ? 'bg-red-100 dark:bg-red-900/30'
                      : 'bg-orange-100 dark:bg-orange-900/30'
                  }`}>
                    <User size={20} className={
                      isPaid
                        ? 'text-green-600 dark:text-green-400'
                        : creditor.balance > 1000
                        ? 'text-red-600 dark:text-red-400'
                        : 'text-orange-600 dark:text-orange-400'
                    } />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-dark-900 dark:text-light-100 flex items-center gap-2">
                      {creditor.creditor}
                      {isPaid && <span className="text-sm">✅</span>}
                    </h3>
                    <p className="text-sm text-dark-900/60 dark:text-light-100/50">
                      {creditor.entries.length} {creditor.entries.length === 1 ? 'transação' : 'transações'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {/* Estatísticas do Credor */}
                  <div className="text-right hidden sm:block">
                    <div className="text-xs text-dark-900/60 dark:text-light-100/50 mb-1">
                      Dívida: <span className="font-medium text-red-600 dark:text-red-400">{formatCurrency(creditor.totalDebt)}</span>
                      {' • '}
                      Pago: <span className="font-medium text-green-600 dark:text-green-400">{formatCurrency(creditor.totalPaid)}</span>
                    </div>
                    <div className={`text-lg font-bold ${
                      isPaid
                        ? 'text-green-600 dark:text-green-400'
                        : 'text-orange-600 dark:text-orange-400'
                    }`}>
                      {isPaid ? 'Quitado' : formatCurrency(creditor.balance)}
                    </div>
                  </div>

                  {/* Badge Mobile */}
                  <div className="sm:hidden">
                    <div className={`text-base font-bold ${
                      isPaid
                        ? 'text-green-600 dark:text-green-400'
                        : 'text-orange-600 dark:text-orange-400'
                    }`}>
                      {isPaid ? 'Quitado' : formatCurrency(creditor.balance)}
                    </div>
                  </div>

                  <button className={`font-bold text-lg ${
                    isPaid
                      ? 'text-green-600 dark:text-green-400'
                      : 'text-blue-600 dark:text-blue-400'
                  }`}>
                    {isExpanded ? '▼' : '▶'}
                  </button>
                </div>
              </div>

              {/* Lista de Transações */}
              {isExpanded && (
                <div className="px-4 pb-4 space-y-3 border-t border-light-300 dark:border-dark-600 pt-4">
                  {creditor.entries.map((entry, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border transition-all hover:shadow-md ${
                        entry.type === 'debt'
                          ? 'bg-red-50/50 dark:bg-red-900/10 border-red-200/50 dark:border-red-800/50'
                          : 'bg-green-50/50 dark:bg-green-900/10 border-green-200/50 dark:border-green-800/50'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-3 flex-1">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                            entry.type === 'debt'
                              ? 'bg-red-100 dark:bg-red-900/30'
                              : 'bg-green-100 dark:bg-green-900/30'
                          }`}>
                            {entry.type === 'debt' ? (
                              <TrendingDown size={16} className="text-red-600 dark:text-red-400" />
                            ) : (
                              <TrendingUp size={16} className="text-green-600 dark:text-green-400" />
                            )}
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-2">
                              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                                entry.type === 'debt'
                                  ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                                  : 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                              }`}>
                                {entry.type === 'debt' ? 'Dívida' : 'Pagamento'}
                              </span>
                              <span className="text-xs px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium flex items-center gap-1">
                                <Calendar size={12} />
                                {formatDate(entry.date)}
                              </span>
                            </div>

                            {entry.note && (
                              <div className="flex gap-2 mb-2">
                                <FileText size={14} className="text-dark-900/60 dark:text-light-100/50 shrink-0 mt-0.5" />
                                <p className="text-sm text-dark-900/80 dark:text-light-100/80">
                                  {entry.note}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className={`text-right shrink-0 ${
                          entry.type === 'debt'
                            ? 'text-red-600 dark:text-red-400'
                            : 'text-green-600 dark:text-green-400'
                        }`}>
                          <div className="text-lg font-bold">
                            {entry.type === 'debt' ? '+' : '-'} {formatCurrency(entry.amount)}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        {filtered.length === 0 && (
          <div className="text-center py-12 bg-light-100/50 dark:bg-dark-800/50 rounded-xl border border-light-300 dark:border-dark-600">
            <AlertCircle size={48} className="mx-auto mb-3 text-dark-900/30 dark:text-light-100/30" />
            <p className="text-dark-900/70 dark:text-light-100/70">
              {searchTerm ? `Nenhum credor encontrado para "${searchTerm}"` : 'Nenhuma dívida registrada'}
            </p>
          </div>
        )}
      </div>

      {/* Resumo */}
      {filtered.length > 0 && (
        <div className="bg-light-100/50 dark:bg-dark-800/50 rounded-xl p-4 border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
          <p className="text-sm text-dark-900/70 dark:text-light-100/70 text-center">
            Exibindo <strong>{filtered.length}</strong> de <strong>{creditorsSummary.length}</strong> credores
          </p>
        </div>
      )}
    </div>
  );
}
