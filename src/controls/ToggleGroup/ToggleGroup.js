import React from 'react';
import { any, func, node, string } from 'prop-types';

/**
 * This module defines a generic component ToggleGroup
 * that can be used as a building block for components like
 * ToggleButtonGroup, RadioButtonGroup and Tab Navigation.
 */

function isValueSelected(value, candidate) {
  if (candidate === undefined || value === undefined) {
    return false;
  }
  return value === candidate;
}

const ToggleGroup = ({
  children,
  name,
  value,
  onChange: _onChange,
  ...props
}) => {
  const handleChange = React.useCallback(
    (buttonValue) => () => {
      if (!_onChange) {
        return;
      }

      const val = value === buttonValue ? null : buttonValue;

      // don't propagate null changes ( deselect)
      const isDeselect = val === undefined || val === null;

      const propagateChange = !isDeselect;

      if (propagateChange) {
        _onChange(val);
      }
    },
    [_onChange, value],
  );

  const content = React.Children.map(children, (child) => {
    const { checked: buttonChecked, value: buttonValue } = child.props;

    const checked =
      buttonChecked === undefined || buttonChecked === null
        ? isValueSelected(buttonValue, value)
        : buttonChecked;

    const onChange = handleChange(buttonValue);

    return React.cloneElement(child, {
      name,
      checked,
      onChange,
    });
  });

  return <div {...props}>{content}</div>;
};

ToggleGroup.propTypes = {
  value: any, // eslint-disable-line react/forbid-prop-types
  name: string.isRequired,
  onChange: func.isRequired,
  children: node.isRequired,
};

ToggleGroup.defaultProps = {
  value: null,
};

export { ToggleGroup };
