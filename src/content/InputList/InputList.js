import classnames from 'classnames';
import { func, string, node } from 'prop-types';
import React from 'react';
import * as olt from '@lightelligence/styles';

/**
 * Input list is a list of items, used as the body of a dropdown. Can be used
 * for any custom component
 *
 * This component uses a semantic `ul` html tag name and forwards refs
 *
 * The component also passes all other `props` to the underlying `ul` element
 */
export const InputList = React.forwardRef(
  ({ className, children, onChange, value, ...props }, ref) => (
    <ul ref={ref} {...props} className={classnames(olt.InputList, className)}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          active: child.props.value === value,
          onClick: onChange,
        }),
      )}
    </ul>
  ),
);

InputList.displayName = 'InputList';

InputList.propTypes = {
  /**
   * Forward an additional className to the underlying element
   */
  className: string,
  /**
   * Content of the element should always be consisted of
   * [InputListItem](/#/Components/InputListItem) components.
   */
  children: node,
  /**
   * Callback when the value of the input list was changed
   */
  onChange: func,
  /**
   * The current value of the input list
   */
  value: string,
};

InputList.defaultProps = {
  className: null,
  children: null,
  onChange: () => {},
  value: null,
};
