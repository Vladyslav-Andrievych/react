import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    isOnline: true,
  };

  componentDidMount() {
    window.addEventListener('online', this.onOnline);
    window.addEventListener('offline', this.onOffline);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.onOnline);
    window.removeEventListener('offline', this.onOffline);
  }

  onOnline = () => {
    this.setState({
      isOnline: true,
    });
  };

  onOffline = () => {
    this.setState({
      isOnline: false,
    });
  };

  render() {
    return (
      <div className={this.state.isOnline ? 'status' : 'status status_offline'}>
        {this.state.isOnline ? 'Online' : 'Offline'}
      </div>
    );
  }
}

export default ConnectionStatus;
