import React, { Component } from 'react';
import Clock from './Clock.jsx';

class App extends Component {
  state = {
    isVisible: true,
  };

  toggle = () => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };

  render() {
    return (
      <>
        <button onClick={this.toggle}>Toggle</button>
        {this.state.isVisible && (
          <>
            <Clock location="London" offset={0} />
            <Clock location="Kyiv" offset={2} />
            <Clock location="New York" offset={-5} />{' '}
          </>
        )}
      </>
    );
  }
}

export default App;
