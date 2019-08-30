import React from 'react';
import PropTypes from 'prop-types';
import Logo from 'rsg-components/Logo'; // eslint-disable-line
import './styles.css';

const StyleGuideRenderer = ({ toc, version, children, title }) => (
  <div className="wrapper">
    <div className="sidebar">
      <Logo version={version}>{title}</Logo>
      {toc}
    </div>
    <div className="content">
      <div className="content--wrapper">{children}</div>
    </div>
  </div>
);

StyleGuideRenderer.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  version: PropTypes.string.isRequired,
  toc: PropTypes.node.isRequired,
};

// eslint-disable-next-line
export default StyleGuideRenderer;
