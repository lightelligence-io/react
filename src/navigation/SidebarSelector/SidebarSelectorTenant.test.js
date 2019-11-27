import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SidebarSelectorTenant } from './SidebarSelectorTenant';
import { oltStyles } from '../../index';

const renderComponent = (props) => {
  return render(
    <SidebarSelectorTenant
      data-testid="tenant"
      onClick={() => {}}
      tenant="Foo"
      {...props}
    />,
  );
};

describe('SidebarSelectorTenant', () => {
  test('forwards className', () => {
    const { getByTestId } = renderComponent({
      className: 'myClass',
    });

    const component = getByTestId('tenant');
    expect(component.classList.contains('myClass')).toBe(true);
  });

  test('renders properly when is active', () => {
    const { getByTestId } = renderComponent({
      active: true,
    });

    const component = getByTestId('tenant');
    expect(component.classList.contains('is-active')).toBe(true);
  });

  test('renders tenant', () => {
    const { getByText } = renderComponent({
      tenant: 'Tenant',
    });

    const component = getByText('Tenant');

    expect(
      component.classList.contains(oltStyles.SidebarSelectorTenantName),
    ).toBe(true);
  });

  test('renders avatar', () => {
    const { getByText } = renderComponent({
      tenant: 'My Tenant',
    });

    const component = getByText('M');

    expect(
      component.classList.contains(oltStyles.SidebarSelectorTenantAvatar),
    ).toBe(true);
  });

  test('should be able to button click', () => {
    const onClick = jest.fn();
    const { getByTestId } = renderComponent({
      onClick,
    });

    const component = getByTestId('tenant');
    fireEvent.click(component);
    expect(onClick).toBeCalled();
  });
});
