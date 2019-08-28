import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const HeadingRenderer = ({ children, level, ...props }) => {
  const Tag = `h${level}`;
  return (
    <Tag {...props} className={classnames('heading', `heading-${level}`)}>
      {children}
    </Tag>
  );
};

HeadingRenderer.propTypes = {
  children: PropTypes.node,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
};

HeadingRenderer.defaultProps = {
  children: null,
};

// eslint-disable-next-line
export default HeadingRenderer;
