import React from 'react';
import { string, func, number, oneOfType } from 'prop-types';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';

const getValue = (value, defaultValue) => {
  if (value === undefined || value === null) {
    return '';
  }

  const stringValue = `${value}`;
  if (stringValue.length === 0 && defaultValue !== undefined) {
    return getValue(defaultValue);
  }

  return stringValue;
};

const V2Label = ({
  className,
  children,
  defaultValue,
  error,
  icon,
  label,
  value,
  maxLength,
  hint,
  ...others
}) => {
  const displayValue = getValue(value, defaultValue);
  const showFooter = !!error || !!maxLength || !!hint;

  return (
    <label
      className={classnames(
        olt.V2Label,
        olt.V2LabelFloating,
        error && olt.hasError,
        displayValue.length && olt.hasValue,
        className,
      )}
      {...others}
    >
      {children(displayValue)}

      <span className={olt.V2LabelText}>{label}</span>

      {icon && (
        <span className={olt.V2LabelIcon}>
          <i className={olt.Icon} data-icon={icon} />
        </span>
      )}

      {showFooter && (
        <span className={olt.V2LabelFooter}>
          {error && <span className={olt.V2LabelError}>{error}</span>}
          {hint && !error && <span className={olt.V2LabelHint}>{hint}</span>}
          {maxLength && (
            <span className={olt.V2LabelCount}>
              <span>
                {displayValue.length}/{maxLength}
              </span>
            </span>
          )}
        </span>
      )}
    </label>
  );
};

V2Label.propTypes = {
  className: string,
  children: func.isRequired,
  defaultValue: oneOfType([string, number]),
  value: oneOfType([string, number]),
  label: string.isRequired,
  icon: string,
  error: string,
  maxLength: number,
  hint: string,
};

V2Label.defaultProps = {
  className: null,
  defaultValue: null,
  value: null,
  icon: null,
  error: null,
  maxLength: null,
  hint: null,
};

export { V2Label };