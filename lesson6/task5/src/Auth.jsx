import React, { Component } from 'react';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Spinner from './Spinner.jsx';

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stage: 'Login',
      animationIteration: 0,
    };
  }

  onLogin = () => {
    this.setState({
      stage: 'Spinner',
    });
  };

  onAnimationIteration = (currentValue) => {
    currentValue += 1;
    //animation duration in index.scss === 0.5s, so must be 4 iterations for 2 seconds of show spinner
    currentValue === 4
      ? this.setState({ stage: 'Logout', animationIteration: 0 })
      : this.setState({ animationIteration: currentValue });
  };

  onLogout = () => {
    this.setState({
      stage: 'Login',
    });
  };

  render() {
    switch (this.state.stage) {
      case 'Login':
        return <Login onLogin={this.onLogin} />;
      case 'Spinner':
        return (
          <Spinner
            onAnimationIteration={() =>
              this.onAnimationIteration(this.state.animationIteration)
            }
            size={20}
          />
        );
      case 'Logout':
        return <Logout onLogout={this.onLogout} />;
    }
  }
}

export default Auth;
