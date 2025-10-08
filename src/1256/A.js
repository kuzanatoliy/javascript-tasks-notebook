module.exports = {
  isItPossibleToGetPaymentWithoutChange: (a, b, num, s) => {
    s = Math.max(s - num * a, s % num);
    return s <= b ? 'YES' : 'NO';
  },
};
