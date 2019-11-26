import React from 'react';
import { func, string, node } from 'prop-types';

const RadioGroup = React.memo(
  ({ children, name, value, onChange, ...props }) => {
    const isValueSelected = (radioValue) => {
      if (value === undefined) return false;
      if (radioValue === undefined) return false;
      return value === radioValue;
    };

    const handleChange = (radioValue) => () => {
      if (!onChange) return;
      onChange(radioValue);
    };

    const content = React.Children.map(children, (child) => {
      const { value: radioValue } = child.props;
      const checked = isValueSelected(radioValue, value);

      return React.cloneElement(child, {
        name,
        checked,
        onChange: handleChange(radioValue),
      });
    });

    return <div {...props}>{content}</div>;
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
