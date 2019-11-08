import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { oltStyles } from '../..';

import { ActionButton } from './ActionButton';

const renderButton = (props) => {
  return render(<ActionButton data-testid="Button" label="Label" {...props} />);
};

describe('ActionButton', () => {
  test('has the corresponding Button class from styles', () => {
    const { getByTestId } = renderButton();
    const button = getByTestId('Button');
    expect(button.classList.contains(oltStyles.ActionButton)).toBe(true);
  });
  test('sets the label and correct class from styles', () => {
    const { getByText } = renderButton();
    const label = getByText('Label');
    expect(label.classList.contains(oltStyles.ActionButtonLabel)).toBe(true);
  });
  test('triggers onClick', () => {
    const onClick = jest.fn();
    const { getByTestId } = renderButton({
      onClick,
    });
    const button = getByTestId('Button');
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
  test('forwards className', () => {
    const { getByTestId } = renderButton({
      className: 'myClass',
    });
    const button = getByTestId('Button');
    expect(button.classList.contains('myClass')).toBe(true);
  });
  test('correctly sets the css-modifier for buttonType primary', () => {
    const { getByTestId } = renderButton({
      buttonType: 'primary',
    });
    const button = getByTestId('Button');
    expect(button.classList.contains(oltStyles.ActionButtonPrimary)).toBe(true);
  });
  test('correctly sets the css-modifier for buttonType confirmative', () => {
    const { getByTestId } = renderButton({
      buttonType: 'confirmative',
    });
    const button = getByTestId('Button');
    expect(button.classList.contains(oltStyles.ActionButtonConfirmative)).toBe(
      true,
    );
  });
  test('correctly sets the css-modifier for buttonType destructive', () => {
    const { getByTestId } = renderButton({
      buttonType: 'destructive',
    });
    const button = getByTestId('Button');
    expect(button.classList.contains(oltStyles.ActionButtonDestructive)).toBe(
      true,
    );
  });
  test('correctly sets iconLeft', () => {
    const iconLeft = 'add-default';
    const { getByTestId } = renderButton({
      iconLeft,
    });
    const button = getByTestId('Button');
    expect(button.classList.contains(oltStyles.ActionButtonIconLeft)).toBe(
      true,
    );
    expect(button.classList.contains(`olt-Icon-${iconLeft}`)).toBe(true);
  });
  test('correctly sets iconRight', () => {
    const iconRight = 'add-default';
    const { getByTestId } = renderButton({
      iconRight,
    });
    const button = getByTestId('Button');
    expect(button.classList.contains(oltStyles.ActionButtonIconRight)).toBe(
      true,
    );
    expect(button.classList.contains(`olt-Icon-${iconRight}`)).toBe(true);
  });
  test('correctly sets fixed', () => {
    const { getByTestId } = renderButton({
      fixed: true,
    });
    const button = getByTestId('Button');
    expect(button.classList.contains(oltStyles.ActionButtonFixed)).toBe(true);
  });
  test('correctly sets standalone', () => {
    const { getByTestId } = renderButton({
      standalone: true,
    });
    const button = getByTestId('Button');
    expect(button.classList.contains(oltStyles.ActionButtonStandalone)).toBe(
      true,
    );
  });
  test('correctly sets base', () => {
    const { getByTestId } = renderButton({
      base: true,
    });
    const button = getByTestId('Button');
    expect(button.classList.contains(oltStyles.ActionButtonBase)).toBe(true);
  });
  test('correctly sets disabled', () => {
    const onClick = jest.fn();
    const { getByTestId } = renderButton({
      onClick,
      disabled: true,
    });
    const button = getByTestId('Button');
    expect(button.classList.contains(oltStyles.ActionButtonDisabled)).toBe(
      true,
    );
    expect(button.disabled).toBe(true);
    fireEvent.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });
});
