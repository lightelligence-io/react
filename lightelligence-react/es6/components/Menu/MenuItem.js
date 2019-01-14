import _extends from '@babel/runtime/helpers/esm/extends';
import _objectSpread from '@babel/runtime/helpers/esm/objectSpread';
import _objectWithoutProperties from '@babel/runtime/helpers/esm/objectWithoutProperties';
import _defineProperty from '@babel/runtime/helpers/esm/defineProperty';
import React, { PureComponent } from 'react';
import { string, node, bool } from 'prop-types';
import classnames from 'classnames';
import { OLT_NAMESPACE } from '../../constants';
import { Link } from '../../content/Link';
export class MenuItem extends PureComponent {
  render() {
    const _this$props = this.props,
      { className, children, to, active } = _this$props,
      props = _objectWithoutProperties(_this$props, [
        'className',
        'children',
        'to',
        'active',
      ]);

    const Element = to ? Link : 'span';
    return React.createElement(
      'div',
      {
        className: classnames(`${OLT_NAMESPACE}Menu-item`, className),
      },
      React.createElement(
        Element,
        _extends(
          {},
          _objectSpread(
            {},
            props,
            to
              ? {
                  to,
                }
              : {},
          ),
          {
            className: classnames(
              `${OLT_NAMESPACE}Menu-link`,
              active && 'is-active',
            ),
          },
        ),
        children,
      ),
    );
  }
}

_defineProperty(MenuItem, 'propTypes', {
  className: string,
  children: node,
  active: bool,
  to: string,
});

_defineProperty(MenuItem, 'defaultProps', {
  className: null,
  children: null,
  active: false,
  to: null,
});
