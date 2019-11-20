import React from 'react';
import * as olt from '@lightelligence/styles';
import { node, string } from 'prop-types';
import classnames from 'classnames';

export const BasicCardTableTitle = ({ children, className, ...other }) => {
  return (
    <div className={classnames(olt.CardTableTitle, className)} {...other}>
      {children}
    </div>
  );
};

BasicCardTableTitle.propTypes = {
  /**
   * An arbitrary node which is rendered as the title.
   */
  children: node,
  /**
   * Forward an additional className to the underlying component.
   */
  className: string,
};

BasicCardTableTitle.defaultProps = {
  children: undefined,
  className: undefined,
};
