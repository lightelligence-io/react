import React from 'react';
import { render } from '@testing-library/react';

import {
  BasicCardTable,
  BasicCardTableBody,
  BasicCardTableHead,
} from './index';
import { oltStyles } from '../..';

const renderCardTable = ({ headChildren, bodyChildren, ...other } = {}) =>
  render(
    <BasicCardTable {...other}>
      <BasicCardTableHead>{headChildren}</BasicCardTableHead>
      <BasicCardTableBody>{bodyChildren}</BasicCardTableBody>
    </BasicCardTable>,
  );

describe('BasicCardTable', () => {
  test('has component className', async () => {
    const { getByTestId } = renderCardTable({
      'data-testid': 'A',
    });
    expect(
      getByTestId('A').classList.contains(oltStyles.CardTable),
    ).toBeTruthy();
  });

  test('renders frame child', async () => {
    const { getByTestId } = renderCardTable({
      'data-testid': 'A',
    });
    expect(
      getByTestId('A').childNodes[0].classList.contains(
        oltStyles.CardTableFrame,
      ),
    ).toBeTruthy();
  });

  test('has useTableLayout className', async () => {
    const { getByTestId } = renderCardTable({
      'data-testid': 'A',
      layout: 'table',
    });
    expect(
      getByTestId('A').classList.contains(oltStyles.CardTableUseTableLayout),
    ).toBeTruthy();
  });

  test('has selectable className', async () => {
    const { getByTestId } = renderCardTable({
      'data-testid': 'A',
      selectable: true,
    });
    expect(
      getByTestId('A').classList.contains(oltStyles.CardTableSelectable),
    ).toBeTruthy();
  });

  test('has tableLayoutFixed className', async () => {
    const { getByTestId } = renderCardTable({
      'data-testid': 'A',
      tableLayoutFixed: true,
    });
    expect(
      getByTestId('A').classList.contains(oltStyles.CardTableTableLayoutFixed),
    ).toBeTruthy();
  });
  test('has largeCardPadding className', async () => {
    const { getByTestId } = renderCardTable({
      'data-testid': 'A',
      largeCardPadding: true,
    });
    expect(
      getByTestId('A').classList.contains(oltStyles.CardTableLargeCardPadding),
    ).toBeTruthy();
  });

  test('has alwaysTable className', async () => {
    const { getByTestId } = renderCardTable({
      'data-testid': 'A',
      alwaysTable: true,
    });
    expect(
      getByTestId('A').classList.contains(oltStyles.CardTableAlwaysTable),
    ).toBeTruthy();
  });
});
