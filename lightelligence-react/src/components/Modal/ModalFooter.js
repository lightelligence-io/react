import React, { PureComponent } from 'react';
import { string, node } from 'prop-types';
import classnames from 'classnames';

import { OLT_NAMESPACE } from '../../constants';

export class ModalFooter extends PureComponent {
  static propTypes = {
    children: node,
    className: string,
  };

  static defaultProps = {
    children: null,
    className: null,
  };

  render() {
    const { children, className, ...props } = this.props;

    return (
      <div
        className={classnames(`${OLT_NAMESPACE}Modal-footer`, className)}
        {...props}
      >
        {children}
      </div>
    );
  }
}
