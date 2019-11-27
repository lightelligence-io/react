import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { oltStyles } from '../../index';
import { SidebarSubNavigationItem } from './SidebarSubNavigationItem';

const renderComponent = (props) => {
  return render(
    <SidebarSubNavigationItem
      title="Foo"
      to="https://lightelligence.io"
      icon="chevron-left"
      data-testid="sidebar-sub-navigation-item"
      {...props}
    />,
  );
};

describe('Sidebar Sub Navigation Item', () => {
  test('has oltStyles.SidebarSubNavigationItem', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('sidebar-sub-navigation-item');
    expect(
      component.classList.contains(oltStyles.SidebarSubnavigationItem),
    ).toBe(true);
  });
  test('forwards className', () => {
    const { getByTestId } = renderComponent({
      className: 'myClass',
    });

    const component = getByTestId('sidebar-sub-navigation-item');
    expect(component.classList.contains('myClass')).toBe(true);
  });
  test('passes is active for router', () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/home']} initialIndex={0}>
        <SidebarSubNavigationItem
          title="Foo"
          to="/home"
          data-testid="sidebar-sub-navigation-item"
        />
      </MemoryRouter>,
    );

    const component = getByTestId('sidebar-sub-navigation-item');
    expect(component.classList.contains('is-active')).toBe(true);
  });
  test('passes inactive when route is not selected', () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/home']} initialIndex={0}>
        <SidebarSubNavigationItem
          title="Foo"
          to="/foo"
          data-testid="sidebar-sub-navigation-item"
        />
      </MemoryRouter>,
    );

    const component = getByTestId('sidebar-sub-navigation-item');
    expect(component.classList.contains('is-active')).toBe(false);
  });
});
