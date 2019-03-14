import React, { PureComponent } from 'react';
import { string, func, bool, shape } from 'prop-types';
import classnames from 'classnames';
import uniqid from 'uniqid';
import * as olt from '@lightelligence/styles';

class TextField extends PureComponent {
  static propTypes = {
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
  };

  static defaultProps = {
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
  };

  elementId = uniqid();

  inputRef = React.createRef();

  componentDidMount() {
    const inputNode = this.inputRef.current;
    // This initialises the input for the styleguide
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

  applyAutogrow = () => {
    const tf = this.inputRef.current;
    const { style } = tf;
    // reset height and measure scrollHeight
    style.cssText = 'overflow:hidden; height:auto;';
    style.cssText = `overflow:hidden; height:${tf.scrollHeight}px`;
  };

  render() {
    const {
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
      ...rest
    } = this.props;
    const { elementId } = this;
    const Element = textarea || autogrow ? 'textarea' : 'input';
    const hasFloatingLabel = floating && label;

    const wrapperClasses = classnames(
      olt.TextField,
      fullwidth && olt.TextFieldFullwidth,
      hasFloatingLabel && olt.TextFieldFloat,
      icon && olt.hasIcon,
      !label && olt.hasNoLabel,
      className,
      errorMessage && olt.hasErrorMessage,
    );

    const elementClasses = classnames(
      olt.Input,
      olt.TextFieldInput,
      errorMessage && olt.isError,
      hasFloatingLabel && value && olt.hasValue,
    );

    const elementStyles = autogrow
      ? {
          ...rest.style,
          overflow: 'hidden',
        }
      : rest.style;

    const autogrowProps = autogrow ? { rows: '1' } : {};
    const showLabel = label && (floating || (!errorMessage && !infoText));
    const newPlaceholder =
      placeholder || (!floating && !showLabel && label) || '';

    const labelElement = label && (
      <label
        className={classnames(olt.Label, olt.TextFieldLabel)}
        htmlFor={elementId}
      >
        {label}
        {required && !readOnly ? '*' : null}
      </label>
    );
    const noFooterStyle = noFooter ? { marginBottom: 0 } : {};
    const wrapperStyle = {
      ...style,
      ...noFooterStyle,
    };

    return (
      <div className={wrapperClasses} style={wrapperStyle}>
        {!floating && labelElement}
        <Element
          style={elementStyles}
          className={elementClasses}
          defaultValue={defaultValue}
          disabled={disabled}
          id={elementId}
          onChange={onChange}
          onBlur={onBlur}
          readOnly={readOnly}
          ref={this.inputRef}
          value={value}
          placeholder={newPlaceholder}
          {...autogrowProps}
          {...{ ...rest, required }}
        />
        {floating && labelElement}
        {!noFooter && (
          <span className={olt.TextFieldFooter}>
            {errorMessage && (
              <span
                className={olt.TextFieldMessage}
                style={{
                  color: olt.theme.color.error,
                }}
              >
                {readOnly ? <span>&nbsp;</span> : errorMessage}
              </span>
            )}
            {infoText && (
              <span className={olt.TextFieldInfo}>
                {readOnly ? <span>&nbsp;</span> : infoText}
              </span>
            )}
          </span>
        )}

        {icon && (
          <span className={olt.TextFieldIcon} style={{ pointerEvents: 'none' }}>
            <i className={olt.Icon} data-icon={icon} />
          </span>
        )}
      </div>
    );
  }
}

export { TextField };
