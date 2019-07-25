import React from 'react';
import * as olt from '@lightelligence/styles';
import { node, string, oneOf, bool } from 'prop-types';
import classnames from 'classnames';

export const FloatingList = ({
  justifyEnd,
  gap,
  children,
  className,
  ...other
}) => {
  const classes = classnames(
    olt.FloatingList,
    typeof gap === 'number' && `${olt.FloatingList}--gap${gap}`,
    justifyEnd && olt.FloatingListJustifyEnd,
    className,
  );

  return (
    <div className={classes} {...other}>
      <div className={olt.FloatingListItems}>{children}</div>
    </div>
  );
};

FloatingList.propTypes = {
  children: node.isRequired,
  className: string,
  justifyEnd: bool,
  gap: oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8]),
};

FloatingList.defaultProps = {
  className: undefined,
  justifyEnd: false,
  gap: undefined,
};
