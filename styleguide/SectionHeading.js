import React from 'react';
import PropTypes from 'prop-types';
import Heading from 'rsg-components/Heading'; // eslint-disable-line

const SectionHeadingRenderer = ({ children, id, href, depth, deprecated }) => (
  <Heading level={Math.max(1, Math.min(6, depth - 1))} id={id}>
    <a href={href} className="heading--link">
      {children}
    </a>
  </Heading>
);

SectionHeadingRenderer.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  depth: PropTypes.number.isRequired,
  deprecated: PropTypes.bool,
};

SectionHeadingRenderer.defaultProps = {
  deprecated: false,
  children: null,
};

// eslint-disable-next-line
export default SectionHeadingRenderer;
