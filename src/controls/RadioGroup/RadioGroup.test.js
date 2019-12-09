import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { RadioGroup } from './RadioGroup';
import { Radio } from '../Radio';

const renderComponent = (props) => {
  const onChange = jest.fn();
  return render(
    <RadioGroup
      data-testid="radio-group"
      name="radios"
      value="a"
      onChange={onChange}
      {...props}
    >
      <Radio value="a" data-testid="radio-a">
        Option A
      </Radio>
      <Radio value="b" data-testid="radio-b">
        Option B
      </Radio>
      {/* set checked to ensure that it is overwritten by radio group value */}
      <Radio value="c" data-testid="radio-c" checked>
        Option C
      </Radio>
    </RadioGroup>,
  );
};

describe('RadioGroup', () => {
  test('triggers onChange', () => {
    const onChange = jest.fn();
    const { getByLabelText } = renderComponent({
      onChange,
    });

    const radio = getByLabelText('Option B');
    fireEvent.click(radio);
    expect(onChange).toHaveBeenCalledWith('b', 'radios');
  });

  test('sets checked on underlying radio according to value', () => {
    const { getByLabelText } = renderComponent({
      value: 'b',
    });
    const radioB = getByLabelText('Option B');
    expect(radioB.checked).toBe(true);
  });

  test('does not pass checked to child elements, but considers value only', () => {
    const { getByLabelText } = renderComponent({
      value: 'b',
    });
    const radioA = getByLabelText('Option A');
    expect(radioA.checked).toBe(false);
    const radioB = getByLabelText('Option B');
    expect(radioB.checked).toBe(true);
    const radioC = getByLabelText('Option C');
    expect(radioC.checked).toBe(false);
  });

  test('does not trigger onChange for checked radios', () => {
    const onChange = jest.fn();
    const { getByLabelText } = renderComponent({
      value: 'b',
      onChange,
    });

    const radio = getByLabelText('Option B');
    fireEvent.click(radio);
    expect(onChange).not.toHaveBeenCalled();
  });
});
