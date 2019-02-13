import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { bool, func, string, node } from 'prop-types'; // import { colorProp, childrenProp } from '../../propTypes';
// replaced with string & node, otherwise we need to maintain the prop types
// definition, which doesn't add a lot of benefits

import { OLT_NAMESPACE } from '../../constants';

class Tag extends PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleClick", e => {
      const {
        selectable,
        onClick
      } = this.props;

      if (selectable) {
        onClick(e);
      }
    });
  }

  render() {
    const _this$props = this.props,
          {
      className,
      children,
      color,
      outline,
      selectable,
      onClick
    } = _this$props,
          props = _objectWithoutProperties(_this$props, ["className", "children", "color", "outline", "selectable", "onClick"]);

    const base = `${OLT_NAMESPACE}Tag`;
    const Element = selectable ? 'button' : 'span';
    return React.createElement(Element, _extends({}, props, {
      onClick: this.handleClick,
      className: classnames(base, onClick && `${base}--selectable`, outline && `${base}--outline`, color && `${base}--${color}`, className)
    }), children);
  }

}

_defineProperty(Tag, "propTypes", {
  className: string,
  color: string,
  children: node,
  outline: bool,
  selectable: bool,
  icon: node,
  onClick: func
});

_defineProperty(Tag, "defaultProps", {
  className: null,
  children: null,
  outline: false,
  selectable: false,
  icon: null,
  onClick: null,
  color: null
});

export { Tag };