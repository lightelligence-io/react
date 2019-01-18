import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React, { PureComponent } from 'react';
import { string, bool, node } from 'prop-types';
import { NavLink, matchPath } from 'react-router-dom';
import classnames from 'classnames';
import { OLT_NAMESPACE } from '../../constants';
/**
 * Combines router navigation with standard link, seasoned with some spicy color schemes
 */

export class Link extends PureComponent {
  render() {
    const _this$props = this.props,
          {
      to,
      children,
      className,
      normal
    } = _this$props,
          props = _objectWithoutProperties(_this$props, ["to", "children", "className", "normal"]); // React routers matchPath will return a match object if the link matches an
    // internal link otherwise it returns null. Uses the "Route" logic to match.


    const match = matchPath(to, {
      path: '/',
      exact: false
    });
    const Element = match ? NavLink : 'a';
    return React.createElement(Element, _objectSpread({}, match ? {
      to
    } : {
      href: to
    }, props, {
      className: classnames(!normal && `${OLT_NAMESPACE}Link`, className)
    }), children);
  }

}

_defineProperty(Link, "propTypes", {
  to: string.isRequired,
  normal: bool,
  children: node,
  className: string
});

_defineProperty(Link, "defaultProps", {
  normal: false,
  className: null,
  children: null
});