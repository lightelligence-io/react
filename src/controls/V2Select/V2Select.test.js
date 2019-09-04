import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { V2Select } from './V2Select';

const renderComponent = (props) => {
  const queries = render(
    <V2Select label="Select an option" {...props}>
      <option value="" hidden />
      <option value="LoremIpsum">Lorem Ipsum</option>
      <option value="DolorSitAmet">Dolor Sit Amet</option>
      <option value="EtVersus">Et Versus</option>
    </V2Select>,
  );

  const selectOption = (value) => {
    const select = queries.getByLabelText(/Select an option/);
    userEvent.selectOptions(select, [value]);
  };

  return {
    ...queries,
    selectOption,
  };
};

describe('V2Select', () => {
  test('renders children', () => {
    const { getByText } = renderComponent({ onChange: jest.fn() });

    getByText('Lorem Ipsum');
    getByText('Dolor Sit Amet');
    getByText('Et Versus');
  });

  test('triggers onChange when option is selected', async () => {
    const onChange = jest.fn();
    const { selectOption } = renderComponent({
      onChange,
    });

    selectOption('LoremIpsum');
    expect(onChange).toHaveBeenCalled();
  });

  test("doesn't trigger onChange when disabled", () => {
    const onChange = jest.fn();
    const { selectOption } = renderComponent({
      onChange,
      disabled: true,
    });

    selectOption('Lorem Ipsum');
    expect(onChange).not.toHaveBeenCalled();
  });
});
