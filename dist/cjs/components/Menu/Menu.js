import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import React, { PureComponent } from 'react';
import { bool, string, node, arrayOf, shape } from 'prop-types';
import classnames from 'classnames';
import { OLT_NAMESPACE } from '../../constants';
import { MenuItem } from './MenuItem';
export class Menu extends PureComponent {
  render() {
    const _this$props = this.props,
      {
        children,
        className,
        color,
        outline,
        submenu,
        navbar,
        disabled,
        items,
      } = _this$props,
      props = _objectWithoutProperties(_this$props, [
        'children',
        'className',
        'color',
        'outline',
        'submenu',
        'navbar',
        'disabled',
        'items',
      ]);

    const base = `${OLT_NAMESPACE}Menu`;
    const navbarBase = `${OLT_NAMESPACE}Navbar`;
    return React.createElement(
      'div',
      _extends({}, props, {
        className: classnames(
          base,
          color && `${base}--${color}`,
          outline && `${base}--outline`,
          submenu && `${base}--sub`,
          disabled && 'is-disabled',
          navbar && `${navbarBase}-menu`,
        ),
      }),
      items.length > 0
        ? items.map((_ref) => {
            let { label } = _ref,
              itemProps = _objectWithoutProperties(_ref, ['label']);

            return React.createElement(
              MenuItem,
              _extends(
                {
                  key: `${label}`,
                },
                itemProps,
              ),
              label,
            );
          })
        : children,
    );
  }
}

_defineProperty(Menu, 'propTypes', {
  children: node,
  className: string,
  color: string,
  outline: bool,
  submenu: bool,
  navbar: bool,
  disabled: bool,
  items: arrayOf(
    shape({
      label: string,
      to: string,
      target: string,
    }),
  ),
});

_defineProperty(Menu, 'defaultProps', {
  children: null,
  className: null,
  color: '',
  outline: false,
  submenu: false,
  navbar: false,
  disabled: false,
  items: [],
});
