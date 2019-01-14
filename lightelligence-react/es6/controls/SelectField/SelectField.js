import _extends from '@babel/runtime/helpers/esm/extends';
import _objectSpread from '@babel/runtime/helpers/esm/objectSpread';
import _objectWithoutProperties from '@babel/runtime/helpers/esm/objectWithoutProperties';
import _defineProperty from '@babel/runtime/helpers/esm/defineProperty';
import React, { PureComponent } from 'react';
import { string, arrayOf, shape, bool } from 'prop-types';
import classnames from 'classnames';
import { OLT_NAMESPACE } from '../../constants';
import { Label } from '../Label';
import { Select } from '../Select/Select';
import * as styles from './SelectField.scss';

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
        required,
      } = _this$props,
      props = _objectWithoutProperties(_this$props, [
        'className',
        'disabled',
        'options',
        'label',
        'fullwidth',
        'errorMessage',
        'readOnly',
        'required',
      ]);

    const selectClasses = classnames(className, errorMessage && 'is-error');
    return React.createElement(
      'div',
      {
        className: `${OLT_NAMESPACE}SelectField ${styles.selectField}`,
      },
      label &&
        React.createElement(
          Label,
          null,
          label,
          required && !readOnly ? '*' : null,
        ),
      React.createElement(
        Select,
        _extends(
          {
            fullwidth: fullwidth,
            disabled: disabled,
            className: selectClasses,
            options: options,
          },
          _objectSpread({}, props, {
            required,
            readOnly,
          }),
        ),
      ),
      React.createElement(
        'span',
        {
          className: styles.footer,
        },
        errorMessage &&
          React.createElement(
            'span',
            {
              className: `${styles.message} ${OLT_NAMESPACE}u-textError`,
            },
            errorMessage,
          ),
      ),
    );
  }
}

_defineProperty(SelectField, 'propTypes', {
  className: string,
  label: string.isRequired,
  fullwidth: bool,
  readOnly: bool,
  disabled: bool,
  required: bool,
  errorMessage: string,
  options: arrayOf(
    shape({
      label: string,
      value: string,
    }),
  ).isRequired,
});

_defineProperty(SelectField, 'defaultProps', {
  className: null,
  errorMessage: null,
  readOnly: null,
  required: null,
  fullwidth: false,
  disabled: false,
});

export { SelectField };
