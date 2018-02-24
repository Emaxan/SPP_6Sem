import React from 'react';
import PropTypes from 'prop-types';

import './TableRow.scss';

export const TableRow = ({ columns }) => (
  <tr className="tableRow">
    <td>{columns.id}</td>
    <td>{columns.nickname}</td>
    <td>{columns.password}</td>
    <td>{columns.role.name}</td>
    <td>{columns.email}</td>
    <td>{columns.phoneNumber}</td>
    <td>{columns.registrationDate}</td>
    <td>{columns.avatarPath}</td>
  </tr>
);

TableRow.propTypes = {
  columns: PropTypes.object.isRequired,
};