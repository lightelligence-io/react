import React from 'react';
import classnames from 'classnames';
import { string } from 'prop-types';

import { OLT_NAMESPACE } from '../../constants';

export const Frame = ({ className, ...props }) => (
  <div {...props} className={classnames(`${OLT_NAMESPACE}Frame`, className)} />
);

Frame.propTypes = {
  className: string,
};

Frame.defaultProps = {
  className: null,
};

export default Frame; // eslint-disable-line import/no-default-export
