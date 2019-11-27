import React from 'react';
import classnames from 'classnames';
import { string } from 'prop-types';
import * as olt from '@lightelligence/styles';

export const Frame = ({ className, ...props }) => (
  <div {...props} className={classnames(olt.Frame, className)} />
);

Frame.propTypes = {
  className: string,
};

Frame.defaultProps = {
  className: null,
};

export default Frame; // eslint-disable-line import/no-default-export
