import React, { Component } from 'react';

class Dimensions extends Component {
  state = {
    width: null,
    height: null,
  };

  componentDidMount() {
    window.addEventListener('resize', this.onWindowResize);

    const { innerHeight, innerWidth } = window;
    this.setDimensions(innerWidth, innerHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize);
  }

  onWindowResize = (event) => {
    const { innerHeight, innerWidth } = event.target;

    this.setDimensions(innerWidth, innerHeight);
  };

  setDimensions(width, height) {
    document.title = `${width} x ${height}`;

    this.setState({
      width,
      height,
    });
  }

  render() {
    return (
      <div className="dimensions">{`${this.state.width}px - ${this.state.height}px`}</div>
    );
  }
}

export default Dimensions;
