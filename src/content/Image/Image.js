import React, { PureComponent } from 'react';
import { string, bool } from 'prop-types';
import classnames from 'classnames';
import * as olt from '@lightelligence/lightelligence-ui';

export class Image extends PureComponent {
  static propTypes = {
    src: string.isRequired,
    alt: string,
    className: string,
    fluid: bool,
  };

  static defaultProps = {
    alt: null,
    className: null,
    fluid: false,
  };

  render() {
    const { src, alt, className, fluid } = this.props;

    return (
      <img
        className={classnames(olt.Image, fluid && olt.ImageFluid, className)}
        src={src}
        alt={alt}
      />
    );
  }
}
