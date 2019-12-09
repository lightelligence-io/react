import React from 'react';
import * as olt from '@lightelligence/styles';
import { string, node } from 'prop-types';
import classnames from 'classnames';

export const BasicCardTableCard = ({ children, className, ...other }) => {
  return (
    <div className={classnames(olt.CardTableCard, className)} {...other}>
      {children}
    </div>
  );
};

BasicCardTableCard.propTypes = {
  children: node,
  className: string,
};

BasicCardTableCard.defaultProps = {
  children: undefined,
  className: undefined,
};
