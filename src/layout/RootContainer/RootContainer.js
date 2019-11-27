import { string, node } from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';

/**
 * Use the RootContainer component to build a layout of your application.
 *
 * It gives you a wrapper that will properly position :
 *
 * - [Header Component](#/Navigation/Header)
 * - [Sidebar Component](#/Navigation/Sidebar)
 * - [SecondarySidebar Component](#/Navigation/SecondarySidebar)
 * - [RootMainContainer Component](#/Layout/RootMainContainer)
 */
export const RootContainer = ({ className, children, ...props }) => (
  <div {...props} className={classnames(olt.Frame, olt.Layout, className)}>
    {children}
  </div>
);

RootContainer.propTypes = {
  /**
   * Forward an additional className to the underlying element
   */
  className: string,
  /**
   * The body of the layout. To work correctly you must include
   * [Header](#/Navigation/Header), [Sidebar](#/Navigation/Sidebar) and
   * [RootMainContainer](#/Layout/RootMainContainer)
   */
  children: node,
};

RootContainer.defaultProps = {
  className: null,
  children: null,
};
