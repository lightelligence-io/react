import React from 'react';
import { render } from '@testing-library/react';
import { SidebarNavigation } from './SidebarNavigation';
import { SidebarNavigationItem } from './SidebarNavigationItem';

const renderComponent = (props) => {
  return render(
    <SidebarNavigation {...props} data-testid="sidebar-navigation" />,
  );
};

describe('Sidebar Navigation', () => {
  test('renders children', () => {
    const { getByText } = renderComponent({
      children: (
        <SidebarNavigationItem
          to="https://lightelligence.io"
          icon="chevron-left"
          title="Home"
        />
      ),
    });

    const component = getByText('Home');
    expect(component).toBeTruthy();
  });
});
