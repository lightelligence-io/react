import React, { PureComponent } from 'react';
import { string, node, oneOf, bool, shape } from 'prop-types';
import { pascalize } from 'humps';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';

class Headline extends PureComponent {
  static propTypes = {
    tag: string,
    size: oneOf([1, 2, 3, 4, 5, 6]),
    children: node.isRequired,
    color: string,
    className: string,
    regular: bool,
    style: shape({}),
  };

  static defaultProps = {
    tag: null,
    style: undefined,
    size: 5,
    color: null,
    className: null,
    regular: false,
  };

  render() {
    const {
      regular,
      tag,
      children,
      size,
      className,
      color,
      ...props
    } = this.props;

    const Element = tag || `h${size}`;

    return (
      <Element
        {...props}
        className={classnames(
          olt.Headline,
          olt[`Headline${pascalize(String(size))}`],
          regular && olt.HeadlineRegular,
          color && olt[`uColor${pascalize(color)}`],
          className,
        )}
      >
        {children}
      </Element>
    );
  }
}

export { Headline };
