import React, { Component } from 'react';
import UsersList from './UsersList.jsx';

const users = [
  {
    name: 'Tom',
    age: 23,
    id: 1,
  },
  {
    name: 'Bob',
    age: 25,
    id: 2,
  },
  {
    name: 'Ann',
    age: 33,
    id: 3,
  },
  {
    name: 'Vlad',
    age: 47,
    id: 4,
  },
  {
    name: 'Richard',
    age: 32,
    id: 5,
  },
  {
    name: 'Marry',
    age: 12,
    id: 6,
  },
];

class App extends Component {
  render() {
    return <UsersList users={users} />;
  }
}

export default App;
