import { oneOf, arrayOf, shape, oneOfType } from 'prop-types';
import React from 'react';
import { SidebarNavigationItem } from './SidebarNavigationItem';

/**
 * Sidebar navigation is the navigation for the middle of the sidebar. It is
 * consisted of `SidebarNavigationItem` and uses the semantic `nav` HTML
 * element.
 */
export const SidebarNavigation = ({ children, ...props }) => (
  <nav {...props}>{children}</nav>
);

SidebarNavigation.propTypes = {
  /**
   * Content of the element should always be consisted of
   * [SidebarNavigationItem](/#/Navigation/SidebarNavigationItem) components.
   */
  children: oneOfType([
    shape({ type: oneOf([SidebarNavigationItem]) }),
    arrayOf(shape({ type: oneOf([SidebarNavigationItem]) })),
  ]),
};

SidebarNavigation.defaultProps = {
  children: null,
};
