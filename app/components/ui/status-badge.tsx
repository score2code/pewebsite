import React from 'react';
import { CheckCircle, XCircle, Clock, TrendingUp, TrendingDown } from 'lucide-react';

export type PickStatus = 'pending' | 'won' | 'lost' | 'high-confidence';

interface StatusBadgeProps {
  status: PickStatus;
  confidence?: number;
  result?: 'won' | 'lost' | 'pending';
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, confidence, odds, result }) => {
  const getStatusConfig = () => {
    switch (status) {
      case 'won':
        return {
          icon: CheckCircle,
          text: 'Vitória',
          bgColor: 'bg-green-100 dark:bg-green-900/30',
          textColor: 'text-green-700 dark:text-green-400',
          borderColor: 'border-green-300 dark:border-green-700'
        };
      case 'lost':
        return {
          icon: XCircle,
          text: 'Derrota',
          bgColor: 'bg-red-100 dark:bg-red-900/30',
          textColor: 'text-red-700 dark:text-red-400',
          borderColor: 'border-red-300 dark:border-red-700'
        };
      case 'high-confidence':
        return {
          icon: TrendingUp,
          text: 'Alta Confiança',
          bgColor: 'bg-purple-100 dark:bg-purple-900/30',
          textColor: 'text-purple-700 dark:text-purple-400',
          borderColor: 'border-purple-300 dark:border-purple-700'
        };
      default:
        return {
          icon: Clock,
          text: 'Pendente',
          bgColor: 'bg-gray-100 dark:bg-gray-900/30',
          textColor: 'text-gray-700 dark:text-gray-400',
          borderColor: 'border-gray-300 dark:border-gray-700'
        };
    }
  };

  const config = getStatusConfig();
  const Icon = config.icon;

  return (
    <div className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold border ${config.bgColor} ${config.textColor} ${config.borderColor}`}>
      <Icon className="w-3 h-3 mr-1.5" />
      {config.text}
      {confidence && confidence >= 8 && status === 'pending' && (
        <span className="ml-1 text-purple-600 dark:text-purple-400">•</span>
      )}
    </div>
  );
};

export default StatusBadge;