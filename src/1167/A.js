module.exports = {
  isItPossibleToGetPhoneNumber: (number) => {
    const first = number.split('').findIndex((item) => item === '8');
    if (first < 0 || number.length - first < 11) {
      return 'NO';
    }
    return 'YES';
  },
};
