import React from 'react';
import { string, bool, node } from 'prop-types';
import { NavLink, matchPath } from 'react-router-dom';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';

/**
 * Combines router navigation with standard link, seasoned with some spicy color schemes
 */
const Link = ({ to, children, className, normal, ...props }) => {
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
        className: classnames(!normal && olt.Link, className),
      }}
    >
      {children}
    </Element>
  );
};

Link.propTypes = {
  to: string.isRequired,
  normal: bool,
  children: node,
  className: string,
};

Link.defaultProps = {
  normal: false,
  className: null,
  children: null,
};

export { Link };
