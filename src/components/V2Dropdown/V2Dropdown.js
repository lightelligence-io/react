import classnames from 'classnames';
import { string, oneOfType, shape, oneOf, arrayOf, func } from 'prop-types';
import React, { useCallback, useState } from 'react';
import * as olt from '@lightelligence/styles';
import { V2Label } from '../../controls/V2Label';
import { InputListItem, InputList } from '../InputList';

export const V2Dropdown = React.forwardRef(
  ({ className, label, children, value, onChange, ...props }, ref) => {
    const [isOpen, setOpen] = useState(false);

    const onClick = useCallback(() => {
      setOpen(!isOpen);
    }, [isOpen, setOpen]);

    const selectedChild = React.Children.toArray(children).find(
      (child) => child.props.value === value,
    );
    const selectedElement = selectedChild && React.cloneElement(selectedChild);

    return (
      <V2Label
        label={label}
        value={(isOpen ? '' : value) || ''}
        onClick={onClick}
      >
        <div
          ref={ref}
          {...props}
          className={classnames(
            olt.V2Dropdown,
            isOpen && 'is-open',
            selectedElement && olt.V2DropdownSelected,
            className,
          )}
        >
          {selectedElement && (
            <div className={classnames(olt.V2DropdownSelectedContent)}>
              {selectedElement.props.children}
            </div>
          )}
          <div className={classnames(olt.V2DropdownContent)}>
            <InputList value={value} onChange={onChange}>
              {children}
            </InputList>
          </div>
        </div>
      </V2Label>
    );
  },
);

V2Dropdown.displayName = 'V2Dropdown';

V2Dropdown.propTypes = {
  /**
   * The floating label
   */
  label: string.isRequired,
  /**
   * Forward an additional className to the underlying element
   */
  className: string,
  /**
   * Content of the element should always be consisted of
   * [InputListItem](/#/Components/InputListItem) components.
   */
  children: oneOfType([
    shape({ type: oneOf([InputListItem]) }),
    arrayOf(shape({ type: oneOf([InputListItem]) })),
  ]),
  /**
   * The current value of the input list
   */
  value: string,
  /**
   * Callback when the value of the input list was changed
   */
  onChange: func,
};

V2Dropdown.defaultProps = {
  className: null,
  children: null,
  value: null,
  onChange: () => {},
};
