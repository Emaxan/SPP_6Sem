import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getData, getTableNames } from './actions';
import { TableHeader, TableRows } from './components';

import './TableContainer.scss';

const mapStateToProps = (state) => ({
  data: state.data.data,
  isDataFetching: state.data.isFetching,
  tableNames: state.tableNames.tableNames.toJS(),
  isNamesFetching: state.tableNames.isFetching,
});

const mapDispatchToProps = {
  getData,
  getTableNames,
};

class TableContainer extends Component {

  componentDidMount() {
    this.props.getTableNames();
    this.setState({value: null});
  }

  componentWillReceiveProps(nextProps) {
    if((nextProps.tableNames != undefined)
        && (nextProps.tableNames.length != 0)
        && (this.state.value == null)) {
      this.setState({value: nextProps.tableNames[0]});
      this.props.getData(nextProps.tableNames[0]);
    }
  }

  change = (event) => {
    this.setState({value: event.target.value});
    this.props.getData(event.target.value);
  }

  render = () => {

    var {tableName, header, rows} = this.props.data;

    var namesArray = this.props.tableNames.map((name, index) => (
      <option key={index} value={name}>{name}</option>
    ));

    return (
      <div>
        <div className="tableSelect">
          <select onChange={this.change}>
            {namesArray}
          </select>
        </div>
        <div className="tableContainer">
          <table className="table">
            <caption>
              {tableName}
            </caption>
            <TableHeader columns={header} />
            <TableRows rows={rows} />
          </table>
        </div>
      </div>
    );
  }
}

TableContainer.propTypes = {
  data: PropTypes.object.isRequired,
  tableNames: PropTypes.array.isRequired,
  getData: PropTypes.func.isRequired,
  getTableNames: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TableContainer);
