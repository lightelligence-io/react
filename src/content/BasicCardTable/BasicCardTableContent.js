import React from 'react';
import * as olt from '@lightelligence/styles';
import { node, bool, string } from 'prop-types';
import classnames from 'classnames';

export const BasicCardTableContent = ({
  children,
  listOnly,
  tableOnly,
  className,
  ...other
}) => {
  const classes = classnames(
    olt.CardTableContent,
    listOnly && olt.CardTableListOnly,
    tableOnly && olt.CardTableTableOnly,
    className,
  );

  return (
    <div className={classes} {...other}>
      {children}
    </div>
  );
};

BasicCardTableContent.propTypes = {
  children: node.isRequired,
  /**
   * Content is only visible when Data Cards are rendered in list mode.
   */
  listOnly: bool,
  /**
   * Content is only visible when Data Cards are rendered in table mode.
   */
  tableOnly: bool,
  /**
   * Forward an additional className to the underlying component.
   */
  className: string,
};

BasicCardTableContent.defaultProps = {
  listOnly: false,
  tableOnly: false,
  className: undefined,
};
