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

  // Sistema de notificações para novos palpites
  useEffect(() => {
    const checkForNewPicks = () => {
      // Simular verificação de novos palpites (em produção, isso viria de uma API)
      const shouldNotify = Math.random() > 0.95; // 5% de chance para demonstração
      
      if (shouldNotify) {
        addNotification({
          type: 'new-pick',
          title: 'Novo Palpite Disponível!',
          message: 'Confira a análise para o jogo entre Real Madrid x Barcelona',
          action: {
            label: 'Ver Palpite',
            onClick: () => {
              window.location.href = '/futebol';
            }
          }
        });
      }
    };

    const interval = setInterval(checkForNewPicks, 30000); // Verificar a cada 30 segundos
    return () => clearInterval(interval);
  }, []);

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