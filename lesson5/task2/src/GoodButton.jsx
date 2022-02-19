import React, { Component } from 'react';

class GoodButton extends Component {
  onButtonClick(event) {
    alert(event.target.textContent);
  }

  render() {
    return (
      <button className="fancy-button" onClick={this.onButtonClick}>
        Click me!
      </button>
    );
  }
}

export default GoodButton;
