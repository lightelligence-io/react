import React from 'react';
import { func, node, string, bool } from 'prop-types';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';
import { ActionButton } from '../../components/ActionButton';

export const SecondarySidebar = ({
  className,
  children,
  onClickMobileBack,
  onClickMobileClose,
  header,
  open,
  hidden,
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
        buttonType="default"
        iconLeft="chevron-left"
        standalone
        base
        onClick={onClickMobileBack}
      />
      <ActionButton
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
   * The body of the sidebar
   */
  children: node,
  /**
   * Forward an additional className to the underlying element
   */
  className: string,
  /**
   * On clicking the back button for mobile
   */
  onClickMobileBack: func,
  /**
   * On clicking the close button for mobile
   */
  onClickMobileClose: func,
  /**
   * Header of the sidebar
   */
  header: node,
  /**
   * Is the secondary sidebar open
   */
  open: bool,
  /**
   * Is the secondary sidebar hidden on a mobile screen
   */
  hidden: bool,
};

SecondarySidebar.defaultProps = {
  children: null,
  className: null,
  onClickMobileBack: null,
  onClickMobileClose: null,
  header: null,
  open: false,
  hidden: false,
};
