import React from 'react';
import PropTypes from 'prop-types';

const TableOfContentsRenderer = ({
  children,
  searchTerm,
  onSearchTermChange,
}) => (
  <nav>
    <div className="toc--search">
      <input
        value={searchTerm}
        className="toc--search--input"
        placeholder="Filter by name"
        aria-label="Filter by name"
        onChange={(event) => onSearchTermChange(event.target.value)}
      />
    </div>
    {children}
    <span className="footer">Generated by React Styleguidist</span>
  </nav>
);

TableOfContentsRenderer.propTypes = {
  children: PropTypes.node.isRequired,
  searchTerm: PropTypes.string.isRequired,
  onSearchTermChange: PropTypes.func.isRequired,
};

// eslint-disable-next-line
export default TableOfContentsRenderer;
