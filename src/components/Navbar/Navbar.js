import React, { Component } from 'react';
import { bool, string, node } from 'prop-types';
import classnames from 'classnames';
import { isServerSideRendering } from '../../utils/isServerSideRendering';

import { OLT_NAMESPACE } from '../../constants';

export class Navbar extends Component {
  static propTypes = {
    children: node,
    className: string,
    title: node,
    home: string,
    color: string,
    outline: bool,
  };

  static defaultProps = {
    children: null,
    className: null,
    title: null,
    home: '/',
    color: 'dark',
    outline: false,
  };

  state = {
    open: false,
  };

  navbarRef = React.createRef();

  componentDidMount() {
    if (!isServerSideRendering()) {
      window.addEventListener('click', this.handleOffClick);
    }
  }

  componentWillUnmount() {
    if (!isServerSideRendering()) {
      window.removeEventListener('click', this.handleOffClick);
    }
  }

  handleOffClick = (event) => {
    const { current: navbar } = this.navbarRef;
    const isContained = navbar.contains
      ? navbar.contains(event.target)
      : event.target;
    const isLink = event.target.closest('*[class*="link"]');

    if (!isContained || isLink) {
      this.setState({
        open: false,
      });
    }
  };

  handleClick = (event) => {
    const { open } = this.state;

    this.setState({
      open: !open,
    });
  };

  render() {
    const {
      children,
      className,
      title,
      home,
      color,
      outline,
      ...props
    } = this.props;
    const { open } = this.state;
    const base = `${OLT_NAMESPACE}Navbar`;

    return (
      <nav
        ref={this.navbarRef}
        {...props}
        className={classnames(
          base,
          `${base}--${color}`,
          outline && `${base}--outline`,
          open && 'is-open',
        )}
      >
        <button
          type="button"
          className={`${base}-toggle`}
          onClick={this.handleClick}
        />
        <a className={`${base}-title`} href={home}>
          {title}
        </a>
        <div className={`${base}-content`}>
          <a className={`${base}-title`} href={home}>
            {title}
          </a>
          {children}
        </div>
      </nav>
    );
  }
}
