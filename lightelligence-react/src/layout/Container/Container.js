import React from 'react';
import classnames from 'classnames';

import { bool, string } from 'prop-types';

import { OLT_NAMESPACE } from '../../constants';

export const Container = ({ className, noPadding, ...props }) => (
  <div
    {...props}
    className={classnames(
      `${OLT_NAMESPACE}Container`,
      noPadding && `${OLT_NAMESPACE}Container--noPadding`,
      className,
    )}
  />
);

Container.propTypes = {
  className: string,
  noPadding: bool,
};
Container.defaultProps = {
  className: null,
  noPadding: false,
};
