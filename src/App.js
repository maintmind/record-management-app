import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { testCase } from '../src/ducks/reducer'
import { connect } from 'react-redux'
import router from './router.js';

class App extends Component {

  render() {
    return (
 <div>{ router }
      </div>
    );
  }
}

function mapStateToProps(state){
  return state
}

export default connect(mapStateToProps, {testCase})(App);
