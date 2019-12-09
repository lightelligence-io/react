import React from 'react';
import { render } from '@testing-library/react';

import { oltStyles } from '../..';

import { Card } from './Card';

const renderCard = (props) => {
  return render(<Card {...props} />);
};

describe('Card', () => {
  test('content is rendered', () => {
    const { getByText } = renderCard({
      children: 'Content',
    });
    getByText('Content');
  });

  test('has the corresponding Card class from styles', () => {
    const { getByTestId } = renderCard({
      children: 'Content',
      'data-testid': 'Card',
    });
    const card = getByTestId('Card');
    expect(card.classList.contains(oltStyles.Card)).toBe(true);
  });

  test('has the corresponding Content class from styles', () => {
    const { getByTestId } = renderCard({
      children: 'ContentText',
      contentProps: {
        'data-testid': 'Content',
      },
    });
    const card = getByTestId('Content');
    expect(card.classList.contains(oltStyles.CardContent)).toBe(true);
  });

  test('has the corresponding Header class from styles', () => {
    const { getByTestId } = renderCard({
      title: 'TitleText',
      headerProps: {
        'data-testid': 'Header',
      },
    });
    const card = getByTestId('Header');
    expect(card.classList.contains(oltStyles.CardHeader)).toBe(true);
  });

  test('has the corresponding Action class from styles', () => {
    const { getByTestId } = renderCard({
      action: 'ActionText',
      actionProps: {
        'data-testid': 'Action',
      },
    });
    const card = getByTestId('Action');
    expect(card.classList.contains(oltStyles.CardAction)).toBe(true);
  });

  test('has the corresponding Title class from styles', () => {
    const { getByText } = renderCard({
      title: 'TitleText',
    });
    const card = getByText('TitleText');
    expect(card.classList.contains(oltStyles.CardTitle)).toBe(true);
  });

  test('has the corresponding Desciption class from styles', () => {
    const { getByText } = renderCard({
      description: 'DescriptionText',
    });
    const card = getByText('DescriptionText');
    expect(card.classList.contains(oltStyles.CardDescription)).toBe(true);
  });

  test('edit adds edit class', () => {
    const { getByTestId } = renderCard({
      edit: true,
      'data-testid': 'Card',
    });
    const card = getByTestId('Card');
    expect(card.classList.contains(oltStyles.CardEdit)).toBe(true);
  });

  test('edit adds proximity class', () => {
    const { getByTestId } = renderCard({
      edit: true,
      'data-testid': 'Card',
    });
    const card = getByTestId('Card');
    expect(card.classList.contains(oltStyles.ActionButtonProximityArea)).toBe(
      true,
    );
  });

  test('edit adds correct edit button', () => {
    const { getByTestId } = renderCard({
      edit: true,
      'data-testid': 'Card',
      actionProps: {
        'data-testid': 'Action',
      },
      editProps: {
        'data-testid': 'Edit',
      },
    });
    const action = getByTestId('Action');
    expect(action.classList.contains(oltStyles.CardAction)).toBe(true);
    const edit = getByTestId('Edit');
    expect(edit.classList.contains(oltStyles.ActionButton)).toBe(true);
    expect(edit.classList.contains(oltStyles.ActionButtonIconRight)).toBe(true);
    expect(edit.classList.contains(oltStyles.IconEdit)).toBe(true);
    const label = edit.getElementsByClassName('olt-ActionButton-label')[0];
    expect(label).not.toBeUndefined();
  });
});
