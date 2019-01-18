import React, { PureComponent } from 'react';
import { string, bool, node } from 'prop-types';
import classnames from 'classnames';

import { OLT_NAMESPACE } from '../../constants';

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
      `${OLT_NAMESPACE}Grid`,
      noPadding && `${OLT_NAMESPACE}Grid--noPadding`, // NOTE: What about --gutterless?
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
