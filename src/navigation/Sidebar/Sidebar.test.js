import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Sidebar } from './Sidebar';

const renderComponent = (props) => {
  return render(<Sidebar {...props} data-testid="sidebar" />);
};

describe('Sidebar', () => {
  test('forwards className', () => {
    const { getByTestId } = renderComponent({
      className: 'myClass',
    });

    const component = getByTestId('sidebar');
    expect(component.classList.contains('myClass')).toBe(true);
  });

  test('renders properly when is open', () => {
    const { getByTestId } = renderComponent({
      open: true,
    });

    const component = getByTestId('sidebar');
    expect(component.classList.contains('is-open')).toBe(true);
  });

  test('renders bottom', () => {
    const { getByText } = renderComponent({
      bottom: 'Bottom',
    });

    const bottomComponent = getByText('Bottom');

    expect(bottomComponent).toBeTruthy();
  });

  test('renders content', () => {
    const { getByText } = renderComponent({
      open: true,
      children: 'Body',
    });

    const component = getByText('Body');

    expect(component).toBeTruthy();
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
