import React, { PureComponent } from 'react';
import { string, arrayOf, shape, bool } from 'prop-types';
import classnames from 'classnames';

import { OLT_NAMESPACE } from '../../constants';
import { Label } from '../Label';
import { Select } from '../Select/Select';

// TODO move the following styles to the styleguide?
// TODO check if we need an autoprefixer here

const labelStyle = {
  color: 'initial',
  lineHeight: '1',
  height: '0.8rem',
};

const footerStyle = {
  textAlign: 'left',
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '0.8rem', // TODO use css-variable this was $font-size-small
  height: '1.35rem', // TODO use css-variable this was $line-height-small;
  marginTop: '0.25rem', // TODO use css-variable this was map-get($spacers, 1);
};

const messageStyle = {
  textAlign: 'left',
  fontSize: '0.8rem', // TODO use css-variable this was $font-size-small
};

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
      <div className={`${OLT_NAMESPACE}SelectField`}>
        {label && (
          <Label style={labelStyle}>
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
        <span style={footerStyle}>
          {errorMessage && (
            <span
              style={messageStyle}
              className={`${OLT_NAMESPACE}u-textError`}
            >
              {errorMessage}
            </span>
          )}
        </span>
      </div>
    );
  }
}

export { SelectField };
