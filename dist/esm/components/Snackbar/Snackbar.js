import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { PureComponent } from 'react';
import { bool, node, string, oneOf } from 'prop-types';
import classnames from 'classnames';
import { OLT_NAMESPACE } from '../../constants';
import { SNACKBAR_TYPE_ERROR, SNACKBAR_TYPE_SUCCESS } from './types';

class Snackbar extends PureComponent {
  render() {
    const _this$props = this.props,
          {
      children,
      className,
      open,
      hidden,
      type
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, ["children", "className", "open", "hidden", "type"]);

    const base = `${OLT_NAMESPACE}Snackbar`;
    return React.createElement("div", _extends({
      className: classnames(base, type && `${base}--${type}`, open && 'is-open', className)
    }, rest), children);
  }

}

_defineProperty(Snackbar, "propTypes", {
  children: node,
  className: string,
  open: bool,
  type: oneOf([SNACKBAR_TYPE_ERROR, SNACKBAR_TYPE_SUCCESS]),
  hidden: bool
});

_defineProperty(Snackbar, "defaultProps", {
  open: true,
  className: null,
  type: SNACKBAR_TYPE_ERROR,
  children: null,
  hidden: false
});

export { Snackbar };