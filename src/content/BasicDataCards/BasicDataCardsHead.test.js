import React from 'react';
import { render } from 'react-testing-library';

import { BasicDataCardsHead } from './BasicDataCardsHead';
import { oltStyles } from '../..';

describe('BasicDataCardsHead', () => {
  test('has component className', async () => {
    const { getByTestId } = render(<BasicDataCardsHead data-testid="A" />);
    expect(
      getByTestId('A').classList.contains(oltStyles.DataCardsHead),
    ).toBeTruthy();
  });
});
