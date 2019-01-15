import _extends from '@babel/runtime/helpers/esm/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/esm/objectWithoutProperties';
import _defineProperty from '@babel/runtime/helpers/esm/defineProperty';
import React, { PureComponent } from 'react';
import { node, bool, string } from 'prop-types';
import classnames from 'classnames';
import { OLT_NAMESPACE } from '../../constants';
export class List extends PureComponent {
  render() {
    const _this$props = this.props,
      { children, className, ordered, definition } = _this$props,
      props = _objectWithoutProperties(_this$props, [
        'children',
        'className',
        'ordered',
        'definition',
      ]);

    const base = `${OLT_NAMESPACE}List`;
    return React.createElement(
      'ul',
      _extends({}, props, {
        className: classnames(
          base,
          ordered && `${base}--ordered`,
          definition && `${base}--definition`,
          className,
        ),
      }),
      children,
    );
  }
}

_defineProperty(List, 'propTypes', {
  children: node,
  className: string,
  ordered: bool,
  definition: bool,
});

_defineProperty(List, 'defaultProps', {
  children: null,
  className: string,
  ordered: false,
  definition: false,
});
