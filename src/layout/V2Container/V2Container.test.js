import React from 'react';
import { render } from 'react-testing-library';

import { oltStyles } from '../..';

import { V2Container } from './V2Container';

const renderComponent = (props) => {
  return render(<V2Container {...props} />);
};

describe('V2Container', () => {
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
      component.classList.contains(oltStyles.V2ContainerNoPadding),
    ).toBeTruthy();
  });

  test('has the corresponding Component class from styles', () => {
    const { getByText } = renderComponent({
      children: 'Component',
    });
    const component = getByText('Component');
    expect(component.classList.contains(oltStyles.V2Container)).toBeTruthy();
  });
});
