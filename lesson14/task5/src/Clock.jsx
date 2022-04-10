import React, { useEffect, useState } from 'react';

const getTimeWithOffset = (offset) => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(
    currentTime.setHours(currentTime.getHours() + utcOffset + offset)
  );
};

const timeFormatter = new Intl.DateTimeFormat('en', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
});

const Clock = ({ location, offset }) => {
  const timeWithOffSet = getTimeWithOffset(offset);

  const [time, setTime] = useState(timeWithOffSet);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newTime = new Date(time.getTime() + 1000);

      setTime(newTime);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{timeFormatter.format(time)}</div>
    </div>
  );
};

export default Clock;
