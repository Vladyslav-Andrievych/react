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

  login = () => {
    this.setState({
      processing: true,
    });
    setTimeout(() => {
      this.setState({
        processing: false,
        isLoggedIn: true,
      });
    }, 2000);
  };

  logout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    if (this.state.processing) {
      return <Spinner size={20} />;
    } else if (this.state.isLoggedIn) {
      return <Logout onLogout={this.logout} />;
    }
    return <Login onLogin={this.login} />;
  }
}

export default Auth;
