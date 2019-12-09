import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { DynamicList } from './DynamicList';

const renderDynamicList = (props) =>
  render(
    <DynamicList
      listEntryProps={{
        'data-testid': 'listEntry',
      }}
      addButtonProps={{
        'data-testid': 'addButton',
      }}
      inputProps={{
        'data-testid': 'inputElement',
        label: 'Enter your data',
      }}
      deleteButtonProps={{
        'data-testid': 'deleteButton',
      }}
      submitButtonProps={{
        'data-testid': 'submitButton',
      }}
      data-testid="list"
      {...props}
    />,
  );

describe('Basic DynamicList', () => {
  test('renders the input element', () => {
    const { getByTestId, getByText } = renderDynamicList();
    getByTestId('inputElement');
    getByText('Enter your data');
  });
  test('renders the addButton', () => {
    const { getByTestId } = renderDynamicList();
    getByTestId('addButton');
  });
  test('renders a disabled add button', () => {
    const { getByTestId } = renderDynamicList();
    const addButton = getByTestId('addButton');
    expect(addButton.disabled).toBe(true);
  });
  test('does not render the deleteButton for only 1 element', () => {
    const { queryByTestId } = renderDynamicList();
    expect(queryByTestId('deleteButton')).toBeNull();
  });
  test('renders the submitButton', () => {
    const { getByTestId } = renderDynamicList();
    getByTestId('submitButton');
  });
  test('renders a disabled submit button', () => {
    const { getByTestId } = renderDynamicList();
    const submitButton = getByTestId('submitButton');
    expect(submitButton.disabled).toBe(true);
  });
});

describe('DynamicList with values', () => {
  test('renders an input element with the initial value', () => {
    const { getByTestId } = renderDynamicList({
      values: ['v1'],
    });
    const inputElement = getByTestId('inputElement');
    expect(inputElement.value).toBe('v1');
  });
  test('renders an input element for each value', () => {
    const values = ['v1', 'v2'];
    const { queryAllByTestId } = renderDynamicList({
      values,
    });
    const inputElements = queryAllByTestId('inputElement');
    values.forEach((v) => {
      expect(inputElements.findIndex((el) => el.value === v)).toBeGreaterThan(
        -1,
      );
    });
  });
  test('renders the deleteButton for >1 element', () => {
    const { getByTestId } = renderDynamicList({
      values: ['v1', 'v2'],
    });
    getByTestId('deleteButton');
  });
});

describe('DynamicList - Add, Delete, Submit, Change', () => {
  test('enables the add button after input and it works', () => {
    const { getByTestId, queryAllByTestId } = renderDynamicList();
    const inputElementsBefore = queryAllByTestId('inputElement');
    expect(inputElementsBefore.length).toBe(1);
    fireEvent.change(inputElementsBefore[0], { target: { value: 'v1' } });
    const addButton = getByTestId('addButton');
    expect(addButton.disabled).toBe(false);
    fireEvent.click(addButton);
    const inputElementsAfter = queryAllByTestId('inputElement');
    expect(inputElementsAfter.length).toBe(2);
  });
  test('the deleteButton works', () => {
    const { getByTestId, queryAllByTestId } = renderDynamicList({
      values: ['v1', 'v2'],
    });
    const inputElementsBefore = queryAllByTestId('inputElement');
    expect(inputElementsBefore.length).toBe(2);
    const deleteButton = getByTestId('deleteButton');
    fireEvent.click(deleteButton);
    const inputElementsAfter = queryAllByTestId('inputElement');
    expect(inputElementsAfter.length).toBe(1);
  });
  test('enables the submit button after input and it works', () => {
    const onSubmit = jest.fn();
    const { getByTestId } = renderDynamicList({
      onSubmit,
    });
    const inputElement = getByTestId('inputElement');
    fireEvent.change(inputElement, { target: { value: 'v1' } });
    const submitButton = getByTestId('submitButton');
    expect(submitButton.disabled).toBe(false);
    fireEvent.click(submitButton);
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
  test('fires the onChange event for text input', () => {
    const onChange = jest.fn();
    const { getByTestId } = renderDynamicList({
      onChange,
    });
    const inputElement = getByTestId('inputElement');
    fireEvent.change(inputElement, { target: { value: 'v1' } });
    expect(onChange).toHaveBeenCalledWith(['v1']);
  });
  test('fires the onChange event for add', () => {
    const onChange = jest.fn();
    const { getByTestId } = renderDynamicList({
      onChange,
    });
    const inputElement = getByTestId('inputElement');
    fireEvent.change(inputElement, { target: { value: 'v1' } });
    const addButton = getByTestId('addButton');
    fireEvent.click(addButton);
    expect(onChange).toHaveBeenCalledTimes(2);
    expect(onChange).toHaveBeenCalledWith(['v1', '']);
  });
  test('fires the onChange event for delete', () => {
    const onChange = jest.fn();
    const { getByTestId } = renderDynamicList({
      values: ['v1', 'v2'],
      onChange,
    });
    const deleteButton = getByTestId('deleteButton');
    fireEvent.click(deleteButton);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(['v2']);
  });
});

describe('DynamicList - min / max', () => {
  test('min disables delete', () => {
    const { queryAllByTestId } = renderDynamicList({
      values: ['v1', 'v2'],
      minItems: 3,
    });
    const deleteButtons = queryAllByTestId('deleteButton');
    deleteButtons.forEach((button) => expect(button.disabled).toBe(true));
  });
  test('min disables submit', () => {
    const { getByTestId } = renderDynamicList({
      minItems: 2,
    });
    const submitButton = getByTestId('submitButton');
    expect(submitButton.disabled).toBe(true);
  });
  test('max disables add', () => {
    const { getByTestId } = renderDynamicList({
      values: ['v1', 'v2'],
      maxItems: 2,
    });
    const addButton = getByTestId('addButton');
    expect(addButton.disabled).toBe(true);
  });
});
