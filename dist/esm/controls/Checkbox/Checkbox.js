import _defineProperty from '@babel/runtime/helpers/defineProperty';
import React, { PureComponent } from 'react';
import { func, node, bool } from 'prop-types';
import { UID } from 'react-uid';
import { OLT_NAMESPACE } from '../../constants';
export class Checkbox extends PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, 'onChange', () => {
      const { checked, onChange } = this.props;

      if (onChange) {
        onChange(!checked);
      }
    });
  }

  render() {
    const { children, checked, disabled } = this.props;
    return React.createElement(
      UID,
      {
        name: (id) => `checkbox${id}`,
      },
      (id) =>
        React.createElement(
          'div',
          {
            className: `${OLT_NAMESPACE}Checkbox`,
          },
          React.createElement('input', {
            id: id,
            type: 'checkbox',
            className: `${OLT_NAMESPACE}Checkbox-input`,
            checked: checked,
            onChange: this.onChange,
            disabled: disabled,
          }),
          children &&
            React.createElement(
              'label',
              {
                htmlFor: id,
                className: `label ${OLT_NAMESPACE}Checkbox-label ${OLT_NAMESPACE}u-fontSizeSmall ${OLT_NAMESPACE}u-marginBottom1`,
              },
              children,
            ),
        ),
    );
  }
}

_defineProperty(Checkbox, 'propTypes', {
  children: node,
  onChange: func,
  checked: bool,
  disabled: bool,
});

_defineProperty(Checkbox, 'defaultProps', {
  children: null,
  checked: false,
  onChange: null,
  disabled: false,
});
