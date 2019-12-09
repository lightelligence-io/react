import React from 'react';
import { string, func, bool, number, oneOfType } from 'prop-types';
import * as olt from '@lightelligence/styles';
import { Label } from '../Label';
import { getStringValue } from '../../utils/getStringValue';

const Input = ({
  className,
  id,
  defaultValue,
  disabled,
  errorMessage,
  icon,
  label,
  onChange,
  onIconClick,
  onBlur,
  readOnly,
  value,
  placeholder,
  required,
  maxLength,
  allwaysShowMaxLength,
  hint,
  ...others
}) => {
  const displayValue = getStringValue(value, defaultValue);
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
      {...(onIconClick ? { onIconClick } : {})}
    >
      <input
        className={olt.Input}
        id={id}
        placeholder={placeholder}
        value={displayValue}
        onBlur={onBlur}
        onChange={onChange}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        {...others}
      />
    </Label>
  );
};

Input.propTypes = {
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
   * Callback which is called when the icon is clicked
   */
  onIconClick: func,
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

Input.defaultProps = {
  className: null,
  id: null,
  defaultValue: null,
  value: null,
  placeholder: null,
  icon: null,
  onIconClick: null,
  errorMessage: null,
  maxLength: null,
  allwaysShowMaxLength: false,
  hint: null,
  onBlur: null,
  disabled: false,
  readOnly: false,
  required: false,
};

export { Input };
