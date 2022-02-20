import React from 'react';

const Spinner = ({ size, onAnimationIteration }) => {
  return (
    <span
      className="spinner"
      style={{ height: size, width: size }}
      onAnimationIteration={onAnimationIteration}
    ></span>
  );
};

export default Spinner;
