import React from 'react';
import * as olt from '@lightelligence/styles';
import { string, node } from 'prop-types';
import classnames from 'classnames';

export const BasicDataCardsBody = ({ children, className, ...other }) => {
  return (
    <div className={classnames(olt.DataCardsBody, className)} {...other}>
      {children}
    </div>
  );
};

BasicDataCardsBody.propTypes = {
  /**
   * `children` expects an arbirary number of `BasicDataCardsCard` components.
   */
  children: node,
  /**
   * Forward an additional className to the underlying component.
   */
  className: string,
};

BasicDataCardsBody.defaultProps = {
  children: undefined,
  className: undefined,
};
