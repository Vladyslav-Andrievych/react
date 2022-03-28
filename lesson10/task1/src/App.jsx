import React, { Component } from 'react';
import UserProfile from './UserProfile.jsx';
import UserMenu from './UserMenu.jsx';

class App extends Component {
  state = {
    userData: null,
  };

  componentDidMount() {
    this.fetchData(this.props.userName);
  }

  fetchData = (userId) => {
    fetch(`https://api.github.com/users/${userId}`)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((userData) =>
        this.setState({
          userData,
        })
      );
  };

  render() {
    return (
      <div className="page">
        <header className="header">
          <UserMenu userData={this.state.userData} />
        </header>
        <UserProfile userData={this.state.userData} />
      </div>
    );
  }
}

export default App;
