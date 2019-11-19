import React from 'react';
import { render } from '@testing-library/react';

import { oltStyles } from '../..';

import { Container } from './Container';

const renderComponent = (props) => {
  return render(<Container {...props} />);
};

describe('Container', () => {
  test('forwards className', () => {
    const { getByText } = renderComponent({
      className: 'myClass',
      children: 'Component',
    });

    const component = getByText('Component');
    expect(component.classList.contains('myClass')).toBeTruthy();
  });

  test('correctly sets the css-modifier for noPadding', () => {
    const { getByText } = renderComponent({
      children: 'Component',
      noPadding: true,
    });
    const component = getByText('Component');
    expect(
      component.classList.contains(oltStyles.ContainerNoPadding),
    ).toBeTruthy();
  });

  test('correctly sets the css-modifier for fluid', () => {
    const { getByText } = renderComponent({
      children: 'Component',
      fluid: true,
    });
    const component = getByText('Component');
    expect(component.classList.contains(oltStyles.ContainerFluid)).toBeTruthy();
  });

  test('has the corresponding Component class from styles', () => {
    const { getByText } = renderComponent({
      children: 'Component',
    });
    const component = getByText('Component');
    expect(component.classList.contains(oltStyles.Container)).toBeTruthy();
  });
});
