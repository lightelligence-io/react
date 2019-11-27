import React from 'react';
import { render } from '@testing-library/react';
import { SidebarSelectorFilterItem } from './SidebarSelectorFilterItem';
import { oltStyles } from '../../index';

const renderComponent = (props) => {
  return render(
    <SidebarSelectorFilterItem
      name="foo"
      icon="home"
      {...props}
      data-testid="filter-item"
    />,
  );
};

describe('SidebarSelectorFilterItem', () => {
  test('forwards className', () => {
    const { getByTestId } = renderComponent({
      className: 'myClass',
    });

    const component = getByTestId('filter-item');
    expect(component.classList.contains('myClass')).toBe(true);
  });

  test('renders name', () => {
    const { getByText } = renderComponent({
      name: 'Name',
    });

    const component = getByText('Name');

    expect(
      component.classList.contains(
        oltStyles.SidebarSelectorFilterFiltersFilter,
      ),
    ).toBe(true);
  });

  test('renders icon', () => {
    const { getByTestId } = renderComponent({
      icon: 'sensor',
    });

    const component = getByTestId('filter-item');

    expect(component.classList.contains(oltStyles.IconSensor)).toBe(true);
  });
});
