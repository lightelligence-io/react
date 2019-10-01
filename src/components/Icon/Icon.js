import React from 'react';
import { string, node } from 'prop-types';
import classnames from 'classnames';
import { pascalize, camelize } from 'humps';
import * as olt from '@lightelligence/styles';

const Icon = ({ name, size, color, children, className, ...props }) => {
  return (
    <i
      {...props}
      className={classnames(
        olt.Icon,
        color && olt[`Icon${pascalize(color)}`],
        className,
        name && olt[`Icon${pascalize(name)}`],
        `${pascalize(name)}`,
      )}
      style={{
        fontSize: size ? olt.theme.fontSize[camelize(size)] : undefined,
      }}
    />
  );
};

Icon.propTypes = {
  name: string.isRequired,
  color: string,
  size: string,
  className: string,
  children: node,
};

Icon.defaultProps = {
  className: null,
  color: undefined,
  size: '',
  children: null,
};

export { Icon };
