import React from 'react';
import PropTypes from 'prop-types';

const ParaRenderer = ({ semantic, children }) => {
  const Tag = semantic || 'div';
  return <Tag className="paragraph">{children}</Tag>;
};

ParaRenderer.propTypes = {
  semantic: PropTypes.oneOf(['p']),
  children: PropTypes.node.isRequired,
};

ParaRenderer.defaultProps = {
  semantic: null,
};

export default ParaRenderer; // eslint-disable-line
