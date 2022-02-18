import React, { Component } from 'react';
import './clock.scss';

const getTimeWithOffset = (offset) => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(
    currentTime.setHours(currentTime.getHours() + offset + utcOffset)
  );
};

const timeFormatter = new Intl.DateTimeFormat('en', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
});

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date(getTimeWithOffset(props.offset)),
    };

    setInterval(() => {
      this.setState({
        time: new Date(this.state.time.getTime() + 1000),
      });
    }, 1000);
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.props.location}</div>
        <div className="clock__time">
          {timeFormatter.format(this.state.time)}
        </div>
      </div>
    );
  }
}

export default Clock;
