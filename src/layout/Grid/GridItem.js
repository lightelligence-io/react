import React from 'react';
import { node, string, oneOf } from 'prop-types';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';

export const GridItem = ({
  className,
  children,
  xs,
  sm,
  md,
  lg,
  xl,
  offsetXs,
  offsetSm,
  offsetMd,
  offsetLg,
  offsetXl,
  ...props
}) => {
  return (
    <div
      className={classnames(
        olt.GridItem,
        xs && (xs === 'auto' ? olt.GridItemAuto : olt[`GridItem${xs}`]),
        sm && (sm === 'auto' ? olt.GridItemSmAuto : olt[`GridItemSm${sm}`]),
        md && (md === 'auto' ? olt.GridItemMdAuto : olt[`GridItemMd${md}`]),
        lg && (lg === 'auto' ? olt.GridItemLgAuto : olt[`GridItemLg${lg}`]),
        xl && (xl === 'auto' ? olt.GridItemXlAuto : olt[`GridItemXl${xl}`]),
        offsetXs && olt[`GridItemOffset${offsetXs}`],
        offsetSm && olt[`GridItemSmOffset${offsetSm}`],
        offsetMd && olt[`GridItemMdOffset${offsetMd}`],
        offsetLg && olt[`GridItemLgOffset${offsetLg}`],
        offsetXl && olt[`GridItemXlOffset${offsetXl}`],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const offsetProp = oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
const sizeProp = oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'auto']);

GridItem.propTypes = {
  /**
   * The content of this item.
   */
  children: node,
  /**
   * Forward an additional className to the underlying component.
   */
  className: string,
  /**
   * The number of colums this grid item occupies for `xs` breakpoint.
   */
  xs: sizeProp,
  /**
   * The number of colums this grid item occupies for `sm` breakpoint.
   */
  sm: sizeProp,
  /**
   * The number of colums this grid item occupies for `md` breakpoint.
   */
  md: sizeProp,
  /**
   * The number of colums this grid item occupies for `lg` breakpoint.
   */
  lg: sizeProp,
  /**
   * The number of colums this grid item occupies for `xl` breakpoint.
   */
  xl: sizeProp,
  /**
   * The offset of colums this grid item is moved to the right for `xs` breakpoint.
   */
  offsetXs: offsetProp,
  /**
   * The offset of colums this grid item is moved to the right for `sm` breakpoint.
   */
  offsetSm: offsetProp,
  /**
   * The offset of colums this grid item is moved to the right for `md` breakpoint.
   */
  offsetMd: offsetProp,
  /**
   * The offset of colums this grid item is moved to the right for `lg` breakpoint.
   */
  offsetLg: offsetProp,
  /**
   * The offset of colums this grid item is moved to the right for `xl` breakpoint.
   */
  offsetXl: offsetProp,
};

GridItem.defaultProps = {
  children: null,
  className: null,
  xs: 'auto',
  sm: undefined,
  md: undefined,
  lg: undefined,
  xl: undefined,
  offsetXs: undefined,
  offsetSm: undefined,
  offsetMd: undefined,
  offsetLg: undefined,
  offsetXl: undefined,
};
