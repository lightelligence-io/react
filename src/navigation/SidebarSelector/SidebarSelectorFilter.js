import {
  bool,
  arrayOf,
  func,
  oneOf,
  oneOfType,
  shape,
  string,
} from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';
import { SidebarSelectorFilterItem } from './SidebarSelectorFilterItem';

/**
 * Sidebar selector is a selector component that is used in the Sidebar to
 * show a filter switch
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
   * Filters for the filter
   */
  children: oneOfType([
    shape({ type: oneOf([SidebarSelectorFilterItem]) }),
    arrayOf(shape({ type: oneOf([SidebarSelectorFilterItem]) })),
  ]).isRequired,
  /**
   * Forward an additional className to the underlying element
   */
  className: string,
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
