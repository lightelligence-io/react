import React from 'react';
import { string, node } from 'prop-types';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';

export const Grid = ({ children, className, ...props }) => (
  <div className={classnames(olt.Grid, className)} {...props}>
    {children}
  </div>
);

Grid.propTypes = {
  /**
   * Forward an additional className to the underlying component.
   */
  className: string,
  /**
   * An arbitrary number of `GridItem` elements.
   */
  children: node,
};

Grid.defaultProps = {
  className: null,
  children: null,
};
