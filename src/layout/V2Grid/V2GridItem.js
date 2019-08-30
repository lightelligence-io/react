import React, { PureComponent } from 'react';
import { node, number, string, shape, oneOfType } from 'prop-types';
import classnames from 'classnames';
import { pascalize } from 'humps';
import * as olt from '@lightelligence/styles';

const isFirstBreakpoint = (breakpoint) => breakpoint === 'xs';

class V2GridItem extends PureComponent {
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

    const classes = [olt.V2GridItem];

    // NOTE: This is using new props-API:
    // TODO: Make it a single line!
    if (typeof size === 'object') {
      for (const [breakpoint, value] of Object.entries(size)) {
        const infix = isFirstBreakpoint(breakpoint) ? '' : `${breakpoint}-`;
        classes.push(olt[`V2GridItem${pascalize(infix + value)}`]);
      }
    } else if (size) {
      classes.push(olt[`V2GridItem${pascalize(String(size))}`]);
    }

    if (typeof offset === 'object') {
      for (const [breakpoint, value] of Object.entries(offset)) {
        const infix = isFirstBreakpoint(breakpoint) ? '' : `${breakpoint}-`;
        classes.push(
          olt[`V2GridItem${pascalize(infix)}Offset${pascalize(String(value))}`],
        );
      }
    } else if (offset) {
      classes.push(olt[`V2GridItemOffset${pascalize(String(offset))}`]);
    }

    return (
      <div className={classnames(...classes, className)} {...props}>
        {children}
      </div>
    );
  }
}

export { V2GridItem };
