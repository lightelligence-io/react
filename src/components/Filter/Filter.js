import React from 'react';
import { string, bool, number, func, node } from 'prop-types';
// import classnames from 'classnames';
// import * as olt from '@lightelligence/styles';
// import { Description } from '../../content/Fonts';
import { V2Button } from '../V2Button';

const Filter = ({
  count,
  active,
  buttonLabel,
  content,
  open,
  onOpen,
  onApply,
  ...props
}) => {
  return (
    <V2Button iconRight="arrows-chevron-down" emphasis="secondary">
      {buttonLabel || 'Filter'}
    </V2Button>
  );
};

Filter.propTypes = {
  /**
   * ...
   */
  count: number,
  /**
   * ...
   */
  active: bool,
  /**
   * ...
   */
  buttonLabel: string.isRequired,
  /**
   * ...
   */
  content: node.isRequired,
  /**
   * ...
   */
  open: bool,
  /**
   * Callback, ...
   * @param a ...
   */
  onOpen: func,
  /**
   * Callback, ...
   * @param a ...
   */
  onApply: func,
};

Filter.defaultProps = {
  count: -1,
  active: false,
  open: false,
  onOpen: () => {},
  onApply: () => {},
};

export { Filter };
