import React from 'react';
import { render } from '@testing-library/react';

import { oltStyles } from '../..';

import { GridItem } from './GridItem';

const renderComponent = (props) => {
  return render(<GridItem {...props} />);
};

describe('GridItem', () => {
  test('forwards className', () => {
    const { getByText } = renderComponent({
      className: 'myClass',
      children: 'Component',
    });

    const component = getByText('Component');
    expect(component.classList.contains('myClass')).toBeTruthy();
  });

  test('has the corresponding Component class from styles', () => {
    const { getByText } = renderComponent({
      children: 'Component',
    });
    const component = getByText('Component');
    expect(component.classList.contains(oltStyles.GridItem)).toBeTruthy();
  });

  test('sets the corresponding size styles when passing values for all breakpoints', () => {
    const { getByText } = renderComponent({
      children: 'Component',
      xs: 12,
      sm: 8,
      md: 6,
      lg: 4,
      xl: 3,
    });
    const component = getByText('Component');
    expect(component.classList.contains(oltStyles.GridItem12)).toBeTruthy();
    expect(component.classList.contains(oltStyles.GridItemSm8)).toBeTruthy();
    expect(component.classList.contains(oltStyles.GridItemMd6)).toBeTruthy();
    expect(component.classList.contains(oltStyles.GridItemLg4)).toBeTruthy();
    expect(component.classList.contains(oltStyles.GridItemXl3)).toBeTruthy();
  });

  test("sets the corresponding size styles when passing 'auto' for all breakpoints", () => {
    const { getByText } = renderComponent({
      children: 'Component',
      xs: 'auto',
      sm: 'auto',
      md: 'auto',
      lg: 'auto',
      xl: 'auto',
    });
    const component = getByText('Component');
    expect(component.classList.contains(oltStyles.GridItemAuto)).toBeTruthy();
    expect(component.classList.contains(oltStyles.GridItemSmAuto)).toBeTruthy();
    expect(component.classList.contains(oltStyles.GridItemMdAuto)).toBeTruthy();
    expect(component.classList.contains(oltStyles.GridItemLgAuto)).toBeTruthy();
    expect(component.classList.contains(oltStyles.GridItemXlAuto)).toBeTruthy();
  });

  test('sets auto css modifier as default size', () => {
    const { getByText } = renderComponent({
      children: 'Component',
    });
    const component = getByText('Component');
    expect(component.classList.contains(oltStyles.GridItemAuto)).toBeTruthy();
  });

  test('sets the corresponding offset styles passing values for all breakpoints', () => {
    const { getByText } = renderComponent({
      children: 'Component',
      offsetXs: 1,
      offsetSm: 2,
      offsetMd: 3,
      offsetLg: 4,
      offsetXl: 5,
    });
    const component = getByText('Component');

    expect(
      component.classList.contains(oltStyles.GridItemOffset1),
    ).toBeTruthy();
    expect(
      component.classList.contains(oltStyles.GridItemSmOffset2),
    ).toBeTruthy();
    expect(
      component.classList.contains(oltStyles.GridItemMdOffset3),
    ).toBeTruthy();
    expect(
      component.classList.contains(oltStyles.GridItemLgOffset4),
    ).toBeTruthy();
    expect(
      component.classList.contains(oltStyles.GridItemXlOffset5),
    ).toBeTruthy();
  });
});
