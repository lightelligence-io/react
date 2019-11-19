import classnames from 'classnames';
import { bool, node, string, func, number } from 'prop-types';
import React, { useCallback } from 'react';
import * as olt from '@lightelligence/styles';

/**
 * List item for the [InputList](#/Components/InputList) Component
 *
 * This component uses a semantic `li` html tag name and forwards refs
 *
 * The component also passes all other `props` to the underlying `li` element
 */
export const InputListItem = React.forwardRef(
  (
    {
      className,
      children,
      active,
      onClick,
      onKeyPress,
      value,
      tabIndex,
      ...props
    },
    ref,
  ) => {
    const handleClick = useCallback((event) => onClick(value, event), [
      value,
      onClick,
    ]);
    const handleKeyPress = useCallback((event) => onKeyPress(value, event), [
      value,
      onKeyPress,
    ]);

    return (
      <li>
        <a
          role="button"
          ref={ref}
          tabIndex={tabIndex}
          onClick={handleClick}
          onKeyPress={handleKeyPress}
          className={classnames(
            olt.InputListLink,
            active && 'is-active',
            className,
          )}
          {...props}
        >
          {children}
        </a>
      </li>
    );
  },
);

InputListItem.displayName = 'InputListItem';

InputListItem.propTypes = {
  /**
   * Forward an additional className to the underlying element
   */
  className: string,
  /**
   * Content of the element. Can be any valid React node.
   */
  children: node,
  /**
   * The value of the item when it's being selected
   */
  value: string.isRequired,
  /**
   * Tab index
   *
   * @hidden
   */
  tabIndex: number,
  /**
   * Is the item currently active
   *
   * @hidden
   */
  active: bool,
  /**
   * Specifies what happens when the item is clicked
   *
   * @hidden
   */
  onClick: func,
  /**
   * Specifies what happens on key press
   *
   * @hidden
   */
  onKeyPress: func,
};

InputListItem.defaultProps = {
  className: null,
  children: null,
  active: false,
  onKeyPress: null,
  tabIndex: null,
  onClick: () => {},
};
