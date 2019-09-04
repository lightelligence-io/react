import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { V2Input } from './V2Input';

const renderComponent = (props) => {
  const queries = render(<V2Input label="Enter your data" {...props} />);

  const enterValue = (value) => {
    const input = queries.getByLabelText(/Enter your data/);
    userEvent.type(input, 'Lorem Ipsum');
  };

  return {
    ...queries,
    enterValue,
  };
};

describe('V2Select', () => {
  test.only('triggers onChange when not disabled', async () => {
    const onChange = jest.fn();
    const { enterValue } = renderComponent({
      onChange,
    });

    enterValue('Lorem Ipsum');
    expect(onChange).toHaveBeenCalled();
  });

  test.only("doesn't trigger onChange when disabled", () => {
    const onChange = jest.fn();
    const { enterValue } = renderComponent({
      onChange,
      disabled: true,
    });

    enterValue('Lorem Ipsum');
    expect(onChange).not.toHaveBeenCalled();
  });
});
