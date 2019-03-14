import React, { PureComponent } from 'react';
import { string, node, oneOf, bool } from 'prop-types';
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
  };

  static defaultProps = {
    tag: null,
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
          className,
        )}
        style={{
          color: color ? olt.theme.color[color] : undefined,
        }}
      >
        {children}
      </Element>
    );
  }
}

export { Headline };
