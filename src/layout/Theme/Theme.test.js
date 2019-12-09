import React from 'react';
import { render } from '@testing-library/react';

import { Chip, Theme } from '../..';

const renderComponent = (props) => {
  return render(<Theme {...props} />);
};

describe('Theme', () => {
  test('renders children', () => {
    const { getByText } = renderComponent({
      primaryColor: '#9f9f9f',
      children: <Chip color="primary">Chip</Chip>,
    });
    expect(getByText('Chip')).toBeTruthy();
  });
  test.skip('sets css custom properties', () => {
    // We can't test these, since JSDom doesn't handle CSS Custom Properties
    // well. https://github.com/jsdom/jsdom/issues/1895
  });
});
