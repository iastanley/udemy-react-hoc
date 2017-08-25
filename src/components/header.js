import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions';

class Header extends Component {
  authButton() {
    let authText = this.props.authenticated ? 'Log Out' : 'Sign In';
    return (<button onClick={this.handleAuth}>{authText}</button>);
  }

  handleAuth = () => {
    this.props.changeAuth(!this.props.authenticated);
  }

  render() {
    return (
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/resources">Resources</Link>
          </li>
          <li className="nav-item">
            {this.authButton()}
          </li>
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  authenticated: state.authenticated
})

// withRouter required for this.props.history because Header component is not directly being rendered by a Route
export default connect(mapStateToProps, actions)(Header);
