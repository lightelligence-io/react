import React from 'react';
import { render } from '@testing-library/react';

import { BasicCardTableCard } from './BasicCardTableCard';
import { oltStyles } from '../..';

describe('BasicCardTableCard', () => {
  test('has component className', async () => {
    const { getByTestId } = render(<BasicCardTableCard data-testid="A" />);
    expect(
      getByTestId('A').classList.contains(oltStyles.CardTableCard),
    ).toBeTruthy();
  });
});
