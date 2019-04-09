import React, { PureComponent } from 'react';
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

export class ToggleGroup extends PureComponent {
  static propTypes = {
    value: any, // eslint-disable-line react/forbid-prop-types
    name: string.isRequired,
    onChange: func.isRequired,
    children: node.isRequired,
  };

  static defaultProps = {
    value: null,
  };

  handleChange = (buttonValue) => {
    const { onChange, value } = this.props;

    if (!onChange) {
      return;
    }

    const val = value === buttonValue ? null : buttonValue;

    // don't propagate null changes ( deselect)

    const isDeselect = val === undefined || val === null;

    const propagateChange = !isDeselect;

    if (propagateChange) {
      onChange(val);
    }
  };

  render() {
    const {
      children,
      name,
      value,
      onChange: _, // !!! onChange should not be passed to the div element as props
      ...props
    } = this.props;

    const content = React.Children.map(children, (child) => {
      const { selected: buttonSelected, value: buttonValue } = child.props;

      const selected =
        buttonSelected === undefined || buttonSelected === null
          ? isValueSelected(buttonValue, value)
          : buttonSelected;

      const onChange = this.handleChange;

      return React.cloneElement(child, {
        name,
        selected,
        onChange,
      });
    });

    return <div {...props}>{content}</div>;
  }
}
