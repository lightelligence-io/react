import React, { PureComponent } from 'react';
import { string, arrayOf, shape, bool } from 'prop-types';
import classnames from 'classnames';
import * as olt from '@lightelligence/lightelligence-ui';

import { Label } from '../Label';
import { Select } from '../Select/Select';

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

    return (
      <div className={olt.SelectField}>
        {label && (
          <Label
            style={{
              color: 'initial',
              lineHeight: '1',
              height: '0.8rem',
            }}
          >
            {label}
            {required && !readOnly ? '*' : null}
          </Label>
        )}
        <Select
          fullwidth={fullwidth}
          disabled={disabled}
          className={classnames(
            olt.SelectInput,
            className,
            errorMessage && olt.isError,
          )}
          options={options}
          {...{ ...props, required, readOnly }}
        />
        <span
          className={olt.SelectFooter}
          style={{
            textAlign: 'left',
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: olt.theme.fontSize.small,
            height: '1.35rem', // TODO use css-variable this was $line-height-small;
            marginTop: olt.theme.spacing[1],
          }}
        >
          {errorMessage && (
            <span
              style={{
                textAlign: 'left',
                fontSize: olt.theme.fontSize.small,
                color: olt.theme.color.error,
              }}
              className={olt.SelectMessage}
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
