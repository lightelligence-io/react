import React from 'react';
import { render } from 'react-testing-library';

import { BasicDataCardsTitle } from './BasicDataCardsTitle';
import { oltStyles } from '../..';

describe('BasicDataCardsTitle', () => {
  test('has component className', async () => {
    const { getByTestId } = render(
      <BasicDataCardsTitle data-testid="A">B</BasicDataCardsTitle>,
    );
    expect(
      getByTestId('A').classList.contains(oltStyles.DataCardsTitle),
    ).toBeTruthy();
  });
});
