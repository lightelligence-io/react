import React from 'react';
import { node, bool, string, oneOf } from 'prop-types';
import classnames from 'classnames';
import { pascalize } from 'humps';
import * as olt from '@lightelligence/styles';

export const List = ({
  children,
  className,
  ordered,
  definition,
  vertical,
  ...props
}) => {
  return (
    <ul
      {...props}
      className={classnames(
        olt.List,
        ordered && olt.ListOrdered,
        definition && olt.ListDefinition,
        vertical && olt[`List${pascalize(vertical)}Vertical`],
        className,
      )}
    >
      {children}
    </ul>
  );
};

List.propTypes = {
  children: node,
  className: string,
  ordered: bool,
  definition: bool,
  vertical: oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
};

List.defaultProps = {
  children: null,
  className: null,
  ordered: false,
  definition: false,
  vertical: null,
};
