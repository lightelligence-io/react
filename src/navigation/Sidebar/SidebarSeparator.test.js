import React from 'react';
import { render } from '@testing-library/react';
import { SidebarSeparator } from './SidebarSeparator';
import { oltStyles } from '../..';

const renderComponent = (props) => {
  return render(
    <SidebarSeparator {...props} data-testid="sidebar-separator" />,
  );
};

describe('SidebarSeparator', () => {
  test('has oltStyles.SidebarSeparator', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('sidebar-separator');
    expect(component.classList.contains(oltStyles.SidebarSeparator)).toBe(true);
  });
  test('forwards className', () => {
    const { getByTestId } = renderComponent({
      className: 'myClass',
    });

    const component = getByTestId('sidebar-separator');
    expect(component.classList.contains('myClass')).toBe(true);
  });
});
