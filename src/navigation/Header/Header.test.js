import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Header } from './Header';
import { oltStyles } from '../..';

const renderComponent = (props) => {
  return render(<Header {...props} data-testid="header" />);
};

describe('Header', () => {
  test('forwards className', () => {
    const { getByTestId } = renderComponent({
      className: 'myClass',
    });

    const component = getByTestId('header');
    expect(component.classList.contains('myClass')).toBe(true);
  });

  test('should be action button proximity area', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('header');
    expect(
      component.classList.contains(oltStyles.ActionButtonProximityArea),
    ).toBe(true);
  });

  test('renders containers content', () => {
    const { getByText } = renderComponent({
      left: 'Left Content',
      right: 'Right Content',
      logo: 'Logo Content',
      children: 'Body Content',
    });

    const leftComponent = getByText('Left Content');
    const rightComponent = getByText('Right Content');
    const logoComponent = getByText('Logo Content');
    const bodyComponent = getByText('Body Content');

    expect(
      leftComponent.classList.contains(oltStyles.HeaderLeftContainer),
    ).toBe(true);
    expect(
      rightComponent.classList.contains(oltStyles.HeaderRightContainer),
    ).toBe(true);
    expect(logoComponent).toBeTruthy();
    expect(bodyComponent.classList.contains(oltStyles.HeaderBody)).toBe(true);
  });

  test('should be able to catch mobile menu button', () => {
    const onClickMobileMenu = jest.fn();
    const { getByTestId } = renderComponent({
      menuButtonProps: {
        'data-testid': 'mobile-menu',
      },
      onClickMobileMenu,
    });

    const actionButton = getByTestId('mobile-menu');
    fireEvent.click(actionButton);
    expect(onClickMobileMenu).toBeCalled();
  });
});
