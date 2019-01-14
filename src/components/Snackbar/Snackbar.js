import React, { PureComponent } from 'react';
import { bool, node, string, oneOf } from 'prop-types';
import classnames from 'classnames';

import { OLT_NAMESPACE } from '../../constants';
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
    const base = `${OLT_NAMESPACE}Snackbar`;

    return (
      <div
        className={classnames(
          base,
          type && `${base}--${type}`,
          open && 'is-open',
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
