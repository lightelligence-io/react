import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import React, { PureComponent } from 'react';
import { node, number, string, shape, oneOfType } from 'prop-types';
import classnames from 'classnames';
import { OLT_NAMESPACE } from '../../constants';

const isFirstBreakpoint = (breakpoint) => breakpoint === 'xs';

class GridItem extends PureComponent {
  render() {
    const _this$props = this.props,
      { className, children, size, offset } = _this$props,
      props = _objectWithoutProperties(_this$props, [
        'className',
        'children',
        'size',
        'offset',
      ]);

    const classes = [`${OLT_NAMESPACE}Grid-item`]; // NOTE: This is using new props-API:
    // TODO: Make it a single line!

    if (typeof size === 'object') {
      for (const [breakpoint, value] of Object.entries(size)) {
        const infix = isFirstBreakpoint(breakpoint) ? '' : `${breakpoint}-`;
        classes.push(`${OLT_NAMESPACE}Grid-item--${infix}${value}`);
      }
    } else if (size) {
      classes.push(`${OLT_NAMESPACE}Grid-item--${size}`);
    }

    if (typeof offset === 'object') {
      for (const [breakpoint, value] of Object.entries(offset)) {
        const infix = isFirstBreakpoint(breakpoint) ? '' : `${breakpoint}-`;
        classes.push(`${OLT_NAMESPACE}Grid-item--${infix}offset${value}`);
      }
    } else if (offset) {
      classes.push(`${OLT_NAMESPACE}Grid-item--offset${offset}`);
    }

    return React.createElement(
      'div',
      _extends(
        {
          className: classnames(...classes, className),
        },
        props,
      ),
      children,
    );
  }
}

_defineProperty(GridItem, 'propTypes', {
  children: node,
  className: string,
  size: oneOfType([number, string, shape({})]),
  offset: oneOfType([number, string, shape({})]),
});

_defineProperty(GridItem, 'defaultProps', {
  children: null,
  className: null,
  size: 'auto',
  offset: '',
});

export { GridItem };
