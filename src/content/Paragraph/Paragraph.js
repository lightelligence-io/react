import React from 'react';
import classnames from 'classnames';
import { string, shape, oneOf } from 'prop-types';
import { pascalize } from 'humps';
import * as olt from '@lightelligence/styles';

export const Paragraph = ({ className, tag, style, size, ...props }) => {
  const Component = tag;

  return (
    <Component
      {...props}
      className={classnames(
        olt.Paragraph,
        size && olt[`uFontSize${pascalize(size)}`],
        className,
      )}
    />
  );
};

Paragraph.propTypes = {
  className: string,
  tag: oneOf(['p', 'span']),
  size: oneOf([
    'xxSmall',
    'xSmall',
    'small',
    'medium',
    'large',
    'xLarge',
    'xxLarge',
  ]),
  style: shape({}),
};

Paragraph.defaultProps = {
  className: null,
  tag: 'p',
  size: 'xxSmall',
  style: null,
};
