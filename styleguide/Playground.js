import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Card } from '../src';

export const PlaygroundRenderer = ({
  exampleIndex,
  name,
  preview,
  previewProps,
  tabButtons,
  tabBody,
}) => {
  const { className, ...props } = previewProps;
  return (
    <div className="" data-testid={`${name}-example-${exampleIndex}`}>
      <Card
        className="react-components--tabs"
        contentProps={{ className: 'playground--card--content' }}
      >
        <div
          className={classnames(className, 'preview')}
          {...props}
          data-preview={name}
        >
          <div className="preview--content">{preview}</div>
        </div>
        <div className="react-components--tabs--buttons playground--tabs--buttons">
          {tabButtons}
        </div>
        <div className="react-components--tabs--body playground--tabs--body">
          {tabBody}
        </div>
      </Card>
    </div>
  );
};

PlaygroundRenderer.propTypes = {
  exampleIndex: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  preview: PropTypes.node.isRequired,
  previewProps: PropTypes.object.isRequired, // eslint-disable-line
  tabButtons: PropTypes.node.isRequired,
  tabBody: PropTypes.node.isRequired,
};

export default PlaygroundRenderer; // eslint-disable-line
