import React from 'react';
import { render } from '@testing-library/react';

import { BasicCardTableContent } from './index';
import { oltStyles } from '../..';

// eslint-disable-next-line react/prop-types
const renderContent = ({ children, tableOnly = false, listOnly = false }) =>
  render(
    <BasicCardTableContent tableOnly={tableOnly} listOnly={listOnly}>
      {children}
    </BasicCardTableContent>,
  );

describe('BasicCardTableContent', () => {
  test('renders children', async () => {
    const { getByText } = renderContent({
      children: 'Hello',
    });
    getByText('Hello');
  });

  test('has component className', async () => {
    const { getByText } = renderContent({ children: 'A' });
    expect(
      getByText('A').classList.contains(oltStyles.CardTableContent),
    ).toBeTruthy();
  });

  test('has tableOnly className', async () => {
    const { getByText } = renderContent({
      children: 'A',
      tableOnly: true,
    });
    expect(
      getByText('A').classList.contains(oltStyles.CardTableTableOnly),
    ).toBeTruthy();
  });

  test('has listOnly className', async () => {
    const { getByText } = renderContent({
      children: 'A',
      listOnly: true,
    });
    expect(
      getByText('A').classList.contains(oltStyles.CardTableListOnly),
    ).toBeTruthy();
  });
});
