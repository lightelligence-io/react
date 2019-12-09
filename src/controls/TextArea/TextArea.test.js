import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TextArea } from './TextArea';

const renderComponent = (props) => {
  const queries = render(<TextArea label="Enter your data" {...props} />);

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
