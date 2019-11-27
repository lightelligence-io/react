import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SidebarSelectorFilter } from './SidebarSelectorFilter';
import { oltStyles, SidebarSelectorFilterItem } from '../../index';

const renderComponent = (props) => {
  return render(
    <SidebarSelectorFilter data-testid="filter" onClick={() => {}} {...props}>
      <SidebarSelectorFilterItem name="foo" icon="home" />
    </SidebarSelectorFilter>,
  );
};

describe('SidebarSelectorFilter', () => {
  test('forwards className', () => {
    const { getByTestId } = renderComponent({
      className: 'myClass',
    });

    const component = getByTestId('filter');
    expect(component.classList.contains('myClass')).toBe(true);
  });

  test('renders properly when is active', () => {
    const { getByTestId } = renderComponent({
      active: true,
    });

    const component = getByTestId('filter');
    expect(component.classList.contains('is-active')).toBe(true);
  });

  test('renders title', () => {
    const { getByText } = renderComponent({
      title: 'Title',
    });

    const component = getByText('Title');

    expect(
      component.classList.contains(oltStyles.SidebarSelectorFilterTitle),
    ).toBe(true);
  });

  test('renders filters', () => {
    const { getByText } = renderComponent({});

    const component = getByText('foo');

    expect(
      component.classList.contains(
        oltStyles.SidebarSelectorFilterFiltersFilter,
      ),
    ).toBe(true);
  });

  test('should be able to button click', () => {
    const onClick = jest.fn();
    const { getByTestId } = renderComponent({
      onClick,
    });

    const component = getByTestId('filter');
    fireEvent.click(component);
    expect(onClick).toBeCalled();
  });
});
