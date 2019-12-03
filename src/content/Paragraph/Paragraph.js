import React from 'react';
import classnames from 'classnames';
import { string, shape, oneOf } from 'prop-types';
import * as olt from '@lightelligence/styles';
import { Content } from '../Fonts';

export const Paragraph = ({ className, tag, style, ...props }) => {
  return (
    <Content
      {...props}
      tag={tag}
      className={classnames(olt.Paragraph, className)}
    />
  );
};

Paragraph.propTypes = {
  className: string,
  tag: oneOf(['p', 'span']),
  style: shape({}),
};

Paragraph.defaultProps = {
  className: null,
  tag: 'p',
  style: null,
};
