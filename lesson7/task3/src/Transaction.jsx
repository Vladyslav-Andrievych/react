import React from 'react';
import { formatDate, formatTime, formatNumbers } from './formatters.js';

const Transaction = ({ from, to, amount, rate, time }) => {
  return (
    <li className="transaction">
      <span className="transaction__date">{formatDate(time)}</span>
      <span className="transaction__time">{formatTime(time)}</span>
      <span className="transaction__assets">
        {from} → {to}
      </span>
      <span className="transaction__rate">{formatNumbers(rate)}</span>
      <span className="transaction__amount">{formatNumbers(amount)}</span>
    </li>
  );
};

export default Transaction;
