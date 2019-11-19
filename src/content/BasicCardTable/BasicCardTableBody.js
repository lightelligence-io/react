import React from 'react';
import * as olt from '@lightelligence/styles';
import { string, node } from 'prop-types';
import classnames from 'classnames';

export const BasicCardTableBody = ({ children, className, ...other }) => {
  return (
    <div className={classnames(olt.CardTableBody, className)} {...other}>
      {children}
    </div>
  );
};

BasicCardTableBody.propTypes = {
  /**
   * `children` expects an arbirary number of `BasicCardTableCard` components.
   */
  children: node,
  /**
   * Forward an additional className to the underlying component.
   */
  className: string,
};

BasicCardTableBody.defaultProps = {
  children: undefined,
  className: undefined,
};
