import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { oltStyles } from '../..';

import { V2Radio } from './V2Radio';

const COMPONENT_TEST_ID = 'Component-Id';

const renderComponent = ({ testId = COMPONENT_TEST_ID, ...props }) => {
  return render(<V2Radio data-testid={testId} {...props} />);
};

describe('V2Radio', () => {
  test('triggers onChange when not disabled', () => {
    const onChange = jest.fn();
    const { getByLabelText } = renderComponent({
      onChange,
      children: 'Component',
    });

    const component = getByLabelText('Component');
    fireEvent.click(component);
    expect(onChange).toHaveBeenCalledWith(true);
  });

  test('should forward disabled to underlying radio', () => {
    const { getByLabelText } = renderComponent({
      disabled: true,
      children: 'Component',
    });

    const radio = getByLabelText('Component');
    expect(radio.disabled).toBe(true);
  });

  test('should forward inputProps to underlying radio', () => {
    const { getByLabelText } = renderComponent({
      disabled: true,
      inputProps: { id: 'myId' },
      children: 'Component',
    });

    const radio = getByLabelText('Component');
    expect(radio.id).toBe('myId');
  });

  test('should forward checked to underlying radio', () => {
    const { getByLabelText } = renderComponent({
      checked: true,
      children: 'Component',
    });

    const radio = getByLabelText('Component');
    expect(radio.checked).toBe(true);
  });

  test("doesn't trigger onClick when disabled", () => {
    const onChange = jest.fn();
    const { getByTestId } = renderComponent({
      onChange,
      disabled: true,
    });

    const component = getByTestId(COMPONENT_TEST_ID);

    fireEvent.click(component);
    expect(onChange).not.toHaveBeenCalled();
  });

  test('forwards className', () => {
    const { getByTestId } = renderComponent({
      className: 'myClass',
    });

    const toggle = getByTestId(COMPONENT_TEST_ID);
    expect(toggle.classList.contains('myClass')).toBe(true);
  });

  test('correctly sets the css base class', () => {
    const { getByTestId } = renderComponent({});
    const button = getByTestId(COMPONENT_TEST_ID);
    expect(button.classList.contains(oltStyles.V2Radio)).toBe(true);
  });
});
