import React from 'react';
import PropTypes from 'prop-types';
import Pathline from 'rsg-components/Pathline'; // eslint-disable-line
import { Card } from '../src';

export const ReactComponentRenderer = ({
  name,
  filepath, // eslint-disable-line
  heading,
  pathLine,
  description,
  docs,
  examples,
  tabButtons,
  tabBody,
}) => (
  <div className="react-component" data-testid={`${name}-container`}>
    <header className="react-component--header">
      {heading}
      {pathLine && <Pathline>{pathLine}</Pathline>}
    </header>
    {(description || docs) && (
      <div className="react-component--docs">
        {description}
        {docs}
      </div>
    )}
    {tabButtons && (
      <Card className="react-components--tabs">
        <div className="react-components--tabs--buttons">{tabButtons}</div>
        <div className="react-components--tabs--body">{tabBody}</div>
      </Card>
    )}
    {examples}
  </div>
);

ReactComponentRenderer.propTypes = {
  name: PropTypes.string.isRequired,
  heading: PropTypes.node.isRequired,
  filepath: PropTypes.string,
  pathLine: PropTypes.string,
  tabButtons: PropTypes.node,
  tabBody: PropTypes.node,
  description: PropTypes.node,
  docs: PropTypes.node,
  examples: PropTypes.node,
};

ReactComponentRenderer.defaultProps = {
  examples: null,
  docs: null,
  description: null,
  tabBody: null,
  tabButtons: null,
  pathLine: null,
  filepath: null,
};

export default ReactComponentRenderer; // eslint-disable-line
