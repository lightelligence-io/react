import React from 'react';
import PropTypes from 'prop-types';

export const PathlineRenderer = ({ children }) => (
  <div className="pathline">{children}</div>
);

PathlineRenderer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PathlineRenderer; // eslint-disable-line
