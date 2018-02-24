import React from 'react';
import PropTypes from 'prop-types';

import { TableRow } from './TableRow';

export const TableRows = ({ rows }) => (
  <tbody>
    {
      rows.map((row, index) => (
        <TableRow columns={row} key={index}/>
      ))
    }
  </tbody>
);

TableRows.propTypes = {
  rows: PropTypes.array.isRequired,
};

TableRows.defaultProps = {
  rows: [],
};