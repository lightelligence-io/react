import React from 'react';
import { render, fireEvent } from 'react-testing-library';

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

  test('triggers onClickDisabled when disabled', () => {
    const onClickDisabled = jest.fn();
    const { getByText } = renderButton({
      onClickDisabled,
      disabled: true,
      children: 'Button',
    });

    const button = getByText('Button');

    fireEvent.click(button);

    expect(onClickDisabled).toHaveBeenCalled();
  });

  test("doesn't trigger onClickDisabled when not disabled", () => {
    const onClickDisabled = jest.fn();
    const { getByText } = renderButton({
      onClickDisabled,
      disabled: false,
      children: 'Button',
    });

    const button = getByText('Button');

    fireEvent.click(button);

    expect(onClickDisabled).not.toHaveBeenCalled();
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
