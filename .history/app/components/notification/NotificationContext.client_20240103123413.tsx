// NotificationContext.client.tsx

import React, { createContext, useContext, useState } from 'react';

type NotificationType = 'success' | 'error' | 'loading';

type Notification = {
  message: string;
  type: NotificationType;
};

type NotificationContextType = {
  notification: Notification | null;
  showNotification: (message: string, type: NotificationType) => void;
  closeNotification: () => void;
};

const NotificationContext = createContext<NotificationContextType | null>(null);

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};

export const NotificationProvider: React.FC = ({ children }) => {
  const [notification, setNotification] = useState<Notification | null>(null);

  const closeNotification = () => {
    setNotification(null);
  };

  const showNotification = (message: string, type: NotificationType) => {
    setNotification({ message, type });
    setTimeout(() => {
      closeNotification();
    }, 5000);
  };

  const value: NotificationContextType = {
    notification,
    showNotification,
    closeNotification,
  };

  return <NotificationContext.Provider value={value}>{children}</NotificationContext.Provider>;
};
