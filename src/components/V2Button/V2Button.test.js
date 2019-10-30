import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { oltStyles } from '../..';

import { V2Button } from './V2Button';

const renderButton = (props) => {
  return render(<V2Button {...props} />);
};

describe('V2Button', () => {
  test('triggers onClick when not disabled', () => {
    const onClick = jest.fn();
    const { getByText } = renderButton({
      onClick,
      children: 'Button',
    });
    const button = getByText('Button');
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  test('should forward disabled to underlying button', () => {
    const { getByText } = renderButton({
      disabled: true,
      children: 'Button',
    });
    const button = getByText('Button');
    expect(button.disabled).toBe(true);
  });

  test("doesn't trigger onClick when disabled", () => {
    const onClick = jest.fn();
    const { getByText } = renderButton({
      onClick,
      disabled: true,
      children: 'Button',
    });
    const button = getByText('Button');
    fireEvent.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });

  test('forwards className', () => {
    const { getByText } = renderButton({
      className: 'myClass',
      children: 'Button',
    });
    const button = getByText('Button');
    expect(button.classList.contains('myClass')).toBe(true);
  });

  test('correctly sets the css-modifier for emphasis secondary', () => {
    const { getByText } = renderButton({
      children: 'Button',
      emphasis: 'secondary',
    });
    const button = getByText('Button');
    expect(button.classList.contains(oltStyles.V2ButtonSecondary)).toBe(true);
  });

  test('correctly sets the css-modifier for emphasis primary', () => {
    const { getByText } = renderButton({
      children: 'Button',
      emphasis: 'primary',
    });
    const button = getByText('Button');
    expect(button.classList.contains(oltStyles.V2ButtonPrimary)).toBe(true);
  });

  test('correctly sets the css-modifier for emphasis tertiary', () => {
    const { getByText } = renderButton({
      children: 'Button',
      emphasis: 'tertiary',
    });
    const button = getByText('Button');
    expect(button.classList.contains(oltStyles.V2ButtonTertiary)).toBe(true);
  });

  test('correctly sets the css-modifier for buttonType confirmative', () => {
    const { getByText } = renderButton({
      children: 'Button',
      buttonType: 'confirmative',
    });
    const button = getByText('Button');
    expect(button.classList.contains(oltStyles.V2ButtonConfirmative)).toBe(
      true,
    );
  });

  test('correctly sets the css-modifier for buttonType destructive', () => {
    const { getByText } = renderButton({
      children: 'Button',
      buttonType: 'destructive',
    });
    const button = getByText('Button');
    expect(button.classList.contains(oltStyles.V2ButtonDestructive)).toBe(true);
  });

  test('correctly sets the css-modifier for theme dark', () => {
    const { getByText } = renderButton({
      children: 'Button',
      theme: 'dark',
    });
    const button = getByText('Button');
    expect(button.classList.contains(oltStyles.V2ButtonDark)).toBe(true);
  });

  test('correctly sets the css-modifier for theme light', () => {
    const { getByText } = renderButton({
      children: 'Button',
      theme: 'light',
    });
    const button = getByText('Button');
    expect(button.classList.contains(oltStyles.V2ButtonLight)).toBe(true);
  });

  test('correctly sets icon', () => {
    const icon = 'action-add-default';
    const { getByText } = renderButton({
      children: 'Button',
      icon,
    });
    const button = getByText('Button');
    expect(button.classList.contains(oltStyles.V2ButtonIcon)).toBe(true);
    expect(button.classList.contains(`olt-Icon-${icon}`)).toBe(true);
  });

  test('correctly sets iconLeft', () => {
    const iconLeft = 'action-add-default';
    const { getByText } = renderButton({
      children: 'Button',
      iconLeft,
    });
    const button = getByText('Button');
    expect(button.classList.contains(oltStyles.V2ButtonIconLeft)).toBe(true);
    expect(button.classList.contains(`olt-Icon-${iconLeft}`)).toBe(true);
  });

  test('correctly sets iconRight', () => {
    const iconRight = 'action-add-default';
    const { getByText } = renderButton({
      children: 'Button',
      iconRight,
    });
    const button = getByText('Button');
    expect(button.classList.contains(oltStyles.V2ButtonIconRight)).toBe(true);
    expect(button.classList.contains(`olt-Icon-${iconRight}`)).toBe(true);
  });

  test('has the corresponding Button class from styles', () => {
    const { getByText } = renderButton({
      children: 'Button',
    });
    const button = getByText('Button');
    expect(button.classList.contains(oltStyles.V2Button)).toBe(true);
  });
});
