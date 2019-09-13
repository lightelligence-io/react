import React from 'react';
import { string, number, bool, node } from 'prop-types';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';

const V2Label = ({
  className,
  children,
  errorMessage,
  icon,
  label,
  value,
  maxLength,
  allwaysShowMaxLength,
  hint,
  ...others
}) => {
  const showCount = allwaysShowMaxLength || (!!maxLength && value.length > maxLength - 5);
  const showFooter = showCount || !!errorMessage || !!hint;

  return (
    <label
      className={classnames(
        olt.V2Label,
        olt.V2LabelFloating,
        errorMessage && olt.hasError,
        value.length && olt.hasValue,
        className,
      )}
      {...others}
    >
      {children}

      <span className={olt.V2LabelText}>{label}</span>

      {icon && (
        <span className={olt.V2LabelIcon}>
          <i className={olt.Icon} data-icon={icon} />
        </span>
      )}

      {showFooter && (
        <span className={olt.V2LabelFooter}>
          {errorMessage && <span className={olt.V2LabelError}>{errorMessage}</span>}
          {hint && !errorMessage && <span className={olt.V2LabelHint}>{hint}</span>}
          {showCount && (
            <span className={olt.V2LabelCount}>
              <span>
                {value.length}/{maxLength}
              </span>
            </span>
          )}
        </span>
      )}
    </label>
  );
};

V2Label.propTypes = {
  /**
   * Forward an additional className to the underlying component.
   */
  className: string,
  /**
   * The input component to be rendered inside the label
   */
  children: node.isRequired,
  /**
   * The value is used to control the floating label and char count
   */
  value: string.isRequired,
  /**
   * The label
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
};

V2Label.defaultProps = {
  className: null,
  icon: null,
  errorMessage: null,
  maxLength: null,
  allwaysShowMaxLength: false,
  hint: null,
};

export { V2Label };
