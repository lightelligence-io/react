import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { PureComponent } from 'react';
import { string, bool, node } from 'prop-types';
import classnames from 'classnames';
import { OLT_NAMESPACE } from '../../constants';
import { Headline } from '../../content/Headline';
import { Container } from '../../layout/Container';

class ModalContent extends PureComponent {
  render() {
    const _this$props = this.props,
          {
      children,
      className,
      headline,
      error
    } = _this$props,
          props = _objectWithoutProperties(_this$props, ["children", "className", "headline", "error"]);

    return React.createElement("div", _extends({
      className: classnames(`${OLT_NAMESPACE}Modal-inner`, className)
    }, props), headline && React.createElement(Container, {
      noPadding: true
    }, React.createElement(Headline, {
      size: 6
    }, headline)), React.createElement(Container, {
      noPadding: true
    }, children));
  }

}

_defineProperty(ModalContent, "propTypes", {
  className: string,
  children: node,
  headline: node,
  error: bool
});

_defineProperty(ModalContent, "defaultProps", {
  className: null,
  children: null,
  headline: null,
  error: false
});

export { ModalContent };