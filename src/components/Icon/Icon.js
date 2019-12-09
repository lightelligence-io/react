import React from 'react';
import { string, node, shape } from 'prop-types';
import classnames from 'classnames';
import { pascalize } from 'humps';
import * as olt from '@lightelligence/styles';

const Icon = ({ name, size, color, children, className, ...props }) => (
  <i
    {...props}
    className={classnames(
      olt.Icon,
      color &&
        (olt[`uColor${pascalize(color)}`] || olt[`Icon${pascalize(color)}`]),
      name && olt[`Icon${pascalize(name)}`],
      size && olt[`uFontSize${pascalize(size)}`],
      className,
    )}
  />
);

Icon.propTypes = {
  name: string.isRequired,
  color: string,
  size: string,
  className: string,
  style: shape({}),
  children: node,
};

Icon.defaultProps = {
  className: null,
  color: undefined,
  size: '',
  style: {},
  children: null,
};

export { Icon };
