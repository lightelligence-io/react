import React from 'react';
import * as olt from '@lightelligence/styles';
import { node, string, oneOf } from 'prop-types';
import classnames from 'classnames';

export const BasicCardTableHeadItem = ({
  children,
  className,
  verticalAlign,
  align,
  ...other
}) => {
  const classes = classnames(
    olt.CardTableHeadItem,
    verticalAlign === 'top' && olt.CardTableVerticalAlignTop,
    verticalAlign === 'bottom' && olt.CardTableVerticalAlignBottom,
    align === 'center' && olt.CardTableAlignCenter,
    align === 'right' && olt.CardTableAlignRight,
    className,
  );

  return (
    <div className={classes} {...other}>
      {children}
    </div>
  );
};

BasicCardTableHeadItem.propTypes = {
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

BasicCardTableHeadItem.defaultProps = {
  className: undefined,
  verticalAlign: 'center',
  align: 'left',
};
