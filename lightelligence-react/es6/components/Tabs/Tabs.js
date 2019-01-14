import _extends from '@babel/runtime/helpers/esm/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/esm/objectWithoutProperties';
import _defineProperty from '@babel/runtime/helpers/esm/defineProperty';
import React, { PureComponent } from 'react';
import { func, string, node, bool } from 'prop-types';
import classnames from 'classnames';
import { OLT_NAMESPACE } from '../../constants';
export class Tabs extends PureComponent {
  render() {
    const _this$props = this.props,
      { value, onSelect, className, children, navigation } = _this$props,
      props = _objectWithoutProperties(_this$props, [
        'value',
        'onSelect',
        'className',
        'children',
        'navigation',
      ]);

    const base = `${OLT_NAMESPACE}Tabs`;
    return React.createElement(
      'div',
      _extends({}, props, {
        className: classnames(
          base,
          navigation && `${base}--navigation`,
          className,
        ),
      }),
      React.Children.map(children, (element) =>
        React.cloneElement(element, {
          onSelect,
          active: value === element.props.value,
        }),
      ),
    );
  }
}

_defineProperty(Tabs, 'propTypes', {
  navigation: bool,
  value: string.isRequired,
  onSelect: func.isRequired,
  children: node.isRequired,
  className: string,
});

_defineProperty(Tabs, 'defaultProps', {
  className: null,
  navigation: false,
});
