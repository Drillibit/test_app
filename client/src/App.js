import React, { Component } from 'react';
import MainPage from './components/MainPage';
import { connect } from 'react-redux';
import * as actions from './actions/fetchData';

class App extends Component {
  componentDidMount() {
    this.props.fetchData();
  }
  render() {
    return (
      <div className="App">
        <p>This is App</p>
        <MainPage />
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
