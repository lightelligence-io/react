import { bool, func, node, string } from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';

/**
 * Sidebar selector is a selector component that is used in the Sidebar to
 * show a filter button.
 *
 * You can wire this to a [SecondarySidebar](#/Navigation/SecondarySidebar)
 * component. Please check [RootContainer](#/Layout/RootContainer) for
 * implementation details.
 */
export const SidebarSelectorFilter = ({
  title,
  children,
  className,
  onClick,
  active,
  ...props
}) => (
  <button
    {...props}
    type="button"
    onClick={onClick}
    className={classnames(
      olt.SidebarSelector,
      olt.SidebarSelectorFilter,
      active && 'is-active',
      className,
    )}
  >
    <div className={classnames(olt.SidebarSelectorFilterTitle)}>{title}</div>
    <div className={classnames(olt.SidebarSelectorFilterFilters)}>
      {children}
    </div>
  </button>
);

SidebarSelectorFilter.propTypes = {
  /**
   * Forward an additional className to the underlying element
   */
  className: string,
  /**
   * Filters for the filter are rendered as a list with icons. The children
   * must be of
   * [SidebarSelectorFilterItem](#/Navigation/SidebarSelectorFilterItem) type.
   */
  children: node.isRequired,
  /**
   * The title of this component
   */
  title: string,
  /**
   * On click handler
   */
  onClick: func.isRequired,
  /**
   * Is the selector active
   */
  active: bool,
};

SidebarSelectorFilter.defaultProps = {
  className: null,
  title: 'Filter',
  active: false,
};
