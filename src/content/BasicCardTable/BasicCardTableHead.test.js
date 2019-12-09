import React from 'react';
import { render } from '@testing-library/react';

import { BasicCardTableHead } from './BasicCardTableHead';
import { oltStyles } from '../..';

describe('BasicCardTableHead', () => {
  test('has component className', async () => {
    const { getByTestId } = render(<BasicCardTableHead data-testid="A" />);
    expect(
      getByTestId('A').classList.contains(oltStyles.CardTableHead),
    ).toBeTruthy();
  });
});
