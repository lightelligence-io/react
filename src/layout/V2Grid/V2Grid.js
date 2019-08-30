import React, { PureComponent } from 'react';
import { string, node } from 'prop-types';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';

class V2Grid extends PureComponent {
  static propTypes = {
    className: string,
    children: node,
  };

  static defaultProps = {
    className: null,
    children: null,
  };

  render() {
    const { children, className, ...props } = this.props;

    return (
      <div className={classnames(olt.V2Grid, className)} {...props}>
        {children}
      </div>
    );
  }
}

export { V2Grid };
