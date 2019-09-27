import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Copyable } from './Copyable';

const renderCopyable = (props) => {
  return render(<Copyable {...props} />);
};

describe('Copyable renders correctly', () => {
  test('renders', () => {
    const { getByText } = renderCopyable({
      children: 'Text to Copy',
    });
    const button = getByText('Text to Copy');
    expect(button);
  });
  test('is clickable', () => {
    const onClick = jest.fn();
    const { getByText } = renderCopyable({
      onClick,
      children: 'Text to Copy',
    });

    const text = getByText('Text to Copy');
    fireEvent.click(text);
    expect(onClick).toHaveBeenCalled();
  });
});
