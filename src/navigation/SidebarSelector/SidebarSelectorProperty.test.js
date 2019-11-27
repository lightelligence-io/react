import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SidebarSelectorProperty } from './SidebarSelectorProperty';
import { oltStyles } from '../../index';

const renderComponent = (props) => {
  return render(
    <SidebarSelectorProperty
      data-testid="property"
      onClick={() => {}}
      title="foo"
      location="bar"
      {...props}
    />,
  );
};

describe('SidebarSelectorProperty', () => {
  test('forwards className', () => {
    const { getByTestId } = renderComponent({
      className: 'myClass',
    });

    const component = getByTestId('property');
    expect(component.classList.contains('myClass')).toBe(true);
  });

  test('renders properly when is active', () => {
    const { getByTestId } = renderComponent({
      active: true,
    });

    const component = getByTestId('property');
    expect(component.classList.contains('is-active')).toBe(true);
  });

  test('renders title', () => {
    const { getByText } = renderComponent({
      title: 'Title',
    });

    const component = getByText('Title');

    expect(
      component.classList.contains(oltStyles.SidebarSelectorPropertyTitle),
    ).toBe(true);
  });

  test('renders location', () => {
    const { getByText } = renderComponent({
      location: 'Location',
    });

    const component = getByText('Location');

    expect(
      component.classList.contains(oltStyles.SidebarSelectorPropertyValue),
    ).toBe(true);
  });

  test('should be able to button click', () => {
    const onClick = jest.fn();
    const { getByTestId } = renderComponent({
      onClick,
    });

    const component = getByTestId('property');
    fireEvent.click(component);
    expect(onClick).toBeCalled();
  });
});
