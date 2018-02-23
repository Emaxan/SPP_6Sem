import React, { Component } from 'react';
import { connect } from 'react-redux';

import MenuItemsSelector from './selectors/menuItemsSelector';
import { Footer, Sidebar, AppContent } from './components';
import Header from './components/header/Header';
//import TableContainer from '../tableView/TableContainer';
// import {
//   userIsAuthenticated,
// } from '../auth/authWrappers';

import './App.scss';

const mapStateToProps = (state) => ({
  userName : 'Admin',//state.auth.userInfo.userName,
  email : 'Admin@admin.com',//state.auth.userInfo.email,
  menuItems : MenuItemsSelector(state),
});

//const SideBar = userIsAuthenticated(Sidebar);

class App extends Component {
  componentDidUpdate = () => {
    $.material.init({validate : false});
  }

  render = () => {
    return (
      <div className="wrapper">
        <Header userName={this.props.userName} email={this.props.email} />
        <div className="content">
          <Sidebar menuItems={this.props.menuItems} />
          <AppContent className="app-content" />
        </div>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  ...Header.propTypes,
  //...AppContent.propTypes,
  //...Footer.propTypes,
  //  ...Sidebar.propTypes,
};

App.defaultProps = {
  userName : '',
  email : '',
};

export default connect(mapStateToProps, null, null, { pure: false })(App);
