import React, { Component } from 'react';

class ColorPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: '',
    };
  }

  showColorName = (colorName) => {
    this.setState({
      color: colorName,
    });
  };

  cleanColorName = () => {
    this.setState({
      color: '',
    });
  };

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.color}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseEnter={this.showColorName.bind(this, 'Coral')}
            onMouseLeave={this.cleanColorName}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={this.showColorName.bind(this, 'Aqua')}
            onMouseLeave={this.cleanColorName}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={this.showColorName.bind(this, 'Bisque')}
            onMouseLeave={this.cleanColorName}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
