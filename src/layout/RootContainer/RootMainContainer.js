import { node, string } from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';

/**
 * The RootMainContainer is used in the
 * [RootContainer Component](#/Layout/RootContainer) as the container of your
 * body.
 *
 * It includes an Overlay, which is used to "blur" the content whenever
 * a [SecondarySidebar](#/Navigation/SecondarySidebar) is active.
 *
 * The RootMainContainer passes all props to the container of the content,
 * which is using the semantic `main` HTML element.
 *
 * The RootMainContainer also has predefined padding, according to the
 * RootContainer's [Header](#/Navigation/Header) and
 * [Sidebar](#/Navigation/Sidebar).
 */
export const RootMainContainer = ({ className, children, ...props }) => (
  <>
    <div className={classnames(olt.LayoutOverlay)} />
    <main {...props} className={classnames(olt.LayoutBody, className)}>
      {children}
    </main>
  </>
);

RootMainContainer.propTypes = {
  /**
   * Forward an additional className to the underlying element
   */
  className: string,
  /**
   * Body of the layout is the main content of your application
   */
  children: node,
};

RootMainContainer.defaultProps = {
  className: null,
  children: null,
};
