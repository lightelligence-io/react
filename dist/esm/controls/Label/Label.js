import _extends from '@babel/runtime/helpers/esm/extends';
import _objectSpread from '@babel/runtime/helpers/esm/objectSpread';
import _objectWithoutProperties from '@babel/runtime/helpers/esm/objectWithoutProperties';
import _defineProperty from '@babel/runtime/helpers/esm/defineProperty';
import React, { PureComponent } from 'react';
import { string, node, shape } from 'prop-types';
import classnames from 'classnames';
import { OLT_NAMESPACE } from '../../constants';
export class Label extends PureComponent {
  render() {
    const _this$props = this.props,
      { className, children, style } = _this$props,
      props = _objectWithoutProperties(_this$props, [
        'className',
        'children',
        'style',
      ]);

    return React.createElement(
      'label',
      _extends(
        {
          style: _objectSpread({}, style, {
            display: 'block',
          }),
          className: classnames(`${OLT_NAMESPACE}Label`, className),
        },
        props,
      ),
      children,
    );
  }
}

_defineProperty(Label, 'propTypes', {
  className: string,
  children: node,
  style: shape({}),
});

_defineProperty(Label, 'defaultProps', {
  className: null,
  children: null,
  style: undefined,
});
