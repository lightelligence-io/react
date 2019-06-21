import React from 'react';
import classnames from 'classnames';
import { string, shape } from 'prop-types';
import * as olt from '@lightelligence/styles';

import { copyTextTypeProp, copyTextSizeProp } from '../../propTypes';
import { FONT_SIZE_SMALL } from '../../constants';

// TODO: Let's rename `element` prop to `tag` as with Headline
export const Paragraph = ({ className, element, style, size, ...props }) => {
  const Component = element;

  return (
    <Component
      {...props}
      style={{
        fontSize: size ? olt.theme.fontSize[size] : undefined,
        lineHeight: size ? olt.theme.lineHeight[size] : undefined,
        ...style,
      }}
      className={classnames(olt.Paragraph, className)}
    />
  );
};

Paragraph.propTypes = {
  className: string,
  element: copyTextTypeProp,
  size: copyTextSizeProp,
  style: shape({}),
};

Paragraph.defaultProps = {
  className: null,
  element: 'p',
  size: FONT_SIZE_SMALL,
  style: null,
};
