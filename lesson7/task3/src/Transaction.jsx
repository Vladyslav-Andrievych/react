import React from 'react';
import moment from 'moment';

const formatDate = (dateObj) => moment(dateObj).format('DD MMM');

const formatTime = (dateObj) => moment(dateObj).locale('uk').format('LT');

const numbersFormatter = new Intl.NumberFormat('en-GB');

const formatNumbers = (number) => numbersFormatter.format(number);

const User = ({ from, to, amount, rate, time }) => {
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

export default User;
