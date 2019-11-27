import { string } from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';

/**
 * Sidebar separator is used to separate content inside the
 * [Sidebar](#/Navigation/Sidebar)'s body.
 *
 * It implements the semantic `hr` element and passes all `props` to the
 * underlying React element.
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
