import React from 'react';
import PropTypes from 'prop-types';

import './TableHeader.scss';

export const TableHeader = ({ columns }) => (
  <thead>
    <tr className="tableHeader">
      {
        columns.map((column, index) => (
          <th key={index}>{column}</th>
        ))
      }
    </tr>
  </thead>
);

TableHeader.propTypes = {
  columns: PropTypes.array.isRequired,
};

TableHeader.defaultProps = {
  columns: [],
};