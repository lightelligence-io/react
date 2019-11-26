import React from 'react';
import { string, node, oneOf, bool, shape } from 'prop-types';
import { pascalize } from 'humps';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';

const Headline = React.memo(
  ({ regular, tag, children, size, className, color, ...props }) => {
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
  },
);

Headline.propTypes = {
  tag: string,
  size: oneOf([1, 2, 3, 4, 5, 6]),
  children: node.isRequired,
  color: string,
  className: string,
  regular: bool,
  style: shape({}),
};

Headline.defaultProps = {
  tag: null,
  style: undefined,
  size: 5,
  color: null,
  className: null,
  regular: false,
};

export { Headline };
