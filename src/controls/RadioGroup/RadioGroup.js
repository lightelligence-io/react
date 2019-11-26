import React from 'react';
import { func, string, node } from 'prop-types';
import { ToggleGroup } from '../ToggleGroup';

const RadioGroup = React.memo(
  ({ children, name, value, onChange, ...props }) => {
    return (
      <ToggleGroup name={name} value={value} onChange={onChange} {...props}>
        {children}
      </ToggleGroup>
    );
  },
);

RadioGroup.propTypes = {
  children: node,
  onChange: func.isRequired,
  value: string.isRequired,
  name: string.isRequired,
};

RadioGroup.defaultProps = {
  children: null,
};

export { RadioGroup };
