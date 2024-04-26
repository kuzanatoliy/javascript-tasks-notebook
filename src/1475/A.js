module.exports = {
  hasOddDivisor: (number) => {
    let temp = 2;
    while (number > temp) {
      temp *= 2;
    }
    return number === temp ? 'NO' : 'YES';
  },
};
