import React from 'react';
import * as olt from '@lightelligence/styles';
import { string, node } from 'prop-types';
import classnames from 'classnames';

export const BasicDataCardsCard = ({ children, className, ...other }) => {
  return (
    <div className={classnames(olt.DataCardsCard, className)} {...other}>
      {children}
    </div>
  );
};

BasicDataCardsCard.propTypes = {
  children: node,
  className: string,
};

BasicDataCardsCard.defaultProps = {
  children: undefined,
  className: undefined,
};
