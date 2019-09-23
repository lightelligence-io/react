import React, { PureComponent } from 'react';
import { func, string, node } from 'prop-types';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';

export class V2Tabs extends PureComponent {
  static propTypes = {
    value: string.isRequired,
    onSelect: func.isRequired,
    children: node.isRequired,
    className: string,
  };

  static defaultProps = {
    className: null,
  };

  tabBar = null;

  state = {
    hasScrolledLeft: false,
    canScrollRight: false,
  };

  componentDidMount() {
    setTimeout(() => {
      const overflows = () =>
        this.tabBar && this.tabBar.scrollWidth > this.tabBar.clientWidth;
      if (overflows()) this.setState({ canScrollRight: true });
    }, 1000);
  }

  handleScroll = (e) => {
    const tabs = e.target;
    const hasScrolledLeft = tabs.scrollLeft > 0;
    const canScrollRight =
      tabs.scrollWidth - tabs.scrollLeft - tabs.clientWidth > 0;
    this.setState({ hasScrolledLeft, canScrollRight });
  };

  render() {
    const { value, onSelect, className, children, ...props } = this.props;

    const { hasScrolledLeft, canScrollRight } = this.state;

    return (
      <div
        {...props}
        style={{ position: 'relative' }}
        onScroll={this.handleScroll}
        ref={(e) => {
          this.taBar = e;
        }}
      >
        <div
          className={classnames(
            olt.V2Tabs,
            hasScrolledLeft && olt.hasGradientLeft,
            canScrollRight && olt.hasGradientRight,
          )}
        >
          {React.Children.map(children, (element) =>
            React.cloneElement(element, {
              onSelect,
              active: value === element.props.value,
            }),
          )}
        </div>
      </div>
    );
  }
}
