import React, { PureComponent } from 'react';
import { string, arrayOf, shape, bool } from 'prop-types';
import classnames from 'classnames';

import { OLT_NAMESPACE } from '../../constants';
import { Label } from '../Label';
import { Select } from '../Select/Select';

import * as styles from './SelectField.scss';

class SelectField extends PureComponent {
  static propTypes = {
    className: string,
    label: string.isRequired,
    fullwidth: bool,
    readOnly: bool,
    disabled: bool,
    required: bool,
    errorMessage: string,
    options: arrayOf(shape({ label: string, value: string })).isRequired,
  };

  static defaultProps = {
    className: null,
    errorMessage: null,
    readOnly: null,
    required: null,
    fullwidth: false,
    disabled: false,
  };

  render() {
    const {
      className,
      disabled,
      options,
      label,
      fullwidth,
      errorMessage,
      readOnly,
      required,
      ...props
    } = this.props;

    const selectClasses = classnames(className, errorMessage && 'is-error');
    return (
      <div className={`${OLT_NAMESPACE}SelectField ${styles.selectField}`}>
        {label && (
          <Label>
            {label}
            {required && !readOnly ? '*' : null}
          </Label>
        )}
        <Select
          fullwidth={fullwidth}
          disabled={disabled}
          className={selectClasses}
          options={options}
          {...{ ...props, required, readOnly }}
        />
        <span className={styles.footer}>
          {errorMessage && (
            <span className={`${styles.message} ${OLT_NAMESPACE}u-textError`}>
              {errorMessage}
            </span>
          )}
        </span>
      </div>
    );
  }
}

export { SelectField };
