import React from 'react';
import { node, string } from 'prop-types';
import classnames from 'classnames';

import { OLT_NAMESPACE } from '../../constants';

const ListItem = React.memo(({ children, className, term, ...props }) => {
  const base = `${OLT_NAMESPACE}List`;

  return (
    <>
      {term && (
        <li {...props} className={classnames(`${base}-term`, className)}>
          {term}
        </li>
      )}
      <li {...props} className={classnames(`${base}-item`, className)}>
        {children}
      </li>
    </>
  );
});

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
