import React, { PureComponent } from 'react';
import { bool, node, string, oneOf } from 'prop-types';
import classnames from 'classnames';
import { pascalize } from 'humps';
import * as olt from '@lightelligence/styles';

import { SNACKBAR_TYPE_ERROR, SNACKBAR_TYPE_SUCCESS } from './types';

class Snackbar extends PureComponent {
  static propTypes = {
    children: node,
    className: string,
    open: bool,
    type: oneOf([SNACKBAR_TYPE_ERROR, SNACKBAR_TYPE_SUCCESS]),
    hidden: bool,
  };

  static defaultProps = {
    open: true,
    className: null,
    type: SNACKBAR_TYPE_ERROR,
    children: null,
    hidden: false,
  };

  render() {
    const { children, className, open, hidden, type, ...rest } = this.props;

    return (
      <div
        className={classnames(
          olt.Snackbar,
          type && olt[`Snackbar${pascalize(type)}`],
          open && olt.isOpen,
          className,
        )}
        {...rest}
      >
        {children}
      </div>
    );
  }
}

export { Snackbar };
