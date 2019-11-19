import React, { useState, useEffect, useCallback } from 'react';
import * as olt from '@lightelligence/styles';
import { shape, func, string, number, arrayOf, any } from 'prop-types';
import classnames from 'classnames';

import { Input } from '../../controls/Input';
import { Button } from '../../components/Button';
import { ActionButton } from '../../components/ActionButton';

export const DynamicList = ({
  maxItems,
  minItems,
  inputElement,
  listEntryProps,
  addButtonProps,
  inputProps,
  deleteButtonProps,
  submitButtonProps,
  onChange,
  onSubmit,
  submitLabel,
  values,
  className,
  ...other
}) => {
  const element = inputElement || Input;

  const [elements, setElements] = useState([]);
  const [internalValues, setInternalValues] = useState([]);

  const resetFields = useCallback(() => {
    const numberOfItemsToCreate = Math.max(minItems || 1, values.length || 1);
    const elementsForInitialValues = Array.from(
      { length: numberOfItemsToCreate },
      () => element,
    );
    setElements(elementsForInitialValues);
    setInternalValues(values);
  }, [element, values, minItems]);

  // create the child elements
  useEffect(() => {
    resetFields();
  }, [resetFields, element, values, minItems]);

  const callOnChange = (el, param) => {
    if (el && typeof el.onChange === 'function') {
      el.onChange(param);
    }
  };

  // on change : remember the new value, call onChange prop and call elements on change
  const handleTextInput = (index) => (e) => {
    const { value } = e.target;
    const newValues = [...internalValues];
    newValues[index] = value;
    setInternalValues(newValues);
    if (typeof onChange === 'function') onChange(newValues);
    callOnChange(elements[index], value);
  };

  // on submit : call the callback and reset the input fields
  const handleSubmit = () => {
    if (typeof onSubmit === 'function') onSubmit(internalValues);
    resetFields();
  };

  const addElement = () => {
    setElements([...elements, element]);
    const newValues = [...internalValues, ''];
    setInternalValues(newValues);
    if (typeof onChange === 'function') onChange(newValues);
    const index = newValues.length - 1;
    callOnChange(elements[index], '');
  };

  const removeElement = (index) => {
    const newElements = [...elements];
    newElements.splice(index, 1);
    setElements(newElements);
    const newValues = [...internalValues];
    newValues.splice(index, 1);
    setInternalValues(newValues);
    onChange(newValues);
    callOnChange(elements[index], null);
  };

  const {
    className: listEntryClassName,
    ...otherListEntryProps
  } = listEntryProps;
  const {
    className: addButtonClassName,
    ...otherAddButtonProps
  } = addButtonProps;
  const { className: inputClassName, ...otherInputProps } = inputProps;
  const {
    className: deleteButtonClassName,
    ...otherDeleteButtonProps
  } = deleteButtonProps;
  const {
    className: submitButtonClassName,
    ...otherSubmitButtonProps
  } = submitButtonProps;

  return (
    <div
      className={classnames(olt.uDisplayFlex, olt.uFlexColumn, className)}
      {...other}
    >
      {elements.map((Element, index, allElements) => (
        <div
          className={classnames(
            olt.uDisplayFlex,
            olt.uFlexRow,
            olt.uFlexNowrap,
            listEntryClassName,
          )}
          // eslint-disable-next-line react/no-array-index-key
          key={`${values[index]}-${index}`}
          {...otherListEntryProps}
        >
          {index === allElements.length - 1 ? (
            <ActionButton
              className={classnames(
                olt.uMarginTop2,
                olt.uMarginRight2,
                addButtonClassName,
              )}
              iconLeft="add-outline"
              standalone
              buttonType={internalValues[index] ? 'primary' : 'default'}
              {...otherAddButtonProps}
              disabled={
                !internalValues[index] ||
                (maxItems !== null &&
                  maxItems !== undefined &&
                  index + 1 >= maxItems)
              }
              onClick={() => internalValues[index] && addElement()}
            />
          ) : (
            <div className={classnames(olt.uPaddingRight5)} />
          )}
          <Element
            className={inputClassName}
            value={internalValues[index]}
            {...otherInputProps}
            onChange={handleTextInput(index)}
          />
          {index !== allElements.length - 1 ? (
            <ActionButton
              className={classnames(
                olt.uMarginTop2,
                olt.uMarginLeft2,
                deleteButtonClassName,
              )}
              iconLeft="delete"
              standalone
              buttonType="primary"
              {...otherDeleteButtonProps}
              disabled={
                !internalValues[index] ||
                (minItems !== null &&
                  minItems !== undefined &&
                  internalValues.length <= minItems)
              }
              onClick={() => removeElement(index)}
            />
          ) : null}
        </div>
      ))}
      <Button
        className={classnames(olt.uMarginTop3, submitButtonClassName)}
        style={{ alignSelf: 'flex-end' }}
        buttonType="action"
        onClick={handleSubmit}
        {...otherSubmitButtonProps}
        disabled={
          internalValues.length === 0 ||
          (internalValues.length === 1 && internalValues[0].trim() === '') ||
          internalValues.reduce(
            (allSet, v, index) =>
              allSet || (v.trim() === '' && index < (minItems || 0)),
            false,
          )
        }
      >
        {submitLabel}
      </Button>
    </div>
  );
};

DynamicList.propTypes = {
  /**
   * Props for the input row (with add / remove button and input element as childs)
   */
  listEntryProps: shape({ className: string }),
  /**
   * Props for the add button
   */
  addButtonProps: shape({ className: string }),
  /**
   * Props for the input element. Pass the label for youinput here. Each input will have the same label.
   */
  inputProps: shape({ className: string }),
  /**
   * Props for the delete button
   */
  deleteButtonProps: shape({ className: string }),
  /**
   * Callback on user input. it is also called when adding / deleting input elements
   * @param array of input values
   */
  onChange: func,
  /**
   * Props for the submit button
   */
  submitButtonProps: shape({ className: string }),
  /**
   * Label for the submit button
   */
  submitLabel: string,
  /**
   * Callback when the user submits the list
   * @param array of input values
   */
  onSubmit: func,
  /**
   * Initial values to set. The number also determines the number of the initially available input fields.
   */
  values: arrayOf(any),
  /**
   * Set the maximal number of items the user can enter
   */
  maxItems: number,
  /**
   * Set the minimal number of items the user has to enter
   */
  minItems: number,
  /**
   * Pass the element class you want to use for your input elements
   */
  inputElement: func,
  /**
   * Forward an additional className to the underlying component.
   */
  className: string,
};

DynamicList.defaultProps = {
  maxItems: undefined,
  minItems: undefined,
  inputElement: undefined,
  listEntryProps: {},
  addButtonProps: {},
  inputProps: {},
  deleteButtonProps: {},
  submitButtonProps: {},
  onChange: () => {},
  onSubmit: () => {},
  submitLabel: 'Ok',
  values: [],
  className: undefined,
};
