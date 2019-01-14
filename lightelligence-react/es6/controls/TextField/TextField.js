import _extends from '@babel/runtime/helpers/esm/extends';
import _objectSpread from '@babel/runtime/helpers/esm/objectSpread';
import _objectWithoutProperties from '@babel/runtime/helpers/esm/objectWithoutProperties';
import _defineProperty from '@babel/runtime/helpers/esm/defineProperty';
import React, { PureComponent } from 'react';
import { string, func, bool, shape } from 'prop-types';
import classnames from 'classnames';
import uniqid from 'uniqid';
import { OLT_NAMESPACE } from '../../constants';
import * as styles from './TextField.scss';

class TextField extends PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, 'elementId', uniqid());

    _defineProperty(this, 'inputRef', React.createRef());

    _defineProperty(this, 'applyAutogrow', () => {
      const tf = this.inputRef.current;
      const { style } = tf; // reset height and measure scrollHeight

      style.cssText = 'height:auto;';
      style.cssText = `height:${tf.scrollHeight}px`;
    });
  }

  componentDidMount() {
    const inputNode = this.inputRef.current; // This initialises the input for the styleguide
    // new OltTextField(inputNode); // eslint-disable-line no-new

    const { autogrow } = this.props;

    if (autogrow) {
      inputNode.addEventListener('input', this.applyAutogrow);
      inputNode.addEventListener('change', this.applyAutogrow);
      this.applyAutogrow();
    }
  }

  componentWillUnmount() {
    const { autogrow } = this.props;
    const inputNode = this.inputRef.current;

    if (autogrow) {
      inputNode.removeEventListener('input', this.applyAutogrow);
      inputNode.removeEventListener('change', this.applyAutogrow);
    }
  }

  render() {
    const _this$props = this.props,
      {
        className,
        defaultValue,
        disabled,
        errorMessage,
        fullwidth,
        icon,
        infoText,
        label,
        floating,
        onChange,
        onBlur,
        readOnly,
        textarea,
        value,
        style,
        autogrow,
        placeholder,
        required,
        noFooter,
      } = _this$props,
      rest = _objectWithoutProperties(_this$props, [
        'className',
        'defaultValue',
        'disabled',
        'errorMessage',
        'fullwidth',
        'icon',
        'infoText',
        'label',
        'floating',
        'onChange',
        'onBlur',
        'readOnly',
        'textarea',
        'value',
        'style',
        'autogrow',
        'placeholder',
        'required',
        'noFooter',
      ]);

    const { elementId } = this;
    const Element = textarea || autogrow ? 'textarea' : 'input';
    const hasFloatingLabel = floating && label;
    const base = `${OLT_NAMESPACE}TextField`;
    const wrapperClasses = classnames(
      base,
      fullwidth && 'is-fullwidth',
      hasFloatingLabel && `${base}--float`,
      icon && 'has-icon',
      !label && 'has-noLabel',
      className,
      errorMessage && 'has-error-message',
    );
    const elementClasses = classnames(
      `${OLT_NAMESPACE}Input ${base}-input`,
      errorMessage && 'is-error',
      hasFloatingLabel && value && 'has-value',
      autogrow && styles.autogrow,
    );
    const autogrowProps = autogrow
      ? {
          rows: '1',
        }
      : {};
    const showLabel = label && (floating || (!errorMessage && !infoText));
    const newPlaceholder =
      placeholder || (!floating && !showLabel && label) || '';
    const labelElement =
      label &&
      React.createElement(
        'label',
        {
          className: `${OLT_NAMESPACE}Label ${base}-label`,
          htmlFor: elementId,
        },
        label,
        required && !readOnly ? '*' : null,
      );
    const noFooterStyle = noFooter
      ? {
          marginBottom: 0,
        }
      : {};

    const wrapperStyle = _objectSpread({}, style, noFooterStyle);

    return React.createElement(
      'div',
      {
        className: wrapperClasses,
        style: wrapperStyle,
      },
      !floating && labelElement,
      React.createElement(
        Element,
        _extends(
          {
            className: elementClasses,
            defaultValue: defaultValue,
            disabled: disabled,
            id: elementId,
            onChange: onChange,
            onBlur: onBlur,
            readOnly: readOnly,
            ref: this.inputRef,
            value: value,
            placeholder: newPlaceholder,
          },
          autogrowProps,
          _objectSpread({}, rest, {
            required,
          }),
        ),
      ),
      floating && labelElement,
      !noFooter &&
        React.createElement(
          'span',
          {
            className: `${base}-footer`,
          },
          errorMessage &&
            React.createElement(
              'span',
              {
                className: `${base}-message ${OLT_NAMESPACE}u-textError`,
              },
              readOnly
                ? React.createElement('span', null, '\xA0')
                : errorMessage,
            ),
          infoText &&
            React.createElement(
              'span',
              {
                className: `${base}-info`,
              },
              readOnly ? React.createElement('span', null, '\xA0') : infoText,
            ),
        ),
      icon &&
        React.createElement(
          'span',
          {
            className: `${base}-icon`,
            style: {
              pointerEvents: 'none',
            },
          },
          React.createElement('i', {
            className: `${OLT_NAMESPACE}Icon`,
            'data-icon': icon,
          }),
        ),
    );
  }
}

_defineProperty(TextField, 'propTypes', {
  className: string,
  defaultValue: string,
  disabled: bool,
  errorMessage: string,
  fullwidth: bool,
  icon: string,
  floating: bool,
  infoText: string,
  label: string,
  onBlur: func,
  onChange: func,
  readOnly: bool,
  textarea: bool,
  required: bool,
  value: string,
  autogrow: bool,
  noFooter: bool,
  placeholder: string,
  style: shape({}),
});

_defineProperty(TextField, 'defaultProps', {
  className: null,
  defaultValue: undefined,
  disabled: false,
  errorMessage: null,
  required: null,
  floating: true,
  fullwidth: false,
  icon: null,
  infoText: null,
  label: null,
  onBlur: undefined,
  onChange: undefined,
  readOnly: false,
  textarea: false,
  value: undefined,
  autogrow: false,
  noFooter: false,
  placeholder: null,
  style: null,
});

export { TextField };
