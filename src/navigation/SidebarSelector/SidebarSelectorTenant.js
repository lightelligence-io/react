import { bool, func, string } from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';

/**
 * Sidebar selector is a selector component that is used in the Sidebar to
 * show a tenant switch
 *
 * You can wire this to a [SecondarySidebar](#/Navigation/SecondarySidebar)
 * component. Please check [RootContainer](#/Layout/RootContainer) for
 * implementation details.
 */
export const SidebarSelectorTenant = ({
  onClick,
  active,
  tenant,
  className,
  ...props
}) => (
  <button
    {...props}
    type="button"
    onClick={onClick}
    className={classnames(
      olt.SidebarSelector,
      olt.SidebarSelectorTenant,
      className,
      active && 'is-active',
    )}
  >
    <div className={classnames(olt.SidebarSelectorTenantAvatar)}>
      {(tenant || '').substr(0, 1).toUpperCase()}
    </div>
    <div className={classnames(olt.SidebarSelectorTenantName)}>{tenant}</div>
  </button>
);

SidebarSelectorTenant.propTypes = {
  /**
   * Forward an additional className to the underlying element
   */
  className: string,
  /**
   * The tenant name
   */
  tenant: string.isRequired,
  /**
   * On click handler
   */
  onClick: func.isRequired,
  /**
   * Is the selector active
   */
  active: bool,
};

SidebarSelectorTenant.defaultProps = {
  className: null,
  active: false,
};
