import React from 'react';
import { string, func, bool, number, oneOfType, node } from 'prop-types';
import * as olt from '@lightelligence/styles';
import { V2Label } from '../V2Label';

const V2Select = ({
  className,
  id,
  defaultValue,
  disabled,
  errorMessage,
  label,
  onChange,
  onBlur,
  readOnly,
  value,
  placeholder,
  required,
  hint,
  children,
  ...others
}) => (
  <V2Label
    className={className}
    defaultValue={defaultValue}
    errorMessage={errorMessage}
    label={label}
    value={value}
    hint={hint}
  >
    {(displayValue) => (
      <select
        className={olt.V2Select}
        id={id}
        placeholder={placeholder}
        value={displayValue}
        onBlur={onBlur}
        onChange={onChange}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        {...others}
      >
        {children}
      </select>
    )}
  </V2Label>
);

V2Select.propTypes = {
  className: string,
  id: string,
  defaultValue: oneOfType([string, number]),
  value: oneOfType([string, number]),
  children: node.isRequired,
  placeholder: string,
  label: string.isRequired,
  errorMessage: string,
  hint: string,
  onBlur: func,
  onChange: func.isRequired,
  disabled: bool,
  readOnly: bool,
  required: bool,
};

V2Select.defaultProps = {
  className: null,
  id: null,
  defaultValue: null,
  value: null,
  placeholder: null,
  errorMessage: null,
  hint: null,
  onBlur: null,
  disabled: false,
  readOnly: false,
  required: false,
};

export { V2Select };
