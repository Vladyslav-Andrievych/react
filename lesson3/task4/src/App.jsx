import React from 'react';
import Greeting from './Greeting.jsx';

const App = () => {
  return (
    <Greeting
      firstName="John"
      lastName="Doe"
      birthDate={new Date(1999, 10, 26)}
    />
  );
};

export default App;
