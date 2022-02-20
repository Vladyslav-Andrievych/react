import React from 'react';
import Offline from './Offline.jsx';
import Online from './Online.jsx';

const Status = ({ isOnline }) => {
  return isOnline ? <Online /> : <Offline />;
};

export default Status;
