import { render } from 'react-testing-library';
import React from 'react';
import { Avatar } from './Avatar';
import { AVATAR_TYPE_TENANT, AVATAR_TYPE_USER } from '../../constants';

describe('Avatar', () => {
  it('contains first letter of the name', () => {
    const name = 'testName';
    const { queryByText } = render(
      <Avatar name={name} type={AVATAR_TYPE_USER} />,
    );
    expect(queryByText(name[0])).not.toBeNull();
    expect(queryByText(name)).toBeNull();
  });

  it('respects type', () => {
    const name = 'testName';
    const { queryByText, rerender } = render(
      <Avatar name={name} type={AVATAR_TYPE_TENANT} size="l" />,
    );
    let icon = queryByText(name[0]);
    // check if the class name contains 'tenant' but not 'user'
    expect(icon.className).toEqual(expect.stringContaining('tenant'));
    expect(icon.className).toEqual(expect.not.stringContaining('user'));

    // rerender with different type and check if the class name contains 'user' but not 'tenant'
    rerender(<Avatar name={name} type={AVATAR_TYPE_USER} size="l" />);
    icon = queryByText(name[0]);
    expect(icon.className).toEqual(expect.not.stringContaining('tenant'));
    expect(icon.className).toEqual(expect.stringContaining('user'));
  });
});
