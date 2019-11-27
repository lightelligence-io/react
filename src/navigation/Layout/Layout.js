import { string, node } from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';

/**
 * Use the Layout component to build a layout of your application.
 *
 * It gives you a wrapper that will properly position :
 *
 * - [Header Component](#/Navigation/Header)
 * - [Sidebar Component](#/Navigation/Sidebar)
 * - [SecondarySidebar Component](#/Navigation/SecondarySidebar)
 * - [LayoutBody Component](#/Navigation/LayoutBody)
 *
 * The layout uses a `div` HTML tag and passes all props to it's corresponding
 * React Element.
 */
export const Layout = ({ className, children, ...props }) => (
  <div {...props} className={classnames(olt.Layout, className)}>
    {children}
  </div>
);

Layout.propTypes = {
  /**
   * Forward an additional className to the underlying element
   */
  className: string,
  /**
   * The body of the layout. To work correctly you must include
   * [Header](#/Navigation/Header), [Sidebar](#/Navigation/Sidebar) and
   * [LayoutBody](#/Navigation/LayoutBody)
   */
  children: node,
};

Layout.defaultProps = {
  className: null,
  children: null,
};
