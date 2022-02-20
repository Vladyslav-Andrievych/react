import React, { Component } from 'react';
import Message from './Message.jsx';

class Page extends Component {
  state = {
    text: '',
  };

  setText = (text) => {
    this.setState({
      text,
    });
  };

  render() {
    return (
      <div className="page">
        <Message text={this.state.text} />
        <div className="actions">
          <button className="btn" onClick={() => this.setText('Hello, world!')}>
            Text 1
          </button>
          <button
            className="btn"
            onClick={() => this.setText('Another exciting text.')}
          >
            Text 2
          </button>
          <button className="btn" onClick={() => this.setText()}>
            Clear
          </button>
        </div>
      </div>
    );
  }
}

export default Page;
