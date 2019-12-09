import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { InputListItem } from './InputListItem';

const renderComponent = (props) => {
  return render(<InputListItem {...props} />);
};

describe('InputListItem', () => {
  test('forwards className', () => {
    const { getByText } = renderComponent({
      className: 'myClass',
      onClick: () => {},
      value: '1',
      children: 'Component',
    });

    const component = getByText('Component');
    expect(component.classList.contains('myClass')).toBe(true);
  });
  test('forwards onClick', () => {
    const onClick = jest.fn();
    const { getByText } = renderComponent({
      className: 'myClass',
      onClick,
      value: '1',
      children: 'Component',
    });
    const component = getByText('Component');
    fireEvent.click(component);
    expect(onClick).toHaveBeenCalledWith('1', expect.anything());
  });
  test('forwards active', () => {
    const { getByText } = renderComponent({
      className: 'myClass',
      onClick: () => {},
      value: '1',
      active: true,
      children: 'Component',
    });
    const component = getByText('Component');
    expect(component.classList.contains('is-active')).toBe(true);
  });
});
