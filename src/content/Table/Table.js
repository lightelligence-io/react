import React, { PureComponent, cloneElement } from 'react';
import { arrayOf, element, object, string, bool, func } from 'prop-types';
import classnames from 'classnames';

import { OLT_NAMESPACE } from '../../constants';

class Table extends PureComponent {
  static propTypes = {
    header: element,
    className: string,
    selectable: bool,
    rows: arrayOf(object).isRequired, // eslint-disable-line
    children: arrayOf(element).isRequired,
    onSelect: func,
    justify: bool,
  };

  static defaultProps = {
    selectable: false,
    header: null,
    className: '',
    onSelect: null,
    justify: false,
  };

  handleRowClick = (event) => {
    const { selectable, onSelect, rows } = this.props;
    const rowElement = event.target.closest('tr');
    const index = [...rowElement.parentNode.children].indexOf(rowElement);
    const row = rows[index];

    selectable && onSelect && onSelect(row);
  };

  renderRow = (row, rowIndex) => {
    const { children } = this.props;

    return (
      <tr
        className={classnames(
          `${OLT_NAMESPACE}Table-row`,
          `${OLT_NAMESPACE}Table-row--selectable`,
        )}
        key={rowIndex}
        onClick={this.handleRowClick}
      >
        {children.map((cell, cellIndex) => {
          if (!cell) return cell;

          const { field } = cell.props;
          const key = `${field}-${rowIndex}-${cellIndex}`; // eslint-disable-line

          return cloneElement(cell, {
            key,
            field,
            row,
            rowIndex,
            cellIndex,
          });
        })}
      </tr>
    );
  };

  render() {
    const {
      header,
      rows,
      className,
      selectable,
      justify,
      ...props
    } = this.props;
    const base = `${OLT_NAMESPACE}Table`;

    return (
      <div className={`${OLT_NAMESPACE}u-overflowXAuto`}>
        <table
          className={classnames(
            base,
            selectable && `${base}--selectable`,
            justify && `${base}--justify`,
          )}
          {...props}
        >
          {header}
          <tbody className={`${base}-body`}>{rows.map(this.renderRow)}</tbody>
        </table>
      </div>
    );
  }
}

export { Table };
