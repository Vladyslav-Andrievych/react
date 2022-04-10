import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

const ConnectionStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    function handleStatusChange(event) {
      const isOnline = event.type === 'online';
      setIsOnline(isOnline);
    }

    window.addEventListener('online', handleStatusChange);
    window.addEventListener('offline', handleStatusChange);

    return () => {
      window.removeEventListener('online', handleStatusChange);
      window.removeEventListener('offline', handleStatusChange);
    };
  }, []);

  return (
    <div className={classNames('status', { status_offline: !isOnline })}>
      {isOnline ? 'online' : 'offline'}
    </div>
  );
};

export default ConnectionStatus;
