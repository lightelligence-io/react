import React from 'react';
import { render } from 'react-testing-library';

import { BasicDataCardsContent } from './index';
import { oltStyles } from '../..';

// eslint-disable-next-line react/prop-types
const renderContent = ({ children, tableOnly = false, listOnly = false }) =>
  render(
    <BasicDataCardsContent tableOnly={tableOnly} listOnly={listOnly}>
      {children}
    </BasicDataCardsContent>,
  );

describe('BasicDataCardsContent', () => {
  test('renders children', async () => {
    const { getByText } = renderContent({
      children: 'Hello',
    });
    getByText('Hello');
  });

  test('has component className', async () => {
    const { getByText } = renderContent({ children: 'A' });
    expect(
      getByText('A').classList.contains(oltStyles.DataCardsContent),
    ).toBeTruthy();
  });

  test('has tableOnly className', async () => {
    const { getByText } = renderContent({
      children: 'A',
      tableOnly: true,
    });
    expect(
      getByText('A').classList.contains(oltStyles.DataCardsTableOnly),
    ).toBeTruthy();
  });

  test('has listOnly className', async () => {
    const { getByText } = renderContent({
      children: 'A',
      listOnly: true,
    });
    expect(
      getByText('A').classList.contains(oltStyles.DataCardsListOnly),
    ).toBeTruthy();
  });
});
