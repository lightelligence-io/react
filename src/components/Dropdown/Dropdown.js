import classnames from 'classnames';
import { string, oneOfType, shape, oneOf, arrayOf, func } from 'prop-types';
import React, { useCallback, useState } from 'react';
import * as olt from '@lightelligence/styles';
import { Label } from '../../controls/Label';
import { InputListItem, InputList } from '../InputList';

export const Dropdown = React.forwardRef(
  (
    {
      className,
      label,
      children,
      value,
      onChange,
      labelProps,
      selectedContentProps,
      inputListProps,
      ...props
    },
    ref,
  ) => {
    const [isOpen, setOpen] = useState(false);

    const onClick = useCallback(() => {
      setOpen(!isOpen);
    }, [isOpen, setOpen]);

    const selectedChild = React.Children.toArray(children).find(
      (child) => child.props.value === value,
    );
    const selectedElement = selectedChild && React.cloneElement(selectedChild);

    return (
      <Label
        label={label}
        value={(isOpen ? '' : value) || ''}
        onClick={onClick}
        {...labelProps}
      >
        <div
          ref={ref}
          {...props}
          className={classnames(
            olt.Dropdown,
            isOpen && 'is-open',
            selectedElement && olt.DropdownSelected,
            className,
          )}
        >
          {selectedElement && (
            <div
              className={classnames(olt.DropdownSelectedContent)}
              style={{ minHeight: 'auto' }}
              {...selectedContentProps}
            >
              {selectedElement.props.children}
            </div>
          )}
          <InputList
            value={value}
            onChange={onChange}
            className={classnames(olt.DropdownContent)}
            {...inputListProps}
          >
            {children}
          </InputList>
        </div>
      </Label>
    );
  },
);

Dropdown.displayName = 'Dropdown';

Dropdown.propTypes = {
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
  /**
   * Additional label props
   */
  labelProps: shape({}),
  /**
   * Additional selected content props
   */
  selectedContentProps: shape({}),
  /**
   * Additional input list props
   */
  inputListProps: shape({}),
};

Dropdown.defaultProps = {
  className: null,
  children: null,
  value: null,
  labelProps: {},
  selectedContentProps: {},
  inputListProps: {},
  onChange: () => {},
};
