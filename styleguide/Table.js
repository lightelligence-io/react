import PropTypes from 'prop-types';
import React from 'react';
import {
  BasicCardTableBody,
  BasicCardTable,
  BasicCardTableHead,
  BasicCardTableCardItem,
  BasicCardTableCard,
  BasicCardTableHeadItem,
} from '../src';

const TableRenderer = ({ columns, rows, getRowKey }) => (
  <BasicCardTable alwaysTable layout="table">
    <BasicCardTableHead>
      {columns.map(({ caption }) => (
        <BasicCardTableHeadItem key={caption}>{caption}</BasicCardTableHeadItem>
      ))}
    </BasicCardTableHead>
    <BasicCardTableBody>
      {rows.map((row) => (
        <BasicCardTableCard key={getRowKey(row)}>
          {columns.map(({ caption, render }, index) => (
            <BasicCardTableCardItem key={caption} title={caption}>
              {render(row)}
            </BasicCardTableCardItem>
          ))}
        </BasicCardTableCard>
      ))}
    </BasicCardTableBody>
  </BasicCardTable>
);

TableRenderer.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      caption: PropTypes.string.isRequired,
      render: PropTypes.func.isRequired,
    }),
  ).isRequired,
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  getRowKey: PropTypes.func.isRequired,
};

export default TableRenderer; // eslint-disable-line
