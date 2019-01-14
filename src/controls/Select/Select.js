import React, { PureComponent } from 'react';
import { string, arrayOf, shape, bool } from 'prop-types';
import classnames from 'classnames';

import { OLT_NAMESPACE } from '../../constants';

class Select extends PureComponent {
  static propTypes = {
    className: string,
    value: string,
    fullwidth: bool,
    disabled: bool,
    options: arrayOf(shape({ label: string, value: string })).isRequired,
  };

  static defaultProps = {
    className: null,
    fullwidth: false,
    disabled: false,
    value: null,
  };

  static renderOptions(options, value) {
    return options.map((option) => {
      const key = `${option.value}-${option.label}`;
      return (
        <option value={option.value} key={key}>
          {option.label}
        </option>
      );
    });
  }

  render() {
    const {
      className,
      disabled,
      options,
      value,
      fullwidth,
      ...props
    } = this.props;
    const base = `${OLT_NAMESPACE}Select`;

    return (
      <React.Fragment>
        <select
          value={value}
          className={classnames(
            base,
            fullwidth && `${base}--fullwidth`,
            disabled && `is-disabled`,
            !value && 'is-placeholder',
            className,
          )}
          disabled={disabled}
          {...props}
        >
          {Select.renderOptions(options, value)}
        </select>
      </React.Fragment>
    );
  }
}

export { Select };
