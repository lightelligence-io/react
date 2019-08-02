import React, { PureComponent } from 'react';
import { node, bool, string, oneOf } from 'prop-types';
import classnames from 'classnames';
import { pascalize } from 'humps';
import * as olt from '@lightelligence/styles';

export class List extends PureComponent {
  static propTypes = {
    children: node,
    className: string,
    ordered: bool,
    definition: bool,
    vertical: oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  };

  static defaultProps = {
    children: null,
    className: null,
    ordered: false,
    definition: false,
    vertical: null,
  };

  render() {
    const {
      children,
      className,
      ordered,
      definition,
      vertical,
      ...props
    } = this.props;

    const classes = [
      olt.List,
      ordered && olt.ListOrdered,
      definition && olt.ListDefinition,
      className,
    ];

    if (vertical) {
      classes.push(olt[`List${pascalize(vertical)}Vertical`]);
    }

    return (
      <ul {...props} className={classnames(classes)}>
        {children}
      </ul>
    );
  }
}
