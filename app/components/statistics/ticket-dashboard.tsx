import React from 'react';
import dynamic from 'next/dynamic';
import { Target, Award } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color: 'green' | 'blue' | 'purple' | 'orange' | 'red';
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon, color }) => {
  const colorClasses: Record<string, string> = {
    green: 'bg-green-100/60 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-300 dark:border-green-700',
    blue: 'bg-blue-100/60 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-700',
    purple: 'bg-purple-100/60 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-300 dark:border-purple-700',
    orange: 'bg-orange-100/60 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border-orange-300 dark:border-orange-700',
    red: 'bg-red-100/60 dark:bg-red-900/30 text-red-700 dark:text-red-300 border-red-300 dark:border-red-700',
  };

  return (
    <div className={`p-4 rounded-xl border ${colorClasses[color]} flex items-center justify-between`}>
      <div>
        <p className="text-sm text-dark-900/70 dark:text-light-100/70">{title}</p>
        <p className="text-2xl font-bold text-dark-900 dark:text-light-100">{value}</p>
      </div>
      <div className="opacity-70">{icon}</div>
    </div>
  );
};

interface TicketStatsDashboardProps {
  winRate?: number;
  pickHitRate?: number;
  series?: { label: string; value: number }[];
}

const TicketPerformanceChart = dynamic(() => import('./ticket-performance-chart'), { ssr: false });

const TicketStatsDashboard: React.FC<TicketStatsDashboardProps> = ({
  winRate = 0,
  pickHitRate = 0,
  series = []
}) => {
  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold text-dark-900 dark:text-light-100 mb-2">
          Estatísticas do Bilhete do Dia
        </h2>
        <p className="text-dark-900/70 dark:text-light-100/70">
          Acompanhe o desempenho dos nossos bilhetes diários
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-8">
        <StatsCard
          title="Taxa de Bilhetes Vencedores"
          value={`${winRate}%`}
          icon={<Target className="w-5 h-5" />}
          color="green"
        />
        <StatsCard
          title="Taxa de palpites corretos"
          value={`${pickHitRate}%`}
          icon={<Award className="w-5 h-5" />}
          color="blue"
        />
      </div>

      <div className="bg-light-100/50 dark:bg-dark-800/50 p-6 rounded-xl border border-light-300 dark:border-dark-600 shadow-custom dark:shadow-custom-dark backdrop-blur-sm mb-8">
        <h3 className="text-xl font-bold text-dark-900 dark:text-light-100">Desempenho de Bilhetes do Mês</h3>
        {series && series.length > 0 ? (
          <TicketPerformanceChart series={series} height={60} />
        ) : (
          <div className="h-32 flex items-center justify-center text-dark-900/50 dark:text-light-100/50">
            <div className="text-center">
              <Target className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p>Sem dados suficientes para exibir desempenho.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TicketStatsDashboard;
