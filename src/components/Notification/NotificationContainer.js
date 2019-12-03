import React from 'react';
import * as olt from '@lightelligence/styles';

import { NotificationManager } from './NotificationManager';
import { Notification } from './Notification';

const NotificationContainer = () => {
  const [notifications, setNotifications] = React.useState([]);

  const handleStoreChange = React.useCallback((managedNotifications) => {
    setNotifications(managedNotifications);
  }, []);

  const handleRequestHide = (notification) => () => {
    NotificationManager.remove(notification);
    if (notification.onHide) {
      notification.onHide();
    }
  };

  React.useEffect(() => {
    NotificationManager.addChangeListener(handleStoreChange);
    return () => {
      NotificationManager.removeChangeListener(handleStoreChange);
    };
  }, [handleStoreChange]);

  return (
    <div className={olt.NotificationContainer}>
      {notifications.map((notification) => {
        const key = notification.id || new Date().getTime();
        return (
          <Notification
            key={key}
            type={notification.type}
            title={notification.title}
            content={notification.content}
            timeout={notification.timeout}
            onClick={notification.onClick}
            onClose={notification.onClose}
            onHide={handleRequestHide(notification)}
          />
        );
      })}
    </div>
  );
};

export { NotificationContainer };
