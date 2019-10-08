import React, { Fragment } from 'react';
import { render } from '@testing-library/react';

import { BasicDataCardsContent, BasicDataCardsCardItem } from './index';
import { oltStyles } from '../..';

// eslint-disable-next-line react/prop-types
const renderCardItem = ({
  children = 'Component',
  title = 'Title',
  ...other
} = {}) =>
  render(
    <BasicDataCardsCardItem title={title} {...other}>
      {children}
    </BasicDataCardsCardItem>,
  );

describe('BasicDataCardsItem', () => {
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
      getByText('A').classList.contains(oltStyles.DataCardsTitle),
    ).toBeTruthy();
  });

  test('renders content children', async () => {
    const { getByText, container } = renderCardItem({
      children: <BasicDataCardsContent>A</BasicDataCardsContent>,
    });

    expect(
      container.querySelectorAll(`.${oltStyles.DataCardsContent}`).length,
    ).toBe(1);

    expect(
      getByText('A').classList.contains(oltStyles.DataCardsContent),
    ).toBeTruthy();
  });

  test('renders array of content children', async () => {
    const { container } = renderCardItem({
      children: [
        <BasicDataCardsContent key="a">A</BasicDataCardsContent>,
        <BasicDataCardsContent key="b">B</BasicDataCardsContent>,
      ],
    });
    expect(
      container.querySelectorAll(`.${oltStyles.DataCardsContent}`).length,
    ).toBe(2);
  });

  test('renders fragments with content children', async () => {
    const { container } = renderCardItem({
      children: (
        <Fragment>
          <BasicDataCardsContent>A</BasicDataCardsContent>
          <BasicDataCardsContent>B</BasicDataCardsContent>
        </Fragment>
      ),
    });

    expect(
      container.querySelectorAll(`.${oltStyles.DataCardsContent}`).length,
    ).toBe(2);
  });

  test('has component className', async () => {
    const { getByTestId } = renderCardItem({ 'data-testid': 'A' });
    expect(
      getByTestId('A').classList.contains(oltStyles.DataCardsCardItem),
    ).toBeTruthy();
  });

  test('has tableOnly className', async () => {
    const { getByTestId } = renderCardItem({
      'data-testid': 'A',
      tableOnly: true,
    });
    expect(
      getByTestId('A').classList.contains(oltStyles.DataCardsTableOnly),
    ).toBeTruthy();
  });

  test('has listOnly className', async () => {
    const { getByTestId } = renderCardItem({
      'data-testid': 'A',
      listOnly: true,
    });
    expect(
      getByTestId('A').classList.contains(oltStyles.DataCardsListOnly),
    ).toBeTruthy();
  });

  test('has alignCenter className', async () => {
    const { getByTestId } = renderCardItem({
      'data-testid': 'A',
      align: 'center',
    });
    expect(
      getByTestId('A').classList.contains(oltStyles.DataCardsAlignCenter),
    ).toBeTruthy();
  });

  test('has alignRight className', async () => {
    const { getByTestId } = renderCardItem({
      'data-testid': 'A',
      align: 'right',
    });
    expect(
      getByTestId('A').classList.contains(oltStyles.DataCardsAlignRight),
    ).toBeTruthy();
  });
});
