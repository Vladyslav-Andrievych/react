import React, { Component } from 'react';
import Greeting from './Greeting.jsx';
import Logout from './Logout.jsx';
import Login from './Login.jsx';

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  handleLogStatusChange = () => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn,
    });
  };

  render() {
    const button = this.state.isLoggedIn ? (
      <Logout onLogout={this.handleLogStatusChange} />
    ) : (
      <Login onLogin={this.handleLogStatusChange} />
    );

    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {button}
      </div>
    );
  }
}

export default Auth;
