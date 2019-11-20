import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Filter } from './Filter';
import { Checkbox } from '../../controls/Checkbox';

const renderComponent = (props) => {
  return render(<Filter {...props} data-testid="component" />);
};

describe('Filter', () => {
  test('forwards className', () => {
    const { getByTestId } = renderComponent({
      className: 'myClass',
      label: 'Filter',
      children: [
        <Checkbox key={1}> Device Type </Checkbox>,
        <Checkbox key={2}> Device Name </Checkbox>,
      ],
    });
    const component = getByTestId('component');
    expect(component.classList.contains('myClass')).toBe(true);
  });
  test('able to open', () => {
    const { getByTestId } = renderComponent({
      label: 'Filter',
      children: [
        <Checkbox key={1}> Device Type </Checkbox>,
        <Checkbox key={2}> Device Name </Checkbox>,
      ],
      open: true,
    });
    const component = getByTestId('component');
    expect(component.classList.contains('is-open')).toBe(true);
  });
  test('properly sets bubble', () => {
    const { getAllByText } = renderComponent({
      label: 'Filter',
      children: [
        <Checkbox key={1}> Device Type </Checkbox>,
        <Checkbox key={2}> Device Name </Checkbox>,
      ],
      bubbleText: 'foo',
    });
    const bubble = getAllByText('foo');
    expect(bubble).toHaveLength(1);
  });
  test('properly propagates onClick', () => {
    const onClick = jest.fn();
    const { getByTestId } = renderComponent({
      onClick,
      label: 'Filter',
      children: [
        <Checkbox key={1}> Device Type </Checkbox>,
        <Checkbox key={2}> Device Name </Checkbox>,
      ],
    });
    const component = getByTestId('component');
    fireEvent.click(component);
    expect(onClick).toHaveBeenCalled();
  });
});
