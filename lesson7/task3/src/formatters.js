import moment from 'moment';

export const formatDate = (dateObj) => moment(dateObj).format('DD MMM');

export const formatTime = (dateObj) =>
  moment(dateObj).locale('uk').format('LT');

const numbersFormatter = new Intl.NumberFormat('en-GB');

export const formatNumbers = (number) => numbersFormatter.format(number);
