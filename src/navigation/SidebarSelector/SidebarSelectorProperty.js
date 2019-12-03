import { bool, func, string } from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';

/**
 * Sidebar Property selector is a selector component that is used in the
 * Sidebar to select a property
 *
 * You can wire this to a [SecondarySidebar](#/Navigation/SecondarySidebar)
 * component. Please check [RootContainer](#/Layout/RootContainer) for
 * implementation details.
 */
export const SidebarSelectorProperty = ({
  title,
  location,
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
      className,
      active && 'is-active',
    )}
  >
    <div className={classnames(olt.SidebarSelectorPropertyTitle)}>{title}</div>
    <div className={classnames(olt.SidebarSelectorPropertyValue)}>
      {location}
    </div>
  </button>
);

SidebarSelectorProperty.propTypes = {
  /**
   * Forward an additional className to the underlying element
   */
  className: string,
  /**
   * The property name
   */
  title: string.isRequired,
  /**
   * The location
   */
  location: string.isRequired,
  /**
   * On click handler
   */
  onClick: func.isRequired,
  /**
   * Is the selector active
   */
  active: bool,
};

SidebarSelectorProperty.defaultProps = {
  className: null,
  active: false,
};
