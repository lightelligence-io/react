import React from 'react';
import { render } from '@testing-library/react';

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
