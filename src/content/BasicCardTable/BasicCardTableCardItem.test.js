import React from 'react';
import { render } from '@testing-library/react';

import { BasicCardTableContent, BasicCardTableCardItem } from './index';
import { oltStyles } from '../..';

// eslint-disable-next-line react/prop-types
const renderCardItem = ({
  children = 'Component',
  title = 'Title',
  ...other
} = {}) =>
  render(
    <BasicCardTableCardItem title={title} {...other}>
      {children}
    </BasicCardTableCardItem>,
  );

describe('BasicCardTableItem', () => {
  test('renders children', async () => {
    const { getByText } = renderCardItem({
      children: 'Hello',
    });
    getByText('Hello');
  });

  test('renders title', async () => {
    const { getByText } = renderCardItem({
      title: 'A',
    });
    getByText('A');
  });

  test('renders title component', async () => {
    const { getByText } = renderCardItem({
      title: 'A',
    });
    expect(
      getByText('A').classList.contains(oltStyles.CardTableTitle),
    ).toBeTruthy();
  });

  test('renders content children', async () => {
    const { getByText, container } = renderCardItem({
      children: <BasicCardTableContent>A</BasicCardTableContent>,
    });

    expect(
      container.querySelectorAll(`.${oltStyles.CardTableContent}`).length,
    ).toBe(1);

    expect(
      getByText('A').classList.contains(oltStyles.CardTableContent),
    ).toBeTruthy();
  });

  test('renders forwardRef of content', async () => {
    const Content = React.forwardRef((props, ref) => (
      <BasicCardTableContent {...props}>Foo</BasicCardTableContent>
    ));

    const { container } = renderCardItem({
      children: <Content />,
    });

    expect(
      container.querySelectorAll(`.${oltStyles.CardTableContent}`).length,
    ).toBe(1);
  });

  test('renders array of content children', async () => {
    const { container } = renderCardItem({
      children: [
        <BasicCardTableContent key="a">A</BasicCardTableContent>,
        <BasicCardTableContent key="b">B</BasicCardTableContent>,
      ],
    });
    expect(
      container.querySelectorAll(`.${oltStyles.CardTableContent}`).length,
    ).toBe(2);
  });

  test('renders fragments with content children', async () => {
    const { container } = renderCardItem({
      children: (
        <>
          <BasicCardTableContent>A</BasicCardTableContent>
          <BasicCardTableContent>B</BasicCardTableContent>
        </>
      ),
    });

    expect(
      container.querySelectorAll(`.${oltStyles.CardTableContent}`).length,
    ).toBe(2);
  });

  test('has component className', async () => {
    const { getByTestId } = renderCardItem({ 'data-testid': 'A' });
    expect(
      getByTestId('A').classList.contains(oltStyles.CardTableCardItem),
    ).toBeTruthy();
  });

  test('has tableOnly className', async () => {
    const { getByTestId } = renderCardItem({
      'data-testid': 'A',
      tableOnly: true,
    });
    expect(
      getByTestId('A').classList.contains(oltStyles.CardTableTableOnly),
    ).toBeTruthy();
  });

  test('has listOnly className', async () => {
    const { getByTestId } = renderCardItem({
      'data-testid': 'A',
      listOnly: true,
    });
    expect(
      getByTestId('A').classList.contains(oltStyles.CardTableListOnly),
    ).toBeTruthy();
  });

  test('has alignCenter className', async () => {
    const { getByTestId } = renderCardItem({
      'data-testid': 'A',
      align: 'center',
    });
    expect(
      getByTestId('A').classList.contains(oltStyles.CardTableAlignCenter),
    ).toBeTruthy();
  });

  test('has alignRight className', async () => {
    const { getByTestId } = renderCardItem({
      'data-testid': 'A',
      align: 'right',
    });
    expect(
      getByTestId('A').classList.contains(oltStyles.CardTableAlignRight),
    ).toBeTruthy();
  });
});
