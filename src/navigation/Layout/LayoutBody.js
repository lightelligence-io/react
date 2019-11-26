import { node, string } from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';

/**
 * Layout is used to have a Layout in your application
 */
export const LayoutBody = ({ className, children, ...props }) => (
  <>
    <div className={classnames(olt.LayoutOverlay)} />
    <div {...props} className={classnames(olt.LayoutBody, className)}>
      {children}
    </div>
  </>
);

LayoutBody.propTypes = {
  /**
   * Class name
   */
  className: string,
  /**
   * Body of the layout
   */
  children: node,
};

LayoutBody.defaultProps = {
  className: null,
  children: null,
};
