import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';

import {
  Notification,
  NOTIFICATION_TYPE_INFO,
  NOTIFICATION_TYPE_SUCCESS,
  NOTIFICATION_TYPE_WARNING,
  NOTIFICATION_TYPE_ERROR,
} from '.';
import { oltStyles } from '../..';

describe('Notifications Render Correctly', () => {
  test('renders INFO', () => {
    const { getByText, getByTestId } = render(
      <Notification
        type={NOTIFICATION_TYPE_INFO}
        title="INFO!"
        content="Here is some information."
        data-testid="Notification"
      />,
    );
    getByText('INFO!');
    getByText('Here is some information.');
    const notification = getByTestId('Notification');
    expect(
      notification.classList.contains(oltStyles.Notification),
    ).toBeTruthy();
    expect(
      notification.classList.contains(oltStyles.NotificationInfo),
    ).toBeTruthy();
  });
  test('renders SUCCESS', () => {
    const { getByText, getByTestId } = render(
      <Notification
        type={NOTIFICATION_TYPE_SUCCESS}
        title="SUCCESS!"
        content="That was a success!"
        data-testid="Notification"
      />,
    );
    getByText('SUCCESS!');
    getByText('That was a success!');
    const notification = getByTestId('Notification');
    expect(notification.classList.contains(oltStyles.Notification)).toBe(true);
    expect(
      notification.classList.contains(oltStyles.NotificationSuccess),
    ).toBeTruthy();
  });
  test('renders WARNING', () => {
    const { getByText, getByTestId } = render(
      <Notification
        type={NOTIFICATION_TYPE_WARNING}
        title="WARNING!"
        content="This is only a warning!"
        data-testid="Notification"
      />,
    );
    getByText('WARNING!');
    getByText('This is only a warning!');
    const notification = getByTestId('Notification');
    expect(
      notification.classList.contains(oltStyles.Notification),
    ).toBeTruthy();
    expect(
      notification.classList.contains(oltStyles.NotificationWarning),
    ).toBeTruthy();
  });
  test('renders ERROR', () => {
    const { getByText, getByTestId } = render(
      <Notification
        type={NOTIFICATION_TYPE_ERROR}
        title="ERROR!"
        content="An error has occured!"
        data-testid="Notification"
      />,
    );
    getByText('ERROR!');
    getByText('An error has occured!');
    const notification = getByTestId('Notification');
    expect(
      notification.classList.contains(oltStyles.Notification),
    ).toBeTruthy();
    expect(
      notification.classList.contains(oltStyles.NotificationError),
    ).toBeTruthy();
  });
});

describe('Notification Callbacks', () => {
  test('isOpen is set called', () => {
    const { getByText } = render(
      <Notification
        type={NOTIFICATION_TYPE_INFO}
        title="INFO!"
        content="Here is some information."
        data-testid="Notification"
      />,
    );
    const notification = getByText('INFO!');
    wait(() =>
      expect(notification.classList.contains(oltStyles.isOpen)).toBeTruthy(),
    );
  });
  test('click and hide callbacks are called', () => {
    jest.useFakeTimers();
    const onHide = jest.fn();
    const onClick = jest.fn();
    const { getByText } = render(
      <Notification
        type={NOTIFICATION_TYPE_INFO}
        title="INFO!"
        content="Here is some information."
        onClick={onClick}
        onHide={onHide}
      />,
    );
    const notification = getByText('INFO!');
    fireEvent.click(notification);
    expect(onClick).toHaveBeenCalledTimes(1);
    jest.runAllTimers();
    expect(onHide).toHaveBeenCalled();
  });
  test('close and hide callbacks are called', () => {
    jest.useFakeTimers();
    const onHide = jest.fn();
    const onClose = jest.fn();
    const { getByTestId } = render(
      <Notification
        type={NOTIFICATION_TYPE_INFO}
        title="INFO!"
        content="Here is some information."
        onClose={onClose}
        onHide={onHide}
        data-testid="Notification"
      />,
    );
    // const button = getByTestId('Notification-Close');
    const button = getByTestId('Notification').getElementsByTagName(
      'button',
    )[0];
    fireEvent.click(button);
    expect(onClose).toHaveBeenCalled();
    jest.runAllTimers();
    expect(onHide).toHaveBeenCalled();
  });
});
