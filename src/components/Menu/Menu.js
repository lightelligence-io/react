import React, { PureComponent } from 'react';
import { bool, string, node, arrayOf, shape } from 'prop-types';
import classnames from 'classnames';

import { OLT_NAMESPACE } from '../../constants';
import { MenuItem } from './MenuItem';

export class Menu extends PureComponent {
  static propTypes = {
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
  };

  static defaultProps = {
    children: null,
    className: null,
    color: '',
    outline: false,
    submenu: false,
    navbar: false,
    disabled: false,
    items: [],
  };

  render() {
    const {
      children,
      className,
      color,
      outline,
      submenu,
      navbar,
      disabled,
      items,
      ...props
    } = this.props;
    const base = `${OLT_NAMESPACE}Menu`;
    const navbarBase = `${OLT_NAMESPACE}Navbar`;

    return (
      <div
        {...props}
        className={classnames(
          base,
          color && `${base}--${color}`,
          outline && `${base}--outline`,
          submenu && `${base}--sub`,
          disabled && 'is-disabled',
          navbar && `${navbarBase}-menu`,
        )}
      >
        {items.length > 0
          ? items.map(({ label, ...itemProps }) => (
              <MenuItem key={`${label}`} {...itemProps}>
                {label}
              </MenuItem>
            ))
          : children}
      </div>
    );
  }
}
