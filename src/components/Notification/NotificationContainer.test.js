import React from 'react';
import { render } from '@testing-library/react';
import { NotificationContainer } from '.';

describe('NotificationContainer', () => {
  test('renders without failing', () => {
    render(<NotificationContainer />);
  });
});
