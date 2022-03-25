import React, { Component } from 'react';
import Filter from './Filter.jsx';
import User from './User.jsx';

class UsersList extends Component {
  state = {
    filterText: '',
    count: this.props.users.length,
    displayedUsers: this.props.users,
  };

  handleChange = (event) => {
    const filteredUsers = this.filterUsers(
      event.target.value,
      this.props.users
    );

    this.setState({
      displayedUsers: filteredUsers,
      count: filteredUsers.length,
      filterText: event.target.value,
    });
  };

  filterUsers = (filterText, users) => {
    if (filterText === '') {
      return users;
    }

    return users
      .slice()
      .filter(({ name }) =>
        name.toLowerCase().includes(filterText.toLowerCase())
      );
  };

  render() {
    return (
      <div>
        <Filter
          filterText={this.state.filterText}
          count={this.state.count}
          onChange={this.handleChange}
        />
        <ul className="users">
          {this.state.displayedUsers.map((user) => (
            <User key={user.id} name={user.name} age={user.age} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
