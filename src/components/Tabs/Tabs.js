import React, { PureComponent } from 'react';
import { func, string, node, bool } from 'prop-types';
import classnames from 'classnames';

import { OLT_NAMESPACE } from '../../constants';

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
    const base = `${OLT_NAMESPACE}Tabs`;

    return (
      <div
        {...props}
        className={classnames(
          base,
          navigation && `${base}--navigation`,
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
