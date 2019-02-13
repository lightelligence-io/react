import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { PureComponent } from 'react';
import { string, element, bool } from 'prop-types';

class Tooltip extends PureComponent {
  renderMessage() {
    const {
      message,
      wide
    } = this.props;
    return wide ? React.createElement("p", null, message) : React.createElement("span", null, message);
  }

  render() {
    const _this$props = this.props,
          {
      children,
      wide,
      bottom
    } = _this$props,
          props = _objectWithoutProperties(_this$props, ["children", "wide", "bottom"]);

    const classes = bottom ? 'olt-Tooltip olt-Tooltip--bottom' : 'olt-Tooltip';
    return React.createElement("div", _extends({
      className: classes
    }, props), children, React.createElement("div", {
      className: "olt-Tooltip-content"
    }, this.renderMessage()));
  }

}

_defineProperty(Tooltip, "propTypes", {
  message: string.isRequired,
  children: element.isRequired,
  wide: bool,
  bottom: bool
});

_defineProperty(Tooltip, "defaultProps", {
  wide: false,
  bottom: false
});

export { Tooltip };