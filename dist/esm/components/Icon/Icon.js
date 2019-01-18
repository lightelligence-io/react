import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import { string, node } from 'prop-types';
import classnames from 'classnames';
import { pascalize } from 'humps';
import { OLT_NAMESPACE } from '../../constants';

const Icon = (_ref) => {
  let {
    name,
    size,
    color,
    children,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["name", "size", "color", "children", "className"]);

  const base = `${OLT_NAMESPACE}Icon`;
  return React.createElement("i", _extends({}, props, {
    "data-icon": name,
    className: classnames(base, color && `${base}--${color}`, size && `${OLT_NAMESPACE}u-fontSize${pascalize(size)}`, className)
  }));
};

Icon.propTypes = {
  name: string.isRequired,
  color: string,
  size: string,
  className: string,
  children: node
};
Icon.defaultProps = {
  className: null,
  color: '',
  size: '',
  children: null
};
export { Icon };