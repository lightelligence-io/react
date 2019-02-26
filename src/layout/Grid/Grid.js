import React, { PureComponent } from 'react';
import { string, bool, node } from 'prop-types';
import classnames from 'classnames';
import * as olt from '@lightelligence/lightelligence-ui';

class Grid extends PureComponent {
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
      olt.Grid,
      noPadding && olt.GridNoPadding, // NOTE: What about --gutterless?
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

export { Grid };
