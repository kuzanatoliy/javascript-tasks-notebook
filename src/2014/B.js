module.exports = {
  isEvenCount: (num, k) => {
    if (num % 2 === 0 && k % 2 === 1) {
      return ((k - 1) / 2) % 2 ? 'NO' : 'YES';
    } else {
      return (Math.floor((k - 1) / 2) + 1) % 2 ? 'NO' : 'YES';
    }
  },
};
