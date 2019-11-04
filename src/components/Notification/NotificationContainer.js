import React, { Component } from 'react';
import * as olt from '@lightelligence/styles';

import { NotificationManager } from './NotificationManager';
import { Notification } from './Notification';

class NotificationContainer extends Component {
  state = {
    notifications: [],
  };

  componentDidMount = () => {
    NotificationManager.addChangeListener(this.handleStoreChange);
  };

  componentWillUnmount = () => {
    NotificationManager.removeChangeListener(this.handleStoreChange);
  };

  handleStoreChange = (notifications) => {
    this.setState({
      notifications,
    });
  };

  handleRequestHide = (notification) => () => {
    NotificationManager.remove(notification);
    if (notification.onHide) notification.onHide();
  };

  render() {
    const { notifications } = this.state;
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
              onHide={this.handleRequestHide(notification)}
            />
          );
        })}
      </div>
    );
  }
}
export { NotificationContainer };
