import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SecondarySidebar } from './SecondarySidebar';
import { oltStyles } from '../..';

const renderComponent = (props) => {
  return render(
    <SecondarySidebar {...props} data-testid="secondary-sidebar" />,
  );
};

describe('Secondary Sidebar', () => {
  test('forwards className', () => {
    const { getByTestId } = renderComponent({
      className: 'myClass',
    });

    const component = getByTestId('secondary-sidebar');
    expect(component.classList.contains('myClass')).toBe(true);
  });

  test('renders properly when is open', () => {
    const { getByTestId } = renderComponent({
      open: true,
    });

    const component = getByTestId('secondary-sidebar');
    expect(component.classList.contains('is-open')).toBe(true);
  });

  test('renders header', () => {
    const { getByText } = renderComponent({
      header: 'Header',
    });

    const headerComponent = getByText('Header');

    expect(
      headerComponent.classList.contains(oltStyles.SidebarSecondaryHeader),
    ).toBe(true);
  });

  test('renders content', () => {
    const { getByText } = renderComponent({
      open: true,
      children: 'Body',
    });

    const component = getByText('Body');

    expect(component.classList.contains('is-open')).toBe(true);
  });

  test('should be able to catch mobile back button', () => {
    const onClickMobileBack = jest.fn();
    const { getByTestId } = renderComponent({
      backButtonProps: {
        'data-testid': 'back-button',
      },
      onClickMobileBack,
    });

    const actionButton = getByTestId('back-button');
    fireEvent.click(actionButton);
    expect(onClickMobileBack).toBeCalled();
  });

  test('should be able to catch mobile close button', () => {
    const onClickMobileClose = jest.fn();
    const { getByTestId } = renderComponent({
      closeButtonProps: {
        'data-testid': 'close-button',
      },
      onClickMobileClose,
    });

    const actionButton = getByTestId('close-button');
    fireEvent.click(actionButton);
    expect(onClickMobileClose).toBeCalled();
  });
});
