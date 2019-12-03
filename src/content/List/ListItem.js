import React from 'react';
import { node, string } from 'prop-types';
import classnames from 'classnames';

const ListItem = ({ children, className, term, ...props }) => {
  return (
    <>
      {term && (
        <li {...props} className={classnames(`olt-List-term`, className)}>
          {term}
        </li>
      )}
      <li {...props} className={classnames(`olt-List-item`, className)}>
        {children}
      </li>
    </>
  );
};

ListItem.propTypes = {
  children: node,
  className: string,
  term: string,
};

ListItem.defaultProps = {
  children: null,
  className: null,
  term: null,
};

export { ListItem };
