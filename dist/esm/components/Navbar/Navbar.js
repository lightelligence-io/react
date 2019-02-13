import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { Component } from 'react';
import { bool, string, node } from 'prop-types';
import classnames from 'classnames';
import { isServerSideRendering } from '../../utils/isServerSideRendering';
import { OLT_NAMESPACE } from '../../constants';
export class Navbar extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      open: false
    });

    _defineProperty(this, "navbarRef", React.createRef());

    _defineProperty(this, "handleOffClick", event => {
      const {
        current: navbar
      } = this.navbarRef;
      const isContained = navbar.contains ? navbar.contains(event.target) : event.target;
      const isLink = event.target.closest('*[class*="link"]');

      if (!isContained || isLink) {
        this.setState({
          open: false
        });
      }
    });

    _defineProperty(this, "handleClick", event => {
      const {
        open
      } = this.state;
      this.setState({
        open: !open
      });
    });
  }

  componentDidMount() {
    if (!isServerSideRendering) {
      window.addEventListener('click', this.handleOffClick);
    }
  }

  componentWillUnmount() {
    if (!isServerSideRendering) {
      window.removeEventListener('click', this.handleOffClick);
    }
  }

  render() {
    const _this$props = this.props,
          {
      children,
      className,
      title,
      home,
      color,
      outline
    } = _this$props,
          props = _objectWithoutProperties(_this$props, ["children", "className", "title", "home", "color", "outline"]);

    const {
      open
    } = this.state;
    const base = `${OLT_NAMESPACE}Navbar`;
    return React.createElement("nav", _extends({
      ref: this.navbarRef
    }, props, {
      className: classnames(base, `${base}--${color}`, outline && `${base}--outline`, open && 'is-open', className)
    }), React.createElement("button", {
      type: "button",
      className: `${base}-toggle`,
      onClick: this.handleClick
    }), React.createElement("a", {
      className: `${base}-title`,
      href: home
    }, title), React.createElement("div", {
      className: `${base}-content`
    }, React.createElement("a", {
      className: `${base}-title`,
      href: home
    }, title), children));
  }

}

_defineProperty(Navbar, "propTypes", {
  children: node,
  className: string,
  title: node,
  home: string,
  color: string,
  outline: bool
});

_defineProperty(Navbar, "defaultProps", {
  children: null,
  className: null,
  title: null,
  home: '/',
  color: 'dark',
  outline: false
});