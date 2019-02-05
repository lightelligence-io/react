import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import React, { PureComponent } from 'react';
import { string, node, oneOf, bool } from 'prop-types';
import { pascalize } from 'humps';
import classnames from 'classnames';
import { OLT_NAMESPACE } from '../../constants';

class Headline extends PureComponent {
  render() {
    const _this$props = this.props,
      { regular, tag, children, size, className, color } = _this$props,
      props = _objectWithoutProperties(_this$props, [
        'regular',
        'tag',
        'children',
        'size',
        'className',
        'color',
      ]);

    const Element = tag || `h${size}`;
    return React.createElement(
      Element,
      _extends({}, props, {
        className: classnames(
          `${OLT_NAMESPACE}Headline`,
          `${OLT_NAMESPACE}Headline--${size}`,
          regular && `${OLT_NAMESPACE}Headline--regular`,
          color && `${OLT_NAMESPACE}u-text${pascalize(color)}`,
          className,
        ),
      }),
      children,
    );
  }
}

_defineProperty(Headline, 'propTypes', {
  tag: string,
  size: oneOf([1, 2, 3, 4, 5, 6]),
  children: node.isRequired,
  color: string,
  className: string,
  regular: bool,
});

_defineProperty(Headline, 'defaultProps', {
  tag: null,
  size: 5,
  color: null,
  className: null,
  regular: false,
});

export { Headline };
