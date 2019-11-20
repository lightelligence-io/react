import React, { PureComponent } from 'react';
import { number, string, func, oneOf } from 'prop-types';
import classnames from 'classnames';
import { pascalize } from 'humps';
import * as olt from '@lightelligence/styles';

import {
  NOTIFICATION_TYPE_INFO,
  NOTIFICATION_TYPE_SUCCESS,
  NOTIFICATION_TYPE_WARNING,
  NOTIFICATION_TYPE_ERROR,
} from './types';

const animationDuration = 200;
class Notification extends PureComponent {
  timers = [];

  state = {
    open: false,
  };

  static propTypes = {
    // TODO: oneOf Rendering is broken in guide
    // this should be should be
    // type: oneOf([NOTIFICATION_TYPE_INFO, NOTIFICATION_TYPE_SUCCESS, NOTIFICATION_TYPE_WARNING, NOTIFICATION_TYPE_ERROR]),
    /** The type of the notification. */
    type: oneOf([
      NOTIFICATION_TYPE_INFO,
      NOTIFICATION_TYPE_SUCCESS,
      NOTIFICATION_TYPE_WARNING,
      NOTIFICATION_TYPE_ERROR,
    ]),
    /** Defines the title of the notification. */
    title: string,
    /** Defines the content of the notification. */
    content: string,
    /** Set the timeout in ms, use 0 to make the notificaiton stay until the user clicks.. */
    timeout: number,
    /** Callback when the user clicks the notification. The notification starts closing at this moment. */
    onClick: func,
    /** Callback when the user clicks the close icon. The notification starts closing at this moment. */
    onClose: func,
    /** Callback when the notification finishes closing after a click or the timeout. */
    onHide: func,
  };

  static defaultProps = {
    type: NOTIFICATION_TYPE_ERROR,
    title: '',
    content: '',
    timeout: 4000,
    onClick: () => {},
    onClose: () => {},
    onHide: () => {},
  };

  componentDidMount = () => {
    const { timeout } = this.props;
    if (timeout !== 0) {
      this.timers.push(setTimeout(this.requestHide, timeout));
    }
    this.timers.push(setTimeout(() => this.setState({ open: true }), 100));
  };

  componentWillUnmount = () => {
    this.timers.forEach(clearTimeout);
  };

  onClick = () => {
    const { onClick } = this.props;
    if (onClick) onClick();
    this.requestHide();
  };

  onClose = (event) => {
    const { onClose } = this.props;
    if (event.stopPropagation) event.stopPropagation();
    if (onClose) onClose();
    this.requestHide();
  };

  requestHide = () => {
    const { onHide } = this.props;
    this.setState({ open: false });
    this.timers.push(
      setTimeout(() => {
        if (onHide) onHide();
      }, animationDuration),
    );
  };

  render() {
    const {
      type,
      title,
      content,
      timeout,
      onClick,
      onClose,
      onHide,
      ...rest
    } = this.props;
    const { open } = this.state;

    return (
      <div
        className={classnames(
          olt.Notification,
          type && olt[`Notification${pascalize(type)}`],
          open && olt.isOpen,
        )}
        onClick={this.onClick}
        onKeyDown={() => {}}
        role="button"
        tabIndex={0}
        {...rest}
      >
        <div className={olt.NotificationDialog}>
          <header className={olt.NotificationHeader}>{title}</header>
          <div className={olt.NotificationContent}>{content}</div>
        </div>
        <button
          type="button"
          className={olt.NotificationClose}
          onClick={this.onClose}
          tabIndex={0}
        >
          <i
            className={classnames(olt.Icon, olt.IconMedium, olt.IconClose)}
            data-icon="close"
          />
        </button>
      </div>
    );
  }
}

export { Notification };
