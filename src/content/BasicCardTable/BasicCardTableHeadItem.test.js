import React from 'react';
import { render } from '@testing-library/react';

import { BasicCardTableHeadItem } from './BasicCardTableHeadItem';
import { oltStyles } from '../..';

describe('BasicCardTableHeadItem', () => {
  test('has component className', async () => {
    const { getByTestId } = render(
      <BasicCardTableHeadItem data-testid="A">B</BasicCardTableHeadItem>,
    );
    expect(
      getByTestId('A').classList.contains(oltStyles.CardTableHeadItem),
    ).toBeTruthy();
  });
});
