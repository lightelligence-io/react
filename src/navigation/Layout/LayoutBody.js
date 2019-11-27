import { node, string } from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';

/**
 * The LayoutBody is used in the [Layout Component](#/Navigation/Layout) as
 * the container of your body.
 *
 * It includes as well an Overlay, which is used to "blur" the content whenever
 * a [SecondarySidebar](#/Navigation/SecondarySidebar) is active.
 *
 * The LayoutBody passes all props to the container of the content, which is
 * using the semantic `main` HTML element.
 *
 * The LayoutBody also has predefine paddings, according to the Layout's
 * [Header](#/Navigation/Layout) and [Sidebar](#/Navigation/Sidebar).
 */
export const LayoutBody = ({ className, children, ...props }) => (
  <>
    <div className={classnames(olt.LayoutOverlay)} />
    <main {...props} className={classnames(olt.LayoutBody, className)}>
      {children}
    </main>
  </>
);

LayoutBody.propTypes = {
  /**
   * Forward an additional className to the underlying element
   */
  className: string,
  /**
   * Body of the layout is the main content of your application
   */
  children: node,
};

LayoutBody.defaultProps = {
  className: null,
  children: null,
};
