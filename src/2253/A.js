module.exports = {
  isSuperCard: (num) => {
    num++;
    for (let j = 2; j <= num / 2; j++) {
      if (num % j === 0) {
        return 'NO';
      }
    }
    return 'YES';
  },
};
