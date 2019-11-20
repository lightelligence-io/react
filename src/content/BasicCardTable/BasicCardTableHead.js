import React from 'react';
import * as olt from '@lightelligence/styles';
import { string, node } from 'prop-types';
import classnames from 'classnames';

export const BasicCardTableHead = ({ children, className, ...other }) => {
  return (
    <div className={classnames(olt.CardTableHead, className)} {...other}>
      {children}
    </div>
  );
};

BasicCardTableHead.propTypes = {
  /**
   * `children` expects an arbirary number of `BasicCardTableHeadItem` components.
   */
  children: node,
  /**
   * Forward an additional className to the underlying component.
   */
  className: string,
};

BasicCardTableHead.defaultProps = {
  children: undefined,
  className: undefined,
};
