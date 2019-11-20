import React from 'react';
import classnames from 'classnames';
import { string, shape } from 'prop-types';
import { pascalize } from 'humps';
import * as olt from '@lightelligence/styles';

import { copyTextTypeProp, copyTextSizeProp } from '../../propTypes';
import { FONT_SIZE_SMALL } from '../../constants';

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
  tag: copyTextTypeProp,
  size: copyTextSizeProp,
  style: shape({}),
};

Paragraph.defaultProps = {
  className: null,
  tag: 'p',
  size: FONT_SIZE_SMALL,
  style: null,
};
