import React from 'react';
import { render } from 'react-testing-library';

import {
  BasicDataCards,
  BasicDataCardsBody,
  BasicDataCardsHead,
} from './index';
import { oltStyles } from '../..';

const renderDataCards = ({ headChildren, bodyChildren, ...other } = {}) =>
  render(
    <BasicDataCards {...other}>
      <BasicDataCardsHead>{headChildren}</BasicDataCardsHead>
      <BasicDataCardsBody>{bodyChildren}</BasicDataCardsBody>
    </BasicDataCards>,
  );

describe('BasicDataCards', () => {
  test('has component className', async () => {
    const { getByTestId } = renderDataCards({
      'data-testid': 'A',
    });
    expect(
      getByTestId('A').classList.contains(oltStyles.DataCards),
    ).toBeTruthy();
  });

  test('renders frame child', async () => {
    const { getByTestId } = renderDataCards({
      'data-testid': 'A',
    });
    expect(
      getByTestId('A').childNodes[0].classList.contains(
        oltStyles.DataCardsFrame,
      ),
    ).toBeTruthy();
  });

  test('has useTableLayout className', async () => {
    const { getByTestId } = renderDataCards({
      'data-testid': 'A',
      layout: 'table',
    });
    expect(
      getByTestId('A').classList.contains(oltStyles.DataCardsUseTableLayout),
    ).toBeTruthy();
  });

  test('has selectable className', async () => {
    const { getByTestId } = renderDataCards({
      'data-testid': 'A',
      selectable: true,
    });
    expect(
      getByTestId('A').classList.contains(oltStyles.DataCardsSelectable),
    ).toBeTruthy();
  });

  test('has tableLayoutFixed className', async () => {
    const { getByTestId } = renderDataCards({
      'data-testid': 'A',
      tableLayoutFixed: true,
    });
    expect(
      getByTestId('A').classList.contains(oltStyles.DataCardsTableLayoutFixed),
    ).toBeTruthy();
  });
  test('has largeCardPadding className', async () => {
    const { getByTestId } = renderDataCards({
      'data-testid': 'A',
      largeCardPadding: true,
    });
    expect(
      getByTestId('A').classList.contains(oltStyles.DataCardsLargeCardPadding),
    ).toBeTruthy();
  });

  test('has alwaysTable className', async () => {
    const { getByTestId } = renderDataCards({
      'data-testid': 'A',
      alwaysTable: true,
    });
    expect(
      getByTestId('A').classList.contains(oltStyles.DataCardsAlwaysTable),
    ).toBeTruthy();
  });
});
