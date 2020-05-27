import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { handleInitialData } from '../actions/shared';
import Login from './Login';
import Dashboard from './Dashboard';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          {this.props.authUser === null ? <Login /> : <Dashboard />}
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps({ authUser }) {
  return {
    authUser
  }
}

export default connect(mapStateToProps)(App);
