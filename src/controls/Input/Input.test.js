import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Input } from './Input';

const renderComponent = (props) => {
  const queries = render(<Input label="Enter your data" {...props} />);

  const enterValue = (value) => {
    const input = queries.getByLabelText(/Enter your data/);
    userEvent.type(input, 'Lorem Ipsum');
  };

  return {
    ...queries,
    enterValue,
  };
};

describe('Select', () => {
  test('triggers onChange when not disabled', async () => {
    const onChange = jest.fn();
    const { enterValue } = renderComponent({
      onChange,
    });

    enterValue('Lorem Ipsum');
    expect(onChange).toHaveBeenCalled();
  });

  test('triggers onIconClick', async () => {
    const onIconClick = jest.fn();
    const onChange = jest.fn();
    const { container } = renderComponent({
      icon: 'edit',
      onChange,
      onIconClick,
    });
    const icon = container.getElementsByClassName('olt-Icon')[0];
    fireEvent.click(icon);
    expect(onIconClick).toHaveBeenCalled();
    expect(onChange).not.toHaveBeenCalled();
  });

  test("doesn't trigger onChange when disabled", () => {
    const onChange = jest.fn();
    const { enterValue } = renderComponent({
      onChange,
      disabled: true,
    });

    enterValue('Lorem Ipsum');
    expect(onChange).not.toHaveBeenCalled();
  });
});
