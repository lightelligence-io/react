import React, { PureComponent } from 'react';
import { string, bool, node } from 'prop-types';
import { NavLink, matchPath } from 'react-router-dom';
import classnames from 'classnames';

import { OLT_NAMESPACE } from '../../constants';

/**
 * Combines router navigation with standard link, seasoned with some spicy color schemes
 */
export class Link extends PureComponent {
  static propTypes = {
    to: string.isRequired,
    normal: bool,
    children: node,
    className: string,
  };

  static defaultProps = {
    normal: false,
    className: null,
    children: null,
  };

  render() {
    const { to, children, className, normal, ...props } = this.props;
    // React routers matchPath will return a match object if the link matches an
    // internal link otherwise it returns null. Uses the "Route" logic to match.
    const match = matchPath(to, {
      path: '/',
      exact: false,
    });
    const Element = match ? NavLink : 'a';

    return (
      <Element
        {...{
          ...(match ? { to } : { href: to }),
          ...props,
          className: classnames(!normal && `${OLT_NAMESPACE}Link`, className),
        }}
      >
        {children}
      </Element>
    );
  }
}
