import { string } from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';

/**
 * Sidebar separator
 */
export const SidebarSeparator = ({ className, ...props }) => (
  <hr {...props} className={classnames(olt.SidebarSeparator, className)} />
);

SidebarSeparator.propTypes = {
  /**
   * Forward an additional className to the underlying element
   */
  className: string,
};

SidebarSeparator.defaultProps = {
  className: null,
};
