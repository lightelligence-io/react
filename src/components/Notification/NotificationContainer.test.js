import React from 'react';
import { render } from 'react-testing-library';
import { NotificationContainer } from '.';

describe('NotificationContainer', () => {
  test('renders without failing', () => {
    render(<NotificationContainer />);
  });
});
