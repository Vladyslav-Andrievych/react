import React, { Component } from 'react';

class Toggler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'Off',
    };
  }

  toggleStatus = () => {
    this.setState({
      status: this.state.status === 'Off' ? 'On' : 'Off',
    });
  };

  render() {
    return (
      <div className="toggler" onClick={this.toggleStatus}>
        {this.state.status}
      </div>
    );
  }
}

export default Toggler;
