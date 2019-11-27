import React from 'react';
import { render } from '@testing-library/react';
import { RootMainContainer } from './RootMainContainer';
import { oltStyles } from '../..';

const renderComponent = (props) => {
  return render(
    <RootMainContainer {...props} data-testid="root-main-container" />,
  );
};

describe('RootMainContainer', () => {
  test('has oltStyles.LayoutBody', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('root-main-container');
    expect(component.classList.contains(oltStyles.LayoutBody)).toBe(true);
  });
  test('forwards className', () => {
    const { getByTestId } = renderComponent({
      className: 'myClass',
    });

    const component = getByTestId('root-main-container');
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
    const component = getByTestId('root-main-container').parentNode
      .childNodes[0];
    expect(component.classList.contains(oltStyles.LayoutOverlay)).toBe(true);
  });
});
