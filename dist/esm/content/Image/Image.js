import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React, { PureComponent } from 'react';
import { string, bool } from 'prop-types';
import classnames from 'classnames';
import { OLT_NAMESPACE } from '../../constants';
export class Image extends PureComponent {
  render() {
    const {
      src,
      alt,
      className,
      fluid
    } = this.props;
    return React.createElement("img", {
      className: classnames(`${OLT_NAMESPACE}Image`, fluid && `${OLT_NAMESPACE}Image--fluid`, className),
      src: src,
      alt: alt
    });
  }

}

_defineProperty(Image, "propTypes", {
  src: string.isRequired,
  alt: string,
  className: string,
  fluid: bool
});

_defineProperty(Image, "defaultProps", {
  alt: null,
  className: null,
  fluid: false
});