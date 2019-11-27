import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { oltStyles, SidebarSubNavigationItem } from '../../index';
import { SidebarNavigationItem } from './SidebarNavigationItem';

const renderComponent = (props) => {
  return render(
    <SidebarNavigationItem
      title="Foo"
      to="https://lightelligence.io"
      icon="chevron-left"
      data-testid="sidebar-navigation-item"
      {...props}
    />,
  );
};

describe('Sidebar Navigation Item', () => {
  test('has oltStyles.SidebarNavigationItem', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('sidebar-navigation-item');
    expect(component.classList.contains(oltStyles.SidebarNavigationItem)).toBe(
      true,
    );
  });
  test('forwards className', () => {
    const { getByTestId } = renderComponent({
      className: 'myClass',
    });

    const component = getByTestId('sidebar-navigation-item');
    expect(component.classList.contains('myClass')).toBe(true);
  });
  test('renders an icon', () => {
    const { getByTestId } = renderComponent({
      icon: 'home',
    });

    const component = getByTestId('sidebar-navigation-item');
    expect(component.classList.contains(oltStyles.IconHome)).toBe(true);
  });
  test('renders sub navigation', () => {
    const { getByText } = renderComponent({
      children: (
        <SidebarSubNavigationItem to="https://lightelligence.io" title="Bar" />
      ),
    });

    const component = getByText('Bar');
    expect(component).toBeTruthy();
  });
  test('passes is active for router', () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/home']} initialIndex={0}>
        <SidebarNavigationItem
          title="Foo"
          to="/home"
          icon="chevron-left"
          data-testid="sidebar-navigation-item"
        />
      </MemoryRouter>,
    );

    const component = getByTestId('sidebar-navigation-item');
    expect(component.classList.contains('is-active')).toBe(true);
  });
  test('passes inactive when route is not selected', () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/home']} initialIndex={0}>
        <SidebarNavigationItem
          title="Foo"
          to="/foo"
          icon="chevron-left"
          data-testid="sidebar-navigation-item"
        />
      </MemoryRouter>,
    );

    const component = getByTestId('sidebar-navigation-item');
    expect(component.classList.contains('is-active')).toBe(false);
  });
});
