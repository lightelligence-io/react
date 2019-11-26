import classnames from 'classnames';
import { string } from 'prop-types';
import React from 'react';
import * as olt from '@lightelligence/styles';
import { Link } from '../../content/Link';

/**
 * Sub Navigation item for the
 * [SidebarNavigationItem](#/Navigation/SidebarNavigationItem) component.
 *
 * The component also passes all other `props` to the underlying `Link`
 * component
 */
export const SidebarSubNavigationItem = ({
  className,
  to,
  title,
  ...props
}) => (
  <Link
    {...props}
    to={to}
    normal
    activeClassName="is-active"
    className={classnames(olt.SidebarSubnavigationItem, className)}
  >
    {title}
  </Link>
);

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
