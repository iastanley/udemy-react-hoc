import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './header';
import Resources from './resources';
import requireAuth from './hoc/require_auth';


export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Route path="/resources" component={requireAuth(Resources)}/>
      </div>
    );
  }
}
