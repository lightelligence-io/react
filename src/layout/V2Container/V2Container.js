import React from 'react';
import classnames from 'classnames';
import { bool, string } from 'prop-types';
import * as olt from '@lightelligence/styles';

export const V2Container = ({ className, noPadding, ...props }) => (
  <div
    {...props}
    className={classnames(
      olt.V2Container,
      noPadding && olt.V2ContainerNoPadding,
      className,
    )}
  />
);

V2Container.propTypes = {
  className: string,
  noPadding: bool,
};
V2Container.defaultProps = {
  className: null,
  noPadding: false,
};
