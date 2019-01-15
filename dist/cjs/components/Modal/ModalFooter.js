import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import React, { PureComponent } from 'react';
import { string, node } from 'prop-types';
import classnames from 'classnames';
import { OLT_NAMESPACE } from '../../constants';
export class ModalFooter extends PureComponent {
  render() {
    const _this$props = this.props,
      { children, className } = _this$props,
      props = _objectWithoutProperties(_this$props, ['children', 'className']);

    return React.createElement(
      'div',
      _extends(
        {
          className: classnames(`${OLT_NAMESPACE}Modal-footer`, className),
        },
        props,
      ),
      children,
    );
  }
}

_defineProperty(ModalFooter, 'propTypes', {
  children: node,
  className: string,
});

_defineProperty(ModalFooter, 'defaultProps', {
  children: null,
  className: null,
});
