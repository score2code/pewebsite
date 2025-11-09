import React from 'react';
import dynamic from 'next/dynamic';
import { TrendingUp, TrendingDown, Target, Award, BarChart3, Users } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon: React.ReactNode;
  color: 'green' | 'blue' | 'purple' | 'orange' | 'red';
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, change, icon, color }) => {
  const getColorClasses = (color: string) => {
    const colors = {
      green: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-300 dark:border-green-700',
      blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border-blue-300 dark:border-blue-700',
      purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 border-purple-300 dark:border-purple-700',
      orange: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 border-orange-300 dark:border-orange-700',
      red: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border-red-300 dark:border-red-700'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className={`p-4 rounded-xl border shadow-sm backdrop-blur-sm ${getColorClasses(color)}`}>
      <div className="flex items-center justify-between mb-2">
        <div className="p-2 rounded-lg bg-white/50 dark:bg-black/20">
          {icon}
        </div>
        {change !== undefined && (
          <div className={`flex items-center text-xs font-semibold ${
            change >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
          }`}>
            {change >= 0 ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
            {Math.abs(change)}%
          </div>
        )}
      </div>
      <div className="text-2xl font-bold mb-1">{value}</div>
      <div className="text-sm opacity-80">{title}</div>
    </div>
  );
};

interface StatsDashboardProps {
  hitRate?: number;
  totalPicks?: number;
  pendingCount?: number;
  series?: { label: string; value: number }[];
}

const PerformanceChart = dynamic(() => import('./performance-chart'), { ssr: false });

const StatsDashboard: React.FC<StatsDashboardProps> = ({
  hitRate = 0,
  totalPicks = 0,
  pendingCount = 0,
  series = []
}) => {
  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold text-dark-900 dark:text-light-100 mb-2">
          Nossas Estatísticas
        </h2>
        <p className="text-dark-900/70 dark:text-light-100/70">
          Acompanhe nosso desempenho e resultados
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <StatsCard
          title="Taxa de Acerto"
          value={`${hitRate}%`}
          icon={<Target className="w-5 h-5" />}
          color="green"
        />
        <StatsCard
          title="Total de Palpites"
          value={totalPicks}
          icon={<BarChart3 className="w-5 h-5" />}
          color="blue"
        />
        <StatsCard
          title="Pendentes"
          value={pendingCount}
          icon={<Users className="w-5 h-5" />}
          color="purple"
        />
      </div>

      {/* Performance Chart */}
      <div className="bg-light-100/50 dark:bg-dark-800/50 p-6 rounded-xl border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm">
        <h3 className="text-xl font-bold text-dark-900 dark:text-light-100 mb-4">
          Desempenho Recente
        </h3>
        {series && series.length > 0 ? (
          <PerformanceChart series={series} height={220} />
        ) : (
          <div className="h-64 flex items-center justify-center text-dark-900/50 dark:text-light-100/50">
            <div className="text-center">
              <BarChart3 className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p>Sem dados suficientes para exibir desempenho.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsDashboard;
