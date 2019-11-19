import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { V2Dropdown } from './V2Dropdown';
import { InputListItem } from '../InputList';

const renderComponent = (props) => {
  return render(<V2Dropdown {...props} data-testid="component" />);
};

describe('V2Dropdown', () => {
  test('forwards className', () => {
    const { getByTestId } = renderComponent({
      className: 'myClass',
      value: '1',
      label: 'Dropdown',
      children: [
        <InputListItem value="1" key={1} />,
        <InputListItem value="2" key={2} />,
      ],
    });
    const component = getByTestId('component');
    expect(component.classList.contains('myClass')).toBeTruthy();
  });
  test('able to open', () => {
    const { getByTestId } = renderComponent({
      value: '1',
      label: 'Dropdown',
      children: [
        <InputListItem value="1" key={1} />,
        <InputListItem value="2" key={2} />,
      ],
    });
    const component = getByTestId('component');
    fireEvent.click(component);
    expect(component.classList.contains('is-open')).toBeTruthy();
    fireEvent.click(component);
    expect(component.classList.contains('is-open')).toBeFalsy();
  });
  test('properly sets value', () => {
    const { getAllByText } = renderComponent({
      value: '1',
      label: 'Dropdown',
      children: [
        <InputListItem value="1" key={1}>
          Item Foo
        </InputListItem>,
        <InputListItem value="2" key={2}>
          Item Bar
        </InputListItem>,
      ],
    });
    const itemFoo = getAllByText('Item Foo');
    const itemBar = getAllByText('Item Bar');
    expect(itemFoo).toHaveLength(2);
    expect(itemBar).toHaveLength(1);
  });
  test('properly propagates onChange', () => {
    const onChange = jest.fn();
    const { getByText, getByTestId } = renderComponent({
      onChange,
      value: '1',
      label: 'Dropdown',
      children: [
        <InputListItem value="1" key={1}>
          Item Foo
        </InputListItem>,
        <InputListItem value="2" key={2}>
          Item Bar
        </InputListItem>,
      ],
    });
    const component = getByTestId('component');
    fireEvent.click(component);
    const itemBar = getByText('Item Bar');
    fireEvent.click(itemBar);
    expect(onChange).toHaveBeenCalledWith('2', expect.anything());
  });
});
