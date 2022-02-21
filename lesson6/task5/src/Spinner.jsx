import React from 'react';

const Spinner = ({ size, onLoggedIn }) => {
  return (
    <span
      className="spinner"
      style={{ height: size, width: size }}
      onAnimationEnd={onLoggedIn}
    ></span>
  );
};

export default Spinner;
