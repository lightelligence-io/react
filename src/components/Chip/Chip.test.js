import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import { oltStyles } from '../..';

import { Chip } from './Chip';

const renderComponent = (props) => {
  return render(<Chip {...props} />);
};

describe('Chip', () => {
  test('triggers onClick when not disabled and selectable', () => {
    const onClick = jest.fn();
    const { getByText } = renderComponent({
      onClick,
      selectable: true,
      children: 'Chip',
    });

    const chip = getByText('Chip');

    fireEvent.click(chip);

    expect(onClick).toHaveBeenCalled();
  });

  test('should forward disabled to underlying button', () => {
    const { getByText } = renderComponent({
      disabled: true,
      selectable: true,
      children: 'Chip',
    });

    const chip = getByText('Chip');
    expect(chip.disabled).toBe(true);
  });

  test("doesn't trigger onClick when disabled", () => {
    const onClick = jest.fn();
    const { getByText } = renderComponent({
      onClick,
      disabled: true,
      children: 'Chip',
    });

    const chip = getByText('Chip');

    fireEvent.click(chip);

    expect(onClick).not.toHaveBeenCalled();
  });

  test('forwards className', () => {
    const { getByText } = renderComponent({
      className: 'myClass',
      children: 'Chip',
    });

    const chip = getByText('Chip');
    expect(chip.classList.contains('myClass')).toBeTruthy();
  });

  test('correctly sets the css-modifier for colors', () => {
    const { getByText } = renderComponent({
      children: 'Chip',
      color: 'primary',
    });
    const chip = getByText('Chip');
    expect(chip.classList.contains(oltStyles.ChipPrimary)).toBeTruthy();
  });

  test('has the corresponding Chip class from styles', () => {
    const { getByText } = renderComponent({
      children: 'Chip',
    });
    const chip = getByText('Chip');
    expect(chip.classList.contains(oltStyles.Chip)).toBeTruthy();
  });

  test('correctly sets the css-modifier for bubble', () => {
    const { getByText } = renderComponent({
      children: 'Chip',
      color: 'primary',
      bubble: 1,
    });
    const chip = getByText('Chip');
    expect(chip.classList.contains(oltStyles.ChipWithBubble)).toBeTruthy();
  });

  test('correctly sets the css-modifier for bubbleIcon', () => {
    const { getByText } = renderComponent({
      children: 'Chip',
      color: 'primary',
      bubbleIcon: 'add',
    });
    const chip = getByText('Chip');
    expect(chip.classList.contains(oltStyles.ChipWithBubble)).toBeTruthy();
  });

  test('correctly sets the css-modifier for bubbleColor', () => {
    const { getByText } = renderComponent({
      children: 'Chip',
      color: 'primary',
      bubbleColor: 'warning',
      bubble: 1,
    });
    const chip = getByText('Chip');
    expect(
      chip
        .querySelector(`.${oltStyles.ChipBubble}`)
        .classList.contains(oltStyles.ChipBubbleWarning),
    ).toBeTruthy();
  });

  test('correctly sets the data-icon for bubbleIcon', () => {
    const { getByText } = renderComponent({
      children: 'Chip',
      bubbleIcon: 'add',
    });
    const chip = getByText('Chip');
    expect(
      chip.querySelector(`.${oltStyles.ChipBubble}`).getAttribute('data-icon'),
    ).toBe('add');
  });

  test('correctly sets data-icon-left for iconLeft', () => {
    const { getByText } = renderComponent({
      children: 'Chip',
      iconLeft: 'add',
    });
    const chip = getByText('Chip');
    expect(chip.getAttribute('data-icon-left')).toBe('add');
  });
  test('correctly sets data-icon-right for iconRight', () => {
    const { getByText } = renderComponent({
      children: 'Chip',
      iconRight: 'add',
    });
    const chip = getByText('Chip');
    expect(chip.getAttribute('data-icon-right')).toBe('add');
  });
});
