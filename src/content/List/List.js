import React, { PureComponent } from 'react';
import { node, bool, string } from 'prop-types';
import classnames from 'classnames';

import { OLT_NAMESPACE } from '../../constants';

export class List extends PureComponent {
  static propTypes = {
    children: node,
    className: string,
    ordered: bool,
    definition: bool,
  };

  static defaultProps = {
    children: null,
    className: string,
    ordered: false,
    definition: false,
  };

  render() {
    const { children, className, ordered, definition, ...props } = this.props;
    const base = `${OLT_NAMESPACE}List`;

    return (
      <ul
        {...props}
        className={classnames(
          base,
          ordered && `${base}--ordered`,
          definition && `${base}--definition`,
          className,
        )}
      >
        {children}
      </ul>
    );
  }
}
