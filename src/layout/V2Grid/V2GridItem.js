import React from 'react';
import { node, string, oneOf } from 'prop-types';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';

export const V2GridItem = ({
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
        olt.V2GridItem,
        xs && (xs === 'auto' ? olt.V2GridItemAuto : olt[`V2GridItem${xs}`]),
        sm && (sm === 'auto' ? olt.V2GridItemSmAuto : olt[`V2GridItemSm${sm}`]),
        md && (md === 'auto' ? olt.V2GridItemMdAuto : olt[`V2GridItemMd${md}`]),
        lg && (lg === 'auto' ? olt.V2GridItemLgAuto : olt[`V2GridItemLg${lg}`]),
        xl && (xl === 'auto' ? olt.V2GridItemXlAuto : olt[`V2GridItemXl${xl}`]),
        offsetXs && olt[`V2GridItemOffset${offsetXs}`],
        offsetSm && olt[`V2GridItemSmOffset${offsetSm}`],
        offsetMd && olt[`V2GridItemMdOffset${offsetMd}`],
        offsetLg && olt[`V2GridItemLgOffset${offsetLg}`],
        offsetXl && olt[`V2GridItemXlOffset${offsetXl}`],
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

V2GridItem.propTypes = {
  /**
   * The content of this item.
   */
  children: node,
  /**
   * Forward an additional className to the underlying component.
   */
  className: string,

  xs: sizeProp,
  sm: sizeProp,
  md: sizeProp,
  lg: sizeProp,
  xl: sizeProp,
  offsetXs: offsetProp,
  offsetSm: offsetProp,
  offsetMd: offsetProp,
  offsetLg: offsetProp,
  offsetXl: offsetProp,
};

V2GridItem.defaultProps = {
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
