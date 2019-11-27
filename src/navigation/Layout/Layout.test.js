import React from 'react';
import { render } from '@testing-library/react';
import { Layout } from './Layout';
import { oltStyles } from '../..';

const renderComponent = (props) => {
  return render(<Layout {...props} data-testid="layout" />);
};

describe('Layout', () => {
  test('has oltStyles.Layout', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('layout');
    expect(component.classList.contains(oltStyles.Layout)).toBe(true);
  });
  test('forwards className', () => {
    const { getByTestId } = renderComponent({
      className: 'myClass',
    });

    const component = getByTestId('layout');
    expect(component.classList.contains('myClass')).toBe(true);
  });
  test('renders children', () => {
    const { getByText } = renderComponent({
      children: 'Foo',
    });

    const component = getByText('Foo');
    expect(component).toBeTruthy();
  });
});
