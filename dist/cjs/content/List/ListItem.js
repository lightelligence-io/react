import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import React, { PureComponent } from 'react';
import { node, string } from 'prop-types';
import classnames from 'classnames';
import { OLT_NAMESPACE } from '../../constants';
export class ListItem extends PureComponent {
  render() {
    const _this$props = this.props,
      { children, className, term } = _this$props,
      props = _objectWithoutProperties(_this$props, [
        'children',
        'className',
        'term',
      ]);

    const base = `${OLT_NAMESPACE}List`;
    return React.createElement(
      React.Fragment,
      null,
      term &&
        React.createElement(
          'li',
          _extends({}, props, {
            className: classnames(`${base}-term`, className),
          }),
          term,
        ),
      React.createElement(
        'li',
        _extends({}, props, {
          className: classnames(`${base}-item`, className),
        }),
        children,
      ),
    );
  }
}

_defineProperty(ListItem, 'propTypes', {
  children: node,
  className: string,
  term: string,
});

_defineProperty(ListItem, 'defaultProps', {
  children: null,
  className: null,
  term: null,
});
