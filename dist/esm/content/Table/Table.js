import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { PureComponent, cloneElement } from 'react';
import { arrayOf, element, object, string, bool, func } from 'prop-types';
import classnames from 'classnames';
import { OLT_NAMESPACE } from '../../constants';

class Table extends PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleRowClick", event => {
      const {
        selectable,
        onSelect,
        rows
      } = this.props;
      const rowElement = event.target.closest('tr');
      const index = [...rowElement.parentNode.children].indexOf(rowElement);
      const row = rows[index];
      selectable && onSelect && onSelect(row);
    });

    _defineProperty(this, "renderRow", (row, rowIndex) => {
      const {
        children
      } = this.props;
      return React.createElement("tr", {
        className: classnames(`${OLT_NAMESPACE}Table-row`, `${OLT_NAMESPACE}Table-row--selectable`),
        key: rowIndex,
        onClick: this.handleRowClick
      }, children.map((cell, cellIndex) => {
        if (!cell) return cell;
        const {
          field
        } = cell.props;
        const key = `${field}-${rowIndex}-${cellIndex}`; // eslint-disable-line

        return cloneElement(cell, {
          key,
          field,
          row,
          rowIndex,
          cellIndex
        });
      }));
    });
  }

  render() {
    const _this$props = this.props,
          {
      header,
      rows,
      className,
      selectable,
      justify
    } = _this$props,
          props = _objectWithoutProperties(_this$props, ["header", "rows", "className", "selectable", "justify"]);

    const base = `${OLT_NAMESPACE}Table`;
    return React.createElement("div", {
      className: `${OLT_NAMESPACE}u-overflowXAuto`
    }, React.createElement("table", _extends({
      className: classnames(base, selectable && `${base}--selectable`, justify && `${base}--justify`)
    }, props), header, React.createElement("tbody", {
      className: `${base}-body`
    }, rows.map(this.renderRow))));
  }

}

_defineProperty(Table, "propTypes", {
  header: element,
  className: string,
  selectable: bool,
  rows: arrayOf(object).isRequired,
  // eslint-disable-line
  children: arrayOf(element).isRequired,
  onSelect: func,
  justify: bool
});

_defineProperty(Table, "defaultProps", {
  selectable: false,
  header: null,
  className: '',
  onSelect: null,
  justify: false
});

export { Table };