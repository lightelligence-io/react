import React from 'react';
import PropTypes from 'prop-types';

export const CodeRenderer = ({ children }) => (
  <code className="code">{children}</code>
);

CodeRenderer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CodeRenderer; // eslint-disable-line
