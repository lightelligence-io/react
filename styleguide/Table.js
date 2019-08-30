import PropTypes from 'prop-types';
import React from 'react';
import {
  BasicDataCardsBody,
  BasicDataCards,
  BasicDataCardsHead,
  BasicDataCardsCardItem,
  BasicDataCardsCard,
  BasicDataCardsHeadItem,
} from '../src';

const TableRenderer = ({ columns, rows, getRowKey }) => (
  <BasicDataCards alwaysTable layout="table">
    <BasicDataCardsHead>
      {columns.map(({ caption }) => (
        <BasicDataCardsHeadItem key={caption}>{caption}</BasicDataCardsHeadItem>
      ))}
    </BasicDataCardsHead>
    <BasicDataCardsBody>
      {rows.map((row) => (
        <BasicDataCardsCard key={getRowKey(row)}>
          {columns.map(({ caption, render }, index) => (
            <BasicDataCardsCardItem key={caption} title={caption}>
              {render(row)}
            </BasicDataCardsCardItem>
          ))}
        </BasicDataCardsCard>
      ))}
    </BasicDataCardsBody>
  </BasicDataCards>
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
