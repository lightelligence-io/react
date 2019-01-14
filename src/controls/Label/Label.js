import React, { PureComponent } from 'react';
import { string, node } from 'prop-types';
import classnames from 'classnames';

import { OLT_NAMESPACE } from '../../constants';

export class Label extends PureComponent {
  static propTypes = {
    className: string,
    children: node,
  };

  static defaultProps = {
    className: null,
    children: null,
  };

  render() {
    const { className, children, ...props } = this.props;

    return (
      <label
        style={{ display: 'block' }}
        className={classnames(`${OLT_NAMESPACE}Label`, className)}
        {...props}
      >
        {children}
      </label>
    );
  }
}
