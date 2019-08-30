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

  test('sets the corresponding size styles when passing an object', () => {
    const { getByText } = renderComponent({
      children: 'Component',
      size: { xs: 12, sm: 8, md: 6, lg: 4, xl: 3 },
    });
    const component = getByText('Component');
    expect(component.classList.contains(oltStyles.V2GridItem12)).toBeTruthy();
    expect(component.classList.contains(oltStyles.V2GridItemSm8)).toBeTruthy();
    expect(component.classList.contains(oltStyles.V2GridItemMd6)).toBeTruthy();
    expect(component.classList.contains(oltStyles.V2GridItemLg4)).toBeTruthy();
    expect(component.classList.contains(oltStyles.V2GridItemXl3)).toBeTruthy();
  });

  test('sets auto css modifier as default size', () => {
    const { getByText } = renderComponent({
      children: 'Component',
    });
    const component = getByText('Component');
    expect(component.classList.contains(oltStyles.V2GridItemAuto)).toBeTruthy();
  });

  test('sets css-modifier when passing a single value for size', () => {
    const { getByText } = renderComponent({
      children: 'Component',
      size: 10,
    });
    const component = getByText('Component');
    expect(component.classList.contains(oltStyles.V2GridItem10)).toBeTruthy();
  });

  test('sets the corresponding offset styles when passing an object', () => {
    const { getByText } = renderComponent({
      children: 'Component',
      offset: { xs: 1, sm: 2, md: 3, lg: 4, xl: 5 },
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

  test('sets css-modifier when passing a single value for offset', () => {
    const { getByText } = renderComponent({
      children: 'Component',
      offset: 2,
    });
    const component = getByText('Component');
    expect(
      component.classList.contains(oltStyles.V2GridItemOffset2),
    ).toBeTruthy();
  });
});
