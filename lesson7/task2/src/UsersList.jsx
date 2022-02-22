import React, { Component } from 'react';
import User from './User.jsx';

class UsersList extends Component {
  state = {
    sorting: null,
  };

  toggleSort = () => {
    this.setState({
      sorting: this.state.sorting === 'asc' ? 'desc' : 'asc',
    });
  };

  render() {
    let usersList;

    if (this.state.sorting) {
      usersList = [...this.props.users].sort((a, b) =>
        this.state.sorting === 'asc' ? a.age - b.age : b.age - a.age
      );
    } else {
      usersList = this.props.users;
    }

    return (
      <div>
        <button className="btn" onClick={this.toggleSort}>
          {this.state.sorting || '-'}
        </button>
        <ul className="users">
          {usersList.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
