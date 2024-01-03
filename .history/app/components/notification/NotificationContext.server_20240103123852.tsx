import React, { createContext, useContext, ReactNode } from 'react';

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

interface NotificationProviderProps {
  children: ReactNode;
}

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};

export const NotificationProvider: React.FC<NotificationProviderProps> = ({ children }) => {
  // Implement server-side logic if needed
  // For example, handling notifications differently on the server-side

  return (
    <NotificationContext.Provider value={null}>
      {children}
    </NotificationContext.Provider>
  );
};
