import React from 'react';
import classnames from 'classnames';
import { string } from 'prop-types';

import { OLT_NAMESPACE } from '../../constants';

export const Paragraph = ({ className, ...props }) => (
  <p
    {...props}
    className={classnames(`${OLT_NAMESPACE}Paragraph`, className)}
  />
);

Paragraph.propTypes = {
  className: string,
};

Paragraph.defaultProps = {
  className: null,
};
