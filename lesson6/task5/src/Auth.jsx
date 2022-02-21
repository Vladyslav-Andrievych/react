import React, { Component } from 'react';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Spinner from './Spinner.jsx';

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: null,
      processing: false,
    };
  }

  onLogin = () => {
    this.setState({
      processing: true,
    });
  };

  onLoggedIn = () => {
    this.setState({
      isLoggedIn: true,
      processing: false,
    });
  };

  onLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    if (this.state.processing) {
      return <Spinner size={20} onLoggedIn={this.onLoggedIn} />;
    } else if (this.state.isLoggedIn) {
      return <Logout onLogout={this.onLogout} />;
    }
    return <Login onLogin={this.onLogin} />;
  }
}

export default Auth;
