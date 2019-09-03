import React from 'react';
import { node, number, string, shape, oneOfType } from 'prop-types';
import classnames from 'classnames';
import { pascalize } from 'humps';
import * as olt from '@lightelligence/styles';

const isFirstBreakpoint = (breakpoint) => breakpoint === 'xs';

export const V2GridItem = ({ className, children, size, offset, ...props }) => {
  const classes = [olt.V2GridItem];

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
};

V2GridItem.propTypes = {
  /**
   * The content of this item.
   */
  children: node,
  /**
   * Forward an additional className to the underlying component.
   */
  className: string,
  /**
   * Specifies the column size for this item. A total of 12 columns are
   * available for each row. Valid values are 1-12, "auto" or an object
   * definining the size for each breakpoint individually like `{ xs: 12, sm: 6, md: 4, lg: 3 }`.
   */
  size: oneOfType([number, string, shape({})]),
  /**
   * Specifies the column offset for this item. A total of 12 columns are
   * available for each row. Valid values are 1-12 or an object
   * definining the column offset for each breakpoint individually like `{ xs: 1, sm: 2, md: 3, lg: 4 }`.
   */
  offset: oneOfType([number, shape({})]),
};

V2GridItem.defaultProps = {
  children: null,
  className: null,
  size: 'auto',
  offset: undefined,
};
