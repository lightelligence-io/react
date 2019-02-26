import React, { PureComponent } from 'react';
import { node, bool, string } from 'prop-types';
import classnames from 'classnames';
import * as olt from '@lightelligence/lightelligence-ui';

export class List extends PureComponent {
  static propTypes = {
    children: node,
    className: string,
    ordered: bool,
    definition: bool,
  };

  static defaultProps = {
    children: null,
    className: null,
    ordered: false,
    definition: false,
  };

  render() {
    const { children, className, ordered, definition, ...props } = this.props;

    return (
      <ul
        {...props}
        className={classnames(
          olt.List,
          ordered && olt.ListOrdered,
          definition && olt.ListDefinition,
          className,
        )}
      >
        {children}
      </ul>
    );
  }
}
