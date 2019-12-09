import React, { useCallback, useRef } from 'react';
import { string, func, bool, number, oneOfType } from 'prop-types';
import * as olt from '@lightelligence/styles';
import { Label } from '../Label';
import { getStringValue } from '../../utils/getStringValue';

const SINGLE_LINE_HEIGHT_LIMIT = 40;
const ADDITIONAL_MULTILINE_SPACE = 23;

const TextArea = ({
  className,
  id,
  defaultValue,
  disabled,
  errorMessage,
  icon,
  label,
  onChange,
  onBlur,
  readOnly,
  value,
  placeholder,
  required,
  maxLength,
  allwaysShowMaxLength,
  hint,
  autogrow,
  ...others
}) => {
  const displayValue = getStringValue(value, defaultValue);

  const style = { ...others.style };
  if (autogrow) {
    style.overflow = 'hidden';
  }

  const textareaRef = useRef();

  const internalOnChange = useCallback(
    (...args) => {
      if (autogrow) {
        const textarea = textareaRef.current;
        // reset height and measure scrollHeight
        textarea.style.cssText = 'height:auto;';
        textarea.style.cssText = `height:${
          textarea.scrollHeight > SINGLE_LINE_HEIGHT_LIMIT
            ? textarea.scrollHeight + ADDITIONAL_MULTILINE_SPACE
            : textarea.scrollHeight
        }px`;
      }
      onChange(...args);
    },
    [onChange, autogrow],
  );

  return (
    <Label
      className={className}
      errorMessage={errorMessage}
      icon={icon}
      label={label}
      value={displayValue}
      maxLength={maxLength}
      allwaysShowMaxLength={allwaysShowMaxLength}
      hint={hint}
    >
      <textarea
        ref={textareaRef}
        className={olt.TextArea}
        id={id}
        placeholder={placeholder}
        value={displayValue}
        onBlur={onBlur}
        onChange={internalOnChange}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        rows={autogrow ? '1' : undefined}
        maxLength={maxLength}
        {...others}
        style={style}
      />
    </Label>
  );
};

TextArea.propTypes = {
  /**
   * Forward an additional className to the underlying component.
   */
  className: string,
  /**
   * The ID of the input element.
   */
  id: string,
  /**
   * A default value that will be displayed in case the value prop is not set.
   */
  defaultValue: oneOfType([string, number]),
  /**
   * The value that is displayed inside the input element.
   */
  value: oneOfType([string, number]),
  /**
   * A placeholder that is displayed in case there is no value and no default value
   */
  placeholder: string,
  /**
   * The floating label
   */
  label: string.isRequired,
  /**
   * An icon which is displayed on the right of the input
   */
  icon: string,
  /**
   * An error message that is displayed below the input
   */
  errorMessage: string,
  /**
   * The maximum length that the input value can have. A hint will be shown on the right
   * below the input when approaching the limit.
   */
  maxLength: number,
  /**
   * A flag to always show the maximum length of the input value (defaults to false)
   */
  allwaysShowMaxLength: bool,
  /**
   * A hint for the user which is displayed below the input
   */
  hint: string,
  /**
   * Callback which is called when the input loses the focus
   */
  onBlur: func,
  /**
   * Callback which is called when the input value changes
   */
  onChange: func.isRequired,
  /**
   * enables textarea to grow in height when multiple rows are entered (defaults to false)
   */
  autogrow: bool,
  /**
   * disables the input (defaults to false)
   */
  disabled: bool,
  /**
   * enables read-only mode on the input (defaults to false)
   */
  readOnly: bool,
  /**
   * sets input as required and appends * to the label (defaults to false)
   */
  required: bool,
};

TextArea.defaultProps = {
  className: null,
  id: null,
  defaultValue: null,
  value: null,
  placeholder: null,
  icon: null,
  errorMessage: null,
  maxLength: null,
  allwaysShowMaxLength: false,
  hint: null,
  onBlur: null,
  autogrow: false,
  disabled: false,
  readOnly: false,
  required: false,
};

export { TextArea };
