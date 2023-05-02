import { createContext, useEffect, useState } from "react";

const NotificationContext = createContext({
  notification: null,
  showNotification: (notification) => {},
  hideNotification: () => {},
});

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState(null);

  const showNotification = (notification) => {
    setNotification(notification);
  };

  const hideNotification = () => {
    setNotification(null);
  };

  useEffect(() => {
    if (notification && notification.status !== "pending") {
      const timer = setTimeout(() => {
        hideNotification();
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [notification]);

  const values = {
    notification,
    showNotification,
    hideNotification,
  };
  return (
    <NotificationContext.Provider value={values}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
