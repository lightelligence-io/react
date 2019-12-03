import React from 'react';
import { render } from '@testing-library/react';

import { oltStyles } from '../..';
import { Paragraph } from '.';

describe('Paragraph', () => {
  test('Paragraph uses Content style', () => {
    const { getByText } = render(<Paragraph>Paragraph</Paragraph>);
    const paragraph = getByText('Paragraph');
    expect(paragraph.classList.contains(oltStyles.uContent)).toBe(true);
  });
  test('Paragraph sets tag', () => {
    const { getByText } = render(<Paragraph tag="span">Paragraph</Paragraph>);
    const button = getByText('Paragraph');
    expect(button.tagName).toBe('SPAN');
  });
});
