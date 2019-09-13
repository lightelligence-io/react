import React from 'react';
import { render } from 'react-testing-library';

import { oltStyles } from '../..';

import { V2GridItem } from './V2GridItem';

const renderComponent = (props) => {
  return render(<V2GridItem {...props} />);
};

describe('V2GridItem', () => {
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
    expect(component.classList.contains(oltStyles.V2GridItem)).toBeTruthy();
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
    expect(component.classList.contains(oltStyles.V2GridItem12)).toBeTruthy();
    expect(component.classList.contains(oltStyles.V2GridItemSm8)).toBeTruthy();
    expect(component.classList.contains(oltStyles.V2GridItemMd6)).toBeTruthy();
    expect(component.classList.contains(oltStyles.V2GridItemLg4)).toBeTruthy();
    expect(component.classList.contains(oltStyles.V2GridItemXl3)).toBeTruthy();
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
    expect(component.classList.contains(oltStyles.V2GridItemAuto)).toBeTruthy();
    expect(
      component.classList.contains(oltStyles.V2GridItemSmAuto),
    ).toBeTruthy();
    expect(
      component.classList.contains(oltStyles.V2GridItemMdAuto),
    ).toBeTruthy();
    expect(
      component.classList.contains(oltStyles.V2GridItemLgAuto),
    ).toBeTruthy();
    expect(
      component.classList.contains(oltStyles.V2GridItemXlAuto),
    ).toBeTruthy();
  });

  test('sets auto css modifier as default size', () => {
    const { getByText } = renderComponent({
      children: 'Component',
    });
    const component = getByText('Component');
    expect(component.classList.contains(oltStyles.V2GridItemAuto)).toBeTruthy();
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
      component.classList.contains(oltStyles.V2GridItemOffset1),
    ).toBeTruthy();
    expect(
      component.classList.contains(oltStyles.V2GridItemSmOffset2),
    ).toBeTruthy();
    expect(
      component.classList.contains(oltStyles.V2GridItemMdOffset3),
    ).toBeTruthy();
    expect(
      component.classList.contains(oltStyles.V2GridItemLgOffset4),
    ).toBeTruthy();
    expect(
      component.classList.contains(oltStyles.V2GridItemXlOffset5),
    ).toBeTruthy();
  });
});
