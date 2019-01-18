import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React, { PureComponent } from 'react';
import { func, bool, string, node } from 'prop-types';
import classnames from 'classnames';
import { OLT_NAMESPACE } from '../../constants'; // TODO: Styleguide implementation

export class RadioButton extends PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onChange", () => {
      const {
        onChange,
        value
      } = this.props;
      if (onChange) onChange(value);
    });
  }

  render() {
    const {
      children,
      selected,
      value,
      className,
      disabled
    } = this.props;
    const label = children && React.createElement("span", {
      className: `${OLT_NAMESPACE}Label`
    }, children);
    const classes = classnames(`${OLT_NAMESPACE}Radio`, className);
    return React.createElement("label", {
      className: classes
    }, label, React.createElement("input", {
      type: "radio",
      name: "radio",
      value: value,
      onChange: this.onChange,
      checked: selected,
      disabled: disabled
    }), React.createElement("span", {
      className: `${OLT_NAMESPACE}Radio-checkmark`
    }));
  }

}

_defineProperty(RadioButton, "propTypes", {
  value: string.isRequired,
  children: node,
  onChange: func,
  selected: bool,
  disabled: bool,
  className: string
});

_defineProperty(RadioButton, "defaultProps", {
  children: null,
  selected: null,
  onChange: null,
  disabled: null,
  className: null
});