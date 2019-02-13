import React from 'react';
import classnames from 'classnames';
import { string, shape } from 'prop-types';
import { pascalize } from 'humps';

import { OLT_NAMESPACE, FONT_SIZE_SMALL } from '../../constants';
import { copyTextTypeProp, copyTextSizeProp } from '../../propTypes';

export const Paragraph = ({ className, element, style, size, ...props }) => {
  const Component = element;
  const elemStyle = {
    // TODO: move this to the styleguide (modifier or default?)
    wordBreak: 'break-all',
    // TODO: Don't overwrite styleguide margins here, but it's currently used with these values in the portal and marketing site.
    // In the styleguide we use margin-bottom = 1rem and also have a last-child rule. We have to adjust this
    // either here or in the styleguide.
    margin: '0 0 0.5rem',
    ...style,
  };
  const classes = classnames(
    `${OLT_NAMESPACE}Paragraph`,
    `${OLT_NAMESPACE}u-fontSize${pascalize(size)}`,
    className,
  );
  return <Component {...props} style={elemStyle} className={classes} />;
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
