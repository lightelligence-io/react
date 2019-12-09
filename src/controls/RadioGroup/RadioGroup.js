import React, { useCallback } from 'react';
import { func, string, node } from 'prop-types';

const RadioGroup = ({ children, name, value, onChange, ...props }) => {
  const isValueSelected = (radioValue) => {
    if (value === undefined) return false;
    if (radioValue === undefined) return false;
    return value === radioValue;
  };

  const handleChange = useCallback(
    (radioValue, radioName) => {
      if (!onChange) return;
      onChange(radioValue, radioName);
    },
    [onChange],
  );
  const content = React.Children.map(children, (child) => {
    const { value: radioValue } = child.props;
    const checked = isValueSelected(radioValue);

    return React.cloneElement(child, {
      name,
      checked,
      onChange: handleChange,
    });
  });

  return <div {...props}>{content}</div>;
};

RadioGroup.propTypes = {
  /**
   * The radio elements
   */
  children: node,
  /**
   * Eventhandler which is called when a Radio is clicked.
   * @return (value, name) the value and the name of the clicked radio button
   */
  onChange: func.isRequired,
  /**
   * Use the value attribute to define the initially selected Radio element.
   */
  value: string.isRequired,
  /**
   * The name of the Group (will be passed to every child).
   */
  name: string.isRequired,
};

RadioGroup.defaultProps = {
  children: null,
};

export { RadioGroup };
