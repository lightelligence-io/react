import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React, { PureComponent } from 'react';
import { oneOf, string } from 'prop-types';
import classnames from 'classnames';
import { OLT_NAMESPACE, AVATAR_TYPE_USER, AVATAR_TYPE_TENANT, AVATAR_SIZE_LARGE, AVATAR_SIZE_MEDIUM } from '../../constants';
export class Avatar extends PureComponent {
  render() {
    const _this$props = this.props,
          {
      type,
      size,
      name,
      className
    } = _this$props,
          props = _objectWithoutProperties(_this$props, ["type", "size", "name", "className"]);

    const base = `${OLT_NAMESPACE}Avatar`;
    const shortName = name.substr(0, 1);
    return React.createElement("i", _extends({}, props, {
      className: classnames(base, size === AVATAR_SIZE_LARGE && `${base}--large`, type === 'tenant' ? `${base}--tenant` : `${base}--user`, className)
    }), shortName);
  }

}

_defineProperty(Avatar, "propTypes", {
  name: string.isRequired,
  className: string,
  size: oneOf([AVATAR_SIZE_MEDIUM, AVATAR_SIZE_LARGE]),
  type: oneOf([AVATAR_TYPE_USER, AVATAR_TYPE_TENANT]).isRequired
});

_defineProperty(Avatar, "defaultProps", {
  className: null,
  size: AVATAR_SIZE_MEDIUM
});