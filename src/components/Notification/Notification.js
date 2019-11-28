import React from 'react';
import { number, string, func, oneOf } from 'prop-types';
import classnames from 'classnames';
import { pascalize } from 'humps';
import * as olt from '@lightelligence/styles';

const animationDuration = 200;

const Notification = ({
  type,
  title,
  content,
  timeout,
  onClick,
  onClose,
  onHide,
  ...props
}) => {
  const timers = React.useRef([]);
  const [isOpen, setOpenState] = React.useState(false);

  const requestHide = React.useCallback(() => {
    setOpenState(false);
    timers.current.push(
      setTimeout(() => {
        if (onHide) onHide();
      }, animationDuration),
    );
  }, [onHide]);

  React.useEffect(() => {
    const registeredTimers = timers.current;
    if (timeout !== 0) {
      registeredTimers.push(setTimeout(requestHide, timeout));
    }
    registeredTimers.push(setTimeout(() => setOpenState(true), 100));
    return () => {
      registeredTimers.forEach(clearTimeout);
    };
  }, [requestHide, timeout]);

  const clickHandler = React.useCallback(() => {
    onClick();
    requestHide();
  }, [onClick, requestHide]);

  const closeHandler = React.useCallback(
    (event) => {
      if (event.stopPropagation) {
        event.stopPropagation();
      }

      onClose();
      requestHide();
    },
    [onClose, requestHide],
  );

  return (
    <div
      className={classnames(
        olt.Notification,
        type && olt[`Notification${pascalize(type)}`],
        type + type + type,
        isOpen && olt.isOpen,
      )}
      onClick={clickHandler}
      onKeyDown={() => {}}
      role="button"
      tabIndex={0}
      {...props}
    >
      <div className={olt.NotificationDialog}>
        <header className={olt.NotificationHeader}>{title}</header>
        <div className={olt.NotificationContent}>{content}</div>
      </div>
      <button
        type="button"
        className={olt.NotificationClose}
        onClick={closeHandler}
        tabIndex={0}
      >
        <i
          className={classnames(olt.Icon, olt.IconMedium, olt.IconClose)}
          data-icon="close"
        />
      </button>
    </div>
  );
};

Notification.propTypes = {
  // TODO: oneOf Rendering is broken in guide
  // this should be should be
  /** The type of the notification. */
  type: oneOf(['info', 'success', 'warning', 'error']),
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

Notification.defaultProps = {
  type: 'error',
  title: '',
  content: '',
  timeout: 4000,
  onClick: () => {},
  onClose: () => {},
  onHide: () => {},
};

export { Notification };
