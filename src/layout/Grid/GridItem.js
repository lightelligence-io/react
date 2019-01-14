import React, { PureComponent } from 'react';
import { node, number, string, shape, oneOfType } from 'prop-types';
import classnames from 'classnames';

import { OLT_NAMESPACE } from '../../constants';

const isFirstBreakpoint = (breakpoint) => breakpoint === 'xs';

class GridItem extends PureComponent {
  static propTypes = {
    children: node,
    className: string,
    size: oneOfType([
      number,
      string,
      shape({}), // Provide breakpoints as object literal, e.g. `{ xs: 12, sm: 6, md: 4, lg: 3 }`
    ]),
    offset: oneOfType([
      number,
      string,
      shape({}), // Provide breakpoints as object literal, e.g. `{ xs: 0, sm: 2, md: 4, lg: 6 }`
    ]),
  };

  static defaultProps = {
    children: null,
    className: null,
    size: 'auto',
    offset: '',
  };

  render() {
    const { className, children, size, offset, ...props } = this.props;

    const classes = [`${OLT_NAMESPACE}Grid-item`];

    // NOTE: This is using new props-API:
    // TODO: Make it a single line!
    if (typeof size === 'object') {
      for (const [breakpoint, value] of Object.entries(size)) {
        const infix = isFirstBreakpoint(breakpoint) ? '' : `${breakpoint}-`;
        classes.push(`${OLT_NAMESPACE}Grid-item--${infix}${value}`);
      }
    } else if (size) {
      classes.push(`${OLT_NAMESPACE}Grid-item--${size}`);
    }

    if (typeof offset === 'object') {
      for (const [breakpoint, value] of Object.entries(offset)) {
        const infix = isFirstBreakpoint(breakpoint) ? '' : `${breakpoint}-`;
        classes.push(`${OLT_NAMESPACE}Grid-item--${infix}offset${value}`);
      }
    } else if (offset) {
      classes.push(`${OLT_NAMESPACE}Grid-item--offset${offset}`);
    }

    return (
      <div className={classnames(...classes, className)} {...props}>
        {children}
      </div>
    );
  }
}

export { GridItem };
