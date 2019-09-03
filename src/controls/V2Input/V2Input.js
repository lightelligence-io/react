import React from 'react';
import { string, func, bool, number, oneOfType } from 'prop-types';
import * as olt from '@lightelligence/styles';
import { V2Label } from '../V2Label';

const V2Input = ({
  className,
  id,
  defaultValue,
  disabled,
  error,
  icon,
  label,
  onChange,
  onBlur,
  readOnly,
  value,
  placeholder,
  required,
  maxLength,
  hint,
  ...others
}) => {
  return (
    <V2Label
      className={className}
      defaultValue={defaultValue}
      error={error}
      icon={icon}
      label={label}
      value={value}
      maxLength={maxLength}
      hint={hint}
    >
      {(displayValue) => (
        <input
          className={olt.V2Input}
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
      )}
    </V2Label>
  );
};

V2Input.propTypes = {
  className: string,
  id: string,
  defaultValue: oneOfType([string, number]),
  value: oneOfType([string, number]),
  placeholder: string,
  label: string.isRequired,
  icon: string,
  error: string,
  maxLength: number,
  hint: string,
  onBlur: func,
  onChange: func,
  disabled: bool,
  readOnly: bool,
  required: bool,
};

V2Input.defaultProps = {
  className: null,
  id: null,
  defaultValue: null,
  value: null,
  placeholder: null,
  icon: null,
  error: null,
  maxLength: null,
  hint: null,
  onBlur: null,
  onChange: null,
  disabled: false,
  readOnly: false,
  required: false,
};

export { V2Input };
