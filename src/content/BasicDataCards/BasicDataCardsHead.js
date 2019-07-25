import React from 'react';
import * as olt from '@lightelligence/styles';
import { string, node } from 'prop-types';
import classnames from 'classnames';

export const BasicDataCardsHead = ({ children, className, ...other }) => {
  return (
    <div className={classnames(olt.DataCardsHead, className)} {...other}>
      {children}
    </div>
  );
};

BasicDataCardsHead.propTypes = {
  /**
   * `children` expects an arbirary number of `BasicDataCardsHeadItem` components.
   */
  children: node,
  /**
   * Forward an additional className to the underlying component.
   */
  className: string,
};

BasicDataCardsHead.defaultProps = {
  children: undefined,
  className: undefined,
};
