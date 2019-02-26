import React, { PureComponent } from 'react';
import { func, node, bool } from 'prop-types';
import { UID } from 'react-uid';
import classnames from 'classnames';
import * as olt from '@lightelligence/lightelligence-ui';

export class Checkbox extends PureComponent {
  static propTypes = {
    children: node,
    onChange: func,
    checked: bool,
    disabled: bool,
  };

  static defaultProps = {
    children: null,
    checked: false,
    onChange: null,
    disabled: false,
  };

  onChange = () => {
    const { checked, onChange } = this.props;
    if (onChange) {
      onChange(!checked);
    }
  };

  render() {
    const { children, checked, disabled } = this.props;
    return (
      <UID name={(id) => `checkbox${id}`}>
        {(id) => (
          <div className={olt.Checkbox}>
            <input
              id={id}
              type="checkbox"
              className={olt.CheckboxInput}
              checked={checked}
              onChange={this.onChange}
              disabled={disabled}
            />
            {children && (
              <label
                htmlFor={id}
                className={classnames(olt.Label, olt.CheckboxLabel)}
                style={{
                  fontSize: olt.theme.fontSize.small,
                  marginBottom: olt.theme.spacing[1],
                }}
              >
                {children}
              </label>
            )}
          </div>
        )}
      </UID>
    );
  }
}
