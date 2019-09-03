import React from 'react';
import { string, node } from 'prop-types';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';

export const V2Grid = ({ children, className, ...props }) => (
  <div className={classnames(olt.V2Grid, className)} {...props}>
    {children}
  </div>
);

V2Grid.propTypes = {
  /**
   * Forward an additional className to the underlying component.
   */
  className: string,
  /**
   * An arbitrary number of `V2GridItem` elements.
   */
  children: node,
};

V2Grid.defaultProps = {
  className: null,
  children: null,
};
