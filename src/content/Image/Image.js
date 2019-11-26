import React from 'react';
import { string, bool } from 'prop-types';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';

const Image = ({ src, alt, className, fluid }) => (
  <img
    className={classnames(olt.Image, fluid && olt.ImageFluid, className)}
    src={src}
    alt={alt}
  />
);

Image.propTypes = {
  src: string.isRequired,
  alt: string,
  className: string,
  fluid: bool,
};

Image.defaultProps = {
  alt: null,
  className: null,
  fluid: false,
};

export { Image };
