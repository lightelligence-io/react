import React from 'react';
import classnames from 'classnames';
import { bool, string } from 'prop-types';
import * as olt from '@lightelligence/styles';

export const Container = ({ className, noPadding, fluid, ...props }) => (
  <div
    {...props}
    className={classnames(
      olt.Container,
      noPadding && olt.ContainerNoPadding,
      fluid && olt.ContainerFluid,
      className,
    )}
  />
);

Container.propTypes = {
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
Container.defaultProps = {
  className: null,
  noPadding: false,
  fluid: false,
};
