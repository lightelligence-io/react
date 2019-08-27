import React from 'react';
import PropTypes from 'prop-types';

const PreRenderer = ({ className, children }) => {
  const isHighlighted = className && className.indexOf('lang-') !== -1;
  return (
    <div className="olt-Card pre--wrapper">
      <div className="olt-Card-content">
        {isHighlighted ? (
          // eslint-disable-next-line
          <pre className="pre" dangerouslySetInnerHTML={{ __html: children }} />
        ) : (
          <pre className="pre">{children}</pre>
        )}
      </div>
    </div>
  );
};

PreRenderer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

PreRenderer.defaultProps = {
  className: null,
};

export default PreRenderer; // eslint-disable-line
