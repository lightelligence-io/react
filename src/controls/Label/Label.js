import React, { PureComponent } from 'react';
import { string, node, shape } from 'prop-types';
import classnames from 'classnames';
import * as olt from '@lightelligence/lightelligence-ui';

export class Label extends PureComponent {
  static propTypes = {
    className: string,
    children: node,
    style: shape({}),
  };

  static defaultProps = {
    className: null,
    children: null,
    style: undefined,
  };

  render() {
    const { className, children, style, ...props } = this.props;

    return (
      <label
        style={{ ...style, display: 'block' }}
        className={classnames(olt.Label, className)}
        {...props}
      >
        {children}
      </label>
    );
  }
}
