import React from 'react';
import * as olt from '@lightelligence/styles';
import { node, string, oneOf } from 'prop-types';
import classnames from 'classnames';

export const BasicDataCardsHeadItem = ({
  children,
  className,
  verticalAlign,
  align,
  ...other
}) => {
  const classes = classnames(
    olt.DataCardsHeadItem,
    verticalAlign === 'top' && olt.DataCardsVerticalAlignTop,
    verticalAlign === 'bottom' && olt.DataCardsVerticalAlignBottom,
    align === 'center' && olt.DataCardsAlignCenter,
    align === 'right' && olt.DataCardsAlignRight,
    className,
  );

  return (
    <div className={classes} {...other}>
      {children}
    </div>
  );
};

BasicDataCardsHeadItem.propTypes = {
  /**
   * An arbitrary node which is rendered as the table head.
   */
  children: node.isRequired,
  /**
   * Forward an additional className to the underlying component.
   */
  className: string,
  /**
   * Vertical alignment of item in table mode.
   */
  verticalAlign: oneOf(['bottom', 'top', 'center']),
  /**
   * Horizontal alignment of item in table mode.
   */
  align: oneOf(['left', 'right', 'center']),
};

BasicDataCardsHeadItem.defaultProps = {
  className: undefined,
  verticalAlign: 'center',
  align: 'left',
};
