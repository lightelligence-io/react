import React from 'react';
import { render } from '@testing-library/react';
import { Snackbar } from '../Snackbar';

describe('Snackbar', () => {
  test('renders without failing', () => {
    const { getByText } = render(<Snackbar>Test</Snackbar>);
    getByText('Test');
  });
});
