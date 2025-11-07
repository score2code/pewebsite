'use client';

import { useState, useEffect } from 'react';
import { Bell, X, CheckCircle, AlertCircle, Info, TrendingUp } from 'lucide-react';

export type NotificationType = 'success' | 'warning' | 'info' | 'new-pick' | 'high-confidence';

interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  action?: {
    label: string;
    onClick: () => void;
  };
}

interface NotificationSystemProps {
  maxNotifications?: number;
  autoHideDelay?: number;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center';
}

const NotificationSystem: React.FC<NotificationSystemProps> = ({
  maxNotifications = 5,
  autoHideDelay = 5000,
  position = 'top-right'
}) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const addNotification = (notification: Omit<Notification, 'id' | 'timestamp' | 'read'>) => {
    const newNotification: Notification = {
      ...notification,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date(),
      read: false
    };

    setNotifications(prev => {
      const updated = [newNotification, ...prev];
      return updated.slice(0, maxNotifications);
    });

    // Auto-hide after delay
    if (autoHideDelay > 0) {
      setTimeout(() => {
        removeNotification(newNotification.id);
      }, autoHideDelay);
    }
  };

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    );
  };

  const getIcon = (type: NotificationType) => {
    const icons = {
      success: <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />,
      warning: <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />,
      info: <Info className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      'new-pick': <TrendingUp className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
      'high-confidence': <TrendingUp className="w-5 h-5 text-orange-600 dark:text-orange-400" />
    };
    return icons[type];
  };

  const getPositionClasses = () => {
    const positions = {
      'top-right': 'top-4 right-4',
      'top-left': 'top-4 left-4',
      'bottom-right': 'bottom-4 right-4',
      'bottom-left': 'bottom-4 left-4',
      'top-center': 'top-4 left-1/2 transform -translate-x-1/2'
    };
    return positions[position];
  };

  // Notificar o palpite mais próximo no futuro (sem conteúdo fixo)
  useEffect(() => {
    const pad2 = (n: number) => String(n).padStart(2, '0');
    const findNextAvailablePick = async () => {
      try {
        const today = new Date();
        const windowDays = 7; // procurar até 7 dias à frente

        for (let offset = 0; offset <= windowDays; offset++) {
          const d = new Date(today);
          d.setDate(d.getDate() + offset);
          const yyyy = String(d.getFullYear());
          const mm = pad2(d.getMonth() + 1);
          const dd = pad2(d.getDate());
          const dateStr = `${yyyy}-${mm}-${dd}`;

          for (const sport of ['soccer', 'football'] as const) {
            const url = `/data/${sport}/${yyyy}/${mm}/${dd}.json`;
            try {
              const res = await fetch(url, { headers: { Accept: 'application/json' } });
              if (!res.ok) continue;
              const raw = await res.json();
              const picks = Array.isArray(raw) ? raw : Array.isArray(raw?.data) ? raw.data : [];
              if (!Array.isArray(picks) || picks.length === 0) continue;

              const sorted = [...picks].sort((a, b) => (b?.confidence ?? 0) - (a?.confidence ?? 0));
              const pick = sorted[0];
              if (!pick?.id || !pick?.homeTeam || !pick?.awayTeam) continue;

              const segment = sport === 'soccer' ? 'futebol' : 'futebol-americano';
              addNotification({
                type: 'new-pick',
                title: 'Próximo palpite disponível',
                message: `${pick.homeTeam} x ${pick.awayTeam} — ${pick.prediction ?? ''}`.trim(),
                action: {
                  label: 'Ver Palpite',
                  onClick: () => {
                    window.location.href = `/${segment}/${dateStr}/${pick.id}`;
                  }
                }
              });

              return; // já encontramos o mais próximo
            } catch {}
          }
        }
      } catch {}
    };

    findNextAvailablePick();
  }, [addNotification]);

  if (!isClient) return null;

  return (
    <div className={`fixed z-50 ${getPositionClasses()} space-y-2 max-w-sm`}>
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`bg-white dark:bg-dark-800 border border-light-300 dark:border-dark-600 rounded-lg shadow-lg p-4 transform transition-all duration-300 hover:scale-105 ${
            !notification.read ? 'border-l-4 border-l-purple-500 dark:border-l-purple-400' : ''
          }`}
          onClick={() => markAsRead(notification.id)}
        >
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 mt-0.5">
              {getIcon(notification.type)}
            </div>
            
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-dark-900 dark:text-light-100 mb-1">
                {notification.title}
              </h4>
              <p className="text-xs text-dark-900/70 dark:text-light-100/70 mb-2">
                {notification.message}
              </p>
              
              {notification.action && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    notification.action?.onClick();
                  }}
                  className="text-xs bg-purple-600 hover:bg-purple-700 text-white px-2 py-1 rounded transition-colors"
                >
                  {notification.action.label}
                </button>
              )}
              
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs text-dark-900/50 dark:text-light-100/50">
                  {notification.timestamp.toLocaleTimeString('pt-BR', { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeNotification(notification.id);
                  }}
                  className="text-dark-900/50 dark:text-light-100/50 hover:text-dark-900 dark:hover:text-light-100"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Componente de botão de notificação
export const NotificationButton: React.FC<{ 
  onClick?: () => void;
  unreadCount?: number;
}> = ({ onClick, unreadCount = 0 }) => {
  return (
    <button
      onClick={onClick}
      className="relative p-2 rounded-lg bg-light-100 dark:bg-dark-800 hover:bg-light-200 dark:hover:bg-dark-700 transition-colors"
      aria-label="Notificações"
    >
      <Bell className="w-5 h-5 text-dark-900 dark:text-light-100" />
      {unreadCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {unreadCount > 99 ? '99+' : unreadCount}
        </span>
      )}
    </button>
  );
};

export default NotificationSystem;