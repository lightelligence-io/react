import React, { useCallback } from 'react';
import classnames from 'classnames';
import { bool, func, string, node, oneOf } from 'prop-types';
import { pascalize } from 'humps';
import * as olt from '@lightelligence/styles';

const Chip = ({
  iconLeft,
  iconRight,
  className,
  children,
  bubble,
  bubbleIcon,
  bubbleColor,
  color,
  selectable,
  onClick,
  disabled,
  ...props
}) => {
  const handleClick = useCallback(
    (e) => {
      if (selectable) {
        onClick(e);
      }
    },
    [selectable, onClick],
  );

  const Element = selectable ? 'button' : 'span';

  return (
    <Element
      {...props}
      {...(selectable ? { disabled } : {})}
      onClick={handleClick}
      className={classnames(
        olt.Chip,
        (bubble || bubbleIcon) && olt.ChipWithBubble,
        disabled && olt.isDisabled,
        onClick && olt.ChipSelectable,
        color && olt[`Chip${pascalize(color)}`],
        className,
        iconLeft && olt[`Icon${pascalize(iconLeft)}`],
        iconLeft && olt.ChipIconLeft,
        iconRight && olt[`Icon${pascalize(iconRight)}`],
        iconRight && olt.ChipIconRight,
      )}
    >
      {children}
      {(bubble || bubbleIcon) && (
        <span
          className={classnames(
            olt.ChipBubble,
            bubbleColor && olt[`ChipBubble${pascalize(bubbleColor)}`],
            bubbleIcon && olt[`Icon${pascalize(bubbleIcon)}`],
            bubbleIcon && olt.ChipBubbleIcon,
          )}
        >
          {bubble}
        </span>
      )}
    </Element>
  );
};

Chip.propTypes = {
  iconLeft: string,
  iconRight: string,
  bubbleIcon: string,
  bubble: node,
  bubbleColor: oneOf(['info', 'success', 'warning', 'error']),
  className: string,
  color: oneOf([
    'default',
    'light',
    'dark',
    'primary',
    'error',
    'success',
    'info',
  ]),
  children: node,
  selectable: bool,
  disabled: bool,
  onClick: func,
};

Chip.defaultProps = {
  bubbleIcon: undefined,
  iconLeft: undefined,
  iconRight: undefined,
  disabled: false,
  bubbleColor: undefined,
  bubble: undefined,
  className: null,
  children: null,
  selectable: false,
  onClick: null,
  color: undefined,
};

export { Chip };
