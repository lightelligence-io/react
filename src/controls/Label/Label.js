import React from 'react';
import { string, number, bool, node, func } from 'prop-types';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';
import { Icon } from '../../components/Icon';

const Label = ({
  className,
  children,
  errorMessage,
  icon,
  onIconClick,
  label,
  value,
  maxLength,
  allwaysShowMaxLength,
  hint,
  ...others
}) => {
  const nearLengthLimit = !!maxLength && value.length > maxLength - 5;
  const showCount = allwaysShowMaxLength || nearLengthLimit;
  const showFooter = showCount || !!errorMessage || !!hint;
  return (
    <label
      className={classnames(
        olt.Label,
        olt.LabelFloating,
        errorMessage && olt.hasError,
        value.length && olt.hasValue,
        className,
      )}
      {...others}
    >
      {children}

      <span className={olt.LabelText}>{label}</span>

      {icon && (
        <span className={olt.LabelIcon}>
          <Icon
            name={icon}
            onClick={onIconClick}
            style={onIconClick ? { cursor: 'pointer' } : {}}
          />
        </span>
      )}

      {showFooter && (
        <span className={olt.LabelFooter}>
          {errorMessage && (
            <span className={olt.LabelError}>{errorMessage}</span>
          )}
          {hint && !errorMessage && (
            <span className={olt.LabelHint}>{hint}</span>
          )}
          {showCount && (
            <span className={olt.LabelCount}>
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

Label.propTypes = {
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
   * Callback which is called when the icon is clicked
   */
  onIconClick: func,
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

Label.defaultProps = {
  className: null,
  icon: null,
  errorMessage: null,
  onIconClick: null,
  maxLength: null,
  allwaysShowMaxLength: false,
  hint: null,
};

export { Label };
