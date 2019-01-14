import _extends from '@babel/runtime/helpers/esm/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/esm/objectWithoutProperties';
import _defineProperty from '@babel/runtime/helpers/esm/defineProperty';
import React, { PureComponent } from 'react';
import { string, bool, node } from 'prop-types';
import classnames from 'classnames';
import { OLT_NAMESPACE } from '../../constants';

class Grid extends PureComponent {
  render() {
    const _this$props = this.props,
      { noPadding, children, className } = _this$props,
      props = _objectWithoutProperties(_this$props, [
        'noPadding',
        'children',
        'className',
      ]);

    const classes = classnames(
      `${OLT_NAMESPACE}Grid`,
      noPadding && `${OLT_NAMESPACE}Grid--noPadding`, // NOTE: What about --gutterless?
      // ...or maybe better: Provide list of gutters like spacings and modifiers like `--gutter{0-4}`.
      className,
    );
    return React.createElement(
      'div',
      _extends(
        {
          className: classes,
        },
        props,
      ),
      children,
    );
  }
}

_defineProperty(Grid, 'propTypes', {
  noPadding: bool,
  className: string,
  children: node,
});

_defineProperty(Grid, 'defaultProps', {
  noPadding: false,
  className: null,
  children: null,
});

export { Grid };
