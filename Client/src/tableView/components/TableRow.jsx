import React from 'react';
import PropTypes from 'prop-types';

import './TableRow.scss';

export const TableRow = ({ columns }) => (
  <tr className="tableRow">
    {
      columns.map((column, index) => (
        <td key={index}>{column.data}</td>
      ))
    }
  </tr>
);

TableRow.propTypes = {
  columns: PropTypes.array.isRequired,
};

TableRow.defaultProps = {
  columns: [],
};