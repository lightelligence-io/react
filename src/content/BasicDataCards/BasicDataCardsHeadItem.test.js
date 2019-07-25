import React from 'react';
import { render } from 'react-testing-library';

import { BasicDataCardsHeadItem } from './BasicDataCardsHeadItem';
import { oltStyles } from '../..';

describe('BasicDataCardsHeadItem', () => {
  test('has component className', async () => {
    const { getByTestId } = render(
      <BasicDataCardsHeadItem data-testid="A">B</BasicDataCardsHeadItem>,
    );
    expect(
      getByTestId('A').classList.contains(oltStyles.DataCardsHeadItem),
    ).toBeTruthy();
  });
});
