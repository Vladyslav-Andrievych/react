import React from 'react';

function TemperatureInput({ scale, value, handleChange }) {
  return (
    <fieldset>
      <legend>
        Enter temperature in {scale === 'c' ? 'Celsius' : 'Fahrenheit'}:
      </legend>
      <input value={value} onChange={handleChange} />
    </fieldset>
  );
}

export default TemperatureInput;
