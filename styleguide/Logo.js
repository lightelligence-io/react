import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo.png';

const LogoRenderer = ({ children, version }) => {
  return (
    <h1 className="logo">
      <img src={logo} alt="Lightelligence Logo" className="logo--image" />
      <div className="logo--title">
        <div className="logo--title--title">{children}</div>
        <div className="logo--title--version">v{version}</div>
      </div>
    </h1>
  );
};

LogoRenderer.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.node.isRequired,
};

// eslint-disable-next-line
export default LogoRenderer;
