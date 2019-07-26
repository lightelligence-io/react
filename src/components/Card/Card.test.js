import React from 'react';
import { render } from 'react-testing-library';

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
    expect(card.classList.contains(oltStyles.Card)).toBeTruthy();
  });

  test('has the corresponding Content class from styles', () => {
    const { getByTestId } = renderCard({
      children: 'ContentText',
      contentProps: {
        'data-testid': 'Content',
      },
    });
    const card = getByTestId('Content');
    expect(card.classList.contains(oltStyles.CardContent)).toBeTruthy();
  });

  test('has the corresponding Header class from styles', () => {
    const { getByTestId } = renderCard({
      title: 'TitleText',
      headerProps: {
        'data-testid': 'Header',
      },
    });
    const card = getByTestId('Header');
    expect(card.classList.contains(oltStyles.CardHeader)).toBeTruthy();
  });

  test('has the corresponding Action class from styles', () => {
    const { getByTestId } = renderCard({
      action: 'ActionText',
      actionProps: {
        'data-testid': 'Action',
      },
    });
    const card = getByTestId('Action');
    expect(card.classList.contains(oltStyles.CardAction)).toBeTruthy();
  });

  test('has the corresponding Title class from styles', () => {
    const { getByText } = renderCard({
      title: 'TitleText',
    });
    const card = getByText('TitleText');
    expect(card.classList.contains(oltStyles.CardTitle)).toBeTruthy();
  });

  test('has the corresponding Desciption class from styles', () => {
    const { getByText } = renderCard({
      description: 'DescriptionText',
    });
    const card = getByText('DescriptionText');
    expect(card.classList.contains(oltStyles.CardDescription)).toBeTruthy();
  });
});
