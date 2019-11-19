import React from 'react';
import * as olt from '@lightelligence/styles';
import { arrayOf, node, bool, string, oneOf } from 'prop-types';
import classnames from 'classnames';

export const BasicCardTable = ({
  children,
  selectable,
  layout,
  alwaysTable,
  className,
  largeCardPadding,
  tableLayoutFixed,
  ...other
}) => {
  const classes = classnames(
    olt.CardTable,
    largeCardPadding && olt.CardTableLargeCardPadding,
    layout === 'table' && olt.CardTableUseTableLayout,
    layout === 'flex' && olt.CardTableUseFlexLayout,
    selectable && olt.CardTableSelectable,
    alwaysTable && olt.CardTableAlwaysTable,
    tableLayoutFixed && olt.CardTableTableLayoutFixed,
    className,
  );
  return (
    <div className={classes} {...other}>
      <div className={olt.CardTableFrame}>{children}</div>
    </div>
  );
};

BasicCardTable.propTypes = {
  /**
   * `children` expects two nodes as children `BasicCardTableHead` and `BasicCardTableBody`.
   */
  children: arrayOf(node).isRequired,
  /**
   * When `true` every card is selectable and
   * has a hover effect.
   */
  selectable: bool,
  /**
   * Render mode of cards in table mode. `flex` means cards
   * are rendered with flex layout independent of each other.
   * When `layout` is `table`, all cards are rendered as table rows
   * and due to table rendering space distribution inside of rows
   * is always identical.
   */
  layout: oneOf(['flex', 'table']),
  /**
   * Renders this component always as a table regardless of the
   * available screen width. When `true` this component will never
   * use the list mode.
   */
  alwaysTable: bool,
  /**
   * Forward an additional className to the underlying component.
   */
  className: string,
  /**
   * Renders the card with large padding in list mode.
   */
  largeCardPadding: bool,
  /**
   * Uses fixed layout for tables. It only has an effect when layout is table.
   */
  tableLayoutFixed: bool,
};

BasicCardTable.defaultProps = {
  selectable: false,
  layout: 'flex',
  alwaysTable: false,
  className: undefined,
  largeCardPadding: false,
  tableLayoutFixed: false,
};
