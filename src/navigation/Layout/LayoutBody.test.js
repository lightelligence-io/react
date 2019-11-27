import React from 'react';
import { render } from '@testing-library/react';
import { LayoutBody } from './LayoutBody';
import { oltStyles } from '../..';

const renderComponent = (props) => {
  return render(<LayoutBody {...props} data-testid="layout-body" />);
};

describe('LayoutBody', () => {
  test('has oltStyles.LayoutBody', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('layout-body');
    expect(component.classList.contains(oltStyles.LayoutBody)).toBe(true);
  });
  test('forwards className', () => {
    const { getByTestId } = renderComponent({
      className: 'myClass',
    });

    const component = getByTestId('layout-body');
    expect(component.classList.contains('myClass')).toBe(true);
  });
  test('renders children', () => {
    const { getByText } = renderComponent({
      children: 'Foo',
    });

    const component = getByText('Foo');
    expect(component).toBeTruthy();
  });
  test('renders overlay', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('layout-body').parentNode.childNodes[0];
    expect(component.classList.contains(oltStyles.LayoutOverlay)).toBe(true);
  });
});
