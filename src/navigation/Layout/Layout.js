import { string, node } from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';

/**
 * Layout is used to have a Layout in your application
 */
export const Layout = ({ className, children, ...props }) => (
  <div {...props} className={classnames(olt.Layout, className)}>
    {children}
  </div>
);

Layout.propTypes = {
  /**
   * Forward an additional className to the underlying element
   */
  className: string,
  /**
   * Body
   */
  children: node,
};

Layout.defaultProps = {
  className: null,
  children: null,
};
