import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { PureComponent } from 'react';
import { string, arrayOf, shape, bool } from 'prop-types';
import classnames from 'classnames';
import { OLT_NAMESPACE } from '../../constants';

class Select extends PureComponent {
  static renderOptions(options, value) {
    return options.map(option => {
      const key = `${option.value}-${option.label}`;
      return React.createElement("option", {
        value: option.value,
        key: key
      }, option.label);
    });
  }

  render() {
    const _this$props = this.props,
          {
      className,
      disabled,
      options,
      value,
      fullwidth
    } = _this$props,
          props = _objectWithoutProperties(_this$props, ["className", "disabled", "options", "value", "fullwidth"]);

    const base = `${OLT_NAMESPACE}Select`;
    return React.createElement(React.Fragment, null, React.createElement("select", _extends({
      value: value,
      className: classnames(base, fullwidth && `${base}--fullwidth`, disabled && `is-disabled`, !value && 'is-placeholder', className),
      disabled: disabled
    }, props), Select.renderOptions(options, value)));
  }

}

_defineProperty(Select, "propTypes", {
  className: string,
  value: string,
  fullwidth: bool,
  disabled: bool,
  options: arrayOf(shape({
    label: string,
    value: string
  })).isRequired
});

_defineProperty(Select, "defaultProps", {
  className: null,
  fullwidth: false,
  disabled: false,
  value: null
});

export { Select };