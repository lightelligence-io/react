import React, { cloneElement, useMemo } from 'react';
import { shape, node, func, arrayOf, any, string } from 'prop-types';
import olt from '@lightelligence/styles';
import {
  BasicDataCards,
  BasicDataCardsHead,
  BasicDataCardsBody,
  BasicDataCardsCard,
} from '../BasicDataCards';
import { BasicDataCardsHeadItem } from '../BasicDataCards/BasicDataCardsHeadItem';

export const DataCards = ({
  fields,
  rows,
  children,
  onClick,
  cardProps,
  ...other
}) => {
  const cardsProps = {
    selectable: !!onClick,
    ...other,
  };
  const fieldMap = useMemo(
    () => fields.reduce((obj, field) => ({ ...obj, [field.key]: field }), {}),
    [fields],
  );

  const headItems = useMemo(
    () =>
      fields.map(({ key, label, ...otherProps }) => (
        <BasicDataCardsHeadItem key={key} {...otherProps}>
          {label}
        </BasicDataCardsHeadItem>
      )),
    [fields],
  );
  const handleCardClick = useMemo(
    () =>
      onClick &&
      ((event) => {
        const cardElement = event.target.closest(`.${olt.DataCardsCard}`);
        const index = [...cardElement.parentNode.children].indexOf(cardElement);
        const row = rows[index];
        onClick({ index, row });
      }),
    [rows, onClick],
  );
  const childNodes = React.Children.toArray(children);

  const cards = rows.map((row, cardIndex) => (
    <BasicDataCardsCard
      onClick={handleCardClick}
      // eslint-disable-next-line react/no-array-index-key
      key={`card-${cardIndex}`}
      {...cardProps}
    >
      {childNodes.map((item, itemIndex) => {
        if (!item) return item;
        const { field: fieldKey } = item.props;

        const key = `${fieldKey}-${cardIndex}-${itemIndex}`;
        const field = fieldMap[fieldKey];

        return cloneElement(item, {
          key,
          data: {
            field,
            row,
            cardIndex,
            itemIndex,
          },
          ...row.props,
        });
      })}
    </BasicDataCardsCard>
  ));

  return (
    <BasicDataCards {...cardsProps}>
      <BasicDataCardsHead>{headItems}</BasicDataCardsHead>
      <BasicDataCardsBody>{cards}</BasicDataCardsBody>
    </BasicDataCards>
  );
};

DataCards.propTypes = {
  /**
   * An array of objects with at least a `key` and a `label` which is used
   * as a data source to create the data cards head and it's head items.
   * All other properties of a field are forwarded to the
   *  underlying `BasicDataCardsHeadItem` component.
   */
  fields: arrayOf(shape({ key: string.isRequired, label: node.isRequired }))
    .isRequired,
  /**
   * The underlying data source which is used to render the individual cards of this
   * component.
   */
  rows: arrayOf(any).isRequired,
  /**
   * This function is called when a card is clicked. It receives an object which contains
   * the clicked `index` and the underlying `row`-object.
   */
  onClick: func,
  /**
   * An arbitrary number of `DataCardsItem` components, where each represents an item inside of
   * a every card.
   */
  children: node.isRequired,
  /**
   * Properties for the constructed cards.
   */
  cardProps: shape({}),
};

DataCards.defaultProps = {
  onClick: undefined,
  cardProps: undefined,
};
