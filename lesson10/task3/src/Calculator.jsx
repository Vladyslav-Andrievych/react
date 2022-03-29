import React, { Component } from 'react';
import BoilingVerdict from './BoilingVerdict.jsx';
import TemperatureInput from './TemperatureInput.jsx';

const toCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;

const toFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

const tryConvert = (temperature, converter) => {
  const input = parseFloat(temperature);

  if (Number.isNaN(input)) {
    return '';
  }

  const output = converter(input);
  const rounded = Math.round(output * 1000) / 1000;

  return rounded.toString();
};

class Calculator extends Component {
  state = {
    scale: null,
    temperature: null,
  };

  handleCelsiusChange = (event) => {
    this.setState({
      temperature: event.target.value,
      scale: 'c',
    });
  };

  handleFahrenheitChange = (event) => {
    this.setState({
      temperature: event.target.value,
      scale: 'f',
    });
  };

  render() {
    const temperature = this.state.temperature;
    const scale = this.state.scale;

    const celsius =
      scale === 'c' ? temperature : tryConvert(temperature, toCelsius);
    const fahrenheit =
      scale === 'f' ? temperature : tryConvert(temperature, toFahrenheit);

    return (
      <div>
        <TemperatureInput
          scale="c"
          value={celsius}
          handleChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          value={fahrenheit}
          handleChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

export default Calculator;
