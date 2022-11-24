import PropTypes from "prop-types";
import React, { Component } from "react";
import AuthApi from '../../api/authApi';
export default class Header extends Component {
  static propTypes = {
    authenticated: PropTypes.bool.isRequired
  };

  render() {
    const { authenticated } = this.props;
    return (
      <>
        {(authenticated) ? (
          <button onClick={this._handleLogoutClick}>Logout</button>
        ) : (
          <button onClick={this._handleSignInClick}>Login</button>
        )}
      </>
    );
  }

  _handleSignInClick = () => {
    // Authenticate using via passport api in the backend
    // Open Twitter login page
    // the current browsing context.
    window.open(`${process.env.REACT_APP_API_URL}/auth/google`, "_self");
  };

  _handleLogoutClick =async () => {
    // Logout using Twitter passport api
    // Set authenticated state to false in the HomePage component
    try {
         
      await AuthApi.logoutGoogle();
      
    } catch (error) {
      console.log('login again '+error);
  }
    this.props.handleLogout();
    this.props.handleNotAuthenticated();
  };
}