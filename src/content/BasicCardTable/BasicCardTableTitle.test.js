import React from 'react';
import { render } from '@testing-library/react';

import { BasicCardTableTitle } from './BasicCardTableTitle';
import { oltStyles } from '../..';

describe('BasicCardTableTitle', () => {
  test('has component className', async () => {
    const { getByTestId } = render(
      <BasicCardTableTitle data-testid="A">B</BasicCardTableTitle>,
    );
    expect(
      getByTestId('A').classList.contains(oltStyles.CardTableTitle),
    ).toBeTruthy();
  });
});
