import React, { PureComponent } from 'react';
import { func, string, node, bool } from 'prop-types';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';

export class Tabs extends PureComponent {
  static propTypes = {
    navigation: bool,
    value: string.isRequired,
    onSelect: func.isRequired,
    children: node.isRequired,
    className: string,
  };

  static defaultProps = {
    className: null,
    navigation: false,
  };

  render() {
    const {
      value,
      onSelect,
      className,
      children,
      navigation,
      ...props
    } = this.props;

    return (
      <div
        {...props}
        className={classnames(
          olt.Tabs,
          navigation && olt.TabsNavigation,
          className,
        )}
      >
        {React.Children.map(children, (element) =>
          React.cloneElement(element, {
            onSelect,
            active: value === element.props.value,
          }),
        )}
      </div>
    );
  }
}
