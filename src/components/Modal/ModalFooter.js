import React, { PureComponent } from 'react';
import { string, node } from 'prop-types';
import classnames from 'classnames';
import * as olt from '@lightelligence/lightelligence-ui';

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
      <div className={classnames(olt.ModalFooter, className)} {...props}>
        {children}
      </div>
    );
  }
}
