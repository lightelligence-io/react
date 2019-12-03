import React from 'react';
import { string, bool, node } from 'prop-types';
import { pascalize } from 'humps';
import { NavLink, matchPath } from 'react-router-dom';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';

/**
 * Combines router navigation with standard link, seasoned with some spicy color schemes
 */
const Link = ({ to, children, className, normal, color, ...props }) => {
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
        className: classnames(
          !normal && olt.Link,
          color && olt[`uColor${pascalize(color)}`],
          className,
        ),
      }}
    >
      {children}
    </Element>
  );
};

Link.propTypes = {
  to: string.isRequired,
  normal: bool,
  color: string,
  children: node,
  className: string,
};

Link.defaultProps = {
  normal: false,
  color: null,
  className: null,
  children: null,
};

export { Link };
