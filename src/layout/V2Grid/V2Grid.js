import React, { PureComponent } from 'react';
import { string, bool, node } from 'prop-types';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';

class V2Grid extends PureComponent {
  static propTypes = {
    noPadding: bool,
    className: string,
    children: node,
  };

  static defaultProps = {
    noPadding: false,
    className: null,
    children: null,
  };

  render() {
    const { noPadding, children, className, ...props } = this.props;

    const classes = classnames(
      olt.V2Grid,
      noPadding && olt.V2GridNoPadding, // NOTE: What about --gutterless?
      // ...or maybe better: Provide list of gutters like spacings and modifiers like `--gutter{0-4}`.
      className,
    );

    return (
      <div className={classes} {...props}>
        {children}
      </div>
    );
  }
}

export { V2Grid };
