import _defineProperty from '@babel/runtime/helpers/esm/defineProperty';
import React, { PureComponent } from 'react';
import { func, node, bool } from 'prop-types';
import { OLT_NAMESPACE } from '../../constants';
export class Checkbox extends PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, 'onChange', () => {
      const { checked, onChange } = this.props;
      if (onChange) onChange(!checked);
    });
  }

  render() {
    const { children, checked } = this.props;
    const label =
      children &&
      React.createElement(
        'label',
        {
          htmlFor: 'checkbox1',
          className: `label ${OLT_NAMESPACE}Checkbox-label ${OLT_NAMESPACE}u-fontSizeSmall ${OLT_NAMESPACE}u-marginBottom1`,
        },
        children,
      );
    return React.createElement(
      'div',
      {
        className: `${OLT_NAMESPACE}Checkbox`,
      },
      React.createElement('input', {
        id: 'checkbox1',
        type: 'checkbox',
        className: `${OLT_NAMESPACE}Checkbox-input`,
        checked: checked,
        onChange: this.onChange,
      }),
      label,
    );
  }
}

_defineProperty(Checkbox, 'propTypes', {
  children: node,
  onChange: func,
  checked: bool,
});

_defineProperty(Checkbox, 'defaultProps', {
  children: null,
  checked: false,
  onChange: null,
});
