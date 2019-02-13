import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { PureComponent } from 'react';
import { node, string, bool, func } from 'prop-types';
import classnames from 'classnames';
export class Tab extends PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleChange", () => {
      const {
        onSelect,
        value
      } = this.props;
      if (onSelect) onSelect(value);
    });
  }

  render() {
    const {
      active,
      label,
      children
    } = this.props;
    return React.createElement(React.Fragment, null, React.createElement("button", {
      type: "button",
      onClick: this.handleChange,
      className: classnames('olt-Tabs-header', active && 'is-active')
    }, label), children && React.createElement("div", {
      className: classnames('olt-Tabs-content', active && 'is-active')
    }, children));
  }

}

_defineProperty(Tab, "propTypes", {
  value: string.isRequired,
  label: string,
  active: bool,
  children: node,
  onSelect: func
});

_defineProperty(Tab, "defaultProps", {
  label: '',
  active: false,
  children: null,
  onSelect: null
});