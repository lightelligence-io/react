import classnames from 'classnames';
import { string } from 'prop-types';
import React from 'react';
import * as olt from '@lightelligence/styles';
import { matchPath } from 'react-router-dom';
import { Link } from '../../content/Link';

/**
 * Sub Navigation item for the
 * [SidebarNavigationItem](#/Navigation/SidebarNavigationItem) component.
 *
 * The component passes all other `props` to the underlying `Link`
 * component
 *
 * @example ./SidebarNavigation.md
 */
export const SidebarSubNavigationItem = ({
  className,
  to,
  title,
  ...props
}) => {
  const match = matchPath(to, {
    path: '/',
    exact: false,
  });
  return (
    <Link
      {...{ ...props, ...(match ? { activeClassName: 'is-active' } : {}) }}
      to={to}
      normal
      className={classnames(olt.SidebarSubnavigationItem, className)}
    >
      {title}
    </Link>
  );
};

SidebarSubNavigationItem.propTypes = {
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
};

SidebarSubNavigationItem.defaultProps = {
  className: null,
};
