import _extends from "@babel/runtime/helpers/esm/extends";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React, { PureComponent } from 'react';
import { string, arrayOf, shape, bool } from 'prop-types';
import classnames from 'classnames';
import { OLT_NAMESPACE } from '../../constants';
import { Label } from '../Label';
import { Select } from '../Select/Select'; // TODO move the following styles to the styleguide?
// TODO check if we need an autoprefixer here

const labelStyle = {
  color: 'initial',
  lineHeight: '1',
  height: '0.8rem'
};
const footerStyle = {
  textAlign: 'left',
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '0.8rem',
  // TODO use css-variable this was $font-size-small
  height: '1.35rem',
  // TODO use css-variable this was $line-height-small;
  marginTop: '0.25rem' // TODO use css-variable this was map-get($spacers, 1);

};
const messageStyle = {
  textAlign: 'left',
  fontSize: '0.8rem' // TODO use css-variable this was $font-size-small

};

class SelectField extends PureComponent {
  render() {
    const _this$props = this.props,
          {
      className,
      disabled,
      options,
      label,
      fullwidth,
      errorMessage,
      readOnly,
      required
    } = _this$props,
          props = _objectWithoutProperties(_this$props, ["className", "disabled", "options", "label", "fullwidth", "errorMessage", "readOnly", "required"]);

    const selectClasses = classnames(className, errorMessage && 'is-error');
    return React.createElement("div", {
      className: `${OLT_NAMESPACE}SelectField`
    }, label && React.createElement(Label, {
      style: labelStyle
    }, label, required && !readOnly ? '*' : null), React.createElement(Select, _extends({
      fullwidth: fullwidth,
      disabled: disabled,
      className: selectClasses,
      options: options
    }, _objectSpread({}, props, {
      required,
      readOnly
    }))), React.createElement("span", {
      style: footerStyle
    }, errorMessage && React.createElement("span", {
      style: messageStyle,
      className: `${OLT_NAMESPACE}u-textError`
    }, errorMessage)));
  }

}

_defineProperty(SelectField, "propTypes", {
  className: string,
  label: string.isRequired,
  fullwidth: bool,
  readOnly: bool,
  disabled: bool,
  required: bool,
  errorMessage: string,
  options: arrayOf(shape({
    label: string,
    value: string
  })).isRequired
});

_defineProperty(SelectField, "defaultProps", {
  className: null,
  errorMessage: null,
  readOnly: null,
  required: null,
  fullwidth: false,
  disabled: false
});

export { SelectField };