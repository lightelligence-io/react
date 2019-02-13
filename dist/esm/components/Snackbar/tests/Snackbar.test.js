import React from 'react';
import { render } from 'react-testing-library';
import { Snackbar } from '../Snackbar';
describe('Snackbar', () => {
  test('renders without failing', () => {
    const {
      getByText
    } = render(React.createElement(Snackbar, null, "Test"));
    getByText('Test');
  });
});