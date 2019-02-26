import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { bool, func, string, node } from 'prop-types';
import { pascalize } from 'humps';
import * as olt from '@lightelligence/lightelligence-ui';
// import { colorProp, childrenProp } from '../../propTypes';
// replaced with string & node, otherwise we need to maintain the prop types
// definition, which doesn't add a lot of benefits

class Tag extends PureComponent {
  static propTypes = {
    className: string,
    color: string,
    children: node,
    outline: bool,
    selectable: bool,
    icon: node,
    onClick: func,
  };

  static defaultProps = {
    className: null,
    children: null,
    outline: false,
    selectable: false,
    icon: null,
    onClick: null,
    color: undefined,
  };

  handleClick = (e) => {
    const { selectable, onClick } = this.props;
    if (selectable) {
      onClick(e);
    }
  };

  render() {
    const {
      className,
      children,
      color,
      outline,
      selectable,
      onClick,
      ...props
    } = this.props;
    const Element = selectable ? 'button' : 'span';

    return (
      <Element
        {...props}
        onClick={this.handleClick}
        className={classnames(
          olt.Tag,
          onClick && olt.TagSelectable,
          outline && olt.TagOutline,
          color && olt[`Tag${pascalize(color)}`],
          className,
        )}
      >
        {children}
      </Element>
    );
  }
}

export { Tag };
