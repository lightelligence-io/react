import React from 'react';
import { render } from 'react-testing-library';

import { BasicDataCardsCard } from './BasicDataCardsCard';
import { oltStyles } from '../..';

describe('BasicDataCardsCard', () => {
  test('has component className', async () => {
    const { getByTestId } = render(<BasicDataCardsCard data-testid="A" />);
    expect(
      getByTestId('A').classList.contains(oltStyles.DataCardsCard),
    ).toBeTruthy();
  });
});
