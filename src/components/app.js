import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './header';
import Resources from './resources';


export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Route path="/resources" component={Resources}/>
      </div>
    );
  }
}
