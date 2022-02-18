import React from 'react';
import getAge from './getAge.js';

const Greeting = (props) => {
  return (
    <div className="greeting">{`My name is ${props.firstName} ${
      props.lastName
    }. I'm ${getAge(props.birthDate)} years old`}</div>
  );
};

export default Greeting;
