import React from 'react';
import { render, fireEvent } from '@testing-library/react';

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
    expect(chip.classList.contains('myClass')).toBe(true);
  });

  test('correctly sets the css-modifier for colors', () => {
    const { getByText } = renderComponent({
      children: 'Chip',
      color: 'primary',
    });
    const chip = getByText('Chip');
    expect(chip.classList.contains(oltStyles.ChipPrimary)).toBe(true);
  });

  test('has the corresponding Chip class from styles', () => {
    const { getByText } = renderComponent({
      children: 'Chip',
    });
    const chip = getByText('Chip');
    expect(chip.classList.contains(oltStyles.Chip)).toBe(true);
  });

  test('correctly sets the css-modifier for bubble', () => {
    const { getByText } = renderComponent({
      children: 'Chip',
      color: 'primary',
      bubble: 1,
    });
    const chip = getByText('Chip');
    expect(chip.classList.contains(oltStyles.ChipWithBubble)).toBe(true);
  });

  test('correctly sets the css-modifier for bubbleIcon', () => {
    const { getByText } = renderComponent({
      children: 'Chip',
      color: 'primary',
      bubbleIcon: 'add',
    });
    const chip = getByText('Chip');
    expect(chip.classList.contains(oltStyles.ChipWithBubble)).toBe(true);
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
    ).toBe(true);
  });

  test('correctly sets the  css-modifier  for bubbleIcon', () => {
    const bubbleIcon = 'add-default';
    const { getByText } = renderComponent({
      children: 'Chip',
      bubbleIcon,
    });
    const chip = getByText('Chip');
    expect(
      chip
        .querySelector(`.${oltStyles.ChipBubble}`)
        .classList.contains(oltStyles.ChipBubbleIcon),
    ).toBe(true);
    expect(
      chip
        .querySelector(`.${oltStyles.ChipBubble}`)
        .classList.contains(`olt-Icon-${bubbleIcon}`),
    ).toBe(true);
  });

  test('correctly sets css-modifier for iconLeft', () => {
    const iconLeft = 'add-default';
    const { getByText } = renderComponent({
      children: 'Chip',
      iconLeft,
    });
    const chip = getByText('Chip');
    expect(chip.classList.contains(oltStyles.ChipIconLeft)).toBe(true);
    expect(chip.classList.contains(`olt-Icon-${iconLeft}`)).toBe(true);
  });
  test('correctly sets css-modifier for iconRight', () => {
    const iconRight = 'add-default';
    const { getByText } = renderComponent({
      children: 'Chip',
      iconRight,
    });
    const chip = getByText('Chip');
    expect(chip.classList.contains(oltStyles.ChipIconRight)).toBe(true);
    expect(chip.classList.contains(`olt-Icon-${iconRight}`)).toBe(true);
  });
});
