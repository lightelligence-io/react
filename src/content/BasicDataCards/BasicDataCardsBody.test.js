import React from 'react';
import { render } from 'react-testing-library';

import { BasicDataCardsBody } from './BasicDataCardsBody';
import { oltStyles } from '../..';

describe('BasicDataCardsBody', () => {
  test('has component className', async () => {
    const { getByTestId } = render(<BasicDataCardsBody data-testid="A" />);
    expect(
      getByTestId('A').classList.contains(oltStyles.DataCardsBody),
    ).toBeTruthy();
  });
});
