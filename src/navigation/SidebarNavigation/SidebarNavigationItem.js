import classnames from 'classnames';
import { pascalize } from 'humps';
import { string, oneOfType, shape, oneOf, arrayOf } from 'prop-types';
import React from 'react';
import * as olt from '@lightelligence/styles';
import { Link } from '../../content/Link';
import { SidebarSubNavigationItem } from './SidebarSubNavigationItem';

/**
 * Navigation item for the [SidebarNavigation](#/Navigation/SidebarNavigation)
 * Component.
 *
 * The component also passes all other `props` to the underlying `Link`
 * component
 */
export const SidebarNavigationItem = ({
  className,
  to,
  title,
  icon,
  children,
  ...props
}) => (
  <>
    <Link
      {...props}
      to={to}
      normal
      activeClassName="is-active"
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
  children: oneOfType([
    shape({ type: oneOf([SidebarSubNavigationItem]) }),
    arrayOf(shape({ type: oneOf([SidebarSubNavigationItem]) })),
  ]),
};

SidebarNavigationItem.defaultProps = {
  className: null,
  children: null,
};
