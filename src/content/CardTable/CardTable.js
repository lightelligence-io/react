import React, { cloneElement, useMemo } from 'react';
import { shape, node, func, arrayOf, any, string } from 'prop-types';
import olt from '@lightelligence/styles';
import {
  BasicCardTable,
  BasicCardTableHead,
  BasicCardTableBody,
  BasicCardTableCard,
} from '../BasicCardTable';
import { BasicCardTableHeadItem } from '../BasicCardTable/BasicCardTableHeadItem';

export const CardTable = ({
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
        <BasicCardTableHeadItem key={key} {...otherProps}>
          {label}
        </BasicCardTableHeadItem>
      )),
    [fields],
  );
  const handleCardClick = useMemo(
    () =>
      onClick &&
      ((event) => {
        const cardElement = event.target.closest(`.${olt.CardTableCard}`);
        const index = [...cardElement.parentNode.children].indexOf(cardElement);
        const row = rows[index];
        onClick({ index, row });
      }),
    [rows, onClick],
  );
  const childNodes = React.Children.toArray(children);

  const cards = rows.map((row, cardIndex) => (
    <BasicCardTableCard
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
    </BasicCardTableCard>
  ));

  return (
    <BasicCardTable {...cardsProps}>
      <BasicCardTableHead>{headItems}</BasicCardTableHead>
      <BasicCardTableBody>{cards}</BasicCardTableBody>
    </BasicCardTable>
  );
};

CardTable.propTypes = {
  /**
   * An array of objects with at least a `key` and a `label` which is used
   * as a data source to create the data cards head and it's head items.
   * All other properties of a field are forwarded to the
   *  underlying `BasicCardTableHeadItem` component.
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
   * An arbitrary number of `CardTableItem` components, where each represents an item inside of
   * a every card.
   */
  children: node.isRequired,
  /**
   * Properties for the constructed cards.
   */
  cardProps: shape({}),
};

CardTable.defaultProps = {
  onClick: undefined,
  cardProps: undefined,
};
