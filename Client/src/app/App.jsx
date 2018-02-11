import React, { Component } from 'react';
import { connect } from 'react-redux';

//import './App.scss';

const mapStateToProps = () => ({
});

class App extends Component {
  componentDidUpdate = () => {
    $.material.init({validate : false});
  }

  render = () => {
    return (
      <div className="wrapper">
        <div className="content">
          <h1>Hello world!!!</h1>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, null, null, { pure: false })(App);
