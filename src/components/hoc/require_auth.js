import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(WrappedComponent) {
  class RequireAuth extends Component {
    componentWillMount() {
      if (!this.props.authenticated) {
        this.props.history.push('/');
      }
    }

    // ensure that when state changes if user logs out we redirect as well
    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.props.history.push('/');
      }
    }

    render() {
      return (<WrappedComponent {...this.props}/>);
    }
  }

  const mapStateToProps = ({ authenticated }) => ({
    authenticated
  })

  return connect(mapStateToProps)(RequireAuth);
}
