import React, { PureComponent } from 'react';
import { bool, string, node, arrayOf, shape } from 'prop-types';
import classnames from 'classnames';
import { pascalize } from 'humps';
import * as olt from '@lightelligence/styles';

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

    return (
      <div
        {...props}
        className={classnames(
          olt.Menu,
          color && olt[`Menu${pascalize(color)}`],
          outline && olt.MenuOutline,
          submenu && olt.MenuSub,
          disabled && olt.isDisabled,
          navbar && olt.NavbarMenu,
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
