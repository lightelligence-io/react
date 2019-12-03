import React from 'react';
import { func, node, string, shape } from 'prop-types';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';
import { ActionButton } from '../../components/ActionButton';

/**
 * The Header of your application.
 *
 * It consist of
 *
 * - Logo container, used for placing an image with your logo
 * - Left container, usually used with an Action Button rendered on the left
 * - Right container, usually used with an Action Button rendered on the right
 * - Content, which is rendered in the middle of the header
 * - Mobile menu button, which is visible only on mobile devices
 *
 * The Header should be used in conjunction with
 * [RootContainer](#/Layout/RootContainer) component.
 *
 * The Header component uses the semantic `header` HTML tag and passes all
 * props to the `header` React Element.
 *
 * The Header by default also implements Action Button's proximity area, so
 * whenever the user hovers on the header the action buttons are highlighted.
 */
export const Header = ({
  className,
  children,
  logo,
  left,
  right,
  onClickMobileMenu,
  menuButtonProps,
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
        {...menuButtonProps}
        iconLeft="menu"
        buttonType="default"
        standalone
        base
        onClick={onClickMobileMenu}
      />
    </div>
  </header>
);

Header.propTypes = {
  /**
   * The body of the navigation. You can use any type of children there,
   * however, most useful navigation component for this part of your
   * header are [Tabs](#/Components/Tabs).
   *
   * The body of the header is positioned in the center.
   */
  children: node,
  /**
   * Forward an additional className to the underlying element
   */
  className: string,
  /**
   * Logo container is rendered on the far left side of the Header. It is a
   * placeholder for your logo. Best used with `img` element.
   */
  logo: node,
  /**
   * Left container is rendered on the left side of the Header, next to the
   * Logo. It is usually filled with [ActionButton](#/Components/ActionButton).
   * Useful for adding a Back button there giving the user a way to return to
   * the previous navigation hierarchy.
   */
  left: node,
  /**
   * Right container is rendered on the far right side of the Header. Can be
   * any element, like an [ActionButton](#/Components/ActionButton), giving
   * a way to the user for quickly logging out.
   */
  right: node,
  /**
   * On clicking the menu button for mobile. The menu button is visible only
   * on mobile and you can wire it to display the
   * [Sidebar](#/Navigation/Sidebar).
   */
  onClickMobileMenu: func,
  /**
   * Props passed to the mobile menu action button
   */
  menuButtonProps: shape({}),
};

Header.defaultProps = {
  children: null,
  className: null,
  logo: null,
  left: null,
  right: null,
  onClickMobileMenu: null,
  menuButtonProps: null,
};
