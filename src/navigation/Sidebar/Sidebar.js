import React from 'react';
import { func, node, string, bool, shape } from 'prop-types';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';
import { ActionButton } from '../../components/ActionButton';

/**
 * The Sidebar component is used to render a sidebar on the left side of the user's
 * browser.
 *
 * It consists of body, which is rendered on the top side of the sidebar and
 * an additional `bottom` property which is rendered on the bottom side of the
 * sidebar.
 *
 * On mobile screens the sidebar also displays a close button, that can be used
 * to hide the sidebar when it's displayed over a mobile device.
 *
 * The `open` prop can control if the Sidebar is visible on mobile screens.
 */
export const Sidebar = ({
  className,
  children,
  onClickMobileClose,
  bottom,
  open,
  closeButtonProps,
  ...props
}) => (
  <aside
    {...props}
    className={classnames(olt.Sidebar, open && 'is-open', className)}
  >
    <div>
      <div className={classnames(olt.SidebarMobileActions)}>
        <ActionButton
          {...closeButtonProps}
          buttonType="default"
          iconLeft="close"
          standalone
          base
          onClick={onClickMobileClose}
        />
      </div>
      {children}
    </div>
    <div>{bottom}</div>
  </aside>
);

Sidebar.propTypes = {
  /**
   * Forward an additional className to the underlying element
   */
  className: string,
  /**
   * The body of the sidebar. Perfect fit for
   * [SidebarNavigation](#/Navigation/SidebarNavigation) and
   * [SidebarSelectorFilter](#/Navigation/SidebarSelectorFilter).
   */
  children: node,
  /**
   * Bottom container. Usually used to render
   * [SidebarSelectorTenant](#/Navigation/SidebarSelectorTenant) and
   * [SidebarSelectorProperty](#/Navigation/SidebarSelectorProperty).
   */
  bottom: node,
  /**
   * On clicking the close button for mobile sidebar
   */
  onClickMobileClose: func,
  /**
   * Controls if the sidebar should be visible on mobile devices
   */
  open: bool,
  /**
   * Props passed to the mobile close action button
   */
  closeButtonProps: shape({}),
};

Sidebar.defaultProps = {
  children: null,
  className: null,
  bottom: null,
  onClickMobileClose: null,
  open: false,
  closeButtonProps: null,
};
