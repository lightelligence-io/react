import React from 'react';
import { node, string } from 'prop-types';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';

const ListItem = ({ children, className, term, ...props }) => {
  return (
    <>
      {term && (
        <li {...props} className={classnames(olt.ListTerm, className)}>
          {term}
        </li>
      )}
      <li {...props} className={classnames(olt.ListItem, className)}>
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
