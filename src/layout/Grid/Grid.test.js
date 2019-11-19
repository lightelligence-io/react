import React from 'react';
import { render } from '@testing-library/react';

import { oltStyles } from '../..';

import { Grid } from './Grid';

const renderComponent = (props) => {
  return render(<Grid {...props} />);
};

describe('Grid', () => {
  test('forwards className', () => {
    const { getByText } = renderComponent({
      className: 'myClass',
      children: 'Component',
    });

    const component = getByText('Component');
    expect(component.classList.contains('myClass')).toBeTruthy();
  });

  test('has the corresponding Component class from styles', () => {
    const { getByText } = renderComponent({
      children: 'Component',
    });
    const component = getByText('Component');
    expect(component.classList.contains(oltStyles.Grid)).toBeTruthy();
  });
});
