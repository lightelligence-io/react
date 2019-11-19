import React from 'react';
import { render } from '@testing-library/react';

import { BasicCardTableBody } from './BasicCardTableBody';
import { oltStyles } from '../..';

describe('BasicCardTableBody', () => {
  test('has component className', async () => {
    const { getByTestId } = render(<BasicCardTableBody data-testid="A" />);
    expect(
      getByTestId('A').classList.contains(oltStyles.CardTableBody),
    ).toBeTruthy();
  });
});
