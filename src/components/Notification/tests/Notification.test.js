import React from 'react';
import { render } from 'react-testing-library';
import { Notification } from '../Notification';

describe('Notification', () => {
  test('renders without failing', () => {
    const { getByText } = render(<Notification>Test</Notification>);
    getByText('Test');
  });
});
