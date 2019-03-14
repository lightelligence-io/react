import React from 'react';
import classnames from 'classnames';
import { bool, string } from 'prop-types';
import * as olt from '@lightelligence/styles';

export const Container = ({ className, noPadding, ...props }) => (
  <div
    {...props}
    className={classnames(
      olt.Container,
      noPadding && olt.ContainerNoPadding,
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
