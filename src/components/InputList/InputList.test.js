import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { InputList } from './InputList';
import { InputListItem } from './InputListItem';

const renderComponent = (props) => {
  return render(<InputList {...props} data-testid="component" />);
};

describe('InputList', () => {
  test('forwards className', () => {
    const { getByTestId } = renderComponent({
      className: 'myClass',
      value: '1',
      children: [
        <InputListItem onClick={() => {}} value="1" />,
        <InputListItem onClick={() => {}} value="2" />,
      ],
    });
    const component = getByTestId('component');
    expect(component.classList.contains('myClass')).toBeTruthy();
  });
  test('properly sets value', () => {
    const { getByText } = renderComponent({
      className: 'myClass',
      value: '1',
      children: [
        <InputListItem onClick={() => {}} value="1">
          Item Foo
        </InputListItem>,
        <InputListItem onClick={() => {}} value="2">
          Item Bar
        </InputListItem>,
      ],
    });
    const itemFoo = getByText('Item Foo');
    const itemBar = getByText('Item Bar');
    expect(itemFoo.classList.contains('is-active')).toBeTruthy();
    expect(itemBar.classList.contains('is-active')).toBeFalsy();
  });
  test('properly propagates onChange', () => {
    const onChange = jest.fn();
    const { getByText } = renderComponent({
      className: 'myClass',
      onChange,
      value: '1',
      children: [
        <InputListItem onClick={() => {}} value="1">
          Item Foo
        </InputListItem>,
        <InputListItem onClick={() => {}} value="2">
          Item Bar
        </InputListItem>,
      ],
    });
    const itemBar = getByText('Item Bar');
    fireEvent.click(itemBar);
    expect(onChange).toHaveBeenCalledWith('2', expect.anything());
  });
});
