export default (date) =>
  Math.trunc(Math.trunc((new Date() - new Date(date)) / 2.628e9) / 12);
