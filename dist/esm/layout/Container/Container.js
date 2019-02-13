import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import classnames from 'classnames';
import { bool, string } from 'prop-types';
import { OLT_NAMESPACE } from '../../constants';
export const Container = (_ref) => {
  let {
    className,
    noPadding
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "noPadding"]);

  return React.createElement("div", _extends({}, props, {
    className: classnames(`${OLT_NAMESPACE}Container`, noPadding && `${OLT_NAMESPACE}Container--noPadding`, className)
  }));
};
Container.propTypes = {
  className: string,
  noPadding: bool
};
Container.defaultProps = {
  className: null,
  noPadding: false
};