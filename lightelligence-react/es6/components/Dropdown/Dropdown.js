import _extends from '@babel/runtime/helpers/esm/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/esm/objectWithoutProperties';
import _defineProperty from '@babel/runtime/helpers/esm/defineProperty';
import React, { Component } from 'react';
import { bool, string, node } from 'prop-types';
import classnames from 'classnames';
import { OLT_NAMESPACE } from '../../constants';
export class Dropdown extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, 'state', {
      open: false,
    });

    _defineProperty(this, 'dropdownRef', React.createRef());

    _defineProperty(this, 'handleOffClick', (event) => {
      const { current: dropdown } = this.dropdownRef;
      const isContained =
        'contains' in dropdown ? dropdown.contains(event.target) : event.target;

      if (!isContained) {
        this.setState({
          open: false,
        });
      }
    });

    _defineProperty(this, 'handleClick', (event) => {
      const { open } = this.state;
      this.setState({
        open: !open,
      });
    });
  }

  componentDidMount() {
    window.addEventListener('click', this.handleOffClick);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleOffClick);
  }

  render() {
    const _this$props = this.props,
      { children, className, label, color, outline, disabled } = _this$props,
      props = _objectWithoutProperties(_this$props, [
        'children',
        'className',
        'label',
        'color',
        'outline',
        'disabled',
      ]);

    const { open } = this.state;
    const base = `${OLT_NAMESPACE}Dropdown`;
    return React.createElement(
      'div',
      _extends(
        {
          ref: this.dropdownRef,
        },
        props,
        {
          className: classnames(
            base,
            color && `${base}--${color}`,
            outline && `${base}--outline`,
            className,
            open && `is-open`,
            disabled && `is-disabled`,
          ),
        },
      ),
      React.createElement(
        'button',
        {
          type: 'button',
          className: `${OLT_NAMESPACE}Dropdown-label`,
          onClick: this.handleClick,
        },
        label,
      ),
      React.createElement(
        'div',
        {
          className: `${OLT_NAMESPACE}Dropdown-content`,
        },
        children,
      ),
    );
  }
}

_defineProperty(Dropdown, 'propTypes', {
  children: node,
  className: string,
  label: node.isRequired,
  color: string,
  outline: bool,
  disabled: bool,
});

_defineProperty(Dropdown, 'defaultProps', {
  children: null,
  className: null,
  color: '',
  outline: false,
  disabled: false,
});
