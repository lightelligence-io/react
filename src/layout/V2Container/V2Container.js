import React from 'react';
import classnames from 'classnames';
import { bool, string } from 'prop-types';
import * as olt from '@lightelligence/styles';

export const V2Container = ({ className, noPadding, fluid, ...props }) => (
  <div
    {...props}
    className={classnames(
      olt.V2Container,
      noPadding && olt.V2ContainerNoPadding,
      fluid && olt.V2ContainerFluid,
      className,
    )}
  />
);

V2Container.propTypes = {
  /**
   * Forward an additional className to the underlying component.
   */
  className: string,
  /**
   * removes the default padding of a *Container*.
   */
  noPadding: bool,
  /**
   * With fluid the container will always occupy 100% of the screen width.
   */
  fluid: bool,
};
V2Container.defaultProps = {
  className: null,
  noPadding: false,
  fluid: false,
};
