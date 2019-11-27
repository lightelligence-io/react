import { pascalize } from 'humps';
import { string } from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';

/**
 * Sidebar selector filter item is used in the sidebar filter selector to show
 * the active filters
 *
 * @example ./SidebarSelectorFilter.md
 */
export const SidebarSelectorFilterItem = ({
  icon,
  name,
  className,
  ...props
}) => (
  <div
    {...props}
    className={classnames(
      olt.SidebarSelectorFilterFiltersFilter,
      icon && olt[`Icon${pascalize(icon)}`],
      className,
    )}
  >
    {name}
  </div>
);

SidebarSelectorFilterItem.propTypes = {
  /**
   * Forward an additional className to the underlying element
   */
  className: string,
  /**
   * The name of the filter
   */
  name: string.isRequired,
  /**
   * The icon to display
   */
  icon: string.isRequired,
};

SidebarSelectorFilterItem.defaultProps = {
  className: null,
};
