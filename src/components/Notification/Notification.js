import React, { PureComponent } from 'react';
import { bool, node, string, oneOf } from 'prop-types';
import classnames from 'classnames';
import { pascalize } from 'humps';
import * as olt from '@lightelligence/styles';

// import { NOTIFICATION_TYPE_INFO, NOTIFICATION_TYPE_SUCCESS, NOTIFICATION_TYPE_WARN, NOTIFICATION_TYPE_ERROR } from './types';
import { NOTIFICATION_TYPE_ERROR } from './types';

class Notification extends PureComponent {
  static propTypes = {
    children: node,
    className: string,
    open: bool,
    hidden: bool,
    type: oneOf(['info', 'success', 'warn', 'error']), // TODO: oneOf Rendering is broken in guide
    header: string,
    content: string,
  };

  static defaultProps = {
    open: true,
    className: null,
    children: null,
    hidden: false,
    type: NOTIFICATION_TYPE_ERROR,
    header: '',
    content: '',
  };

  render() {
    const {
      children,
      className,
      open,
      hidden,
      type,
      header,
      content,
      ...rest
    } = this.props;

    return (
      <div className={classnames(olt.Notifications)}>
        <div
          className={classnames(
            olt.Notification,
            type && olt[`Notification${pascalize(type)}`],
            open && olt.isOpen,
            className,
          )}
          {...rest}
        >
          <div className={classnames(olt.NotificationDialog)}>
            <header className={classnames(olt.NotificationHeader)}>
              {header}
            </header>
            <div className={classnames(olt.NotificationContent)}>{content}</div>
          </div>
          <label className={classnames(olt.NotificationClose)} />
        </div>
      </div>
    );
  }
}

export { Notification };
