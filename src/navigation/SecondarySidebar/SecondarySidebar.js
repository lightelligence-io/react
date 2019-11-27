import React from 'react';
import { func, node, string, bool, shape } from 'prop-types';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';
import { ActionButton } from '../../components/ActionButton';

/**
 * Secondary Sidebar is used when you want to render another sidebar next to
 * the main [Sidebar](#/Navigation/Sidebar) component.
 *
 * It is rendered as fixed positioned `aside` html element and passes the
 * corresponding `props` of the SecondarySidebar component.
 *
 * The Secondary Sidebar has an optional header that can be used, as well as
 * mobile navigation controls, which can be used to create interaction
 * when the user's device is a mobile screen.
 *
 * By default the sidebar doesn't have additional padding, so the children
 * can reach full width of the container.
 *
 * Whenever a secondary sidebar is opened, it will "blur" the body of the
 * Layout component by modifying the overlay.
 */
export const SecondarySidebar = ({
  className,
  children,
  onClickMobileBack,
  onClickMobileClose,
  header,
  open,
  hidden,
  backButtonProps,
  closeButtonProps,
  ...props
}) => (
  <aside
    {...props}
    className={classnames(
      olt.SidebarSecondary,
      open && 'is-open',
      hidden && 'is-hidden',
      className,
    )}
  >
    <div className={classnames(olt.SidebarSecondaryMobileMenu)}>
      <ActionButton
        {...backButtonProps}
        buttonType="default"
        iconLeft="chevron-left"
        standalone
        base
        onClick={onClickMobileBack}
      />
      <ActionButton
        {...closeButtonProps}
        buttonType="default"
        iconLeft="close"
        standalone
        base
        onClick={onClickMobileClose}
      />
    </div>
    {header && (
      <div className={classnames(olt.SidebarSecondaryHeader)}>{header}</div>
    )}
    {children}
  </aside>
);

SecondarySidebar.propTypes = {
  /**
   * Forward an additional className to the underlying element
   */
  className: string,
  /**
   * The body of the sidebar. It can be any additional content.
   */
  children: node,
  /**
   * On clicking the back button for mobile navigation
   */
  onClickMobileBack: func,
  /**
   * On clicking the close button for mobile navigation
   */
  onClickMobileClose: func,
  /**
   * Optional header of the sidebar that is rendered at the top
   */
  header: node,
  /**
   * Controls if the secondary sidebar should be visible
   */
  open: bool,
  /**
   * Controls if the secondary sidebar should be hidden on mobile devices.
   * On mobile screen the sidebar is rendered when the user clicks on the
   * Header's mobile menu button. However since the Sidebar takes the whole
   * screen, whenever a SecondarySidebar is showed it will hide the main
   * Sidebar. In order to go back to the main Sidebar the user clicks the
   * SecondarySidebar's Back button ( Check `onClickMobileBack` in this
   * component ).
   *
   * This `hidden` prop allows the developer to hide the secondary sidebar even
   * though is considered "open"
   */
  hidden: bool,
  /**
   * Props passed to the mobile back action button
   */
  backButtonProps: shape({}),
  /**
   * Props passed to the mobile close action button
   */
  closeButtonProps: shape({}),
};

SecondarySidebar.defaultProps = {
  children: null,
  className: null,
  onClickMobileBack: null,
  onClickMobileClose: null,
  header: null,
  open: false,
  hidden: false,
  backButtonProps: null,
  closeButtonProps: null,
};
