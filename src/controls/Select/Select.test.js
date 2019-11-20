import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Select } from './Select';

const renderComponent = (props) => {
  const options = [
    { value: '', label: '', hidden: true },
    { value: 'LoremIpsum', label: 'Lorem Ipsum' },
    { value: 'DolorSitAmet', label: 'Dolor Sit Amet' },
    { value: 'EtVersus', label: 'Et Versus' },
  ];

  const queries = render(
    <Select label="Select an option" options={options} {...props} />,
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

describe('Select', () => {
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
