import React from 'react';
import { render } from '@testing-library/react';

import { oltStyles } from '../..';

import { V2Grid } from './V2Grid';

const renderComponent = (props) => {
  return render(<V2Grid {...props} />);
};

describe('V2Grid', () => {
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
    expect(component.classList.contains(oltStyles.V2Grid)).toBeTruthy();
  });
});
