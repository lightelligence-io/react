import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '../../src';

const PreRenderer = ({ className, children }) => {
  const isHighlighted = className && className.indexOf('lang-') !== -1;
  return (
    <Card className="pre--wrapper">
      {isHighlighted ? (
        // eslint-disable-next-line
        <pre className="pre" dangerouslySetInnerHTML={{ __html: children }} />
      ) : (
        <pre className="pre">{children}</pre>
      )}
    </Card>
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
