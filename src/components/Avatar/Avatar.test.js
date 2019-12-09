import { render } from '@testing-library/react';
import React from 'react';
import { Avatar } from './Avatar';

describe('Avatar', () => {
  it('contains first letter of the name', () => {
    const name = 'testName';
    const { queryByText } = render(<Avatar name={name} />);
    expect(queryByText(name[0])).not.toBeNull();
    expect(queryByText(name)).toBeNull();
  });

  it('respects type', () => {
    const name = 'testName';
    const { queryByText, rerender } = render(
      <Avatar name={name} type="tenant" size="l" />,
    );
    let icon = queryByText(name[0]);
    // check if the class name contains 'tenant' but not 'user'
    expect(icon.className).toEqual(expect.stringContaining('tenant'));
    expect(icon.className).toEqual(expect.not.stringContaining('user'));

    // rerender with different type and check if the class name contains 'user' but not 'tenant'
    rerender(<Avatar name={name} type="user" size="l" />);
    icon = queryByText(name[0]);
    expect(icon.className).toEqual(expect.not.stringContaining('tenant'));
    expect(icon.className).toEqual(expect.stringContaining('user'));
  });
});
