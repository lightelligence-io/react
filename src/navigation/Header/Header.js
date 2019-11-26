import React from 'react';
import { func, node, string } from 'prop-types';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';
import { ActionButton } from '../../components/ActionButton';

export const Header = ({
  className,
  children,
  logo,
  left,
  right,
  onClickMobileClose,
  ...props
}) => (
  <header
    {...props}
    className={classnames(olt.Header, olt.ActionButtonProximityArea, className)}
  >
    <div>{logo}</div>
    <div className={classnames(olt.HeaderLeftContainer)}>{left}</div>
    <div className={classnames(olt.HeaderBody)}>{children}</div>
    <div className={classnames(olt.HeaderRightContainer)}>{right}</div>
    <div className={classnames(olt.HeaderMobileMenu)}>
      <ActionButton
        iconLeft="menu"
        buttonType="default"
        standalone
        base
        onClick={onClickMobileClose}
      />
    </div>
  </header>
);

Header.propTypes = {
  /**
   * The body of the navigation. Use with Tabs
   */
  children: node,
  /**
   * Forward an additional className to the underlying element
   */
  className: string,
  /**
   * Logo container
   */
  logo: node,
  /**
   * Left container
   */
  left: node,
  /**
   * Right container
   */
  right: node,
  /**
   * On clicking the close button for mobile
   */
  onClickMobileClose: func,
};

Header.defaultProps = {
  children: null,
  className: null,
  logo: null,
  left: null,
  right: null,
  onClickMobileClose: null,
};
