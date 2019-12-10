import classnames from 'classnames';
import { pascalize } from 'humps';
import { string, node } from 'prop-types';
import React from 'react';
import * as olt from '@lightelligence/styles';
import { matchPath } from 'react-router-dom';
import { Link } from '../../content/Link';

/**
 * Navigation item for the [SidebarNavigation](#/Navigation/SidebarNavigation)
 * Component.
 *
 * The component also passes all other `props` to the underlying
 * [Link](#/Content/Link) component.
 *
 * It always displays an icon on the left side of the navigation item.
 *
 * If children are provided the navigation item renders additional `nav`
 * HTML element that consists of
 * [SidebarSubNavigationItem](#/Navigation/SidebarSubNavigationItem). Whenever
 * the navigation item is active, it will also display the sub navigation.
 *
 * @example ./SidebarNavigation.md
 */
export const SidebarNavigationItem = ({
  className,
  to,
  title,
  icon,
  children,
  ...props
}) => {
  const match = matchPath(to, {
    path: '/',
    exact: false,
  });
  return (
    <>
      <Link
        {...{ ...props, ...(match ? { activeClassName: 'is-active' } : {}) }}
        to={to}
        normal
        className={classnames(
          olt.SidebarNavigationItem,
          icon && olt[`Icon${pascalize(icon)}`],
          className,
        )}
      >
        {title}
      </Link>
      {children && (
        <nav className={classnames(olt.SidebarSubnavigation)}>{children}</nav>
      )}
    </>
  );
};

SidebarNavigationItem.propTypes = {
  /**
   * Forward an additional className to the underlying element
   */
  className: string,
  /**
   * The title of the item
   */
  title: string.isRequired,
  /**
   * Where will this navigation item point to
   */
  to: string.isRequired,
  /**
   * The icon to display
   */
  icon: string.isRequired,
  /**
   * Sub navigation items
   *
   * Content of the element should always be consisted of
   * [SidebarSubNavigationItem](/#/Navigation/SidebarSubNavigationItem)
   * components.
   */
  children: node,
};

SidebarNavigationItem.defaultProps = {
  className: null,
  children: null,
};
