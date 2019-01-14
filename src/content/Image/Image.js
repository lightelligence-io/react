import React, { PureComponent } from 'react';
import { string, bool } from 'prop-types';
import classnames from 'classnames';

import { OLT_NAMESPACE } from '../../constants';

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
        className={classnames(
          `${OLT_NAMESPACE}Image`,
          fluid && `${OLT_NAMESPACE}Image--fluid`,
          className,
        )}
        src={src}
        alt={alt}
      />
    );
  }
}
