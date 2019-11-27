import React from 'react';
import { render } from '@testing-library/react';
import { RootContainer } from './RootContainer';
import { oltStyles } from '../..';

const renderComponent = (props) => {
  return render(<RootContainer {...props} data-testid="root-container" />);
};

describe('RootContainer', () => {
  test('has oltStyles.Layout and oltStyles.Frame', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('root-container');
    expect(component.classList.contains(oltStyles.Layout)).toBe(true);
    expect(component.classList.contains(oltStyles.Frame)).toBe(true);
  });
  test('forwards className', () => {
    const { getByTestId } = renderComponent({
      className: 'myClass',
    });

    const component = getByTestId('root-container');
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
