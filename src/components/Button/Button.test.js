import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { oltStyles } from '../..';

import { Button } from './Button';

const renderButton = (props) => {
  return render(<Button {...props} />);
};

describe('Button', () => {
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
    expect(button.classList.contains('myClass')).toBeTruthy();
  });

  test('correctly sets the css-modifier for colors', () => {
    const { getByText } = renderButton({
      children: 'Button',
      color: 'primary',
    });
    const button = getByText('Button');
    expect(button.classList.contains(oltStyles.ButtonPrimary)).toBeTruthy();
  });

  test('has the corresponding Button class from styles', () => {
    const { getByText } = renderButton({
      children: 'Button',
    });
    const button = getByText('Button');
    expect(button.classList.contains(oltStyles.Button)).toBeTruthy();
  });
});
