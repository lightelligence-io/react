import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Copyable } from './Copyable';

import * as copyToClipboard from '../../hooks/useCopyToClipboard';

jest.mock('../../hooks/useCopyToClipboard');

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
  test('is clickable and calls callback', () => {
    const onClick = jest.fn();
    const { getByText } = renderCopyable({
      onClick,
      children: 'Text to Copy',
    });

    const text = getByText('Text to Copy');
    fireEvent.click(text);
    expect(onClick).toHaveBeenCalled();
  });
  test('calls copyToClipboard', () => {
    const { getByText } = renderCopyable({
      children: 'Text to Copy',
    });

    const text = getByText('Text to Copy');
    fireEvent.click(text);
    expect(copyToClipboard.useCopyToClipboard).toHaveBeenCalledWith(
      'Text to Copy',
    );
    expect(copyToClipboard.copyToClipboard).toHaveBeenCalledTimes(1);
    jest.clearAllMocks();
  });
});
